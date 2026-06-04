"use client"

import { Box, Grid, Typography } from "@mui/material"
import directorimg from "@/public/about/direction-new.png"
import Image from "next/image"

export default function DirectorsNote(){
    return(
        <Box padding={{xs: "20px 25px", lg: 0}}>
            <Typography variant="title1" color="custom.black">Director&apos;s Note</Typography>
            <Grid container columnSpacing="30px" rowSpacing="15px">
                <Grid size={{xs:8, sm:3}}>
                    <Image src={directorimg} style={{ height: "auto", width: "100%" }} alt="Director" />
                </Grid>
                <Grid size={{ xs:12, md:9 }}>
                    <Typography variant="subtitle3" color="custom.black" fontWeight={700}>Dear Friends,</Typography>
                    <Typography variant="subtitle3" color="custom.black" mt="10px">
                        We are delighted to introduce you to the Dr Bhau Daji Lad Museum. The Museum has survived almost exactly as it was when first established in the middle of the 19th century as the Victoria and Albert Museum. It is a Museum about Museums. It tells us how museums were first conceived and presented, and about the early objectives and aspirations. The restoration that INTACH completed in November 2012, in partnership with the Jamnalal Bajaj Foundation and the Municipal Corporation of Greater Mumbai, has made every effort to retain the original character while at the same time introducing the latest design, technology and facilities to enhance the quality and performance of the institution.
                        <br /><br />
                        Besides its spectacular beauty and unique architecture, the collection is a microcosm of the extraordinary talents of Indian master craftsmen and Early Modern artists. The section on Mumbai is particularly interesting giving visitors a peek into an almost real life account of the 19th century through dioramas and models which are unique to the Museum.
                        <br /><br />
                        A curated exhibitions programme hosted in the Kamalnayan Bajaj Special Exhibitions Gallery and in the main Museum building invites established artists to engage in a conversation with the Museum, the city and the archives. In addition, smaller exhibitions are presented in the Special Projects Space and in the Plaza. The Museum hosts exhibitions in partnership with international museums and institutions, like the Victoria and Albert Museum, London, London, the Guggenheim Museum, New York, etc. The Museum has collaborated with consulates of the Kingdom of Netherlands, Italy, Belgium, Canada, as well as not-for-profit cultural centres and foundations such as the Swiss Arts Council Pro Helvetia, Polish Institute of New Delhi, and Alliance Francaise to bring a vast variety of programming to the city. It gives free access to organizations dedicated to promoting Indian craftsmanship and has worked with master craftsmen and contemporary artists to encourage and showcase their practice.
                        <br /><br />
                        We have a robust internship and docent programme that offers undergraduate students and art educators an opportunity to work with the Museum to lead interpretive tours for different age groups and assist in our outreach activities workshops. The Museum also invites partnerships with international schools for their ‘Creativity, Action, Service’ volunteer programme through which groups of students work with the Education team to develop worksheets or other educational material for the Museum. We hope that you will become a Friend of the Museum and join a special family of supporters. You will receive regular updates about our activities and much more.
                        <br /><br />
                        We have an extensive education and outreach programme that addresses different age groups and interests.
                        <br /><br />
                        We look forward to welcoming you to the Museum.
                        <br /><br />
                        With warm regards,
                        <Typography variant="subtitle3" fontWeight={700}>Tasneem Zakaria Mehta <br />Managing Trustee and Honorary Director
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}