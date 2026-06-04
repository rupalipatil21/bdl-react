import { HorizontalDivider, ImageUI } from "@/styles/common.styled";
import { Typography, Grid } from "@mui/material";
import Link from "next/link";
import mallkhamb from "@/public/explore/performance-mallakhamb.jpg"
import chitrakathi from "@/public/explore/performance-chitrakathi.jpg"

export default function CraftsPerformances() {
    return(
        <>
            <Typography variant="title1" color="custom.black">Performances</Typography>
            <HorizontalDivider />
            <Grid container spacing={4} >
                <Grid size={{ xs: 12, md: 5 }}>
                    <Link href="#">
                        <ImageUI src={mallkhamb.src} alt="Article Image" width="270" height="200" />
                    </Link>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography variant="subtitle3" mb={1}><b>Mallakhamb</b></Typography>
                        <Typography variant="subtitle3" mb={1} >Witness this traditional Indian sport performed under the guidance of Padma Shri Awardee, Uday Deshpande Ji, an international coach and an active proponent of Mallakhamb across the world. </Typography>
                        <Typography variant="subtitle3" mb={1} >Saturday, 11th May 2024 | 5:00 pm - 5:30 pm <br />Free and Open to All</Typography>
                </Grid>
            </Grid>
            <HorizontalDivider />

            <Grid container spacing={4} >
                <Grid size={{ xs: 12, md: 5 }}>
                    <Link href="#">
                        <ImageUI src={chitrakathi.src} alt="Article Image" width="270" height="200" />
                    </Link>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography variant="subtitle3" mb={1}><b>Chitrakathi by Chetan Gangavane</b></Typography>
                        <Typography variant="subtitle3" mb={1} >Experience the history & tradition of Chitrakathi storytellers with Chetan Gangavane. Chetan comes from a family of traditional Chitrakathi artists and is inspired by his father Padma Shri Awardee, Parshuram Jangavne. </Typography>
                        <Typography variant="subtitle3" mb={1} >Saturday, 11th May and Sunday, 12th May 2024 | 5:30 pm - 6:00 pm <br />Free and Open to All</Typography>
                </Grid>
            </Grid>
        </>
    )
}