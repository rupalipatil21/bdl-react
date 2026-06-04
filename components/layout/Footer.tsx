"use client"
import { FooterWrapper, SocialMedia, StyledContainer } from "@/styles/common.styled";
import { Box, Grid, Typography } from "@mui/material";
import f1 from "@/public/f1.png"
import f2 from "@/public/f2.png"
import Image from "next/image";
import Link from "next/link";
import insta from "@/public/instagram-m.png"
import twitter from "@/public/twitter-m.png"
import facebook from "@/public/facebook-m.png"
import youtube from "@/public/youtube-m.png"
import spotify from "@/public/spotify-m.png"
import tripadvisor from "@/public/tripadvisor-m.png"
import googleart from "@/public/googeart-m.png"
import useHideSection from "@/hooks/useHideHeader";

export default function Footer(){
    const showSection = useHideSection()
    if(!showSection) return null;
    return(
        <StyledContainer pt={{ xs: "0px !important", md: "20px !important" }}>
            <FooterWrapper>
                <Grid container>
                    <Grid size={{xs: 12, md: 3}}>
                        <Box>
                            <Typography variant="footer_h3">About</Typography>
                        </Box>
                        <Typography variant="body_h3" lineHeight="23px" color="custom.grey">
                            The Dr. Bhau Daji Lad Museum, Mumbai City Museum seeks to serve the community as an Institution dedicated to excellence in cultural education through exhibitions and unique visual and intellectual media
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <Box>
                            <Image src={f1} alt="footer img" />
                            <Image src={f2} alt="footer img" />
                        </Box>
                        <Typography variant="body_h3" lineHeight="23px" color="custom.grey">
                            An Institution of the Municipal Corporation of Greater Mumbai. Supported by the Jamnalal Bajaj Foundation. Restored by INTACH, Indian National Trust for Art and Cultural Heritage
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <Box>
                            <Typography variant="footer_h3">ADDRESS</Typography>
                        </Box>
                        <Typography variant="body_h3" lineHeight="23px" color="custom.grey">
                            Dr. Bhau Daji Lad Museum <br /> Veermata Jijabai Bhosale Botanical Udyan and Zoo (Rani Baug), <br /> 91/A, Dr Babasaheb Ambedkar Road, <br />  Byculla East Mumbai 400027 India
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <Box>
                            <Typography variant="footer_h3">MUSEUM TIMINGS</Typography>
                        </Box>
                        <Typography variant="body_h3" lineHeight="23px" color="custom.grey">
                            T: +91 22 23741234 <br /> 10:00 am - 5:30 pm <br /> Closed on all Wednesdays and select public holidays.
                        </Typography>
                    </Grid>
                </Grid>
            </FooterWrapper>
            <SocialMedia>
                <Link href="https://www.instagram.com/bdlmuseum">
                    <Image src={insta} alt="instagram" />
                </Link>
                <Link href="https://twitter.com/bdlmuseum">
                    <Image src={twitter} alt="instagram" />
                </Link>
                <Link href="https://www.facebook.com/BDLMuseum">
                    <Image src={facebook} alt="instagram" />
                </Link>
                <Link href="https://www.youtube.com/user/BDLMuseum">
                    <Image src={youtube} alt="instagram" />
                </Link>
                <Link href="https://open.spotify.com/user/n2r2bp6sdym4juo4zls6j4lt4?si=ZQAsSg3vQkGTnmIv8gEVFg">
                    <Image src={spotify} alt="instagram" />
                </Link>
                <Link href="http://www.tripadvisor.in/Attraction_Review-g304554-d674533-Reviews-Bhau_Daji_Lad_Museum-Mumbai_Bombay_Maharashtra.html">
                    <Image src={tripadvisor} alt="instagram" />
                </Link>
                <Link href="https://www.google.com/culturalinstitute/beta/u/0/partner/dr-bhau-daji-lad-mumbai-city-museum">
                    <Image src={googleart} alt="instagram" />
                </Link>
            </SocialMedia>
        </StyledContainer>
    )
}