"use client"
import { useHeaderHeight } from "@/app/context/HeaderContext";
import { useRef, useEffect, useState } from "react";
import LayoutBar from "../layout/LayoutBar";
import LogoBar from "../layout/LogoBar";
import MenuBar from "../layout/MenuBar";
import { CssBaseline, Box } from "@mui/material";
import React from "react";
import { AppBarCommon } from "@/styles/common.styled";

export function LayoutWithHeader({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLElement | null>(null);
  const { setHeaderHeight } = useHeaderHeight();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight || 0;
      setHeaderHeight(height);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [setHeaderHeight]);

  if (!mounted) return null; // 🔥 prevents hydration mismatch

  return (
    <>
      <CssBaseline />
      <AppBarCommon ref={headerRef}>
        <LayoutBar />
        <LogoBar />
        <MenuBar />
      </AppBarCommon>
      <Box id="back-to-top-anchor" />
      {children}
    </>
  );
}