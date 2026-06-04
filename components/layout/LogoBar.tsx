"use client"
import Image from "next/image";
import logo from "@/public/bdl-logo.svg"
import logoText from "@/public/logo-bdl-new.svg"
import { Box, Link, Typography } from "@mui/material";
import { LogoBox } from "@/styles/common.styled";
import useHideSection from "@/hooks/useHideHeader";

export default function LogoBar(){
    const showSection = useHideSection()
    if(!showSection) return null;

    return(
        <LogoBox textAlign="center">
            <Link>
                <Image src={logo} width={110} alt="BDL logo" />
                <Image src={logoText} width={685} alt="BDL logo" />
                <Box textAlign={{xs: "center", md: "left"}} ml={{ xs: 0, sm: "20px"}} display={{ lg: "none" }}>
                    <Typography variant="logoText" color="custom.black">DR. BHAU DAJI LAD MUMBAI CITY MUSEUM </Typography>
                    <Typography variant="tagLine" color="custom.black">Former Victoria and Albert Museum, Bombay</Typography>
                </Box>
            </Link>
        </LogoBox>
    )
}