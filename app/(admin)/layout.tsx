"use client";

import { useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import { DrawerProvider } from "../context/DrawerContext";
import Header from "./layout/Header";
import SideMenu from "./layout/SideMenu";
import MainContent from "./layout/MainContentWrapper";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("page--job-list");
    document.body.style.backgroundColor = "#f4f4f4";

    return () => {
      document.body.classList.remove("page--job-list");
      document.body.style.backgroundColor = "";
    };
  }, []);


  return (
    <Box>
      <DrawerProvider>
        <Header />
        <SideMenu />
        <CssBaseline />
        <MainContent >
            {children}
        </MainContent>
      </DrawerProvider>
    </Box>
  );
}
