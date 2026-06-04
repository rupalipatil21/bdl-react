'use client';

import { theme } from "@/styles/theme";
import { useMediaQuery } from "@mui/material";
import { createContext, useContext, useState } from "react";

type DrawerContextType = {
    isDrawerOpen: boolean;
    drawerWidth: number;    
    isMobile: boolean;
    setDrawerWidth?: (width: number) => void;
    setMobileOpen?: (open: boolean) => void;
    toggleDrawer?: () => void;
    mobileOpen: boolean;
};

const DrawerContext = createContext<DrawerContextType | null>(null)

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
    const [mobileOpen, setMobileOpen] = useState(false);
   
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = () => {
        if (isMobile) {
            setMobileOpen(prev => !prev);
        } else {
            setIsDrawerOpen(prev => !prev);
        }
    };
    const drawerWidth = isDrawerOpen ? 72 : isMobile ? 240 : 240;
    return(
        <DrawerContext.Provider value={{ isDrawerOpen, drawerWidth, toggleDrawer, isMobile, setMobileOpen, mobileOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}

export function useDrawer() {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerProvider');
    }
    return context;
}