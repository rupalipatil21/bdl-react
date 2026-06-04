"use client"

import { ContentBox, HorizontalDivider, ImageUI, LinkUI } from "@/styles/common.styled"
import { Box, Grid, Typography } from "@mui/material"
import Gallery from "../common/Gallery";
import { adultLearnerImages } from "@/lib/galleryimages";
import React from "react";
import bookcorner from "@/public/learn/families-book-corner.jpg"
import onlinetalk from "@/public/learn/learn-30-04-2020.jpg"
import SpotifyPlayer from "./SpotifyPlayer";

export default function Families(){
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Families</Typography>

                <Typography variant="subtitle3" color="custom.black">
                    The Museum welcomes families with a range of activities designed for visitors of different ages and interests.
                </Typography>


                    <Box>
                        <HorizontalDivider />
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <ImageUI src={bookcorner.src} alt="Article Image" width="407" height="356" />
                            </Grid>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>Children’s Book Corner</b></Typography>
                                <Typography variant="subtitle3" color="custom.black">The Children’s Book Corner is an initiative launched by the Museum in 2024. It is located in the Museum Cafe situated in quiet, green space of the Museum Plaza, allowing children to indulge and develop reading habits which has proven health benefits in addition to being educational and fun! The collection of books include publications in English, Hindi and Marathi across genres such as history, art, natural environment, and books on Mumbai.</Typography>
                                <Typography variant="subtitle3" color="custom.black">Monthly book reading and story telling sessions are also organised with authors and educators as part of this initiative. Do check our <LinkUI href="/calendar">Calendar page</LinkUI> for information about our ongoing activities!</Typography>
                                <Typography variant="subtitle3" color="custom.black">Free and open to all through the week except Wednesday and select public holidays. <br />The books cannot be taken out of the premises. <br />Timings: 10 am to 5:30 pm.</Typography>
                            </Grid>
                        </Grid>
                        <HorizontalDivider />
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <ImageUI src={onlinetalk.src} alt="Article Image" width="407" height="356" />
                            </Grid>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>Online Activities</b></Typography>
                                <Typography variant="subtitle3" color="custom.black">The BDL Museum helps you creatively engage with a vast selection of artworks from our collections and exhibitions even if you cannot visit the Museum! There are interactive games, stories, pre-recorded talks, and playlists to enjoy on Spotify!</Typography>

                                <Typography variant="body_h2" color="custom.black" mt="20px">Online Talks</Typography>
                                <Typography variant="subtitle3" color="custom.black">Subscribe to our YouTube Channel to revisit our past talks by eminent scholars. <br /><LinkUI href="https://www.youtube.com/channel/UCj9nivbr4GnYQCog3SzXqHQ" target="_blank">Click Here</LinkUI></Typography>

                                <Typography variant="body_h2" color="custom.black" mt="20px">Online Treasure Hunt</Typography>                                
                                <Typography variant="subtitle3" color="custom.black">Solve riddles inspired by the Museum&apos;s permanent collection!</Typography>
                                <LinkUI href="/pdf/treasure-hunt-1.pdf" target="_blank">Download Worksheet in English</LinkUI>
                                
                                <Typography variant="body_h2" color="custom.black" mt="20px">Online Exhibitions</Typography>
                                <Typography variant="subtitle3" color="custom.black">Join us as we explore our past exhibition and discuss their continuing relevance. <br /><LinkUI href="https://www.instagram.com/bdlmuseum/?hl=en" target="_blank">Know More</LinkUI></Typography>

                                <Typography variant="body_h2" color="custom.black" mt="20px">Sketching</Typography>                                
                                <Typography variant="subtitle3" color="custom.black">The Museum&apos;s collection showcases innovations in design and motifs that were in vogue in the late 19th - early 20th century. Create your own objects inspired by the designs you see in our collection!</Typography>
                                <LinkUI href="/pdf/bdl-sketches-2.pdf" target="_blank">Download: Worksheet 1</LinkUI>

                                <Typography variant="body_h2" color="custom.black" mt="20px">Download colouring sheet here</Typography>                                
                                <Typography variant="subtitle3" color="custom.black">Established in 1857, the Dr Bhau Daji Lad is the oldest Museum in Mumbai. It is a treasure house of decorative & industrial art objects. The richly designed interiors of the Museum include the encaustic Minton tiles, imported for the Museum in the late 19th century. These patterns, found on the Grand Staircase & the Mumbai Gallery, are a treat for our visitors and are an important part of the city&apos;s history.</Typography>
                                <Typography variant="subtitle3" color="custom.black">Colour in the sheets using your chosen medium and send us your pictures of your completed drawing via email or by tagging us @bdlmuseum on social media platforms!</Typography>
                                <Typography variant="subtitle3" color="custom.black"><LinkUI href="/pdf/BDL-Museum_Minton-Colouring-Sheet.pdf" target="_blank">Download: Worksheet 1</LinkUI></Typography>
                                <Typography variant="subtitle3" color="custom.black"><LinkUI href="/pdf/BDL-Museum_Minton-Colouring-Sheet.pdf" target="_blank">Download: Worksheet 2</LinkUI></Typography>
                                <Typography variant="subtitle3" color="custom.black"><LinkUI href="/pdf/BDL-Museum_Minton-Colouring-Sheet.pdf" target="_blank">Download: Worksheet 3</LinkUI></Typography>
                            </Grid>
                        </Grid>

                        <HorizontalDivider />
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <SpotifyPlayer embedlink="https://open.spotify.com/embed/playlist/7G6fSJcs1BrDzsQzV74lbL" />
                            </Grid>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b><u>Ragamalas - Playlist on Spotify.</u></b></Typography>
                                <Typography variant="subtitle3" mb="10px">BDL Museum is now on Spotify! Listen to our new, curated playlist inspired by the Museum&apos;s collection of Ragamala miniature paintings!</Typography>
                                <Typography variant="subtitle3" mb="10px">The Ragamalas in the Museum’s collection are from the Jaipur school of miniatures. Ragamala, meaning &apos;garland of ragas&apos;, is a set of miniature paintings that depict personified ragas of Indian classical music. A raga is a melodic framework in Indian classical music with symbolic associations such as seasons, time, and mood. It is meant to evoke certain emotions among the listeners. Ragas also provide room for improvisation to musicians and singers.</Typography>
                                <Typography variant="subtitle3" mb="10px">The playlist features some of the most celebrated artists in Indian classical music. It begins with spirited morning ragas, progressing into soulful evening ragas.</Typography>
                                <Typography variant="subtitle3" mb="10px">Disclaimer: The playlist is strictly for non-commercial and entertainment use and in accordance with Spotify Brand Account.</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                

                <Typography variant="body_h2" color="custom.black" mb="10px">Image Gallery</Typography>
                <Gallery galleryimages={adultLearnerImages} />
            </ContentBox>
        </>
    )
}