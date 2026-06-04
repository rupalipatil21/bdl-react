"use client"

import { StyledGridContainer } from "@/styles/common.styled"
import { CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { GridUI, StyledCard } from "@/styles/exhibition.styled"
import Link from "next/link"
import { useHeaderHeight } from "@/app/context/HeaderContext"
import { useCallback, useEffect, useState } from "react"
import { useRefreshData } from "@/hooks/useRefreshData"
import useCrud from "@/hooks/useCrud"
import { ExhibitionItem, FilterItem } from "@/types/form"

export default function CurrentExhibition(){
    const headerHeight = useHeaderHeight()
    const { getAll } = useCrud("/api/crud-event")
    const [currentExhibition, setCurrentExhibition] = useState<ExhibitionItem[]>([])

    const fetchExhibitions = useCallback(async () => {
        return await getAll("exhibitions");
    }, [getAll]);

    const {refresh, data } = useRefreshData(fetchExhibitions) 

    useEffect(()=>{
        if(!data) return

        const currentExhWithId = data
            .filter((item:FilterItem) => item.currentExh === "true")
            .map((item: FilterItem) => ({ id: item._id, ...item}))

        setCurrentExhibition(currentExhWithId)
    }, [data])
    
    useEffect(()=>{
        refresh()
    }, [refresh])

    return(
        <>
        { currentExhibition && currentExhibition.length > 0 && 
            <StyledGridContainer container >
                <GridUI size={12} offset={{xs:0, md:1}} id="current" headerheight={headerHeight.headerHeight}>
                    <Typography variant="title1" color="custom.black" mt="20px">Current</Typography>
                </GridUI>
                { currentExhibition.map((exhibition) => (
                <Grid offset={{xs:0, md:1}} size={{ xs: 12, sm: 3.3}} key={exhibition._id}>
                    <StyledCard >
                        
                            <Link href="/exhibitions/2025/Invention-of-Light?current=true">
                                <CardMedia
                                    component="img"
                                    image={exhibition.image}
                                    alt="Current Exhibition"
                                />
                                <CardContent>
                                    <Typography variant="font_18" fontWeight={500} mb="3px" color="custom.black">
                                        {exhibition.title}
                                    </Typography>
                                    { exhibition.subtitles.map((subtitle) => (
                                        <Typography variant="subtitle3" color="custom.black" key={exhibition._id}>
                                            {subtitle}
                                        </Typography>
                                    ))}
                                    <Typography variant="e_date" fontWeight={700} color="custom.black">
                                        {exhibition.date}
                                    </Typography>
                                </CardContent>
                            </Link>
                    </StyledCard>
                </Grid>
                ))}
            </StyledGridContainer>
        }
        </>
    )
}