"use client"
import { Accordion, AppBar, Box, Button, Chip, Container, Dialog, Divider, Drawer, Grid, List, Popover, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { theme } from "./theme";
import Image, { StaticImageData } from "next/image";
import upimg from "@/public/up.png"

interface Props {
    homeslider?: boolean
    testimonialslide?: string
    imgsrc?: StaticImageData | string
    position?: string
    display?: string
    textcolor?: string
    active?: string
    isexpanded?: boolean
    headerheight?: number;
    fontsize?: number;
    props?: string;
    objectPosition?: string
    isfullscreen?: boolean
}

const TopLink = {
    display: "inline-block",
    verticalAlign: "middle",
    fontSize: "12px",
    color: "#707070",
    fontStyle: "normal",
    fontWeight: 400,
}


export const LanguageBox = styled(Box)(({ theme }) => ({
    textAlign: "right",
    padding: "15px 40px 0 0",
    color: theme.palette.custom?.grey,
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    '& .active':{
        color: theme.palette.custom?.green
    },
    [theme.breakpoints.down('md')]:{
        padding: "4px 20px 5px 0"
    },
}))

export const TicketLink = styled(Link)<Props>(({ display }) =>({
    ...TopLink,
    backgroundColor: "#57bab4",
    color: "#fff",
    marginRight: "20px",
    borderRadius: 0,
    fontSize: 14,
    padding: "6px 12px",
    lineHeight: "1.543571",
    [theme.breakpoints.down('sm')]:{
        display: display ? display : "none",
    },
}))  

export const LanguageDivider = styled(Divider)(({ theme }) => ({
    margin: "11px 6px",
    borderColor: theme.palette.custom?.grey,
    [theme.breakpoints.down('sm')]:{
        height: "10px"
    },
}))

export const LogoBox = styled(Box)({
    textAlign: "center",
    marginBottom: "35px",
    '& .MuiLink-root': {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-4px",
        textDecoration: "none",
        '& img:nth-of-type(2)': {
            marginLeft: "27px",
            [theme.breakpoints.down('lg')]:{
                display: "none"
            },
        },
        [theme.breakpoints.down('md')]:{
            marginLeft: "20px",
            justifyContent: "start",
            '& img': {
                height: "50px",
                marginBottom: "8px",
            },
        },
        [theme.breakpoints.down('sm')]:{
            flexDirection: "column",
            marginBottom: "12px",
        },
    },
    [theme.breakpoints.down('sm')]:{
        marginBottom: 0,
    },
})

export const MenuBox = styled(Box)({
    marginBottom: "15px",
    [theme.breakpoints.down('sm')]:{
        marginBottom: 0
    },
})

export const NavToggle = styled(Box)(() => ({
  display: "none",
  flexGrow: 1,
  right: 0,
  top: 0,
  color: "#000",
  position: "absolute",
  '& .MuiIconButton-root':{
        right: "16px",
        top: "25px",
        padding: 0,
        '& .MuiSvgIcon-root': {
            height: "40px",
            width: "40px"
        },
  },
  [theme.breakpoints.down("md")]: {
    '& .MuiIconButton-root':{
        display: "none"
    }
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    top: 10,
  },
}));

export const Nav = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: "85%",
    margin: "0 auto",
    display: "flex",
    '& .MuiButton-root:nth-of-type(4)': {
        flexBasis: "15%",
    },
    '& .MuiButton-root:nth-of-type(5)': {
        flexBasis: "15%",
    },
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}))

export const StyledPopover = styled(Popover)({
    pointerEvents: "none",   // parent doesn't block
    "& .MuiPaper-root": {
        pointerEvents: "auto", // content interactive
        width: "auto",
        maxWidth: "none",
    },
    '& .MuiPaper-elevation:not(#mouse-over-admin .MuiPaper-elevation)': {
        boxShadow: "none",
        width: "100%",
        left: "0 !important",
        padding: "50px 0",
        maxWidth: "100%"
    }
})

export const StyledContainer = styled(Box)({
    width: "100%",
    maxWidth: "85%",
    margin: "0 auto",
    paddingTop: "110px",
    '& .MuiStack-root .MuiStack-root:first-of-type':{
        paddingLeft: "0 !important",
    },
    [theme.breakpoints.down("lg")]: {
        paddingTop: "60px",
    },
    [theme.breakpoints.down("sm")]: {
        paddingTop: "30px",
        maxWidth: "80%",
    },
})

export const MegaMenuLink = styled(Typography)(({ theme }) => ({
    cursor: "pointer",
    textTransform: "uppercase",
    color: theme.palette.custom?.black,
    marginBottom: "25px",
}))

export const MobList = styled(Box)({
    padding: "0 20px 15px 22px"
})

export const StyledDrawer = styled(Drawer)({
    top: "124px",
    zIndex: "99",
    '& .MuiDrawer-paper': { 
        boxSizing: 'border-box', 
        width: "100%",
        height: "100%",
        top: "124px",
        boxShadow: "none",
    },
    [theme.breakpoints.up("md")]: {
        display: "none"
    },
})

export const NavButton = styled(Button)<Props>(({ active, props }) => ({
    display: "block",
    flexBasis: props ? "unset" : "12%",
    width: props ? "45%" : undefined,
    textAlign: "left",
    letterSpacing: "1px",
    padding: 0,
    textTransform: "uppercase",
    fontFamily: "Lato",
    fontSize: "14.5px",
    color: active ? theme.palette.custom?.green : theme.palette.custom?.grey,
    fontWeight: active ? 700 : 400,
    ' :hover':{
        color: theme.palette.custom?.green,
        backgroundColor: "transparent"
    },
    [theme.breakpoints.down("md")]: {
        marginBottom: 15,
    },
}))

export const SliderBox = styled(Box)<Props>(({ homeslider, testimonialslide })=>({
    overflow: "hidden",
    width: "100%",
    marginTop: "212px",
    ' img': {
        width: "100%",
    },
    ' .slick-slider': {
        width: homeslider ? "100%" : "87%",
        margin: "auto",
        height: "calc( 100vh - 212px )",
        '& .slick-slide':{
            height: "100%",
            position: "relative",
        },
    },
    "&.google-slider":{
        '& .slide-image':{
            backgroundPosition: "left center",
            '& img':{
                width: "30px",
                marginLeft: 15,
            },
        },
        "& .slide-image:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundBlendMode: "multiply",
            opacity: 0.06,
            backgroundColor: theme.palette.custom?.black
        },
    },
    ' .slick-arrow': {
        zIndex: 2,
        top: '50%',
        transform: 'translateY(-50%)',
    },
    ' .slick-prev, .slick-next': {
        '&::before': {
            color: theme.palette.text.primary,
            height: "20px",
            width: "20px",
            display: "block",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            content: '""'
        },
    },
    '& .slick-prev':{
        // left: "-50px",
        height: "100%",
        width: "15%",
        left: 0,
        // backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .5) 100%)",
        backgroundRepeat: "repeat-x",
        opacity: 0.5,
    },
    '& .slick-next':{
        // right: "-50px",
        height: "100%",
        width: "15%",
        right: 0,
        // backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .5) 100%)",
        backgroundRepeat: "repeat-x",
        opacity: 0.5,
    },
    [theme.breakpoints.down("lg")]:{
        ' .slick-slider': {
            height: "335px",
        },
    },
    [theme.breakpoints.down("md")]:{
        marginTop: 0,
        ' .slick-slider': {
            height: "290px",
        },
    },
    [theme.breakpoints.down("sm")]:{
        padding: testimonialslide ? "30px 0" : "71px 0 0",
        "& img":{
            marginBottom: 0,
        },
        ' .slick-slider': {
            width: homeslider ? "100%" : "77%",
            height: "215px",
        },
        '& .slick-next':{
            right: "-35px"
        },
        '& .slick-prev':{
            left: "-35px"
        },
    }
}))

export const DotBox = styled(Box)({
    bottom: 35,
    '& ul li': {
        backgroundColor: 'transparent',
        border: "2px solid",
        borderColor: theme.palette.custom?.white,
        borderRadius: "50%",
        marginRight: 10,
        marginLeft: 0,
        height: 10,
        width: 10,
        '& button:before, .slick-active button:before':{
            color: 'transparent !important'
        },
        '&.slick-active':{
            backgroundColor: theme.palette.custom?.white
        },
        '&:last-child':{
            marginRight: 0,
        }
    },
    '& .MuiList-root':{
        padding: 0,
    },

    [theme.breakpoints.down("lg")]:{
        bottom: 10,
    },
    [theme.breakpoints.down("sm")]:{
        '& ul li': {
            height: "7px",
            width: "7px",
        },
    },
})

export const CarouselCaption = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    bottom: '15%',
    left: '5%',
    color: theme.palette.custom?.white,
    fontSize: '16px',
    fontWeight: 700,
    [theme.breakpoints.down("sm")]:{
        fontSize: "13px",
        marginBottom: "10px",
    },
}))

export const SliderImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'imgsrc'
})<Props>(({ imgsrc, objectPosition }) =>({
    backgroundImage: `url(${imgsrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: objectPosition ? objectPosition :"center center",
    height: "calc( 100vh - 212px )",

    [theme.breakpoints.down("lg")]:{
        height: "335px",
    },
    [theme.breakpoints.down("md")]:{
        height: "290px",
    },
    [theme.breakpoints.down("sm")]:{
        height: "215px"
    },
}))

export const BottomBar = styled(Box)(({ theme }) => ({
    padding: "5px 0 7px",
    backgroundColor: theme.palette.custom?.black2,
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 9999,
    opacity: "0.9",
    '& .MuiContainer-root':{
        maxWidth: "85%",
        margin: "0 auto",
    },
    '& .MuiDivider-root':{
        border: "1px solid",
        borderColor: theme.palette.custom?.white,
        height: "12px",
        margin: "0 8px",
    },
    [theme.breakpoints.down("sm")]:{
        display: "none",
    },
}))

export const QuickLink = styled(Link)(({ theme }) => ({
    color: theme.palette.custom?.white,
    fontWeight: 500,
    fontSize: "11px",
    display: "inline-block",
    marginTop: "5px",
    textDecoration: "none",
    '&:hover':{
        color: theme.palette.custom?.green,
    },
    "&:last-of-type ~ .MuiDivider-root":{
        display: "none",
    },
}))

export const FooterWrapper = styled(Box)({
    marginTop: "20px",
    marginBottom: "110px",
    '& .MuiGrid-container .MuiGrid-root:nth-of-type(1)':{
        width: "25%",
    },
    '& .MuiGrid-container .MuiGrid-root:nth-of-type(2)':{
        width: "30%",
    },
    '& .MuiGrid-container .MuiGrid-root:nth-of-type(3)':{
        width: "30%",
    },
    '& .MuiGrid-container .MuiGrid-root:nth-of-type(4)':{
        width: "15%",
    },
    '& .MuiGrid-container':{
        columnGap: "70px",
        flexWrap: "nowrap"
    },
    '& .MuiBox-root img':{
        height: "55px",
        width: "auto",
        marginRight: 10,
        marginBottom: 15,
    },
    '& .MuiBox-root': {
        height: "76px",
        verticalAlign: "bottom",
        display: "table-cell",
    },
    [theme.breakpoints.down("lg")]:{
        '& .MuiGrid-container':{
            columnGap: "30px",
        },
        '& .MuiTypography-body_h3':{
            fontSize: 11,
            lineHeight: "20px",
        }
    },
    [theme.breakpoints.down("md")]:{
        '& .MuiGrid-container .MuiGrid-root:nth-of-type(1), .MuiGrid-container .MuiGrid-root:nth-of-type(2), .MuiGrid-container .MuiGrid-root:nth-of-type(3), .MuiGrid-container .MuiGrid-root:nth-of-type(4)':{
            width: "100%",
        },
        '& .MuiGrid-container':{
            flexWrap: "wrap"
        },
        '& .MuiBox-root img':{
            height: "50px",
        },
        '& .MuiBox-root': {
            height: "65px",
        },
    },
    [theme.breakpoints.down("sm")]:{
        marginBottom: 0,
    }
})

export const SocialMedia = styled(Box)({
    marginTop: "15px",
    marginBottom: "40px",
    '& a':{
        paddingRight: "20px",
    },
    '& img':{
        height: "17px",
        width: "auto",
    },
    [theme.breakpoints.up("sm")]:{
        display: "none",
    }
})

export const CommonGrid = styled(Grid)({
    marginTop: 30,
    columnGap: 30,
})

export const LeftSidebar = styled(Box)(({ theme }) => ({
    alignSelf: "flex-start",
    zIndex: 10,
    padding: "0 30px",
    '& .MuiDivider-root': {
        borderColor: theme.palette.custom?.grey,
        maxWidth: "200px",
    },
    '&.sidebar': {
        position: "relative",
        height: "100%",
    },
    '&.sidebar.fixed':{
        position: "fixed",
        top: "6%",
    },
    '& a .MuiTypography-root:hover':{
        color: theme.palette.custom?.green,
    },
    [theme.breakpoints.down("md")]:{
        padding: "0 30px",
    },
}))

export const CustomChip = styled(Chip)<Props>(({ theme, textcolor }) => ({
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "start",
    height: "auto",
    padding: textcolor == theme.palette.custom?.darkOrange ? "15px 0 2px" : "2px 0 10px",
    marginBottom: "5px",
    '& .MuiSvgIcon-root': {
        height: 18,
        color: textcolor,
        margin: 0,
    },
    '& span':{
        fontSize: 17,
        fontWeight: 700,
        paddingLeft: 15,
        color: textcolor
    },
}))

export const MoreAtBdlSlider = styled(Box)(({ theme }) => ({
    marginBottom: 20,
    '& img':{
        height: "100%",
        width: "100%",
    },
    '& a':{
        position: "relative",
        '&:hover .MuiTypography-root':{
            color: theme.palette.custom?.green,
        },
    },
    '& a::before':{
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.custom?.black,
        backgroundBlendMode: "multiply",
        opacity: "0.4",
    },
    '& .MuiTypography-caption1':{
        position: "absolute",
        bottom: "35px",
        left: "30px",
    },
    [theme.breakpoints.down("sm")]:{
        '& .MuiTypography-left_title': {
            fontSize: "16px",
        },
    },
}))

export const SliderImageBox = styled(Box)({
    position: "relative",
    width: "100%",
    aspectRatio: "4/3",
    zIndex: "-1",
})

export const StyledGridContainer = styled(Grid)<Props>(({ headerheight })=>({
    gap: 0,
    marginTop: 30,
    
    '& > .MuiGrid-root':{
        padding: "0 15px",
        scrollMarginTop: `${headerheight}px`,
    },
    '& .sidebar':{
        position: "unset",
    },
    [theme.breakpoints.down("sm")]:{
        '& .sidebar':{
            position: "relative !important",
            top: "0 !important"
        },
    },
}))

export const ContentBox = styled(Box)({
    [theme.breakpoints.down("md")]:{
        padding: "20px 30px",
    },
})

export const StyledScrollTop = styled(Box)(({ theme }) => ({
    position: "fixed",
    bottom: 80,
    right: 30,
    '& button':{
        boxShadow: "none",
        backgroundColor: theme.palette.custom?.green,
        border: `1px solid ${theme.palette.custom?.green}`,
        backgroundImage: `url(${upimg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        '& svg':{
            display: "none"
        },
        '&:hover':{
            backgroundColor: theme.palette.custom?.green,
        },
    },
}))

export const LinkUI = styled(Link)<Props>(({ theme, fontsize }) => ({
    color: theme.palette.custom?.green,
    fontSize: fontsize ? fontsize : 16,
    fontWeight: 500,
    '&:hover':{
        textDecoration: "underline"
    }
}))

export const DividerUI = styled(Divider)(({ theme }) => ({
    height: 12,
    margin: "0 4px",
    borderColor: theme.palette.custom?.grey,
    borderWidth: 1,
}))

export const HorizontalDivider = styled(Divider)({
    margin: "20px 0"
})

export const RestoreBox = styled(Box)({
    padding: "20px 25px",
    '& img':{
        marginTop: 20,
        marginBottom: 16,
        width: "100%",
        height: "auto",
    },
    [theme.breakpoints.up("lg")]:{
        padding: 0,
    },
})

export const ToggleLink = styled(Typography)(({ theme}) => ({
    color: theme.palette.custom?.green,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontFamily: "Lato",
    '& svg':{
        marginLeft: "4px",
        fontSize: "18px",
    },
    '&.readmore': {
        float: "right",
    }
}))

export const SlideDiv = styled(Box)<Props>(({ isexpanded})=>({
  maxHeight: isexpanded ? "500px" : "0px",
  overflow: "hidden",
  transition: "all 0.4s ease",
}))

export const YoutubeVideo = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.custom?.grey2,
    margin: "30px 0px 40px",
    padding: "15px 15px 0",
    '& .MuiTypography-root':{
        margin: "30px 0 45px"
    },
    '& img':{
        maxWidth: "100%",
        height: "auto",
    },
    [theme.breakpoints.down("md")]:{
        padding: "40px 15px 0",
        '& .MuiGrid-root':{
            textAlign: "center",
        },
        '& .MuiTypography-root':{
            margin: "60px 0"
        },
    },
}))

export const GalleryBar = styled(Box)(({ theme }) => ({
    backgroundColor: "#222",
    display: "flex",
    aligItems: "center",
    color: theme.palette.custom?.white,
    '& svg':{
        color: theme.palette.custom?.white,
        cursor: "pointer"
    },
    "& > button": {
        backgroundColor: "transparent",
        color: theme.palette.custom?.white,
        border: "0 none",
        borderRadius: 0,
        margin: ".2rem 0",
        boxShadow: "none",
        width: "35px",
        padding: 0,
        "&.fullscreen-button": {
            marginLeft: "auto",
            width: "auto",
            "& svg":{
                width: "14px",
            }
        },
        '& svg':{
            width: 20,
        },
        '&:last-child svg':{
            width: 29,
        },
        "&:hover": {
            backgroundColor: theme.palette.custom?.black,
        }
    },

    '& .p-galleria-thumbnail-wrapper .p-items-hidden .p-galleria-thumbnail-item':{
       visibility: "visible"
    },
    // '& .p-galleria-thumbnail-wrapper .p-galleria-thumbnail-items':{
    //     flexWrap: "wrap"
    // }
}))

export const TitleContainer = styled(Box)(({ theme }) => ({
    "> span": {
        fontSize: "11px",
        paddingLeft: "20px",
        color: theme.palette.custom?.captiongrey,
        "&.title": {
            fontWeight: "bold",
        }
    }
}))

export const ListUI = styled(List)({
    paddingLeft: "20px",
    '& .MuiListItem-root':{
        display: "list-item",
        listStyleType: "disc",
        marginBottom: "6px",
    },
})

export const Map = styled(Box)({
    width: "100%", 
    height: "100%",  
    overflow: "hidden",
    [theme.breakpoints.down("md")]:{
        height: "400px",
    }
})

export const AccordionUI = styled(Accordion)<Props>(({ headerheight}) => ({
    boxShadow: "none",
    '&:not(:first-of-type)': {
        margin: "16px 0"
    },
    '& .MuiButtonBase-root': {
        borderBottom: "dotted 1px",
        borderColor: theme.palette.custom?.dottedBorder,
        padding: 0,
        justifyContent: "start",
        minHeight: "unset !important",
        paddingBottom: "15px",
        marginBottom: "15px",
        scrollMarginTop: headerheight, 
        scrollBehavior: "smooth",
        '& .MuiAccordionSummary-content':{
            flex: "unset",
            margin: 0,
            '& .MuiTypography-root': {
                color: theme.palette.custom?.green,
                fontSize: "20px",
                lineHeight: "22px",
            }
        },
        '& .MuiAccordionSummary-expandIconWrapper svg': {
            color: theme.palette.custom?.green,
        }
    },
    '& .MuiAccordionDetails-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },
    '&:before':{
        backgroundColor: "transparent"
    },
    '& .MuiAccordionDetails-root img':{
        width: "100% !important",
        height: "auto !important",
    },
    '& .MuiDivider-root':{
        margin: "20px 0",
    }
}))

export const BannerContainer = styled(Container)<Props>(({ headerheight })=>({
    marginTop: `${headerheight}px`, 
    '& img': { 
        width: "100%", 
        height: "auto" 
    }
}))

export const AppBarCommon = styled(AppBar)({
    backgroundColor: theme.palette.custom?.white,
    boxShadow: "none",
})

export const CafeStack = styled(Stack)<Props>(({ headerheight }) => ({
    scrollMarginTop: headerheight,
    scrollBehavior: "smooth",
}))

export const ImageUI = styled(Image)({
    width: "100% !important",
    height: "auto !important"
})

export const PastLectures = styled(Box)({
    marginTop: 26,
    '& svg':{
        marginLeft: 0,
        fontSize: 18,
    },
    "& span span:not(.MuiTypography-body_h4)":{
        color: theme.palette.custom?.overlay2,
    },
    '& .readmore': {
        float: "right",
    }
})

export const DescriptionBox = styled(Box)<Props>(({ fontsize }) => ({
    "& p": {
        marginBottom: 10,
        fontSize: fontsize ? fontsize : "16px",
        fontWeight: 400,
    },
    "& a":{
        color: theme.palette.custom?.green
    }
}))

export const MuseumBox = styled(Box)({
    "& img": {
        padding: "16px 0",
        width: "100% !important",
        height: "100% !important",
    },
    '& .MuiGrid-root img': {
        padding: 0,
    }
})

export const CarouselCaptionRight = styled(Box)({
    position: "absolute",
    textAlign: "left",
    bottom: "15%",
    top: "23%",
    left: "45%",
    width: "45%",
    '& .MuiTypography-root':{
        textShadow: "0 1px 2px rgba(0,0,0,.6)",
        marginBottom: 17,
        lineHeight: 1.1,
        display: "block",
    }
})

export const MoreText = styled(Box)({
    marginTop: 20,
})

export const FacultyBox = styled(Box)({
    marginBottom: 40,
    '& .MuiTypography-body_h2': {
        color: theme.palette.custom?.black,
    },
    '& .MuiTypography-font_16': {
        paddingTop: 5,
        marginBottom: 10,
    }
})

export const CollectionContainer = styled(Container)({
    marginTop: 30,
    '& .MuiGrid-container':{
        marginTop: 30,
        '& img':{
            width: "100% !important",
            height: "auto !important"
        }
    }
})

export const ContentWrapper = styled(Box)({
    '& .MuiTypography-root':{
        marginBottom: 16,
    },
    "& img": {
        width: "100% !important",
        height: "auto",
        cursor: "pointer",
    },
    '& > .MuiTypography-root:first-of-type':{
        marginBottom: 26,
    },
    " ol": {
        paddingLeft: 20,
        marginBottom: 16,
        '& li .MuiTypography-root':{
            marginBottom: 0,
        }
    }
})

export const StoryDialog = styled(Dialog)({
    '& img':{
        maxWidth: "100%",
        height: "auto",
    },
    '& .MuiDialog-paper':{
        borderRadius: 0,
    }
})

export const CloseButton = styled(Button)({
    maxWidth: "40px",
    height: "30px",
    position: "absolute",
    right: "8px",
    top: "8px",
    fontSize: "26px",
    minWidth: "0",
    color: "#333",
    opacity: "0.65",
    '&:hover':{
        opacity: 1,
        backgroundColor: "transparent"
    }
})

export const CarouselCaptionH1 = styled(Typography)(({ theme }) => ({
    color: theme.palette.custom?.white,
    fontSize: '30px',
    fontWeight: 700,
    marginBottom: 10,
    lineHeight: .98,
    fontFamily: "Lato",
    [theme.breakpoints.down("sm")]:{
        fontSize: "13px",
        marginBottom: "10px",
    },
}))

export const CarouselCaptionH2 = styled(Typography)(({ theme }) => ({
    color: theme.palette.custom?.white,
    fontSize: '16px',
    fontWeight: 700,
    fontFamily: "Lato",
    [theme.breakpoints.down("sm")]:{
        fontSize: "13px",
        marginBottom: "10px",
    },
}))

export const CaptionBox = styled(Box)({
    position: "absolute",
    left: "5%",
    bottom: "15%",
    textShadow: "0 1px 2px rgba(0,0,0,.6)",
    width: "100%"
})

export const MemberBox = styled(Box)({
    marginBottom: 10,
    '& b:nth-of-type(2)':{
        marginLeft: 70,
    }
})

export const MembershipList = styled(List)({
    padding: 0,
    paddingLeft: 10,
    marginBottom: 16,
    '& .MuiListItem-root':{
        display: "list-item",
        listStyleType: "disc",
        padding: 0,
        lineHeight: "20px",
        '& .MuiTypography-root':{
            marginBottom: 0,
        }
    }
})

export const ImageThumb = styled(Box)<Props>(({isfullscreen}) => ({
    width: isfullscreen ? "100vw" : "auto",
    height: isfullscreen ? "100vh" : "auto",
}))