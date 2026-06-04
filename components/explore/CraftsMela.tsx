"use client"

import { ContentBox, DescriptionBox, HorizontalDivider, ImageUI, LinkUI } from "@/styles/common.styled";
import { Grid, Link, Typography } from "@mui/material";
import useCrud from "@/hooks/useCrud";
import React, { useCallback, useEffect } from "react";
import { useRefreshData } from "@/hooks/useRefreshData";
import CraftsWorkshop from "./CraftsWorkshop";
import CraftsTalk from "./CraftsTalk";
import CraftsPerformances from "./CraftsPerformances";
import { FormValues, ProgramItem } from "@/types/form";

export default function CraftsMela() {
    const { getAll } = useCrud("/api/crud-event")
    const fetchData = useCallback(async () => {
        return await getAll("explore");
    }, [getAll]);
    const {refresh, data } = useRefreshData(fetchData)

    useEffect(()=>{
        refresh()
    }, [refresh])

    const craftData = data?.filter(
        (item: ProgramItem) => {
            return item.program === "crafts_mela"
        }
    ) || [];
    return (
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Film Programmes</Typography>
                <Typography variant="subtitle3" color="custom.black">
                    The Museum has an active film programme which includes regular public screenings of art videos, documentaries, art house movies and much more. Films are screened at the state-of-the-art Education Centre.
                </Typography>
            </ContentBox>
            <HorizontalDivider />
            { craftData && craftData.length > 0 && 
            <><Typography variant="title1" color="custom.black">Past Events</Typography>
            <HorizontalDivider /></>
            }
            {
                craftData.map((data: FormValues, index: number)=>(
                    <React.Fragment key={index}>
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <Link href="#">
                                    <ImageUI src={data.image} alt="Article Image" width="270" height="200" />
                                </Link>
                            </Grid>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Typography variant="subtitle3" mb={1}><b>{data.title}</b></Typography>
                                <Typography variant="subtitle3" mb={1}>{data.date}</Typography>
                                    { data.subtitles?.map((subItem:FormValues, index: number) => (
                                        <Typography variant="subtitle3" mb={1} key={index}>
                                                <>{subItem}<br /></>
                                        </Typography>
                                    ))}
                                <DescriptionBox fontSize={14} color="custom.black" dangerouslySetInnerHTML={{ __html: data.descriptionHTML }} ></DescriptionBox>
                                { data.registerlink && 
                                    <LinkUI href={data.registerlink} target="_blank">Register Here</LinkUI>
                                }
                            </Grid>
                        </Grid>
                        <HorizontalDivider />
                    </React.Fragment>
                ))
            }

            <CraftsWorkshop />
            <CraftsTalk />
            <CraftsPerformances />

        </>
    )
}