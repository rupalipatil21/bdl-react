"use client"
import { CommonContentBox, HomeLink, OverlayBox, VirtualGrid } from "@/styles/home.styled";
import { Box, Grid, Link, Typography } from "@mui/material";
import video from "@/public/video.jpg"
import { theme } from "@/styles/theme";
import Image from "next/image";
import play from "@/public/play.png"

export default function VirtualTour(){
    return(
        <>
            <VirtualGrid container >
                <Grid size={{xs: 12, md: 3}} position="relative">
                    <CommonContentBox bgcolor="custom.overlay4">
                        <Box>
                            <Link href="/explore/google-arts-project">
                                <Typography variant="body_h3" color="custom.black">VIRTUAL TOUR</Typography>
                                <Typography variant="body_h2" color="custom.black">Take a Virtual Tour</Typography>
                            </Link>
                        </Box>
                    </CommonContentBox>
                </Grid>
                <Grid size={{xs: 12, md: 9}} position="relative">
                    <HomeLink virtualarrow="true" borderColor="overlay4" href="/calendar">
                        <Image src={video} alt="video image" style={{width: "100%", height: "auto"}} />
                        <OverlayBox overlaycolor={theme.palette.custom?.overlay1} caloverlay="true">
                            <Box position="relative" >
                                <Image src={play} alt="play icon" />
                            </Box>
                        </OverlayBox>
                    </HomeLink>
                </Grid>
            </VirtualGrid>
        </>
    )
}