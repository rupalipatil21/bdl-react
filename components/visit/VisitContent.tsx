"use client"
import { CafeStack, StyledGridContainer } from "@/styles/common.styled";
import { Box, Grid, Stack, Typography } from "@mui/material";
import StickyLeftSidebar from "../about/StickyLeftSidebar";
import { useHeaderHeight } from "@/app/context/HeaderContext";
import { useSticky } from "@/lib/useSticky";
import direction from "@/public/icons/direction.svg"
import Image from "next/image";
import Address from "./Address";
import Timings from "./Timings";
import Accessibility from "./Accessibility";
import AudioGuide from "./AudioGuide";
import MusuemPolicies from "./MusuemPolicies";

export default function VisitContent(){
    const headerHeight = useHeaderHeight()
    const { ref, spacerRef } = useSticky({
        offsetTop: headerHeight.headerHeight,
        bottoming: true,
        spacer: true,
    });
    return(
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
            <Grid size={{xs: 12, md: 7}} >
                <CafeStack padding={{xs: "20px 25px", lg: "0 15px"}} id="directions" headerheight={headerHeight.headerHeight} >
                    <Stack direction="row" columnGap={1} alignItems="center" >
                        <Image src={direction} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Directions
                        </Typography> 
                    </Stack>
                </CafeStack>
                <Address />
                <Timings />
                <Accessibility />
                <AudioGuide />
                <MusuemPolicies />
            </Grid>
        </StyledGridContainer>
    )
}