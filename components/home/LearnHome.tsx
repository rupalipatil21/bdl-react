"use client"

import { CommonContentBox, ClickLink, HomeLink, OverlayBox } from "@/styles/home.styled";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import learn from "@/public/learn.jpg"
import calendar from "@/public/calendar-homepage.jpg"
import { theme } from "@/styles/theme";
import { CURRENT_MONTH_YEAR } from "@/lib/constants"

export default function LearnHome(){
    return(
        <>
        <Grid container >
            <Grid size={{xs: 12, md: 6}} position="relative">
                <Grid container flex={1} height="100%">
                    <Grid size={{xs: 12, md:7}} position="relative">
                        <HomeLink href="/learn" borderColor="lightGreen">
                            <Image src={learn} alt="exhibition image" style={{width: "100%", height: "auto"}} />
                            <OverlayBox overlaycolor={theme.palette.custom?.overlay2}>
                                <Box position="relative" >
                                    <Typography variant="body_h2" color="custom.white">Workshops For Schools</Typography>
                                    <Typography variant="subTitle1" color="custom.white">Engage with the museum collection <br />  and contemporary exhibitions critically <br />  and creatively through interpretative <br />  gallery visits and workshops! </Typography>
                                    <Typography variant="subTitle1" color="custom.white">For all age groups. </Typography>
                                </Box>
                            </OverlayBox>
                        </HomeLink>
                    </Grid>
                    <Grid size={{xs: 12, md: 5}} position="relative">
                        <CommonContentBox bgcolor="custom.lightGreen" height={"100%"} position="relative" >
                            <Box>
                                <Link href="/learn">
                                    <Typography variant="body_h3" color="custom.black">LEARN</Typography>
                                    <Typography variant="body_h2" color="custom.black">Workshops for schools</Typography>
                                    <Typography variant="subTitle1" color="custom.black">Available on request </Typography>
                                </Link>
                                <Typography variant="body_h3" color="custom.black"> <ClickLink href="/learn">Book Now </ClickLink> </Typography>
                            </Box>
                        </CommonContentBox>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={{xs: 12, md: 6}} position="relative" display="flex">
                <Grid container flex={1}>
                    <Grid size={{xs: 12, md: 4}} position="relative">
                        <HomeLink borderColor="overlay3" href="/calendar">
                            <Image src={calendar} alt="Calendar image" style={{width: "100%", height: "auto"}} />
                            <OverlayBox overlaycolor={theme.palette.custom?.overlay1} caloverlay="true">
                                <Box position="relative" >
                                    <Typography variant="body_h2" color="custom.white">Book Now</Typography>
                                </Box>
                            </OverlayBox>
                        </HomeLink>
                    </Grid>
                    <Grid size={{xs: 12, md: 8}} position="relative">
                        <CommonContentBox bgcolor="custom.overlay3">
                            <Box>
                                <Link href="/calendar">
                                    <Typography variant="body_h3" color="custom.black">CALENDAR</Typography>
                                    <Typography variant="body_h2" color="custom.black">Events, exhibits, workshops, <br />talks at the museum</Typography>
                                    <Typography variant="subTitle1" color="custom.black">{CURRENT_MONTH_YEAR}</Typography>
                                </Link>
                            </Box>
                        </CommonContentBox>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}