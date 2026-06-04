"use client"

import { ContentWrapper, DividerUI, HorizontalDivider, LinkUI, MuseumBox } from "@/styles/common.styled"
import { Stack, Typography } from "@mui/material"
import Image from "next/image";
import Gallery from "../common/Gallery";
import { galleriesData } from "@/lib/collectionData";
import { galleriesImages } from "@/lib/galleryimages";

export default function Galleries(){
    
    return(
        <ContentWrapper>
            <Typography variant="title1" color="custom.black">Galleries</Typography>
            <Stack direction="row" alignItems="center" mb="26px" flexWrap="wrap">
                <LinkUI href="#section1">Industrial Arts Gallery </LinkUI><DividerUI orientation="vertical" />
                <LinkUI href="#section2">Kamalnayan Bajaj Mumbai Gallery  </LinkUI><DividerUI orientation="vertical" />
                <LinkUI href="#section3">The Founder&apos;s Gallery </LinkUI> <DividerUI orientation="vertical" />
                <LinkUI href="#section4"> 19th Century Paintings Gallery</LinkUI><DividerUI orientation="vertical" />
                <LinkUI href="#section5"> Origins Of Mumbai Gallery</LinkUI><DividerUI orientation="vertical" />
                <LinkUI href="#section6"> Kamalnayan Bajaj Special Exhibitions Gallery</LinkUI>
            </Stack>
            
            {
                galleriesData.map((data, index:number)=>(
                    <MuseumBox key={index}>
                        <Typography variant="title1" color="custom.black">{data.title}</Typography>
                        <Image src={data.img} height={439} width={895} alt="Museum Plaza" />
                        <Typography variant="subtitle3" color="custom.black" whiteSpace="pre-line">
                            {data.text}
                            {/* {data.linktext && (
                                <LinkUI href={data.linkUrl} target="_blank">{data.linktext}</LinkUI>
                            )} */}
                        </Typography>
                        <HorizontalDivider />
                    </MuseumBox>
                ))
            }
            <Gallery galleryimages={galleriesImages} />
        </ContentWrapper>
    )
}