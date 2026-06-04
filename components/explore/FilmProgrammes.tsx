"use client"

import { ContentBox, HorizontalDivider, ImageUI } from "@/styles/common.styled";
import { Grid, Link, Typography } from "@mui/material";
import useCrud from "@/hooks/useCrud";
import React, { useCallback, useEffect } from "react";
import { useRefreshData } from "@/hooks/useRefreshData";
import { FormValues, ProgramItem } from "@/types/form";

export default function FilmProgrammes() {
    const { getAll } = useCrud("/api/crud-event")
    const fetchData = useCallback(async () => {
        return await getAll("explore");
    }, [getAll]);
    const {refresh, data } = useRefreshData(fetchData)

    useEffect(()=>{
        refresh()
    }, [refresh])

    const filmData = data?.filter(
        (item: ProgramItem) => {
            return item.program === "film"
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
            { filmData && filmData.length > 0 && 
            <><Typography variant="title1" color="custom.black">Past Events</Typography>
            <HorizontalDivider /></>}

            {
                filmData.map((data: FormValues, index: number)=>(
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
                                    { data.subtitles?.map((subItem, index: number) => (
                                        <Typography variant="subtitle3" mb={1} key={index}>
                                                <>{subItem}<br /></>
                                        </Typography>
                                    ))}
                            </Grid>
                        </Grid>
                        <HorizontalDivider />
                    </React.Fragment>
                ))
            }

        </>
    )
}