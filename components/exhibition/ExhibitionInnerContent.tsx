"use client"

import { StyledGridContainer } from "@/styles/common.styled"
import { Grid, Box, Typography, Stack } from "@mui/material"
import StickyLeftSidebar from "../about/StickyLeftSidebar"
import { useHeaderHeight } from "@/app/context/HeaderContext"
import { useSticky } from "@/lib/useSticky"
import { OrangeIcon } from "@/styles/exhibition.styled"

export default function ExhibitionInnerContent(){
    const headerHeight = useHeaderHeight()
    const { ref, spacerRef } = useSticky({
        offsetTop: headerHeight.headerHeight,
        bottoming: true,
        spacer: true,
    });
    return(
        <>
            <StyledGridContainer container >
                <Grid size={{xs: 12, md: 3}} offset={{xs:0, md:1}} alignItems="start" position="relative">
                    <Box ref={spacerRef} ></Box>
                    <Box
                        ref={ref}
                        className="sidebar"
                    >
                        <StickyLeftSidebar />
                    </Box>
                </Grid>
                <Grid size={{xs: 12, md: 7}}>
                    <Box padding={{xs: "20px 25px", lg: 0}}>
                        <Typography variant="body_h4" color="custom.black" lineHeight={1.1}>L’invenzione della luce (The invention of light)</Typography>
                        <Typography variant="title1" color="custom.black" lineHeight={1.1}>Caravaggio’s ‘Magdalene in Ecstasy’</Typography>
                        <Typography variant="body_h4" color="custom.black" lineHeight={1.1}>In conjunction with Rao Bahadur Dhurandhar’s works</Typography>
                        <Typography variant="body_h4" color="custom.black" lineHeight={1.1}>Curated by Andrea Anastasio, and Tasneem Zakaria Mehta</Typography>
                    </Box>
                    <Stack direction="row" alignItems="center" mt="40px">
                        <OrangeIcon />
                        <Typography variant="body_h4" color="custom.darkOrange" lineHeight={1.1} m="0 0 0 6px"> Oct 16 - Nov 02, 2025</Typography>
                        
                    </Stack>
                </Grid>
            </StyledGridContainer>
        </>
    )
}