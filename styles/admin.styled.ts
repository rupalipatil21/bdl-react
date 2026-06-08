import { AppBar, Avatar, Box, Button, Card, CardContent, CardHeader, DialogContent, FormControl, Grid, IconButton, InputBase, List, Stack, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "./theme";
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Link from "next/link";
import { StaticImageData } from "next/image";
import { DataGrid } from "@mui/x-data-grid";
import Switch from "@mui/material/Switch"

interface Props {
    imgsrc?: StaticImageData | string
    iserror?: boolean | string
    color?: string;
    fontWeight?: number;
    height?: number;
    drawerwidth?: number;
    ismobile?: string;
}

export const LoginContainer = styled(Stack)({
    height: '100dvh',
    minHeight: '100%',
    padding: 32,
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
    },
})

export const CardUI = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: 32,
    margin: 'auto',
    border: 0,
    textAlign: "center",
    [theme.breakpoints.up('sm')]:{
        maxWidth: '450px',
    },
    boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    "& .MuiOutlinedInput-notchedOutline":{
        borderColor: "#c2c9d666",
    },
    "& input":{
        backgroundColor: "#fcfcfc",
    },
    '& form':{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: "16px",
        marginTop: "32px",
    },
    "& img":{
        margin: "0 auto 10px",
    },
    "& .MuiTypography-h4": {
        width: '100%', 
        fontSize: 'clamp(2rem, 10vw, 2.15rem)'
    },
    '& .MuiButton-contained': {
        backgroundColor: theme.palette.custom?.green,
    }
});

export const DrawerHeaderStyled = styled(Box)<Props>(({ drawerwidth }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    minHeight: '64px',
    width: 'initial',
    padding: "8px 15px",
    gap: "8px",
    '& .MuiTypography-tagLine':{
        display: drawerwidth === 72 ? "none" : undefined,
    } 
}))

export const ListUi = styled(List)(({ theme }) => ({
    padding: 0,
    '& .MuiButtonBase-root':{
        padding: "8px 16px",
        marginBottom: "4px",
        borderRadius: 8,
        '&:hover ':{
            backgroundColor: theme.palette.custom?.lightblue1,
            '& .MuiSvgIcon-root, & .MuiListItemText-root':{
                color: theme.palette.custom?.green
            },
            '&.Mui-selected':{
                fontWeight: 600
            },
        },
        '&.Mui-selected':{
            backgroundColor: `${theme.palette.custom?.lightblue1}!important`,
            
            '& .MuiSvgIcon-root, & .MuiListItemText-root .MuiTypography-root':{
                color: theme.palette.custom?.green,
                fontWeight: 600,
            },
        },
    },
    '& .MuiListItemIcon-root':{
        minWidth: 28,
    },
    "& .MuiSvgIcon-root":{
        height: 20,
        width: 20,
    },
    '& .MuiListItem-root':{
        display: "block"
    }
}))

export const AppBarStyled = styled(AppBar)<Props>(({ theme, drawerwidth, ismobile }) => ({
    width: ismobile === "true" ? "100%" : `calc(100% - ${drawerwidth}px)`, 
    marginLeft: ismobile === "true" ? undefined : drawerwidth, 
    boxShadow: "none",
    backgroundColor: theme.palette.custom?.white,
    position: "fixed",
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.standard,
    }),
    '& .MuiToolbar-root':{
        justifyContent: "space-between",
        paddingLeft: "13px",
        paddingRight: "5px",
    }
}))

export const MainContentUI = styled(Box)<Props>(({ drawerwidth, ismobile }) => ({
    width: ismobile === "true" ? "100%" : `calc(100% - ${drawerwidth}px)`,
    marginLeft: ismobile === "true" ? undefined : `${drawerwidth}px`,
    padding: 15,
    marginTop: 64,
    transition: "margin 0.3s",
    display: ismobile
}))

export const Drawer = styled(MuiDrawer)<Props>(({ drawerwidth }) => ({
  flexShrink: 0,
  boxSizing: 'border-box',
  '& .MuiPaper-elevation':{
    borderRight: 0,
  },
  [`& .${drawerClasses.paper}`]: {
    // width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    backgroundColor: 'background.paper',
    width: drawerwidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.standard,
    }),
  },
}));

export const LeftMenuAdmin = styled(Stack)({
    flexGrow: 1, 
    justifyContent: 'space-between'
})

export const MenuWrapper = styled(Box)<Props>(({ drawerwidth }) => ({
    overflow: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: drawerwidth === 72 ? "16px 10px 0" : "16px 16px 0",
    '& .MuiTypography-subtitle2':{
        padding: drawerwidth === 72 ? "8px 0" : "8px 16px 8px 16px",
    },
    // border: "1px solid rgba(0, 0, 0, 0.12)"
}))

export const SubMenuLink = styled(Link)<Props>(({ color, fontWeight, drawerwidth }) => ({
    marginLeft: drawerwidth === 72 ? 0 : 30,
    display: "block",
    padding: "8px 16px",
    fontSize: "14px",
    '&:hover':{
        color: theme.palette.custom?.green
    },
    color: color,
    fontWeight: fontWeight
}))

export const UpcomingImg = styled(Box)<Props>(({ imgsrc }) => ({
    backgroundImage: `url(${ typeof imgsrc === "string" ? imgsrc : imgsrc?.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    height: "277px",
}))

export const FileWrapper = styled(Box)<Props>(({iserror})=>({
    position: "relative",
    backgroundColor: "var(--palette-background-paper)",
    outline: "none",
    overflow: "hidden",
    padding: "20px 8px",
    borderRadius: "4px",
    transition: "padding 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    border: `1px dashed`,
    borderColor: iserror ? theme.palette.error?.main : theme.palette.custom?.grey,
    cursor: "pointer",
    textAlign: "center",
    width: "100%",
}))

export const HiddenInput = styled("input")({
  display: "none",
});

export const PreviewBox = styled(Box)({
    position: "relative",
    '& img': {
        objectFit: "cover",
        borderRadius: 1,
        objectPosition: "top center",
    },
    '& svg': {
        cursor: "pointer",
        position: "absolute",
        right: "0",
        top: "50%",
        left: "50%",
        display: "none",
        color: "#fff",
        transition: "all 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    '&: hover ':{
        backgroundColor: theme.palette.custom?.hoverBlack,
        '& svg': {
            transform: "translate(-50%, -50%) scale(1)",
            display: "block",
        },
        '& img': {
            opacity: 0.5,
        },
    },
})

export const FormUI = styled(Box)({
    '& label':{
        fontSize: "14px",
    }
})

export const AddMoreButton = styled(Button)({
    fontSize: "14px",
    textTransform: "none",
    marginTop: "16px",
})

export const WrapInput = styled(Stack)({
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    '& .MuiIconButton-root':{
        position: "absolute",
        right: 1,
        top: "5px",
        marginTop: 0,
        color: theme.palette.custom?.dottedBorder,
        '&:hover':{
            color: theme.palette.error.main
        }
    },
    ":hover .MuiIconButton-root": {
        visibility: "visible",
    }
})

export const ErrorTypography = styled(Typography)<Props>(({ iserror })=>({
    marginTop: 4,
    color: iserror ? theme.palette.error?.main : theme.palette.custom?.grey,
    visibility: iserror ? "visible" : "hidden"
}))

export const StyledDataGrid = styled(DataGrid)({
    border:0,
    "& .row-actions": {
        opacity: 0,
        visibility: "hidden",
        transition: "0.2s",
        gap: "8px",
    },
    "& .MuiDataGrid-row:hover .row-actions": {
        opacity: 1,
        visibility: "visible"
    },
    '& .group-row':{
        ' .MuiDataGrid-cell':{
            width: "100%",
        }
    },
    " .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within":{
        outline: "none",
        '& .MuiDataGrid-columnSeparator':{
            opacity: 1
        }
    },
    '& .MuiDataGrid-columnHeader--siblingFocused .MuiDataGrid-columnSeparator':{
        opacity: 1
    },
    '& a':{
        textDecoration: "underline",
        fontSize: "14px",
    },
    '& .MuiDataGrid-cell--editing':{
        boxShadow: "none !important",
        backgroundColor: "transparent !important",
        '& .MuiInputBase-root':{
            height: "40px",
            margin: "auto",
            '& .MuiNativeSelect-select':{
                padding: "3.5px 10px",
                paddingRight: 32,
            }
        },
        '&:focus-within':{
            outline: "none !important"
        }
    }
})

export const CardHeaderStyle = styled(CardHeader)({
    '& .MuiCardHeader-content .MuiCardHeader-title': {
        fontSize: "18px",
        fontWeight: 500,
    },
    '& .MuiCardHeader-action':{
        marginRight: 0,
        marginTop: 0
    }
})

export const StyledRichTextEditor = styled(Box)({
    "& .ProseMirror": {
        minHeight: "200px",     // 👈 add this
    },
})

export const StackUI = styled(Stack)({
    padding: "16px",
    gap: "8px",
    '& .MuiInputBase-root':{
        height: "32px",
        '& input':{
            fontSize: "14px",
            height: "15px",
        },
    },
    '& button':{
        width: "max-content"
    }
})

export const ListItem = styled(List)({
    margin: "4px",
})

export const ImageBox = styled(Box)<Props>(({ imgsrc }) => ({
    backgroundImage: `url(${imgsrc})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80px",
    width: "300px",
    margin: "10px 0",
    borderRadius: "12px",
}))

export const AvatarUI = styled(Avatar)({
    height: "64px",
    width: "64px",
    borderRadius: "12px",
})

export const IconButtonUI = styled(IconButton)({
    borderRadius: "12px",
    '& svg':{
      height: "20px",
      width: "20px",  
    },
})

export const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 52,
    height: 26,
    padding: 0,
    margin: "8px",
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(26px)',
            color: theme.palette.custom?.white,
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.custom?.green,
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
        },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: theme.palette.custom?.green2,
        border: '6px solid #fff',
        },
        '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.custom?.disabledColor,
        opacity: 1,
    },
}))

export const TableCard = styled(Card)({
    '& .MuiCardHeader-title': {
        fontSize: "20px",
    }
})

export const TableHeight = styled(Box)(({ height}) => ({
    height: `calc(100vh - ${height ? height : 170}px)`,
}))

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  height: "100%",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const Search = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: "10px",
  backgroundColor: theme.palette.custom?.seachbtn1,
  '&:hover': {
    backgroundColor: theme.palette.custom?.seachbtn2,
  },
  marginRight: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(1),
    width: 'auto',
  },
}));

export const BackLink = styled(Link)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    ":hover":{
        color: theme.palette.custom?.green
    }
}))
export const FormControlUI = styled(FormControl)({
    width: "100%",
})

export const DialogContentHeight = styled(DialogContent)({
    maxHeight: "calc(100vh - 185px)",
})

export const GridScroll = styled(Grid)({
    height: "calc(100vh - 228px)",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.custom?.grey,
      borderRadius: "10px",
    },
})

export const CardContentUI = styled(CardContent)({
    padding: "0 !important",
    '& form .MuiGrid-container': {
        padding: "16px 16px 16px",
    }
})

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const StyledTabs = styled(Tabs)({
    minHeight: 36,
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "4px",
    borderRadius: "8px",
    "& .MuiTab-root": {
        textTransform: "none",
        fontWeight: 500,
        minHeight: 36,
    },
    '& .MuiTabs-list':{
        gap: "8px",
    },
    '& button':{
        padding: "0 12px",
        // border: "1px solid rgba(46, 43, 48, 0.1)",
        borderRadius: "10px",
        minWidth: "unset",
        // boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px",
        '&.Mui-selected':{
            backgroundColor: theme.palette.custom?.green,
            color: theme.palette.custom?.white,
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"
        },
        "&:hover:not(.Mui-selected)":{
            backgroundColor: theme.palette.custom?.lightblue1,
        }
    },
    '& .MuiTabs-indicator':{
        display: "none",
    },
    '& .MuiTabs-scroller': {
        overflow: "unset !important",
    }
})

export const ChipBox = styled(Box)({
    marginTop: 16,
    '& .MuiChip-root': {
        marginRight: 4,
    }
})

export const GalleryLinkBox = styled(Box)({
    display: "flex",
    flexDirection:"column", 
    justifyContent: "center", 
    height: "100%"
})

export const RemoveIcon = styled(IconButton)({
    color: theme.palette.custom?.grey,
    "&:hover":{
        color: theme.palette.error?.main
    }
})
