"use client"

import Carousel from "@/components/common/Carousel"
import { collectionCarouselImages } from "@/lib/carouselImages";
import { CollectionContainer, DotBox, LinkUI, StyledContainer } from "@/styles/common.styled";
import { Grid, List, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { collectionStories } from "@/lib/collectionData";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import FourBlocks from "@/components/common/FourBlocks";

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots:React.ReactNode) => (
        <DotBox>
            <List>
            {dots}
            </List>
        </DotBox>
        ),
    };
    return(
        <>
            <Carousel settings={settings} images={collectionCarouselImages} homeslider={true} />
            <CollectionContainer> 
                <Typography variant="body_h2">Collections Stories</Typography>
                <Typography variant="subtitle3">As Mumbai’s oldest museum, the Dr. Bhau Daji Lad Museum showcases the city’s cultural heritage and history through a rare collection of 19th century fine and decorative arts that highlight early modern art practices and craftsmanship in the erstwhile Bombay Presidency and beyond. The permanent collection includes miniature clay models, dioramas, maps, lithographs, photographs, and rare books that document the life of the people of Mumbai and the history of the city from the late 18th to early 20th centuries. Since the establishment of the Museum Trust in 2003, the Museum has augmented its permanent collection with new acquisitions, to create a comprehensive representation of the city’s art and culture from the 19th century onwards, including contemporary art. The curatorial strategy and display highlight the primary themes within the collection.</Typography><br />
                <Typography variant="subtitle3">Our recently published book &apos;Mumbai - A City Through Objects, 101 Stories from the Dr. Bhau Daji Lad Museum&apos;, brings alive the story of the evolution of the city of Mumbai, its people as well as the Museum through a selection of unique objects from the collection! The book has been edited by the Museum Director Tasneem Zakaria Mehta, and co-published with HarperCollins new imprint, HarperDesign. Available for purchase <LinkUI href="https://imojo.in/12WYI8Y" target="_blank">online.</LinkUI></Typography>

                <Grid container spacing="30px">
                    {
                        collectionStories.map((data, index) => (
                            <Grid size={{xs: 12, md: 6}} key={index}>
                                <Link href={data.link}>
                                    <Image src={data.img} alt="Collection" width={600} height={400} />
                                    <Typography variant="subtitle3">{data.caption}</Typography>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </CollectionContainer>
            <StyledContainer>
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
    )
}