"use client"

import { DividerUI, HorizontalDivider, LinkUI, RestoreBox, YoutubeVideo } from "@/styles/common.styled"
import { Box, Grid, Stack, Typography } from "@mui/material"
import restoration1 from "@/public/about/restoration-01.jpg"
import restoration2 from "@/public/about/restoration-02.jpg"
import restoration3 from "@/public/about/restoration-03.jpg"
import restoration4 from "@/public/about/restoration-04.jpg"
import carpetbefore from "@/public/about/carpet-before.jpg"
import carpetafter from "@/public/about/carpet-after.jpg"
import restorationlong from "@/public/about/restoration-long.jpg"
import restorationvideo from "@/public/about/restoration-video-img.jpg"
import youtube from "@/public/about/youtube.jpg"
import unesco from "@/public/about/unseo.jpg"
import Image from "next/image"
import Link from "next/link"
import Gallery from "../common/Gallery"
import { PhotoService } from "@/lib/galleryimages"

export default function Restoration(){
    return(
        <>
        <Box padding={{xs: "20px 25px", lg: 0}}>
            <Typography variant="title1" color="custom.black">Museum Restoration</Typography>
            <Stack direction="row" alignItems="center" mb="26px" flexWrap="wrap">
                <LinkUI href="#section1">Architectural Restoration </LinkUI><DividerUI orientation="vertical" />
                <LinkUI href="#section2">Restoration of Objects  </LinkUI><DividerUI orientation="vertical" />
                <LinkUI href="#section3">Curatorial Strategy </LinkUI> <DividerUI orientation="vertical" />
                <LinkUI href="#section4">UNESCO Award</LinkUI>
            </Stack>
            <Typography variant="subtitle3" color="custom.black">
                In 1997, a search for a location to establish a conservation laboratory occasioned a visit by INTACH officers to the Museum. The dismal state in which this extraordinary 19th century building lay resulted in INTACH’s effort to convince the Municipal Corporation (MCGM) of the urgent need to restore the building and artefacts. MCGM sanctioned the Museum project and INTACH attempted to raise private funding from corporate houses.
                <br /><br />
                In 1999 INTACH approached the Jamnalal Bajaj Foundation generously agreed to financially support the Museum restoration and revitalisation project. A tripartite agreement was signed between the MCGM, the Jamnalal Bajaj Foundation and INTACH in February 2003 and the Dr. Bhau Daji Lad Museum Trust was established for the revitalisation and management of the Museum.
                <br /><br />
                INTACH’s approach to the restoration of the building was careful and considered. Intensive research and preparatory work went into putting the project concept together before drawing up the restoration and revitalisation plan.
            </Typography>

            <YoutubeVideo container size={{xs: 12, md: 10, lg: 7}}>
                <Grid size={{xs: 12 }}>
                    <Link href="https://www.youtube.com/user/BDLMuseum" target="_blank">
                        <Grid container spacing="30px" size={12}>
                            <Grid size={{ xs: 12, sm: 5 }} >
                                <Image src={restorationvideo} alt="Restoration video img" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 7 }}>
                                <Typography variant="subtitle3" color="custom.green">Restoration & Revitalization </Typography>
                                <Image src={youtube} alt="Youtube image" style={{ float: "right" }} />
                            </Grid>
                        </Grid>
                    </Link>
                </Grid>
            </YoutubeVideo>
            <HorizontalDivider />

            <RestoreBox id="section1">
                <Typography variant="title1" color="custom.black">Architectural Restoration</Typography>
                <Grid container columnGap="30px">
                    <Grid size={{xs: 12, md: 5}}>
                        <Image src={restoration1} alt="Architectural Restoration" />
                    </Grid>
                    <Grid size={{xs: 12, md: 5}}>
                        <Image src={restoration2} alt="Architectural Restoration" />
                    </Grid>
                </Grid>
                <Typography variant="subtitle3" color="custom.black">
                    The building required comprehensive restoration, as the external façade as well as the interior walls were highly damaged. Algae were visible in most places of the exterior façade and plant growth had penetrated deep into the building’s core. Internally the deterioration had led to separation of several of the cast iron columns from the walls and many of the etched glass panes were broken. Electrical cables were conspicuous all over the building. Poor lighting created a dull and gloomy atmosphere. Its richly coloured interiors and exquisite details had also been effaced, and a yellowing off-white paint had brushed away the gold gilding, the refined design details and with it the vision and intentions of its founding fathers. All this and more had to be addressed in the Museum’s restoration.
                </Typography>
            </RestoreBox>
            <HorizontalDivider />
            <RestoreBox id="section2">
                <Typography variant="title1" color="custom.black">Restoration of Objects</Typography>
                <Grid container columnGap="30px">
                    <Grid size={{xs: 12, md: 5}}>
                        <Image src={restoration3} alt="Restoration of Objects" />
                    </Grid>
                    <Grid size={{xs: 12, md: 5}}>
                        <Image src={restoration4} alt="Restoration of Objects" />
                    </Grid>
                </Grid>
                <Typography variant="subtitle3" color="custom.black">
                    Most of the museum objects were in an extremely neglected and damaged condition. They had fungus and were damaged from poor handling and incorrect conservation work.
                </Typography>
                <Typography variant="subtitle3" color="custom.black">
                    Approximately four thousand objects have been conserved to date by INTACH’s expert conservators. Each object is assessed for damage. It is photographed before, during and after the process. It is measured and weighed and a comprehensive report is prepared.
                </Typography>
                <Grid container columnGap="30px">
                    <Grid size={{xs: 12, md: 5}}>
                        <Image src={carpetbefore} alt="Carpet Before" />
                    </Grid>
                    <Grid size={{xs: 12, md: 5}}>
                        <Image src={carpetafter} alt="Carpet After" />
                    </Grid>
                </Grid>
                <Typography variant="subtitle3" color="custom.black">
                    The restoration of each artefact was a cause for celebration. For example the Yarwada jail carpet that hangs with pride in the central staircase was in such a bad condition that the former curator considered deaccessioning the carpet. Skilled craftsmen were brought from Kashmir to restore the carpet. They worked with amazing care, for six months, to bring the carpet back to life. Special yarn was also ordered from Iran to match the original yarn in the carpet.
                </Typography>
            </RestoreBox>
            <HorizontalDivider />
            <RestoreBox id="section3">
                <Typography variant="title1" color="custom.black">Curatorial Strategy</Typography>
                <Grid container columnGap="30px">
                    <Grid size={{ xs: 12 }}>
                        <Image src={restorationlong} alt="Restoration of Objects" />
                    </Grid>
                </Grid>
                <Typography variant="subtitle3" color="custom.black">
                    The curatorial strategy of the Museum informed the development of various themes for the displays of objects and the juxtaposing of ideas in the layout of the galleries. The extensive research unfolded many layers of history. Different stories emerged and this led to the creation of new galleries. The reorganisation of space in the Museum, as well as the lighting plan, was determined by the curatorial mapping. The whole collection was being reinterpreted in the light of new research. The whole Museum was being completely re-presented.
                    <br /><br />
                    The primary curatorial objective was to tell the story of this extraordinary city from a multitude of perspectives. Two dominant themes emerged that highlighted the unique character of the city. First was the extraordinary evolution of a group of swampy islands into a great cosmopolitan city which became the entrepot to the East in the 19th century. The second theme unfolded a narrative about trade and the development of the industrial arts in the city and in other important centres around the country.
                    <br /><br />
                    The display cases had to be reorganised and the collection represented in light of this new research. Detailed planning for each case involved understanding the storyline being presented and optimising its visual character.
                </Typography>
            </RestoreBox>
            <HorizontalDivider />
            <RestoreBox id="section4">
                <Typography variant="title1" color="custom.black">UNESCO Award</Typography>
                <Grid container columnGap="30px">
                    <Grid size={{ xs: 12, md: 10 }}>
                        <Link href="/about/unseo.jpg" rel="lightbox"><Image src={unesco} alt="UNESCO Award" /></Link>
                    </Grid>
                </Grid>
                <Typography variant="subtitle3" color="custom.black">
                    The Museum Restoration Project won the 2005 UNESCO Asia Pacific Heritage Award of Excellence for Conservation.
                    <br />
                    The citation from the UNESCO Award of Excellence:
                    <br /><br />
                    <i>A Renaissance Revival architectural gem, the Dr. Bhau Daji Lad Museum in Mumbai has been restored to its historical splendour through a pioneering public-private partnership between the Brihanmumbai Municipal Corporation, the Indian National Trust for Art and Cultural Heritage (INTACH) and the Jamnalal Bajaj Foundation.</i>
                    <i>Through a holistic conservation plan, which has addressed both the museum building and the collection, the project establishes a new benchmark in the conservation of museums for India and the region. By modernising the internal infrastructure while paying careful attention to restoring the decorative details of the building, the project has demonstrated a balanced approach between the refined mastery of conservation techniques and the support of crafts skills.</i>
                    <br /><br />
                    <i>The project has succeeded in sparking the revival of dying techniques such as gilding and stencil work. The building now stands as a unique testimony to the development of Victorian architecture in the context of the hybrid building and crafts traditions of 19th century India, as well as to the civic traditions embodied in one of the country&apos;s earliest museums.</i>
                    <br /><br />
                    The UNESCO Asia-Pacific Heritage Awards for Culture Heritage Conservation have been established to recognize the achievement of individuals and organizations within the private sector, and the public-private initiatives, in successfully restoring structures of heritage value in the region.
                    <br /><br />
                    This project advances UNESCO’s global strategic objective of “promoting the drafting and implementation of standard setting instruments in the field of culture”. Within this global framework, it builds on the regional pillar of &quot;localization and empowerment of the culture profession to develop and implement standards&quot;.
                    <br /><br />
                </Typography>
                <LinkUI href="#section1">Click here to view the citation from UNESCO Website </LinkUI>
            </RestoreBox>
            <HorizontalDivider />
            <Gallery galleryimages={PhotoService} />
        </Box>  
        </>
    )
}