"use client"
import { MuseumPlazaData } from "@/lib/exploreData";
import { ContentBox, DividerUI, HorizontalDivider, LinkUI, MuseumBox } from "@/styles/common.styled";
import { Typography, Stack } from "@mui/material";
import Image from "next/image";
import Gallery from "../common/Gallery";
import { museumPlazazGalleryImages } from "@/lib/galleryimages";

export default function MuseumPlaza(){
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Museum Restoration</Typography>
                <Stack direction="row" alignItems="center" mb="10px" flexWrap="wrap">
                    <LinkUI href="#section2">Special Project Space </LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section3">Education Centre  </LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section4">Museum Shop </LinkUI> <DividerUI orientation="vertical" />
                    <LinkUI href="#section5">Museum Cafe</LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section6">East Garden</LinkUI>
                </Stack>
                
                {
                    MuseumPlazaData.map((data, index:number)=>(
                        <MuseumBox key={index}>
                            <Typography variant="title1" color="custom.black">{data.title}</Typography>
                            <Image src={data.img} height={439} width={895} alt="Museum Plaza" />
                            <Typography variant="subtitle3" color="custom.black" whiteSpace="pre-line">
                                {data.text}
                                {data.linktext && (
                                    <LinkUI href={data.linkUrl} target="_blank">{data.linktext}</LinkUI>
                                )}
                            </Typography>
                            <HorizontalDivider />
                        </MuseumBox>
                    ))
                }
                <Gallery galleryimages={museumPlazazGalleryImages} />
            </ContentBox>
        </>
    )
}