"use client"
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import lab from "@/public/Conservation-Lab.jpg"
import friendsofmuseum from "@/public/friends-of-the-museum.jpg"
import arthistory from "@/public/art-history.jpg"
import digital from "@/public/digital.jpg"
import Link from "next/link";
import { PanelBox } from "@/styles/home.styled";
import { theme } from "@/styles/theme";

export default function FourBlocks(){
    return(
        <>
            <Grid container margin={{xs: 0, md: "0px 0 30px"}} gap="0px">
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Link href="/explore/conlab">
                        <PanelBox overlaycolor={theme.palette.custom?.lightGreen}>
                            <Image src={lab} alt="Conservation Lab" />
                            <Typography variant="font_30">Conservation <br /> Lab</Typography>
                        </PanelBox>
                    </Link>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Link href="/friends-of-museum">
                        <PanelBox overlaycolor={theme.palette.custom?.overlay3}>
                            <Image src={friendsofmuseum} alt="Conservation Lab" />
                            <Typography variant="font_30">Friends <br /> of the  <br /> Museum</Typography>
                        </PanelBox>
                    </Link>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Link href="/course">
                        <PanelBox overlaycolor={theme.palette.custom?.overlay4}>
                            <Image src={arthistory} alt="Conservation Lab" />
                            <Typography variant="font_30">Study  <br /> Art  <br />  History</Typography>
                        </PanelBox>
                    </Link>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Link href="/collections">
                        <PanelBox overlaycolor={theme.palette.custom?.blue}>
                            <Image src={digital} alt="Conservation Lab" />
                            <Typography variant="font_30">Digital <br />  Archive</Typography>
                        </PanelBox>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}