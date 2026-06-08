"use client"

import Box from '@mui/material/Box';
import MenuContent from '../components/MenuContent';
import { Drawer, DrawerHeaderStyled, MenuWrapper } from '@/styles/admin.styled';
import logo from "@/public/bdl-logo.svg"
import Image from 'next/image';
import { useDrawer } from '@/app/context/DrawerContext';
import { Typography } from '@mui/material';

export default function SideMenu() {
    const { drawerWidth, isMobile, setMobileOpen, mobileOpen } = useDrawer()
  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
        <Drawer
            variant={isMobile ? "temporary" : "permanent"}
            open={isMobile ? mobileOpen : true}
            onClose={() => setMobileOpen?.(false)}
            ModalProps={{ keepMounted: true }}
            drawerwidth={drawerWidth}
        >
            <DrawerHeaderStyled drawerwidth={drawerWidth}>
                <Image src={logo} width={50} alt="BDL logo" /> 
                <Typography variant='tagLine' letterSpacing="1.5px">DR. BHAU DAJI LAD <br /> MUMBAI CITY MUSEUM </Typography>
            </DrawerHeaderStyled>
            <MenuWrapper drawerwidth={drawerWidth}>
                <MenuContent />
            </MenuWrapper>
        </Drawer>
    </Box>
  );
}