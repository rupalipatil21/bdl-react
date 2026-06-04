"use client"

import { StyledGridContainer } from "@/styles/common.styled"
import { CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { StyledCard } from "@/styles/exhibition.styled"
import Link from "next/link"
import { useRefreshData } from "@/hooks/useRefreshData"
import { useCallback, useEffect, useState } from "react"
import useCrud from "@/hooks/useCrud"
import { ExhibitionItem, FilterItem } from "@/types/form"

export default function PastExhibition(){
    const { getAll } = useCrud("/api/crud-event")
    const [pastExhibition, setPastExhibition] = useState<ExhibitionItem[]>([])
    console.log(pastExhibition);
    

    const fetchExhibitions = useCallback(async () => {
        return await getAll("exhibitions");
    }, [getAll]);

    const {refresh, data } = useRefreshData(fetchExhibitions) 

    useEffect(()=>{
        if(!data) return
        const pastExhWithId = data
            .filter((item: FilterItem) => item.currentExh === "false" || item.currentExh === null )
            .map((item: FilterItem) => ({id: item._id, ...item}))
        
        setPastExhibition(pastExhWithId)
    }, [data])
    
    useEffect(()=>{
        refresh()
    }, [refresh])

    return(
        <>
        { pastExhibition && pastExhibition.length > 0 && 
            <StyledGridContainer container >
                <Grid size={12} offset={{xs:0, md:1}} alignItems="start" position="relative">
                    <Typography variant="title1" color="custom.black" mt="20px">Past</Typography>
                </Grid>
                <Grid size={{xs: 12, md: 10}} offset={{xs:0, md:1}} padding="0 !important">
                    <StyledGridContainer container>
                        {
                            pastExhibition.map((exhibition: ExhibitionItem)=>(
                                <Grid size={{ xs: 12, sm: 4}} key={exhibition.id}>
                                    <StyledCard >
                                        <Link href={exhibition.upcominglink}>
                                            <CardMedia
                                                component="img"
                                                image={exhibition.image}
                                                alt="Past Exhibition"
                                            />
                                            <CardContent>
                                                <Typography variant="font_18" fontWeight={500} lineHeight={1.1} mb="3px" color="custom.black" whiteSpace="pre-line">{exhibition.title}</Typography>
                                                { Array.isArray(exhibition.subtitles) &&
                                                    exhibition.subtitles.map((subtitle, index: number) => {
                                                       return <Typography variant="subtitle3" lineHeight={1.1} color="custom.black" key={index} >{subtitle} </Typography>
                                                    })
                                                }
                                                <Typography variant="e_date" fontWeight={700} color="custom.black">
                                                    {exhibition.date}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                    </StyledCard>
                                </Grid>
                            ))
                        }
                    </StyledGridContainer>
                </Grid>
            </StyledGridContainer>
        }
        </>
    )
}