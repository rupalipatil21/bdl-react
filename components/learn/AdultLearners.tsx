"use client"

import { ContentBox, DescriptionBox, HorizontalDivider, ImageUI, LinkUI } from "@/styles/common.styled"
import { Box, Grid, Typography } from "@mui/material"
import Gallery from "../common/Gallery";
import { adultLearnerImages } from "@/lib/galleryimages";
import React from "react";
import { adultPastSessions } from "@/lib/adultPastSessions";

export default function AdultLearners(){
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Adult Learners</Typography>

                <Typography variant="subtitle3" color="custom.black">
                    Once a month, the Museum invites young, talented professionals to lead intensive workshops for adult audiences. Participants benefit from their expertise, experiment with a new art form, develop new skills and leave here inspired!
                </Typography>

                <Typography variant="title1" color="custom.black" mb="10px" mt="26px">Past Sessions</Typography>

                {adultPastSessions.map((pastsession, index) => {
                    const splitedtext = pastsession.subtitle.split("\n");
                    return(
                    <Box key={index}>
                        <HorizontalDivider />
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <ImageUI src={pastsession.img} alt="Article Image" width="458" height="277" />
                            </Grid>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>{pastsession.title}</b></Typography>
                                {splitedtext.map((text, index) => (
                                    <DescriptionBox fontSize={14} color="cusotm.black" mb="10px" key={index} whiteSpace="pre-line" dangerouslySetInnerHTML={{ __html: text }}></DescriptionBox>
                                ))}
                                {pastsession.subtitle2 && 
                                    <DescriptionBox fontSize={14} color="custom.black" dangerouslySetInnerHTML={{ __html: pastsession?.subtitle2 }} whiteSpace="pre-line" mb="10px" />
                                }
                                {pastsession.registerLink && 
                                    <LinkUI href={pastsession.registerLink} target="_blank">Register Here</LinkUI>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                    )})}
                

                <Typography variant="body_h2" color="custom.black" mb="10px">Image Gallery</Typography>
                <Gallery galleryimages={adultLearnerImages} />
            </ContentBox>
        </>
    )
}