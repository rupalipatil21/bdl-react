"use client"
import { ContentBox, HorizontalDivider, ImageUI, LinkUI } from "@/styles/common.styled";
import { Grid, Typography } from "@mui/material";
import img from "@/public/explore/explore-india-tour.jpg"

export default function Performances() {
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Performances</Typography>
                <Typography variant="subtitle3" color="custom.black">
                    The Museum’s extensive outreach includes theatre, performance, public lectures and film as well as programmes in collaboration with other organizations.
                </Typography>
            </ContentBox>
            <HorizontalDivider />
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <ImageUI src={img.src} alt="Article Image" width="270" height="200" />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="subtitle3" mb={1}>Sat, 12 April 2025 | 6:00 - 7:30 pm</Typography>
                    <Typography variant="subtitle3" mb={1}><b>Performance by Rishiraj Kulkarni</b></Typography>
                    <Typography variant="subtitle3" mb={1}>खोया मै... INDIA TOUR</Typography>
                    <Typography variant="subtitle3" mb={1}>Join us for a captivating performance by Rishiraj Kulkarni, showcasing Hindustani Classical Music played on handcrafted instruments! A talented multi-percussionist artist based in both India and The Netherlands, Rishiraj will create a soothing experience, drawing inspiration from the sounds of nature to evoke harmony and tranquility.</Typography>
                    <Typography variant="subtitle3" mb={1}>Charges: Rs. 499/person, limited spots <br />Available on a first-come, first served basis. <br />The concert will take place inside the Museum Building.</Typography>
                    <LinkUI href="https://www.district.in/rishiraj-kulkarni-mumbai-mh-handpan-tabla-apr12-2025/event" target="_blank">Register Here</LinkUI>
                </Grid>
            </Grid>
        </>
    )
}