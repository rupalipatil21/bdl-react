"use client"
import { ContentBox, HorizontalDivider, MuseumBox } from "@/styles/common.styled";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import intach1 from "@/public/explore/gallery/intach-07.jpg"
import intach2 from "@/public/explore/gallery/intach-06.jpg"
import intach3 from "@/public/explore/gallery/intach-08.jpg"
import intach4 from "@/public/explore/gallery/intach-05.jpg"
import Gallery from "../common/Gallery";
import { conlabGalleryImages } from "@/lib/galleryimages";

export default function ConLab(){
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Conservation Lab & Documentation Centre</Typography>
                <HorizontalDivider />
                
                <MuseumBox>
                    <Typography variant="subtitle3" color="custom.black" mb={1} >
                        The Conservation Laboratory was established in October 2004 by the Indian National Trust for Art and Cultural Heritage (INTACH). Founded in 1984, INTACH is India’s largest non-profit membership organisation dedicated to the conservation and preservation of India’s natural, cultural, living, tangible and intangible heritage. In February 2003, INTACH entered into an agreement with the Municipal Corporation Greater Mumbai (MCGM) and the Jamnalal Bajaj Foundation to restore and revitalise the Dr Bhau Daji Lad Mumbai City Museum.
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black" mb={1}>
                        The Conservation Laboratory has since taken responsibility for the preservation of the Museum Collection and is under the aegis of the Dr. Bhau Daji Lad Museum. The Conservation Laboratory has cared for the neglected, fungus infected and damaged objects and has conserved over 4500 objects to date.
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black" mb={1}>
                        The Conservation Laboratory specializes in documentation with preventive and curative conservation of paintings, papers, textiles, objects (ceramics, metals and organic materials), manuscripts and books. All conservation efforts are carried out in compliance with established guidelines for practice which mandate the use of archival and reversible material with minimum invasive treatments and methods. Each object is carefully studied and accessed to understand its history, fabrication and chemical nature. Objects are documented, weighed and measured, photographed before, during and after treatment. Steps are taken to preserve and stabilize objects and bring them closer to their original appearance by mending broken components and removing damaging accretions.
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black" mb={1}>
                        The Conservation team also assists with the storage, installation and exhibition of artworks.
                    </Typography>
                    <Grid container columnSpacing="30px" rowSpacing="20px">
                        <Grid size={{xs:12, md: 6}}>
                            <Image src={intach1.src} width={433} height={300} alt="Intach Gallery" />
                        </Grid>
                        <Grid size={{xs:12, md: 6}}>
                            <Image src={intach2.src} width={433} height={300} alt="Intach Gallery" />
                        </Grid>
                        <Grid size={12}>
                            <Image src={intach3.src} width={433} height={300} alt="Intach Gallery" />
                        </Grid>
                        <Grid size={12}>
                            <Image src={intach4.src} width={433} height={300} alt="Intach Gallery" />
                        </Grid>
                    </Grid>
                    <HorizontalDivider />
                    <Gallery galleryimages={conlabGalleryImages} />
                </MuseumBox>

            </ContentBox>
        </>
    )
}