import { CustomChip, LeftSidebar } from "@/styles/common.styled";
import { Box, Collapse, Divider, List, ListItemButton, ListItemText, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { sidebarMenu } from "@/lib/constants";
import { usePathname, useSearchParams } from "next/navigation";
import { LeftMenu } from "@/styles/about.styled";
import { useState } from "react";
import { pastmenu } from "@/lib/pastexhibition.data";

type SubMenuItem = {
  item: string;
  url: string;
};

type MenuItem = {
  item: string;
  url: string;
  subItem?: SubMenuItem[];
};


export default function StickyLeftSidebar(){
    const theme = useTheme()
    const pathname = usePathname()
    const params = useSearchParams();
    const current = params.get("current")

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    let currentMenu: MenuItem[] = []
    let menuTitle = ""
    switch (true) {
        case pathname.includes("/about") :
            currentMenu = sidebarMenu[0].about
            menuTitle = "About"
            break;
        
        case pathname.includes("/visit") :
            currentMenu = sidebarMenu[0].visit
            menuTitle = "Visit"
            break;
        
        case pathname.includes("/exhibitions") :
            menuTitle = "Exhibitions"
            break;

        case pathname.includes("/calendar") :
            currentMenu = sidebarMenu[0].calendar
            menuTitle = "Calendar"
            break;

        case pathname.includes("/explore") :
            currentMenu = sidebarMenu[0].explore
            menuTitle = "Explore"
            break;

        case pathname.includes("/course") :
            currentMenu = sidebarMenu[0].course
            menuTitle = "Course"
            break;

        case pathname.includes("/collections") :
            currentMenu = sidebarMenu[0].collections
            menuTitle = "Collections"
            break;

        case pathname.includes("/learn") :
            currentMenu = sidebarMenu[0].learn
            menuTitle = "Learn"
            break;

        case pathname.includes("/friends-of-museum") :
            currentMenu = sidebarMenu[0].friendsofmuseum
            menuTitle = "Friends of the Museum"
            break;

        default:
            currentMenu = []
            menuTitle = ""
            break
    }


    const [, setClickedMenu] = useState(currentMenu?.[0]?.url)
    function handleActiveMenu(url: string){
        setClickedMenu(url)
    }


    return(
        <>
            <LeftSidebar height="100%" >
                <Link href="#"><Typography variant="left_title" color="custom.darkGreen">{menuTitle}</Typography></Link>
                
                <LeftMenu>
                    {
                        pathname.includes("/exhibitions") ?
                            <>
                                <Link href="/exhibitions/#current" className={current == "true" ? "active-menu" : ""}>
                                    <Typography variant="list_title" color="custom.grey" padding="2px 0">Current</Typography>
                                </Link>
                                <ListItemButton disableRipple onClick={handleClick} className={current != "true" ? "active-menu" : ""}>
                                    <Typography variant="list_title" color="custom.grey" padding="2px 0">Past</Typography>
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {
                                        pastmenu.map((menu, index)=>{
                                            return (
                                                <ListItemButton key={index} disableGutters onClick={handleClick}>
                                                    <ListItemText>
                                                        <Link href={menu.url} >
                                                            <Typography variant="list_title" color="custom.grey" padding="2px 0">{menu.item}</Typography>
                                                        </Link>
                                                    </ListItemText>
                                                </ListItemButton>
                                            )
                                        })}
                                    </List>
                                </Collapse>
                            </>
                        :
                        pathname.includes("/collections") ?
                            currentMenu.map((menu, index)=>{
                                const activeClass =
                                (menu.url === "/collections" &&
                                pathname.startsWith("/collections") &&
                                !pathname.includes("/collections/galleries") &&
                                !pathname.includes("/collections/library-n-research")) ||

                                (menu.url === "/collections/galleries" &&
                                pathname.startsWith("/collections/galleries")) ||

                                (menu.url === "/collections/library-n-research" &&
                                pathname.startsWith("/collections/library-n-research"))

                                ? "active-menu"
                                : "";
                               
                                return(
                                    <>
                                    <Link href={menu.url} key={index} className={activeClass}
                                        onClick={() => handleActiveMenu(menu.url)}
                                    >
                                        <Typography variant="list_title" color="custom.grey" padding="2px 0">{menu.item}</Typography>
                                    </Link>
                                    {
                                        menu.subItem &&
                                        pathname.startsWith("/collections") &&
                                        !pathname.startsWith("/collections/galleries") &&
                                        !pathname.startsWith("/collections/library-n-research") &&
                                        menu.subItem?.map((submenu, index)=>{
                                            const activeClass = pathname === submenu.url ? "active-submenu" : undefined;
                                            return(
                                                <Link href={submenu.url} key={index} className={activeClass}><Typography variant="list_title" color="custom.grey" padding="2px 0">{submenu.item}</Typography></Link>
                                            )
                                        })
                                    }
                                    </>
                                )
                            })
                        :   currentMenu.map((menu, index)=>{
                                // const activeClass = pathname === menu.url || clickedMenu == menu.url ? "active-menu" : undefined;
                                const activeClass = pathname === menu.url ? "active-menu" : undefined;
                                return (
                                    <Link href={menu.url} key={index} className={activeClass}
                                        onClick={() => handleActiveMenu(menu.url)}
                                    >
                                        <Typography variant="list_title" color="custom.grey" padding="2px 0">{menu.item}</Typography>
                                    </Link>
                                    
                                )
                            })
                    }
                </LeftMenu>
                <Box margin="15px 0">
                    <Divider />
                    <Link href="/calendar">
                        <CustomChip icon={<CalendarTodayIcon />} label="Calendar" textcolor={theme.palette.custom?.darkOrange} />
                    </Link>
                    <Link href="/visit">
                        <CustomChip icon={<FmdGoodOutlinedIcon />} label="Plan A Visit" textcolor={theme.palette.custom?.darkGreen} />
                    </Link>
                    <Divider />
                </Box>
                { pathname != "/visit" && pathname != "/calendar" &&
                    <>
                        <Typography variant="font_16" mt="25px">Free Public Tours</Typography>
                        <Typography variant="subtitle3" color="custom.grey" mb="15px">Explore the Museum with the <br />curatorial team every weekend.</Typography>
                        <Typography variant="menuLink">Saturdays</Typography>
                        <Typography variant="subtitle3" color="custom.grey" mb="15px">11:30 am English Tour <br />12:30 pm Hindi/Marathi Tour</Typography>
                        <Typography variant="subtitle3" color="custom.grey" mb="15px">Closed on Wednesdays.</Typography>
                        <Typography variant="subtitle3" color="custom.grey" mb="15px">Open to all. <br /> <i>Museum ticket applicable.</i></Typography>
                    </>
                }

            </LeftSidebar>
        </>
    )
}