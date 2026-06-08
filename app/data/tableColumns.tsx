import { GridActionsCell, GridActionsCellItem, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import { AvatarUI, GalleryLinkBox, ImageBox } from "@/styles/admin.styled";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import { GalleryLink } from "@/types/form";
// import SelectEditInputCell from "../(admin)/components/common/SelectEditInputCell";

const stripHtml = (html: string) => {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

// const renderSelectEditInputCell = (setRows: (rows: any[]) => void, refresh: () => void): GridColDef['renderCell'] => (params) => {
//   return <SelectEditInputCell {...params} setRows={setRows} refresh={refresh}  />;
// };


// function EditTextarea(props: GridRenderEditCellParams<any, string>) {
//   const { id, field, value, colDef, hasFocus } = props;
//   const [valueState, setValueState] = React.useState(value);
//   const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>();
//   const [inputRef, setInputRef] = React.useState<HTMLInputElement | null>(null);
//   const apiRef = useGridApiContext();

//   React.useLayoutEffect(() => {
//     if (hasFocus && inputRef) {
//       inputRef.focus();
//     }
//   }, [hasFocus, inputRef]);

//   const handleRef = React.useCallback((el: HTMLElement | null) => {
//     setAnchorEl(el);
//   }, []);

//   const handleChange = React.useCallback<NonNullable<InputBaseProps['onChange']>>(
//     (event) => {
//       const newValue = event.target.value;
//       setValueState(newValue);
//       apiRef.current.setEditCellValue(
//         { id, field, value: newValue, debounceMs: 200 },
//         event,
//       );
//     },
//     [apiRef, field, id],
//   );

//   return (
//     <div style={{ position: 'relative', alignSelf: 'flex-start' }}>
//       <div
//         ref={handleRef}
//         style={{
//           height: 1,
//           width: colDef.computedWidth,
//           display: 'block',
//           position: 'absolute',
//           top: 0,
//         }}
//       />
//       {anchorEl && (
//         <Popper open anchorEl={anchorEl} placement="bottom-start">
//           <Paper elevation={1} sx={{ p: 1, minWidth: colDef.computedWidth }}>
//             <InputBase
//               multiline
//               rows={4}
//               value={valueState}
//               sx={{ textarea: { resize: 'both' }, width: '100%' }}
//               onChange={handleChange}
//               inputRef={(ref) => setInputRef(ref)}
//             />
//           </Paper>
//         </Popper>
//       )}
//     </div>
//   );
// }

// const multilineColumn: GridColTypeDef = {
//   type: 'string',
//   renderEditCell: (params) => <EditTextarea {...params} />,
// };

const CATEGORY_LABELS: Record<string, string> = {
  exhibitions: "Exhibitions",
  event_programms: "Events & Programmes",
  learn: "Learn",
};


export const exhibitionCurrentColumns = (onEdit: (id:string) => void, onDelete: (id: string) => void): GridColDef[] => [
    { field: "title", headerName: "Title", sortable: false, filterable: false, width: 200, 
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
    },
    { field: "subtitles", headerName: "Subtitles", sortable: false, filterable: false, width: 200, 
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
    },
    { 
        field: "descriptionText", 
        headerName: "Details", 
        width: 400,
        sortable: false,
        filterable: false,
        editable: true,
        // ...multilineColumn,
        renderCell:(params: GridRenderCellParams) => {
            const text = stripHtml(params.value);
            return(
                <Tooltip 
                    title={text} 
                    placement="bottom-start"
                    sx={{ maxWidth: 500 }}
                >
                    <span>{text ? text : "-"}</span>
                </Tooltip>
            )
        }
     },
    { field: "date", headerName: "Date", sortable: false, filterable: false, width: 200, 
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start"><span>{params.value}</span></Tooltip>
        )
    },
    { 
        field: "galleryLinks", 
        headerName: "Gallery Links", 
        sortable: false, 
        width: 230,
        renderCell: (params) => (
            <GalleryLinkBox>
                {params.value?.map((item: GalleryLink) => (
                    <Typography key={item.key}>
                        <Link
                            href={item.link}
                            target="_blank"
                        >
                            {item.label}
                        </Link>
                    </Typography>
                ))}
            </GalleryLinkBox>
        ),
    },
    { field: "image", headerName: "Image", sortable: false, width: 64, display:"flex", align:"center",
      renderCell: (params) => {
        return (
            <AvatarUI alt={params.value} src={params.value} />
        )
        
      } 
    },
    { field: "bannerImage", headerName: "Banner Image", sortable: false, width: 200, 
        renderCell: (params) => (
            <ImageBox imgsrc={params.value} width="auto !important"  />
      )
     },
    { field: "pdf", headerName: "Press Release", sortable: false, filterable: false, width: 180,
        renderCell: (params: GridRenderCellParams) => {
            const fileName = params.value ? params.value.split("/").pop() : "-";
            return(
                params.value ? <Link href={params.value} target="_blank">{fileName}</Link> : "-"
            )
        }    
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        renderCell: (params) => {
            return(
                <GridActionsCell {...params}>
                    <GridActionsCellItem icon={<EditIcon color="secondary"  />} label="Edit" color="inherit" onClick={() => onEdit(String(params.id)) } />
                    <GridActionsCellItem icon={<DeleteIcon color="error"  />} label="Delete" color="inherit" onClick={()=> onDelete(String(params.id))} />
                </GridActionsCell>
            )
        },
    },
]

export const exhibitionPastColumns =(onEdit: (id: string) => void, onDelete: (id: string) => void): GridColDef[] => [
    { field: "title", headerName: "Title", sortable: false, filterable: false, width: 200, 
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
    },
    { field: "subtitles", headerName: "Subtitles", sortable: false, filterable: false, width: 200, 
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
     },
    { 
        field: "descriptionText", 
        headerName: "Details", 
        width: 400,
        sortable: false,
        filterable: false,
        editable: true,
        // ...multilineColumn,
        renderCell: (params:GridRenderCellParams) => {
            const text = stripHtml(params.value);
            return (
                <Tooltip 
                    title={text} 
                    placement="bottom-start"
                    slotProps={{
                        tooltip: {
                            sx: { maxWidth: 500 }
                        }
                    }}
                >
                    <span>{text ? text : "-"}</span>
                </Tooltip>
            )
        }
     },
    { field: "date", headerName: "Date", sortable: false, filterable: false, width: 200,
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start"><span>{params.value}</span></Tooltip>
        )
     },
    { 
        field: "galleryLinks", 
        headerName: "Gallery Links", 
        sortable: false, 
        width: 230,
        renderCell: (params) => (
            <GalleryLinkBox >
                {params.value?.map((item: GalleryLink) => (
                    <Typography key={item.key}>
                    <Link
                    href={item.link}
                    target="_blank"
                    >
                    {item.label}
                    </Link>
                    </Typography>
                ))}
            </GalleryLinkBox>
        ),
    },
    { field: "image", headerName: "Image", sortable: false, width: 100, align:"center", display: "flex",
      renderCell: (params) => (
        <AvatarUI alt={params.value} src={params.value} />
      )  
    },
    { field: "bannerImage", headerName: "Banner Image", sortable: false, width: 200, 
        renderCell: (params) => (
            <ImageBox imgsrc={params.value} width="auto !important"  />
      )
     },
    { field: "pdf", headerName: "Press Release", sortable: false, filterable: false, width: 180,
        renderCell: (params) => {
            const fileName = params.value ? params.value.split("/").pop() : "-";
            return(
                params.value ? <Link href={params.value} target="_blank">{fileName}</Link> : "-"
            )
        }    
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        renderCell: (params) => {
            return(
                <GridActionsCell {...params}>
                    <GridActionsCellItem 
                        icon={<EditIcon color="secondary"  />} 
                        label="Edit" 
                        onClick={() => onEdit(String(params.id)) } 
                    />
                    <GridActionsCellItem icon={<DeleteIcon color="error" />} label="Delete" onClick={()=> onDelete(String(params.id))} />
                </GridActionsCell>
            )
        },
    },
]

export const upcomingColumns = (onEdit: (id: string) => void, onDelete: (id: string) => void): GridColDef[] => [
    {field: "title", headerName: "Title", width: 200,
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
    },
    {
        field: "subtitles", 
        headerName: "Details",
        width: 300,
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
    },
    {
        field: "date", headerName: "Date", width: 250,
    },
    {
        field: "image", 
        headerName: "Image",
        width: 100,
        renderCell: (params) => (
            <Box padding="8px 0">
                <AvatarUI alt={params.value} src={params.value} />
            </Box>
        )
    },
    { field: "status", headerName: "Status", width: 100, editable: true,
        renderCell: (params) => {
            const value = params.value ?? "false";

            const status = value === "true" ? "Active" : "In Active";
            const color = value === "true" ? "success" : "error"
            return(
                <Chip label={status} color={color} />
            )
        },
        // renderEditCell: renderSelectEditInputCell(setRows, refresh)
    },
    { field: "actions", type: "actions", headerName: "", align: "right",
        renderCell: (params) => {
            return(
                <GridActionsCell {...params}>
                    <GridActionsCellItem icon={<EditIcon color="secondary" />} label="Edit" color="inherit" onClick={() => onEdit(String(params.id))} />
                    <GridActionsCellItem icon={<DeleteIcon color="error" />} label="Delete" onClick={() => onDelete(String(params.id))} />
                </GridActionsCell>
            )
        }
    }
]

export const calendarColumns = (onEdit: (id: string) => void, onDelete: (id: string) => void ): GridColDef[] => [
    { field: "title", headerName: "Title", width: 200,
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
    },
    {
        field: "subtitles", 
        headerName: "Details",
        width: 300,
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
    },
    {
        field: "date", headerName: "Date", width: 250,
    },
    {
        field: "category", headerName: "Category", width: 180,
        renderCell: (params) => {
            return CATEGORY_LABELS[params.value as string] || params.value
        }
    },
    {
        field: "image", 
        headerName: "Image",
        width: 100,
        renderCell: (params) => (
            <Box padding="8px 0">
                <AvatarUI alt={params.value} src={params.value} />
            </Box>
        )
    },
    { field: "actions", type: "actions", headerName: "", align: "right",
        renderCell: (params) => {
            return(
                <GridActionsCell {...params}>
                    <GridActionsCellItem icon={<EditIcon color="secondary" />} label="Edit" color="inherit" onClick={() => onEdit(String(params.id))} />
                    <GridActionsCellItem icon={<DeleteIcon color="error" />} label="Delete" onClick={() => onDelete(String(params.id))} />
                </GridActionsCell>
            )
        }
    }
]

export const bannerColumns: GridColDef[] = [
    {field: "pagename", headerName: "Page name", width: 200},
    {
        field: "banner", 
        headerName: "Banner", 
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <ImageBox imgsrc={params.row.image}  />
            )
        }
    },
    {
        field: "actions", 
        headerName: "",
        sortable: false,
        filterable: false,
        width: 120,
        align: "right",
        headerAlign: "right",
        renderCell: (params: GridRenderCellParams) => (
        <Box className="row-actions">
            <IconButton size="small" onClick={() => console.log("Edit", params.row)}>
                <EditIcon fontSize="small" />
            </IconButton>
        </Box>
        ) 
    },
]

export const exploreColumns = (onEdit: (id: string) => void, onDelete: (id: string) => void ): GridColDef[] => [
    { field: "title", headerName: "Title", width: 200,
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
    },
    {
        field: "subtitles", 
        headerName: "Details",
        width: 300,
        renderCell: (params) => (
            <Tooltip title={params.value} placement="bottom-start">{params.value}</Tooltip>
        )
    },
    {
        field: "date", headerName: "Date", width: 250,
    },
    {
        field: "program", headerName: "Program", width: 200
    },
    {
        field: "image", 
        headerName: "Image",
        width: 100,
        renderCell: (params) => (
            <Box padding="8px 0">
                <AvatarUI alt={params.value} src={params.value} />
            </Box>
        )
    },
    { field: "actions", type: "actions", headerName: "", align: "right",
        renderCell: (params) => {
            return(
                <GridActionsCell {...params}>
                    <GridActionsCellItem icon={<EditIcon color="secondary" />} label="Edit" color="inherit" onClick={() => onEdit(String(params.id))} />
                    <GridActionsCellItem icon={<DeleteIcon color="error" />} label="Delete" onClick={() => onDelete(String(params.id))} />
                </GridActionsCell>
            )
        }
    }
]