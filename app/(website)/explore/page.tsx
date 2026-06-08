"use client"

import { useHeaderHeight } from "@/app/context/HeaderContext"
import Banner from "@/components/common/Banner"
import bannerimg from "@/public/pagesbannerimages/explore/events-programs-banner.jpg"
import { ContentBox, StyledContainer, StyledGridContainer } from "@/styles/common.styled"
import { StyledCard } from "@/styles/exhibition.styled"
import { CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"
import { ExploreData } from "@/lib/exploreData"
import FourBlocks from "@/components/common/FourBlocks"
import MoreAtBdl from "@/components/common/MoreAtBdl"

export default function Page(){
    const headerHeight = useHeaderHeight();
    return(
        <>
            <Banner bannerImg={bannerimg} alt="Explore banner" mt={headerHeight.headerHeight}  />
            <StyledGridContainer container >
                <Grid size={{xs: 12 }} offset={{xs:0, md:1}} alignItems="start" position="relative">
                    <ContentBox>
                        <Typography variant="title1" color="custom.black">Events & Programmes</Typography>
                        <Typography variant="subtitle3" color="custom.black">
                            The Museum’s extensive outreach includes theatre, performance, public lectures and film as well as programmes in collaboration with other organizations.
                            <br /><br />
                        </Typography>
                    </ContentBox>
                </Grid>
                <Grid size={{xs: 12, md: 10}} offset={{xs:0, md:1}} padding="0 !important">
                    <StyledGridContainer container >
                        { ExploreData.map((item, index)=>(
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
                </Grid>
            </StyledGridContainer>

            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
    )
}