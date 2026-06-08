"use client"
import { CardHeader, DialogProps, Divider, Stack } from "@mui/material";
import { StyledDataGrid, TableCard, TableHeight } from "@/styles/admin.styled";
import React, { useCallback, useEffect, useState } from "react";
import DialogPage from "../components/Dialog";
import useCrud from "@/hooks/useCrud";
import { useRefreshData } from "@/hooks/useRefreshData";
import { GridRowId, GridRowSelectionModel } from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { upcomingColumns } from "@/app/data/tableColumns";
import IconWithTooltip from "../components/common/IconWithTooltip";
import RefreshIcon from '@mui/icons-material/Refresh';
import ConfirmationDialog from "../components/ConfirmationDialog";
import useSnackbar from "@/hooks/useSnackbar";
import SearchButton from "../components/common/SearchButton";
import { FilterItem, FormValues } from "@/types/form";

export default  function Page(){
    type DialogState = {
        open: boolean
        mode: "add" | "edit" | null;
    }
    const [event, setEvent] = useState<FormValues | null>(null)
    const [dialog, setDialog] = useState<DialogState>({open: false, mode: null});
    const { getAll, deleteById } = useCrud("/api/crud-event");
    const { getById } = useCrud(`/api/getById`);
    const [rows, setRows] = useState<FormValues[]>([])
    const [open, setOpen] = useState(false);
    const [idsToDelete, setIdsToDelete] = useState<string[]>([])
    const { showSnackbar } = useSnackbar()
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>({
        type: "include",
        ids: new Set<GridRowId>()
    })
    const [searchText, setSearchText] = useState("")
    
    const filteredRows = (rows ?? []).filter((row) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
        )
    )

    const handleClickOpen = (e: "add" | "edit") => {
        setDialog({open: true, mode: e});
    };

    const handleClose: DialogProps["onClose"] = (event, reason) => {
        if(reason === "backdropClick" || reason === "escapeKeyDown") return
        setDialog({open: false, mode: null});
        refresh()
    };

    const fetchExhibition = useCallback(async () => {
        return await getAll("upcomingEvents");
    }, [getAll]);
    
    const { refresh, data, loading } = useRefreshData(fetchExhibition)

    useEffect(()=>{
        if(!data) return
        const rowsWithId = data.map((item: FilterItem) => ({id: item._id, ...item}))
        setRows(rowsWithId)
    }, [data])

    useEffect(()=>{
        refresh()
    }, [refresh])

    const handleEdit = async (id: string) => {
        const fetchData = await getById("upcomingEvents", id)
        setDialog({open: true, mode: "edit"})
        setEvent(fetchData.data)
    }

    const handleDelete = async (id: string) => {
        setOpen(true)
        setIdsToDelete([id])
    }

    const handleConfirm = async () => {
        try {
            const res = await Promise.all(
                idsToDelete.map((id) => {
                    deleteById("upcomingEvents", id)
                })
            )
            if(res) {
                const msg = idsToDelete.length > 1 ? `${idsToDelete.length} records deleted successfully` : "Record deleted successfully"
                showSnackbar(msg, "success")
            } else {
                showSnackbar("Error", "error")
            }
            
            await refresh()
        } catch (error) {
            showSnackbar(`${error}`, "error")
        }         
        finally {
            setOpen(false)
            setIdsToDelete([])
        }
    }

    const handleSelectionChange = (newSelection: GridRowSelectionModel) => {
        const idsArray = Array.from(newSelection.ids).map(String)
        setRowSelectionModel(newSelection)
        setIdsToDelete(idsArray)
    }

    const dialogMessage = idsToDelete.length > 1 ? `Are you sure want to delete ${idsToDelete.length} events?` : "Are you sure want to delete this event?"

    const handleSearch = (e: string) => {
        setSearchText(e)
    }

    return(
        <>
            <TableCard >
                <CardHeader title="Upcoming Events" action={
                    <Stack direction="row" spacing={1}>
                        <SearchButton onChange={handleSearch} />
                        {
                            idsToDelete.length > 1 && 
                            <IconWithTooltip title="Delete" icon={<DeleteIcon />} onClick={() => {setOpen(true); setIdsToDelete(idsToDelete)}} />
                        }
                        
                        <IconWithTooltip title="Add upcoming event" icon={<AddIcon />} onClick={() => handleClickOpen("add")} />
                        <IconWithTooltip title="Refresh" icon={<RefreshIcon />} onClick={refresh} />
                    </Stack>
                } />
                <Divider />
                <TableHeight>
                    <StyledDataGrid 
                        rows={filteredRows ? filteredRows : rows}
                        columns={upcomingColumns(handleEdit, handleDelete)}
                        disableColumnMenu
                        disableColumnSorting
                        rowHeight={80}
                        getRowId={(row)=> row._id}
                        initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 10,
                            },
                        },
                        }}
                        pageSizeOptions={[10, 25, 50, 100]}
                        checkboxSelection
                        loading={loading}
                        slotProps={{
                            loadingOverlay: {
                                variant: 'linear-progress',
                                noRowsVariant: 'linear-progress',
                            },
                        }}
                        onRowSelectionModelChange={(newSelection) => handleSelectionChange(newSelection)}
                        rowSelectionModel={rowSelectionModel}
                        disableRowSelectionOnClick
                    />
                </TableHeight>
            </TableCard>

            <ConfirmationDialog 
                open={open}
                dialogMessage={dialogMessage}
                dialogTitle="Delete"
                onClose={() => {
                    setOpen(false)
                }}
                onConfirm={handleConfirm}
            />

            {dialog.open && 
                <DialogPage open={dialog.open} mode={dialog.mode} editEvent={event} onSuccess={data} onClose={handleClose} />
            }
        </>
    )
}