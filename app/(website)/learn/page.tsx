"use client"

import Carousel from "@/components/common/Carousel"
import { learnCarouselImages } from "@/lib/carouselImages";
import { CollectionContainer, DotBox, HorizontalDivider, LinkUI, StyledContainer, StyledGridContainer } from "@/styles/common.styled";
import { CardContent, CardMedia, Grid, List, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import FourBlocks from "@/components/common/FourBlocks";
import guidedTour from "@/public/learn/learn-guided-tour.jpg"
import bookcorner from "@/public/learn/learn-book-corner.jpg"
import learn from "@/public/learn/learn-30-04-2020.jpg"
import puzzle from "@/public/learn/puzzle-lg.png"
import { StyledCard } from "@/styles/exhibition.styled";
import { learnData } from "@/lib/learnData";
import SpotifyPlayer from "@/components/learn/SpotifyPlayer";

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
            <Carousel settings={settings} images={learnCarouselImages} homeslider={true} />
            <CollectionContainer> 
                <Typography variant="body_h2">Learning at the Museum</Typography>
                <Typography variant="subtitle3">The Museum offers a rich selection of learning and outreach programmes focused on providing stimulating, participatory experiences that respond to different age, interest and language groups, and recognize a diversity of backgrounds. These experiences are aimed at creatively engaging with the Museum’s collection of artworks and exhibitions, encouraging critical engagement with Mumbai’s history, and artistic and cultural developments.</Typography><br />
                <Typography variant="subtitle3">Going forward, the Museum will continue to offer online as well as on-site programmes.</Typography>
                <HorizontalDivider />

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Link href="/calender">
                            <Image src={guidedTour.src} alt="Article Image" width="458" height="277" />
                        </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="body_h2" mb={1}><Link href="/calender"><b>Weekend Museum Tours</b></Link></Typography>
                        <Typography variant="subtitle3" mb={1}>Free walkthroughs of the Museum and ongoing exhibitions are conducted by members of the Education team. Free and open to all. No prior registration required.</Typography>
                        <Typography variant="subtitle3" mb={1}>
                                Every Sat & Sun<br />11:30 am (English) and 12:30 pm (Marathi/Hindi)
                        </Typography>
                    </Grid>
                </Grid>
                <HorizontalDivider />

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Image src={bookcorner.src} alt="Article Image" width="458" height="277" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>Children’s Book Corner</b></Typography>
                        <Typography variant="subtitle3" mb="10px">The Children’s Book Corner is an initiative launched by the Museum in 2024. It is located in the Museum Cafe situated in quiet, green space of the Museum Plaza, allowing children to indulge and develop reading habits which has proven health benefits in addition to being educational and fun! The collection of books include publications in English, Hindi and Marathi across genres such as history, art, natural environment, and books on Mumbai. Monthly book reading and story telling sessions are also organised with authors and educators as part of this initiative.</Typography>
                        <Typography variant="subtitle3" mb="10px">
                                Free and open to all through the week except Wednesday and select public holidays.<br />The books cannot be taken out of the premises. <br />Timings: 10 am to 5:30 pm.
                        </Typography>
                    </Grid>
                </Grid>
                <HorizontalDivider />

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Image src={learn.src} alt="Article Image" width="458" height="277" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="subtitle3" mb="20px">The BDL Museum helps you creatively engage with a vast selection of artworks from our collections and exhibitions even if you cannot visit the Museum! There are interactive games, stories, pre-recorded talks, and playlists to enjoy on Spotify!</Typography>
                        <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>Online Talks</b></Typography>
                        <Typography variant="subtitle3" mb="20px">Subscribe to our YouTube Channel to revisit our past talks by eminent scholars.<br /><LinkUI href="https://www.youtube.com/channel/UCj9nivbr4GnYQCog3SzXqHQ" target="_blank">Click Here</LinkUI></Typography>
                        
                        <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>Online Treasure Hunt</b></Typography>
                        <Typography variant="subtitle3" mb="10px">Solve riddles inspired by the Museum&apos;s permanent collection! </Typography>
                        <Typography variant="subtitle3" mb="20px"><LinkUI fontsize={14} href="https://www.bdlmuseum.org/pdf/treasure-hunt-1.pdf" target="_blank">Download Worksheet in English</LinkUI></Typography>
                        
                        <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>Online Exhibitions</b></Typography>
                        <Typography variant="subtitle3" mb="10px">Join us as we explore our past exhibitions and discuss their continuing relevance. <br /><LinkUI fontsize={14} href="https://www.instagram.com/bdlmuseum/?hl=en" target="_blank">Know More</LinkUI></Typography>
                        
                        <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>Sketching</b></Typography>
                        <Typography variant="subtitle3" mb="10px">The Museum&apos;s collection showcases innovations in design and motifs that were in vogue in the late 19th - early 20th century. Create your own objects inspired by the designs you see in our collection! </Typography>
                        <Typography variant="subtitle3" mb="20px"><LinkUI fontsize={14} href="https://www.bdlmuseum.org/pdf/bdl-sketches-2.pdf" target="_blank">Download: Worksheet 1</LinkUI></Typography>
                        
                        <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>Colouring Sheets</b></Typography>
                        <Typography variant="subtitle3" mb="10px">Established in 1857, the Dr Bhau Daji Lad is the oldest Museum in Mumbai. It is a treasure house of decorative & industrial art objects. The richly designed interiors of the Museum include the encaustic Minton tiles, imported for the Museum in the late 19th century. These patterns, found on the Grand Staircase & the Mumbai Gallery, are a treat for our visitors and are an important part of the city&apos;s history.</Typography>
                        <Typography variant="subtitle3" mb="10px">Colour in the sheets using your chosen medium and send us your pictures of your completed drawing via email or by tagging us @bdlmuseum on social media platforms! </Typography>
                        <Typography variant="subtitle3" mb="10px"><LinkUI fontsize={14} href="https://www.bdlmuseum.org/pdf/Kahani-BDL%20Museum-Colouring%20Sheets-1st%20Floor.pdf" target="_blank">Download: Worksheet 1</LinkUI></Typography>
                        <Typography variant="subtitle3" mb="10px"><LinkUI fontsize={14} href="https://www.bdlmuseum.org/pdf/Kahani-BDL%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Museum-Colouring%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Sheets-Staircase.pdf" target="_blank">Download: Worksheet 2</LinkUI></Typography>
                        <Typography variant="subtitle3" mb="10px"><LinkUI fontsize={14} href="https://www.bdlmuseum.org/pdf/Kahani-BDL%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Museum-Colouring%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Sheets-Founders-gallery.pdf" target="_blank">Download: Worksheet 3</LinkUI></Typography>
                    </Grid>
                </Grid>
                <HorizontalDivider />

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <SpotifyPlayer embedlink="https://open.spotify.com/embed/playlist/7G6fSJcs1BrDzsQzV74lbL" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b><u>Playlists on Spotify</u></b></Typography>
                        <Typography variant="subtitle3" mb="10px">BDL Museum is now on Spotify. Tune into our new, curated playlists!</Typography>
                        <Typography variant="left_title" mb={0} lineHeight={1.1}><u>Ragamalas</u></Typography>
                        <Typography variant="subtitle3" mb="10px">Tune into our curated playlist inspired by the BDL Museum&apos;s collection of Ragamala miniature paintings! The Ragamalas in the Museumâ€™s collection are from the Jaipur school of miniatures. Ragamala, meaning &apos;garland of ragas&apos;, is a set of miniature paintings that depict personified ragas of Indian classical music. A raga is a melodic framework in Indian classical music with symbolic associations such as seasons, time, and mood. It is meant to evoke certain emotions among the listeners. Ragas also provide room for improvisation to musicians and singers. The playlist features some of the most celebrated artists in Indian classical music. It begins with spirited morning ragas, progressing into soulful evening ragas.</Typography>
                        <Typography variant="subtitle3" mb="10px">Disclaimer: The playlist is strictly for non-commercial and entertainment use and in accordance with Spotify Brand Account.</Typography>
                    </Grid>
                </Grid>
                <HorizontalDivider />

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <SpotifyPlayer embedlink="https://open.spotify.com/embed/playlist/0b63FNWZXGwZwbKwLkc0lX" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b><u>Mumbai</u></b></Typography>
                        <Typography variant="subtitle3" mb="10px">Tune into our new playlist dedicated to the city of dreams - Mumbai. From &apos;Yeh Hai Mumbai Meri Jaan&apos; to &apos;Gully Boy&apos;, the playlist tries to capture the essence of the city. The playlist features songs of various musical styles that developed against the backdrop of the city, ranging from classic Bhendi Bazaar Gharana that developed in the city in the 1890s to contemporary Bollywood music. The songs selected for the playlist draw inspiration from the city and its people.</Typography>
                        <Typography variant="subtitle3" mb="10px">Disclaimer: The playlist is strictly for non-commercial and entertainment use and in accordance with Spotify Brand Account.</Typography>
                    </Grid>
                </Grid>
                <HorizontalDivider />

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Image src={puzzle.src} alt="Article Image" width="458" height="277" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>Jigsaw Puzzles</b></Typography>
                        <Typography variant="subtitle3" mb="10px">Piece-by-piece, make a Masterpiece!</Typography>
                        <Typography variant="subtitle3" mb="10px">How long does it take you to solve this jigsaw puzzle?</Typography>
                        <Typography variant="subtitle3" mb="10px">Share a screenshot and tag us @bdlmuseum on Instagram, Facebook or Twitter.</Typography>
                        <Typography variant="subtitle3" mb="20px"><LinkUI href="/calendar/jigsaw-puzzles" fontsize={14}>Click Here</LinkUI></Typography>
                    </Grid>
                </Grid>
                <HorizontalDivider />

                <StyledGridContainer container >
                    { learnData.map((item, index)=>(
                        <Grid size={{ xs: 12, sm: 4}}  key={index}>
                            <StyledCard >
                                <Link href={item.link}>
                                    <CardMedia
                                        component="img"
                                        image={item.img}
                                        alt="Past Exhibition"
                                        />
                                    <CardContent>
                                        <Typography variant="title1_500" color="custom.black" >{item.text} </Typography>
                                    </CardContent>
                                </Link>
                            </StyledCard>
                        </Grid>
                    ))}
                </StyledGridContainer>
            </CollectionContainer>
            <StyledContainer>
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
    )
}