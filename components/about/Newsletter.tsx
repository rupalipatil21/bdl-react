"use client"
import { HorizontalDivider, LinkUI } from "@/styles/common.styled";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { newsletters } from "@/lib/constants";
import React from "react";

export default function Newsletter(){
    return(
        <Box padding={{xs: "20px 25px", lg: 0}}>
            <Typography variant="title1" color="custom.black">Subscribe</Typography>
            <Typography variant="subtitle3" color="custom.black" mb="46px">
                Subscribe to the Museum&apos;s mailing list for updates.
                <LinkUI href="https://forms.gle/j7uUpRnQGXskfFDRA"> Click Here</LinkUI>
            </Typography>
            <HorizontalDivider />
            {
                newsletters.map((newsletter, index) =>(
                    <React.Fragment key={index}>
                        <Link href={newsletter.link} target="_blank">
                            <Grid container spacing="30px" alignItems="center">
                            
                                <Grid size={{xs: 12, md: 5}}>
                                    <Image src={newsletter.img} alt={newsletter.alt} width="200" height="200" style={{ width: "100% !important", height: "auto !important"}} />
                                </Grid>
                                <Grid size={{xs: 12, md: 7}}>
                                    <Typography variant="subtitle3" color="custom.black" mb={{xs:0, md:"46px"}}>{newsletter.text}</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                        <HorizontalDivider />
                    </React.Fragment>
                ))
            }
        </Box>
    )
}