"use client"
import { WorkShop } from "@/lib/exploreData"
import { HorizontalDivider, ImageUI, LinkUI } from "@/styles/common.styled"
import { Grid, Link, Typography } from "@mui/material"
import React from "react"

export default function CraftsWorkshop() {
    return(
        <>
            <Typography variant="title1" color="custom.black">Workshops</Typography>
            <HorizontalDivider />
            {
                WorkShop.map((data, index)=>(
                    <React.Fragment key={index}>
                        <Grid container spacing={4} >
                            <Grid size={{ xs: 12, md: 5 }}>
                                <Link href="#">
                                    <ImageUI src={data.img} alt="Article Image" width="270" height="200" />
                                </Link>
                            </Grid>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Typography variant="subtitle3" mb={1}><b>{data.title}</b></Typography>
                                { data.subtitles?.map((subItem, index: number) => (
                                    <Typography variant="subtitle3" mb={1} key={index} whiteSpace="pre-line">
                                            <>{subItem}<br /></>
                                    </Typography>
                                ))}
                                {data.registerlink && <LinkUI href={data.registerlink} target="_blank">Register Here</LinkUI>}
                            </Grid>
                        </Grid>
                        <HorizontalDivider />
                    </React.Fragment>
                ))
            }
        </>
    )
}