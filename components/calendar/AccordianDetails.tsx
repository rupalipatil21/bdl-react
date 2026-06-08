"use client"

import useCrud from "@/hooks/useCrud"
import { useRefreshData } from "@/hooks/useRefreshData"
import { AccordianDetailsProps, FilterItem, FormValues } from "@/types/form"
import { AccordionDetails, Divider, Grid, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import React, { useCallback, useEffect } from "react"

export default function AccordianDetails({category}: AccordianDetailsProps) {
    const { getAll } = useCrud("/api/crud-event")
    const fetchData = useCallback(async () => {
        return await getAll("calendar");
    }, [getAll]);

    const {refresh, data } = useRefreshData(fetchData)
    
    useEffect(()=>{
        refresh()
    }, [refresh])
    
    const filteredData = data?.filter(
        (item: FilterItem) => {
            return item.category === category
        }
    ) || [];

    return (
        <AccordionDetails>
            { data &&
                filteredData.map((item:FormValues, index: number) => {
                    return (
                    <>
                    <Grid container key={index} spacing={4}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Link href="#">
                                <Image src={item.image} alt="Article Image" width="270" height="200" />
                            </Link>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="subTitle1">{item.date}</Typography>
                            <Link href="#">
                                <Typography variant="body_h2">{item.title}</Typography>
                            </Link>
                            <Typography variant="subTitle1">
                                { item.subtitles?.map((subItem, index: number) => (
                                    <React.Fragment key={index}><span key={subItem}>{subItem}</span><br /></React.Fragment>
                                ))}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider />
                    </>
                    )
                })
        
            }
            
        </AccordionDetails>
    )
}