import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import activearrow from "@/public/active-arrow.png"

export const MissionBox = styled(Box)(({ theme }) => ({
    padding: "20px 20px 20px 30px",
    backgroundColor: theme.palette.custom?.lightOrange,
    marginTop: 16,
}))

export const LeftMenu = styled(Box)(({ theme }) => ({
    paddingBottom: 0,
    paddingTop: 0,
    '& a':{
        display: "flex",
        alignItems: "center",
        ":nth-of-type(7)": {
            paddingTop: 10,
        }
    },
    '& .active-menu .MuiTypography-root, & .active-submenu .MuiTypography-root':{
        color: theme.palette.custom?.green,
    },
    '& .active-menu:before':{
        backgroundImage: `url(${activearrow.src})`,
        content: "''",
        width: 20,
        height: 11,
        display: "block",
        marginRight: 8,
    },
    '& a:after':{
        content: "''",

    },
    '& .MuiListItemButton-root':{
        padding: 0,
        '&:hover':{
            backgroundColor: "transparent",
        },
    },
    '& .MuiListItemText-root':{
        margin: 0,
    },
    '& .MuiCollapse-root':{
        paddingTop: 5,
    }
}))