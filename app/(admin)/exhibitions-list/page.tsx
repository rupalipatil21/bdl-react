"use client"

import { Stack, Typography, Divider, Grid, DialogProps, Tab, CardContent } from "@mui/material"
import { GridRowId, GridRowSelectionModel } from "@mui/x-data-grid"
import { StyledDataGrid, StyledTabs, TableCard, TableHeight } from "@/styles/admin.styled"
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCallback, useEffect, useState } from "react"
import useCrud from "@/hooks/useCrud"
import { exhibitionPastColumns } from "@/app/data/tableColumns"
import { useRefreshData } from "@/hooks/useRefreshData";
import { useRouter } from "next/navigation";
import ConfirmationDialog from "../components/ConfirmationDialog";
import useSnackbar from "@/hooks/useSnackbar";
import EventIcon from "@mui/icons-material/Event";
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import IconWithTooltip from "../components/common/IconWithTooltip";
import DialogPage from "../components/Dialog";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchButton from "../components/common/SearchButton";
import { FilterItem, FormValues, ItemTemplate } from "@/types/form";

type DialogState = {
    open: boolean;
    mode: "add" | "edit" | "upcoming" | "calendar" | null;
}

export default function ExhibitionsList(){
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>({
      type: "include",
      ids: new Set<GridRowId>(),
    });
    const { getAll, deleteById } = useCrud("/api/crud-event")
    const { getById } = useCrud(`/api/getById`);
    const [open, setOpen] = useState(false);
    const [dialog, setDialog] = useState<DialogState>({open: false, mode: null});
    const [pastRows, setPastRows] = useState<FormValues[]>([])
    const [currentRows, setCurrentRows] = useState<FormValues[]>([])
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const [idsToUpdate, setIdsToUpdate] = useState<string[]>([])
    const [updateData, setUpdateData] = useState<"true" | "false" | null>(null)
    const [actionType, setActionType] = useState<"delete" | "move" | null>(null)
    const router = useRouter()
    const { showSnackbar } = useSnackbar()
    const [event, setEvent] = useState<FormValues | null>(null);
    const [searchText, setSearchText] = useState("")
    const [tab, setTab] = useState<string>("current");

    interface DataToUpdate {
        currentExh: typeof updateData;
    }


    const fetchExhibitions = useCallback(async () => {
        return await getAll("exhibitions");
    }, [getAll]);

    const {refresh, data, loading } = useRefreshData(fetchExhibitions)

    useEffect(()=>{
        if(!data) return
        const pastExhWithId = data
            .filter((item: FilterItem) => item.currentExh === "false" || item.currentExh === null )
            .map((item: FilterItem) => ({id: item._id, ...item}))
        
        const currentExhWithId = data
            .filter((item: FilterItem) => item.currentExh === "true")
            .map((item: FilterItem) => ({ id: item._id, ...item}))

        setPastRows(pastExhWithId)
        setCurrentRows(currentExhWithId)
    }, [data])
    
    useEffect(()=>{
        refresh()
    }, [refresh])

    const handleSelectionChange = (newSelection: GridRowSelectionModel) => {
        const idsArray = Array.from(newSelection.ids).map(String)
        setRowSelectionModel(newSelection)
        setSelectedIds(idsArray)
        setActionType("move")
    }

    const showCurrent = selectedIds.length > 0

    const handleEdit = (id: string) => {
        router.push(`exhibition/edit/${id}`)
    }

    const handleDelete = (id: string) => {
        setOpen(true)
        setActionType("delete")
        setIdsToUpdate([id])
    }

    const handleClose: DialogProps["onClose"] = (event, reason) => {
        if(reason === "backdropClick" || reason === "escapeKeyDown") return
        setDialog({open: false, mode: null});
    }

    const handleSubmit = async ({ids, dataToUpdate}:{ids: string[], dataToUpdate: DataToUpdate}) => {
        const res = await fetch("/api/update-many", {
            method: "PUT",
            body: JSON.stringify({
                collection: "exhibitions",
                ids: ids,
                data: dataToUpdate
            })
        })

        const data = await res.json();

        if(data.success) {
            setOpen(false)
            setUpdateData(null)
            setActionType(null)
            refresh()
            showSnackbar(`Record moved to ${updateData === "true" ? "current" : "past"} exhibition`, "success")
        } else {
            showSnackbar("Error while moving exhibition ", "error")
        }

    }

    const handleConfirm = async () => {
        try{
            if(actionType === "delete") {
                const res = await Promise.all(
                    idsToUpdate.map((id) =>
                        deleteById("exhibitions", id)
                    )
                );
                if (!res) {
                    throw new Error("Failed to fetch");
                }
                showSnackbar("Record(s) deleted successfully", "success")
            }

            if (actionType === "move") {
                await handleSubmit({
                    ids: selectedIds,   
                    dataToUpdate: {currentExh: updateData}
                }) 
            }
            await refresh();
        } finally {
            setOpen(false);
            setActionType(null);
            setUpdateData(null);
        }
    }

    const dialogTitle = actionType === "move" ? "Move" : "Delete";
    const dialogMessage = actionType === "delete"
        ? idsToUpdate.length > 1
            ? `Are you sure want to delete ${idsToUpdate.length} exhibitions`
        : `Are you sure want to delete this exhibition`
        : `Are you sure want to move this exhibition to ${updateData === "true" ? "current" : "past"}?`

    const handleAddEvent = async (id: string[]) => {
        const fetchData = await getById('exhibitions', String(id))
        setEvent(fetchData.data)
    }

    const handleSearch = (e: string) => {
        setSearchText(e)
    }

    const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
        setTab(newValue)
    }

    let rows = []
    if (tab === "current") {
        rows = currentRows
    } else {
        rows = pastRows
    }

    const filteredRows = (rows ?? []).filter((row: ItemTemplate) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
        )
    )

    return(
        <>
            <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography variant="body_h2">Exhibition List</Typography>
            </Stack>

            <Grid container spacing={2}>
                { currentRows && 
                <Grid size={12}>
                    <TableCard>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between">
                                <StyledTabs
                                    value={tab}
                                    onChange={handleTabChange}
                                >
                                    <Tab label="Current" value="current" />
                                    <Tab label="Past" value="past" />
                                </StyledTabs>
                                <Stack direction="row">
                                    <SearchButton onChange={handleSearch} />
                                    {showCurrent && 
                                    <Stack direction="row" >
                                        <IconWithTooltip 
                                            title={tab === "current" ? "Move to past" : "Move to current"} 
                                            icon={tab === "current" ? <SouthIcon /> : <NorthIcon />} 
                                            onClick={() => {
                                                setOpen(true); 
                                                setUpdateData(tab === "current" ? "false" : "true")
                                            }}
                                        />
                                        <IconWithTooltip 
                                            title="Upcoming event" 
                                            icon={<EventIcon />} 
                                            onClick={() => 
                                                {
                                                    setDialog({open: true, mode: "upcoming"});
                                                    handleAddEvent(selectedIds)
                                                }}
                                        />
                                        <IconWithTooltip 
                                            title="Calendar" 
                                            icon={<CalendarMonthIcon />} 
                                            onClick={() => 
                                                {
                                                    setDialog({open: true, mode: "calendar"});
                                                    handleAddEvent(selectedIds)
                                                }}
                                        />
                                    </Stack>
                                    }
                                    { selectedIds && selectedIds.length > 1 &&
                                        <IconWithTooltip 
                                            title="Delete" 
                                            icon={<DeleteIcon />} 
                                            onClick={()=>{
                                                setActionType("delete");
                                                setOpen(true);
                                                setIdsToUpdate(selectedIds)
                                            }}    
                                        />
                                    }
                                    <IconWithTooltip title="Refresh" icon={<RefreshIcon />} onClick={refresh} />
                                
                                </Stack>
                            </Stack>
                        </CardContent>
                        <Divider />
                        <TableHeight height={208}>
                            <StyledDataGrid 
                                columns={exhibitionPastColumns(handleEdit, handleDelete)}
                                rows={filteredRows ? filteredRows : pastRows}
                                rowHeight={100}
                                initialState={{
                                pagination: {
                                    paginationModel: {
                                    pageSize: 10,
                                    },
                                },
                                }}
                                pageSizeOptions={[10, 25, 50, 100]}
                                getRowId={(row)=> row._id}
                                checkboxSelection
                                onRowSelectionModelChange={handleSelectionChange}
                                rowSelectionModel={rowSelectionModel}
                                loading={loading}
                                slotProps={{
                                    loadingOverlay: {
                                        variant: 'linear-progress',
                                        noRowsVariant: 'linear-progress',
                                    },
                                }}
                            />
                        </TableHeight>
                    </TableCard>
                </Grid>
                }
            </Grid>

            <ConfirmationDialog 
                open={open} 
                dialogTitle={dialogTitle} 
                dialogMessage={dialogMessage}
                onConfirm={handleConfirm}
                onClose={()=>{
                    setOpen(false)
                    setActionType(null)
                    setIdsToUpdate([])
                    setUpdateData(null)
                }}
            />

            {dialog.open && 
                <DialogPage open={dialog.open} mode={dialog.mode} editEvent={event} onSuccess={data} onClose={handleClose} />
            }

        </>
    )
}