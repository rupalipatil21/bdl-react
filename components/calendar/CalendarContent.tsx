"use client"
import { useHeaderHeight } from "@/app/context/HeaderContext";
import { useSticky } from "@/lib/useSticky";
import { AccordionUI, StyledGridContainer } from "@/styles/common.styled";
import { Grid, Box, Typography, AccordionSummary } from "@mui/material";
import StickyLeftSidebar from "../about/StickyLeftSidebar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordianDetails from "./AccordianDetails";

export default function CalendarContent() {
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
                <Box>
                    <AccordionUI defaultExpanded headerheight={headerHeight.headerHeight}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="exhibitions"
                        >
                            <Typography component="span">Exhibitions</Typography>
                        </AccordionSummary>
                        <AccordianDetails category="exhibitions"  />
                    </AccordionUI>
                    <AccordionUI defaultExpanded headerheight={headerHeight.headerHeight}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="event_programms"
                        >
                            <Typography component="span">Events & Programmes</Typography>
                        </AccordionSummary>
                        <AccordianDetails category="event_programms" /> 
                    </AccordionUI>
                    <AccordionUI defaultExpanded headerheight={headerHeight.headerHeight}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="learn"
                        >
                            <Typography component="span">Learn</Typography>
                        </AccordionSummary>
                        <AccordianDetails category="learn" />
                    </AccordionUI>
                </Box>
            </Grid>
        </StyledGridContainer>
    )
}