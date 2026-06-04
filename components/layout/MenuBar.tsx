"use client"

import { MegaMenuLink, MenuBox, MobList, Nav, NavButton, NavToggle, StyledContainer, StyledDrawer, StyledPopover, TicketLink } from "@/styles/common.styled"
import { Box, Divider, IconButton, Stack } from "@mui/material"
import React, { useRef } from "react";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'
import { Menus } from "@/lib/constants";
import Image from "next/image";
import banner1 from "@/public/menu-banner/museum-statement-bannernew.jpg"
import { usePathname, useRouter } from "next/navigation";
import useHideSection from "@/hooks/useHideHeader";
import { MenuItem } from "@/types/form";

export default function MenuBar(){
    const router = useRouter()
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
    const [showImage, setShowImage] = useState(banner1)
    const timeoutId = useRef<NodeJS.Timeout | null>(null);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleOpen = (event: React.MouseEvent<HTMLElement>, menu: MenuItem) => {        
        if (timeoutId.current) clearTimeout(timeoutId.current);
        setAnchorEl(event.currentTarget);
        setSelectedMenu(menu.id ?? null);
        setShowImage(menu.defaultImg)
    };

    const handleClose = () => {
        timeoutId.current = setTimeout(() => {
            setAnchorEl(null);
            setSelectedMenu(null);
        }, 0);
    };

    const handleMenuEnter = () => {
        if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleHoverMenu = (event: React.MouseEvent<HTMLElement>, menu: MenuItem) => {        
        if (timeoutId.current) clearTimeout(timeoutId.current);
        setShowImage(menu.defaultImg)
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <MobList>
                {Menus.map((menu,index) => (
                <NavButton
                    key={index}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handleOpen(e, menu)}
                    onMouseLeave={handleClose}
                >
                    {menu.name}
                </NavButton>
                ))}
                <Divider />
                <Stack direction="row" flexWrap="wrap" pt="15px">
                    <NavButton props="true">Calendar</NavButton>
                    <NavButton props="true">Contact</NavButton>
                    <NavButton props="true">Careers</NavButton>
                    <NavButton props="true">Subscribe</NavButton>
                    <NavButton props="true">friends</NavButton>
                </Stack>
                <TicketLink display="inline-block" href="#">Book Tickets</TicketLink>
            </MobList>
        </Box>
    );

    const open = Boolean(anchorEl);
    const showSection = useHideSection()
    if(!showSection) return null;
    
    return(
        <MenuBox>
            <NavToggle >
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                >
                {mobileOpen ? <ClearIcon /> : <MenuIcon/>}
                </IconButton>
            </NavToggle>

            <Nav>
                {Menus.map((menu,index) => (
                    <React.Fragment key={index}>
                        <NavButton
                            key={index}
                            aria-owns={open && selectedMenu === menu.id ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={(e) => handleOpen(e, menu)}
                            onMouseLeave={handleClose}
                            onClick={() => router.push(menu.url)}
                            active={menu.url === pathname ? "true" : undefined}
                        >
                            {menu.name}
                        </NavButton>

                        {menu.hasSubMenu && (
                            <StyledPopover
                                id="mouse-over-popover"
                                open={open && selectedMenu === menu.id}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                onClose={handleClose}
                                onMouseEnter={handleMenuEnter}
                                onMouseLeave={handleMenuClose}
                                disableRestoreFocus
                                disableScrollLock
                                transitionDuration={0} 
                            >
                                <StyledContainer pt={"0 !important"}>
                                    <Stack direction="row">
                                    <Stack >
                                        {menu.subMenu?.firstColumn?.map((item, index) => (
                                        <MegaMenuLink
                                            key={index}
                                            variant="menuLink"
                                            onMouseEnter={() => setShowImage(item.img)}
                                            onMouseLeave={(e) => handleHoverMenu(e, menu)}
                                            onClick={() => 
                                            { 
                                                handleClose()
                                                router.push(item.url)
                                            }}
                                        >
                                            {item.name}
                                        </MegaMenuLink>
                                        ))}
                                    </Stack>
                                    <Stack pl="80px">
                                        {menu.subMenu?.secondColumn?.map((item, index) => (
                                        <MegaMenuLink
                                            key={index}
                                            variant="menuLink"
                                            onMouseEnter={() => setShowImage(item.img)}
                                            onMouseLeave={(e) => handleHoverMenu(e, menu)}
                                            onClick={() => 
                                            { 
                                                handleClose()
                                                router.push(item.url)
                                            }}
                                        >
                                            {item.name}
                                        </MegaMenuLink>
                                        ))}
                                    </Stack>
                                    <Stack pl="80px">
                                        <Image src={showImage} alt="Banner"  />
                                    </Stack>
                                    </Stack>
                                </StyledContainer>
                            </StyledPopover>
                        )}
                    </React.Fragment>
                ))}
               
            </Nav>
                        
            <StyledDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                anchor='top'
            >
                {drawer}
            </StyledDrawer>
            
        </MenuBox>
    )
}