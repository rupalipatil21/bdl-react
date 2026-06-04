"use client"

import { HomeLink, CommonContentBox, ClickLink, OverlayBox, UpcomingGrid } from "@/styles/home.styled";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import img2 from "@/public/object-of-the-month.jpg"
import React, { useEffect, useRef, useState } from "react";
import { theme } from "@/styles/theme";
import { FormValues } from "@/types/form";

export default function HomeUpcoming(){
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [ upcomingData, setUpcomingData] = useState<FormValues[]>([])
    const box1Ref = useRef<HTMLDivElement>(null);
    const box2Ref = useRef<HTMLDivElement>(null);
    
    // const [maxHeight, setMaxHeight] = useState<string | number>("auto");
    
    // useEffect(() => {
    //     if (box1Ref.current && box2Ref.current) {
    //     const h1 = box1Ref.current.offsetHeight;
    //     const h2 = box2Ref.current.offsetHeight;
    //     setMaxHeight(Math.max(h1, h2));
    //     }
    // }, []);

    // const [heights, setHeights] = useState({ h1: 0, h2: 0 });
 
    // useEffect(() => {
    //     function updateHeights() {
    //         if (box1Ref.current) {
    //             const h = box1Ref.current.offsetHeight;
        
    //             // split into 60% / 40%
    //             setHeights({
    //             h1: (h * 0.5),
    //             h2: (h * 0.5),
    //             });
    //         }
    //     }
    
    //     updateHeights(); // run on mount

    //     window.addEventListener("resize", updateHeights);
    
    //     return () => window.removeEventListener("resize", updateHeights);
    // }, []);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("/api/getByClause", { 
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    collectionName: "upcomingEvents",
                    condition: {
                        status: "true"
                    }
                })
            })
            const data = await res.json();
            setUpcomingData(data.data)
        }

        fetchData()
    }, [])

    
    return(
        <>
            <Grid container alignItems="stretch">
                <UpcomingGrid size={{xs: 12, md: 4}} ref={box1Ref} >
                    {
                        upcomingData && upcomingData?.map((data: FormValues)=> (
                        <React.Fragment key={data._id}>
                            <CommonContentBox bgcolor="custom.overlay5" height="auto" position="relative" >
                                <Typography variant="body_h3" color="custom.black">UPCOMING EVENTS</Typography>
                                <Link href="/collections">
                                    <Typography variant="body_h2" color="custom.black">{data.title}</Typography>
                                </Link>
                                { Array.isArray(data.subtitles) && data.subtitles.map((subtitle, index: number)=>(
                                    <Typography variant="subTitle1" color="custom.black" key={index}>{subtitle}</Typography>
                                ))}
                                <Typography variant="subTitle1" color="custom.black">{data.date} </Typography>
                                {data.registerlink != "" &&  
                                <Typography variant="body_h3" color="custom.black"> <ClickLink href="#">Register Here </ClickLink> </Typography>}
                            </CommonContentBox>
                            <HomeLink borderColor="overlay5" href="/collections" upcominglink="true">
                                <Image ref={imageRef} src={data.image} alt="exhibition image" width={100} height={100} 
                                    // onLoadingComplete={(img) => {
                                    //     if (window.innerWidth > 993 && leftRef.current) {
                                    //     const h1 = leftRef.current.clientHeight;
                                    //     const h2 = img.clientHeight;
                                    //     setContentHeight(h1 - h2);
                                    //     }
                                    // }} 
                                />
                                <OverlayBox overlaycolor={theme.palette.custom?.overlay1}></OverlayBox>
                            </HomeLink>
                        </React.Fragment>
                    ))}
                    
                </UpcomingGrid>
                <Grid size={{xs: 12, md: 8}} position="relative" display="flex" ref={box2Ref} >
                    <Grid container flex={1}>
                        <Grid size={{xs: 12, md: 8, lg:7}} position="relative">
                            <HomeLink borderColor="blue" href="/collections">
                                <Image src={img2} alt="exhibition image" style={{width: "100%", height: "auto"}} />
                                <OverlayBox overlaycolor={theme.palette.custom?.black}></OverlayBox>
                            </HomeLink>
                        </Grid>
                        <Grid size={{xs: 12, md: 4, lg: 5}} position="relative">
                            <CommonContentBox bgcolor="custom.blue">
                                <Box>
                                    <Typography variant="body_h3" color="custom.black">COLLECTION</Typography>
                                    <Link href="/collections">
                                        <Typography variant="body_h2" color="custom.black">Object of the Month</Typography>
                                        <Typography variant="subTitle1" color="custom.black">Stationary Box; sadeli, mid-nineteenth century, Bombay. </Typography>
                                        <Typography variant="subTitle1" color="custom.black">This hexagonal box was a travel essential for European and Indian elites in the 19th century. Designed with compartments of varying heights, it neatly stored letters, envelopes, bills, and writing supplies, with notched edges for easy access. A fine example of Sadeli, an intricate ivory and wood inlay craft of Persian origin, these boxes were highly sought after at at the international exhibitions as “Bombay Boxes”. </Typography>
                                    </Link>
                                </Box>
                            </CommonContentBox>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}