"use client"
import { CommonContentBox, HomeLink, OverlayBox } from "@/styles/home.styled";
import { theme } from "@/styles/theme";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import musuem from "@/public/Museum-expansion-homepage.jpg"
import videorestore from "@/public/video-restore.jpg"
import play from "@/public/play.png"
import { useRef, useState, useEffect } from "react";

export default function MuseumHome(){

     const box1Ref = useRef<HTMLDivElement>(null);
      const box2Ref = useRef<HTMLDivElement>(null);
     
      const [maxHeight, setMaxHeight] = useState<string | number>("auto");
     
      useEffect(() => {
        if (box1Ref.current && box2Ref.current) {
          const h1 = box1Ref.current.offsetHeight;
          const h2 = box2Ref.current.offsetHeight;
          setMaxHeight(Math.max(h1, h2));
        }
      }, []);
    
      const [heights, setHeights] = useState({ h1: 0, h2: 0 });
     
      useEffect(() => {
        function updateHeights() {
          if (box1Ref.current) {
            const h = box1Ref.current.offsetHeight;
     
            // split into 60% / 40%
            setHeights({
              h1: (h * 0.4),
              h2: (h * 0.6),
            });
          }
        }
     
        updateHeights(); // run on mount
        window.addEventListener("resize", updateHeights);
     
        return () => window.removeEventListener("resize", updateHeights);
      }, []);
    return(
        <>
            <Grid container mb="30px">
                <Grid size={{xs: 12, md: 8}} position="relative" display="flex"  >
                    <Grid container flex={1}>
                        <Grid size={{xs: 12, md: 8, lg:7}} position="relative" ref={box1Ref}>
                            <HomeLink borderColor="overlay5" href="/about/museum-expansion" >
                                <Image src={musuem} alt="exhibition image" style={{width: "100%", height: "auto"}} />
                                <OverlayBox overlaycolor={theme.palette.custom?.overlay6}>
                                    <Box position="relative" >
                                        <Typography variant="body_h2" color="custom.white">Museum Expansion</Typography>
                                        <Typography variant="subTitle1" color="custom.white"> The Museum is in the process of creating a dynamic new identity <br /> for itself as a cultural hub in Mumbai. We are excited to <br /> welcome a new building, which will be an iconic addition to the <br /> architectural and cultural heritage of the city. </Typography>
                                    </Box>
                                </OverlayBox>
                            </HomeLink>
                        </Grid>
                        <Grid size={{xs: 12, md: 4, lg: 5}} position="relative">
                            <CommonContentBox bgcolor="custom.overlay5">
                                <Box>
                                    <Link href="/about/museum-expansion">
                                        <Typography variant="body_h3" color="custom.black">MUSEUM OF THE FUTURE</Typography>
                                        <Typography variant="body_h2" color="custom.black">Museum <br /> Expansion</Typography>
                                    </Link>
                                </Box>
                            </CommonContentBox>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{xs: 12, md: 4}} position="relative" height={maxHeight} ref={box1Ref}>
                    <CommonContentBox videobox="true" bgcolor="custom.lightGreen" position="relative" height={heights.h1} >
                        <Link href="/collections">
                            <Typography variant="body_h3" color="custom.black">VIDEO</Typography>
                            <Typography variant="body_h2" color="custom.black">Restoration & Revitalisation</Typography>
                        </Link>
                    </CommonContentBox>
                    <HomeLink borderColor="lightGreen" href="/collections" videoarrow="true" height={heights.h2}>
                        <Image src={videorestore} alt="exhibition image" style={{width: "100%", height: "auto"}} />
                        <OverlayBox overlaycolor={theme.palette.custom?.overlay7} caloverlay="true">
                            <Box position="relative" >
                                <Image src={play} alt="play icon" />
                            </Box>
                        </OverlayBox>
                    </HomeLink>
                </Grid>
            </Grid>
        </>
    )
}