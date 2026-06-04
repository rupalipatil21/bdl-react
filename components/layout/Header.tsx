"use client"

import { CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import LayoutBar from "./LayoutBar";
import LogoBar from "./LogoBar";
import MenuBar from "./MenuBar";
import { AppBarCommon } from "@/styles/common.styled";
import { HeaderProps } from "@/types/form";

export default function Header({headerRef}:HeaderProps){
    return(
        <React.Fragment>
            <CssBaseline />
                <AppBarCommon ref={headerRef} >
                    <LayoutBar />
                    <LogoBar />
                    <MenuBar />
                </AppBarCommon>
            <Toolbar />
        </React.Fragment>
    )
}