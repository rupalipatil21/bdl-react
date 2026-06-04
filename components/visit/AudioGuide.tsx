"use client"

import { StyledGridContainer, LinkUI, HorizontalDivider, CafeStack } from "@/styles/common.styled"
import { Grid, Stack, Typography } from "@mui/material"
import Image from "next/image"
import audio from "@/public/icons/audio.svg"
import shop from "@/public/icons/shop.svg"
import childernbookcorner from "@/public/icons/book.png"
import cafe from "@/public/icons/cafe.svg"
import { useHeaderHeight } from "@/app/context/HeaderContext"

export default function AudioGuide(){
    const headerHeight = useHeaderHeight()
    return(
        <>
            <StyledGridContainer padding={{xs: "0px 15px", lg: 0}} container mt={"0 !important"} headerheight={headerHeight.headerHeight}>
                <Grid size={{xs: 12, md: 6}} id="audio">
                    <Stack direction="row" columnGap={1} alignItems="center" mb="10px">
                        <Image src={audio} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Audio Guide
                        </Typography> 
                    </Stack> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Scan the QR codes put up on the showcases and hear the stories of the Museum - its history, architecture and collections come to life! Point your mobile phone camera to the QR Code or use a QR Code scanner app on your mobile devices to access the audio guide.
                    </Typography>
                    
                    <Typography variant="font_18" color="custom.black" >
                        Languages
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        The audio guide is available in English, Hindi and Marathi. <br />
                        Visitors are requested to use their own headphones to be able to hear the information.
                    </Typography>
                    
                    <Stack direction="row" columnGap={1} alignItems="center" mb="10px">
                        <Image src={childernbookcorner} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Children’s Book Corner
                        </Typography>
                    </Stack> 
                    
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Browse through an interesting selection of books in our new Children’s Book Corner, located in the Cafe!
                    </Typography>

                </Grid>
                <Grid size={{xs: 12, md: 6}} id="shop">
                    <Stack direction="row" columnGap={1} alignItems="center" mb="10px">
                        <Image src={shop} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Shop
                        </Typography> 
                    </Stack> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        The Museum Shop supports traditional craftsmen and NGOs and has a unique selection of gifts, many of which have been inspired by the Museum collection. On display are Museum inspired mugs, bags, postcards, puppets, diaries and magnets as well as traditional products like paper mache, bidri, shawls and bronze statues. A wide range of coffee table books, artist monologues and publications on Mumbai are also available. <br />
                        To mark its 150th anniversary, the Museum co-published a new book titled &apos;Mumbai - A City Through Objects, 101 Stories from the Dr. Bhau Daji Lad Museum&apos;, edited by Tasneem Zakaria Mehta. Available for purchase <LinkUI href="https://imojo.in/12WYI8Y">online.</LinkUI>
                    </Typography>

                    <CafeStack direction="row" columnGap={1} alignItems="center" mb="10px" id="cafe" headerheight={headerHeight.headerHeight} >
                        <Image src={cafe} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Cafe
                        </Typography> 
                    </CafeStack> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Visitors have the opportunity to relax and take a break whilst exploring the galleries or enjoying a performance. Overlooking the open, green environment of the Plaza, the Museum Cafe offers a wide selection of specialty teas, coffees, snacks, cold beverages and Wi-Fi.
                    </Typography>
                </Grid>
                <Grid size={12}><HorizontalDivider /></Grid>
            </StyledGridContainer>
        </>
    )
}