"use client"

import { CardHeader, Divider, Grid, Stack } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import IconWithTooltip from "../components/common/IconWithTooltip";
import { DataGrid, GridRowId, GridRowSelectionModel } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import useCrud from "@/hooks/useCrud";
import { useRefreshData } from "@/hooks/useRefreshData";
import { calendarColumns } from "@/app/data/tableColumns";
import { useRouter } from "next/navigation";
import ConfirmationDialog from "../components/ConfirmationDialog";
import useSnackbar from "@/hooks/useSnackbar";
import { TableCard } from "@/styles/admin.styled";
import SearchButton from "../components/common/SearchButton";
import { BannerRow, CalendarFormValues } from "@/types/form";

export default function Calendar() {
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>({
        type: "include",
        ids: new Set<GridRowId>(),
    });
    const [rows, setRows] = useState<BannerRow[]>([])
    const { getAll, deleteById } = useCrud("/api/crud-event")
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const { showSnackbar } = useSnackbar();
    const [idsToUpdate, setIdsToUpdate] = useState<string[]>([]);
    const [searchText, setSearchText] = useState("");

    const filteredRows = (rows ?? []).filter((row) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
        )
    )

    const fetchData = useCallback( async () => {
        return await getAll("calendar")
    }, [getAll])

    const { refresh, data, loading } = useRefreshData(fetchData)
    useEffect(()=>{
        if(!data) return
        const rowsWithId  = data.map((item:CalendarFormValues)=> ({
            // id: item._id,
            ...item
        }))
        setRows(rowsWithId)
    }, [data])

    useEffect(() => {
        refresh()
    }, [refresh])

    const handleEdit = (id: string) => {
        router.push(`/calendar/edit/${id}`)
    }

    const handleDelete = (id: string) => {
        setOpen(true);
        setIdsToUpdate([id]);
    }

    const handleSelectionChange = (newSelection: GridRowSelectionModel) => {
        const idsArray = Array.from(newSelection.ids).map(String)
        setRowSelectionModel(newSelection)
        setSelectedIds(idsArray)
    }

    const handleConfirm = async () => {
        try{
            const res = await Promise.all(
                idsToUpdate.map((id) =>
                    deleteById("calendar", id)
                )
            );

            if (!res) {
                throw new Error("Failed to fetch");
            }

            showSnackbar("Record deleted successfully", "success")

            await refresh();
        } finally {
            setOpen(false);
        }
    }

    const handleSearch = (e: string) => {
        setSearchText(e)
    }

    const dialogTitle = "Delete";
    const dialogMessage = selectedIds.length > 0
            ? `Are you sure want to delete ${selectedIds.length} calendar events`
        : `Are you sure want to delete this calendar event`

    return(
        <>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <TableCard >
                        <CardHeader title="Calendar List" action={
                            <Stack direction="row">
                                <SearchButton onChange={handleSearch} />
                                { selectedIds && selectedIds.length > 1 &&
                                    <IconWithTooltip 
                                        title="Delete" 
                                        icon={<DeleteIcon />} 
                                        onClick={()=>{
                                            setOpen(true)
                                        }}    
                                    />
                                }
                                <IconWithTooltip 
                                    title="Add" 
                                    icon={<AddIcon />} 
                                    onClick={() => router.push(`/calendar/add`)}
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
                        <DataGrid 
                            rows={filteredRows ? filteredRows : rows}
                            columns={calendarColumns(handleEdit, handleDelete)}
                            checkboxSelection
                            rowHeight={80}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                    pageSize: 10,
                                    },
                                },
                            }}
                            pageSizeOptions={[10, 25, 50, 100]}
                            disableRowSelectionOnClick
                            loading={loading}
                            onRowSelectionModelChange={handleSelectionChange}
                            rowSelectionModel={rowSelectionModel}
                            disableColumnSorting
                            disableColumnMenu
                            getRowId={(row)=> row._id}
                        />
                    </TableCard>
                </Grid>
            </Grid>

            <ConfirmationDialog 
                open={open} 
                dialogTitle={dialogTitle} 
                dialogMessage={dialogMessage}
                onConfirm={handleConfirm}
                onClose={()=>{
                    setOpen(false)
                }}
            />
        </>
    )
}
