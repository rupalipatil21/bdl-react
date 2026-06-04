"use client"
import useHideSection from "@/hooks/useHideHeader";
import { LanguageBox, LanguageDivider, TicketLink } from "@/styles/common.styled";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function LayoutBar(){
    const showSection = useHideSection()
    if(!showSection) return null;
    return(
        <LanguageBox textAlign="right">
            <TicketLink href="https://bdlmuseum.mcgm.gov.in/">Book Tickets</TicketLink>
            <Typography variant="font_12" mr="13px">LANGUAGE</Typography>
            <Typography variant="font_12" className="active"><Link href="#">EN</Link></Typography>
            <LanguageDivider orientation="vertical" variant="middle" flexItem />
            <Typography variant="font_12" ><Link href="#">MR</Link></Typography>
        </LanguageBox>
    )
}