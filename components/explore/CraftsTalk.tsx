import { HorizontalDivider, ImageUI } from "@/styles/common.styled";
import { Typography, Grid } from "@mui/material";
import Link from "next/link";
import talkimg from "@/public/explore/workshop-yosha-gupta.jpg"

export default function CraftsTalk() {
    return(
        <>
            <Typography variant="title1" color="custom.black">Workshops</Typography>
            <HorizontalDivider />
            <Grid container spacing={4} >
                <Grid size={{ xs: 12, md: 5 }}>
                    <Link href="#">
                        <ImageUI src={talkimg.src} alt="Article Image" width="270" height="200" />
                    </Link>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography variant="subtitle3" mb={1}><b>Guest Speaker | Yosha Gupta from Me Meraki</b></Typography>
                        <Typography variant="subtitle3" mb={1} >Join us for a talk with Yosha Gupta, founder of Me Meraki, as she explores how technology and social media can accelerate growth within the crafts industry. Gain insights about the strategies for harnessing technology to empower artisans and uphold traditional crafts amidst the ever-changing digital landscape </Typography>
                        <Typography variant="subtitle3" mb={1} >Fri 10th May 2024 | 5:30 pm - 6:00 pm <br />Free and Open to All.</Typography>
                </Grid>
            </Grid>
            <HorizontalDivider />
        </>
    )
}