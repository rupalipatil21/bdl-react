"use client"
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/upcoming/upcoming01.jpg"
import { ClickLink, CommonContentBox, HomeLink } from "@/styles/home.styled";

export default function HomeExhibition(){
    return(
        <>
            <Grid container >
                <Grid size={{xs: 12, md: 8}} position="relative">
                    <HomeLink exoverlay="true" borderColor="orange" href="/collections">
                        <Image src={img1} alt="exhibition image" style={{width: "100%", height: "100%"}} />
                    </HomeLink>
                </Grid>
                <Grid size={{xs: 12, md: 4}} position="relative">
                    <CommonContentBox bgcolor="custom.orange">
                        <Box>
                            <Link href="/collections">
                                <Typography variant="body_h4" color="custom.black">Now available online!</Typography>
                                <Typography variant="body_h2" color="custom.black">&apos;Mumbai - A City Through Objects,  <br />  101 Stories from the Dr Bhau Daji Lad Museum&apos;</Typography>
                            </Link>
                            <Typography variant="subTitle1" color="custom.black"><Typography >Edited by Tasneem Zakaria Mehta <br /></Typography> Co-published with HarperDesign </Typography>
                            <Typography variant="body_h3" color="custom.black"> <ClickLink href="#">Click here </ClickLink> to buy your copy and support the Museum!</Typography>
                        </Box>
                    </CommonContentBox>
                </Grid>
            </Grid>
        </>
    )
}