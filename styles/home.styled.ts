import { Box, Grid } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { theme } from "./theme";
import Link from "next/link";

type Props = {
    height?: string | number
    borderColor?:  keyof NonNullable<Theme['palette']['custom']> | string 
    upcominglink?: string
    overlaycolor?: string
    caloverlay?: string
    virtualarrow?: string
    videoarrow?: string
    videobox?: string
    exoverlay?: string
}

export const CommonContentBox = styled(Box)<Props>(({ height, videobox }) =>({
    height: height ? height : "100%",
    padding: videobox ? "50px 20px 30px 35px" : height ? "20px 20px 20px 35px" : undefined,
    '& .MuiBox-root':{
        paddingLeft: "35px",
        paddingRight: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100%",
    },
    '& .MuiLink-root':{
        textDecoration: "none",
    },
    [theme.breakpoints.down('md')]:{
        padding: "20px",
        '& .MuiBox-root':{
            position: "relative",
            padding: 0,
            transform: "unset",
            top: "unset",
            left: "unset",
        },
        '& .MuiTypography-subTitle1 p':{
            fontSize: 14,
        },
    },
}))

export const ClickLink = styled(Link)(({ theme }) => ({
    fontWeight: 700,
    '&:hover':{
        color: theme.palette.custom?.green,
    },
    [theme.breakpoints.down('md')]:{
        fontSize: 12,
    },
}))

export const HomeLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'borderColor',
})<Props>(({ theme, borderColor = "orange", upcominglink, virtualarrow, videoarrow, exoverlay, height }) => {
    const resolvedColor = theme.palette.custom?.[borderColor] ?? borderColor;

  return {
    height: upcominglink || videoarrow ? height : "100%",
    position: upcominglink || borderColor==="lightGreen" || videoarrow ? "relative" : undefined,
    display: borderColor==="lightGreen" || videoarrow ? "block" : upcominglink ? "flex" : undefined,
    flex: upcominglink ? 1 : undefined,
    '& img':{
        height: "100% !important",
        width: "100% !important",
        objectFit: "cover",
    },
    '&:after': {
      position: 'absolute',
      content: "''",
      width: 0,
      height: 0,
      top: upcominglink ? "-1px": videoarrow ? "-1px" : virtualarrow ? "46%" : '20%',
      right: upcominglink ? undefined : virtualarrow ? undefined : '-1px',
      left: upcominglink ? "115px" : videoarrow ? "56px" : virtualarrow ? 0 : undefined,
      borderTop: upcominglink? `20px solid ${resolvedColor}` : virtualarrow ? `30px solid transparent` : videoarrow ? `22px solid ${resolvedColor}` : '20px solid transparent',
      borderLeft: upcominglink || videoarrow ? "30px solid transparent" : virtualarrow ? `21px solid ${resolvedColor}` : undefined,
      borderRight: upcominglink ? "20px solid transparent" : videoarrow ? "27px solid transparent" : virtualarrow ? undefined : `20px solid ${resolvedColor}`,
      borderBottom: videoarrow ? "0 solid transparent" : '30px solid transparent',
    },
    '&:hover .MuiBox-root:before': {
        opacity: .5,
    },
    '&:hover .MuiBox-root .MuiBox-root': {
        opacity: 1,
    },
    ...(exoverlay && {
        '&:before': {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.custom?.black,
            opacity: 0.1,
        },
    }),
    [theme.breakpoints.down('md')]:{
        '&:after': {
            top: "unset",
            bottom: "-1px",
            right: "35px",
            left: "unset",
            borderLeft: "25px solid transparent",
            borderRight: "25px solid transparent",
            borderBottom: `13px solid ${resolvedColor}`,
            borderTop: 0,
        },
    },
  }
})

export const Content = styled(Box)({
    position: "relative",
    top: "0 !important",
    left: "0 !important",
    transform: "none !important"
})

export const OverlayBox = styled(Box)<Props>(({ overlaycolor, caloverlay }) => ({
    '&:before':{
        position: "absolute",
        content: "''",
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: overlaycolor,
        opacity: 0,
    },
    '& .MuiBox-root':{
        position: "absolute",
        bottom: caloverlay ? undefined : "40px",
        left: caloverlay ? "50%" : "35px",
        top: caloverlay ? "50%" : undefined,
        transform: caloverlay ? "translate(-50%,-50%)" : undefined,
        zIndex: 999,
        opacity: 0,
        paddingRight: caloverlay ? undefined :"12px",
    }
}))

export const UpcomingGrid = styled(Grid)({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    '& .MuiBox-root':{
        flex: "0 0 auto"
    },
    [theme.breakpoints.down('md')]:{
        display: "flex",
        flexDirection: "column-reverse",
    },
})

export const PanelBox = styled(Box)<Props>(({ theme, overlaycolor }) => ({
    height: "300px",
    position: "relative",
    backgroundColor: overlaycolor,
    '& img':{
        display: "none",
    },
    '& .MuiTypography-root':{
        position: "absolute",
        left: "15%",
        top: "50%",
        transform: "translateY(-50%)",
    },
    '&:hover img':{
        display: "block",
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
    '&:hover .MuiTypography-root':{
        display: "none",
    },
    [theme.breakpoints.down('sm')]:{
        height: "unset",
        '& img':{
            display: "block",
            width: "100%",
            height: "auto",
        },
        '& .MuiTypography-root':{
            position: "relative",
            left: "30px",
            lineHeight: "80px",
            '& br':{
                display: "none",
            },
        },
    },
}))

export const InstaFeed = styled(Box)(({ theme }) => ({
    padding: "50px 100px 50px 25px",
    marginBottom: "30px",
    backgroundColor: theme.palette.custom?.orange2,
    [theme.breakpoints.down('md')]:{
        marginTop: 30,
    }
}))

export const InstaBox = styled(Box)({
    '& .slick-track': {
        height: 175,
    },
    "& .slick-slider":{
        padding: "0 75px",
    },
    "& .slick-slide":{
        padding: "0 15px",
    },
    "& .slick-slide img":{
        height: "100%",
    },
})

export const ArrowNext = styled(Box)({
    position: "absolute",
    cursor: "pointer",
    top: "50%",
    right: 0,
    height: 23,
})

export const ArrowPrev = styled(Box)({
    position: "absolute",
    cursor: "pointer",
    top: "50%",
    left: 0,
    height: 23,
})

export const VirtualGrid = styled(Grid)({
    flexDirection: "row",
    [theme.breakpoints.down('md')]:{
        flexDirection: "column-reverse"
    }
})