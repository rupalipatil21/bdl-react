"use client"

import { Box, Grid, Typography } from "@mui/material"
import Image from "next/image"
import iconsmuseumstory from "@/public/about/icons-museum-story.jpg"
import museumstorycombine from "@/public/about/museum-story-combine2.jpg"
import { trustee } from "@/lib/constants"

export default function MuseumTrust(){
    return(
        <Box padding={{xs: "20px 25px", lg: 0}}>
            <Typography variant="title1" color="custom.black">Museum Trust</Typography>
            <Image src={iconsmuseumstory} alt="Icons Museum Story" />
            <Box mt={2}>
                <Grid container spacing="30px">
                    <Grid size={{xs:12, md:5}}>
                        <Image src={museumstorycombine} style={{ height: "auto", width: "100%" }} alt="Museum Story" />
                    </Grid>
                    <Grid size={{ xs:12, md:7 }}>
                        <Typography variant="title1" color="custom.black">The Tripartite Agreement</Typography>
                        <Typography variant="subtitle3" color="custom.black">
                            For the first time in India, a public-private partnership has been established for the management of a cultural institution. In February 2003, an agreement was signed between the Municipal Corporation Greater Mumbai (MCGM), the Jamnalal Bajaj Foundation and the Indian National Trust for Art and Cultural Heritage (INTACH) to restore and revitalise the Dr Bhau Daji Lad Mumbai City Museum, which was in a derelict condition.
                            <br /><br />
                            The Jamnalal Bajaj Foundation has enabled this spectacular restoration with a generous contribution that catalysed the project. The M.C.G.M has not only contributed to the restoration in equal measure, but in addition has provided a corpus to help the Museum become administratively autonomous and to facilitate exhibition, educational and outreach programs. Ownership continues to vest with the M.C.G.M which has the veto right in the Trust constitution.
                            <br /><br />
                            The Board of Trustees consists of eminent art historians and citizens of Mumbai. The mayor of Mumbai is the Chairman and the Municipal Commissioner is the Co-chairman.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={4}>
                <Typography variant="title1" color="custom.black">Board of Trustees</Typography>
                <Grid container columnSpacing="30px" rowSpacing="15px">
                    {
                        trustee.map((item,index)=>(
                            <Grid size={{xs:12, sm:6}} key={index}>
                                <Box height="60px">
                                    <Typography variant="subtitle3" color="custom.black" fontWeight={700}>{item.name}</Typography>
                                    <Typography variant="subtitle3" color="custom.black">{item.post}</Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}