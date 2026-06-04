"use client"
import { BottomBar, QuickLink } from "@/styles/common.styled";
import { Container, Divider, Grid, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useHideSection from "@/hooks/useHideHeader";
import { FooterLinks, SocialMedia } from "@/lib/common.constants";
import React from "react";

export default function BottomFixBar(){
    const showSection = useHideSection()
    if(!showSection) return null;
    return(
        <BottomBar>
            <Container disableGutters>
                <Grid container>
                    <Grid size={{ lg: 4, md: 6, xs: 7 }}>
                        <Stack direction="row" alignItems={"center"} height={15.71}>
                            { FooterLinks.map((link, index) => (
                                    <React.Fragment key={index}>
                                        <QuickLink href={link.src}>{link.name}</QuickLink> <Divider orientation="vertical" />
                                    </React.Fragment>
                                ))}
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 8, md: 6, xs: 5 }}>
                        <Stack direction="row" justifyContent="end" gap="15px" height={20}>
                            { SocialMedia.map((media, index) => (
                                <React.Fragment key={index}>
                                    <Link href={media.src}><Image src={media.imgsrc} width={media.width} alt={media.alt} height={17} /></Link>
                                </React.Fragment>
                            )) }
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </BottomBar>
    )
}