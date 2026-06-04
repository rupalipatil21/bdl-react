import styled from "@emotion/styled";
import { Card, Grid } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { theme } from "./theme";

interface Props {
    headerheight?: number;
}

export const StyledCard = styled(Card)({
    backgroundColor: "transparent",
    borderRadius: 0,
    boxShadow: "none",
    marginBottom: 20,
    '& .MuiCardContent-root':{
        padding: "0 !important",
        paddingTop: "10px !important",
    },
    '& img': {
        maxWidth: "414px",
    },
    '& a':{
        textDecoration: "none"
    }
})

export const GridUI = styled(Grid)<Props>(({ headerheight }) => ({
    alignItems: "start",
    position: "relative",
    scrollMarginTop: `${headerheight}px`,  
    scrollBehavior: "smooth"
}))

export const OrangeIcon = styled(CalendarTodayIcon)({
  color: theme.palette.custom?.darkOrange
})