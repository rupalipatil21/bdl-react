"use client"

import { CardHeader, DialogProps, Divider, Grid, Stack } from "@mui/material";
import { StyledDataGrid, TableCard } from "@/styles/admin.styled";
import DialogPage from "./BannerDialog";
import { useCallback, useEffect, useState } from "react";
import useCrud from "@/hooks/useCrud";
import IconWithTooltip from "../components/common/IconWithTooltip";
import SearchButton from "../components/common/SearchButton";
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import { bannerColumns } from "@/app/data/tableColumns";
import { useRefreshData } from "@/hooks/useRefreshData";
import { BannerFormValues } from "@/types/form";

type DialogState = {
    open: boolean
    mode: "add" | "edit" | null;
}

export default function Banner() {
    const [dialog, setDialog] = useState<DialogState>({open: false, mode: null});
    const [rows, setRows] = useState<BannerFormValues[]>([]);
    const { getAll } = useCrud("/api/crud-event");
    const [searchText, setSearchText] = useState("");
    
    const filteredRows = (rows ?? []).filter((row: BannerFormValues) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
        )
    )

    const handleClickOpen = (e:DialogState['mode']) => {
        setDialog({open: true, mode: e});
    };

    const handleClose: DialogProps["onClose"] = (event, reason) => {
        if(reason === "backdropClick" || reason === "escapeKeyDown") return
        setDialog({open: false, mode: null});
    };

    useEffect(() => {
        const fetchBanners = async () => {
            const res = await getAll("bannerImages");
            const rowsWithId = res.map((item: BannerFormValues) => ({
                // id: item._id || item.id,
                ...item
            }))            
            
            setRows(rowsWithId)
        }
        fetchBanners()
    }, [getAll]);
    
    const fetchData = useCallback( async () => {
        const res = await getAll("bannerImages");
        const rowsWithId = res.map((item: BannerFormValues) => ({
            // id: item._id || item.id,
            ...item
        }))
        setRows(rowsWithId)
    }, [getAll])
    
    const { refresh, loading } = useRefreshData(fetchData)

    const handleSearch = (e: string) => {
        setSearchText(e)
    }
    
    return(
        <>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <TableCard >
                        <CardHeader title="Add Banner" action={
                            <Stack direction="row">
                                <SearchButton onChange={handleSearch} />
                                <IconWithTooltip 
                                    title="Add" 
                                    icon={<AddIcon />} 
                                    onClick={() => handleClickOpen("add")}
                                />
                                <IconWithTooltip 
                                    title="Refresh" 
                                    icon={<RefreshIcon />} 
                                    onClick={refresh}
                                />
                            </Stack>
                        }
                        />
                        <Divider />
                        <StyledDataGrid
                            rows={filteredRows ? filteredRows : rows}
                            columns={bannerColumns}
                            initialState={{ pagination: { paginationModel: { pageSize: 10} } }}
                            pageSizeOptions={[10, 25, 50, 100]}
                            getRowId={(row) => row._id}
                            checkboxSelection
                            disableColumnMenu
                            disableVirtualization
                            loading={loading}
                            rowHeight={100}
                        />
                    </TableCard>
                </Grid>
            </Grid>
            {dialog.open && 
                <DialogPage open={dialog.open} onClose={handleClose}  />
            }
        </>
    )
}