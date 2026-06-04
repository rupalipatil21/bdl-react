"use client"

import { useHeaderHeight } from "@/app/context/HeaderContext"
import FourBlocks from "@/components/common/FourBlocks"
import MoreAtBdl from "@/components/common/MoreAtBdl"
import { StyledContainer } from "@/styles/common.styled"
import CalendarContent from "@/components/calendar/CalendarContent"
import { Box } from "@mui/material"

export default function Page(){
    const headerHeight = useHeaderHeight()
        return(
            <Box marginTop={`${headerHeight.headerHeight}px`}>
                <CalendarContent />
                <StyledContainer pt="30px !important">
                    <MoreAtBdl />
                    <FourBlocks />
                </StyledContainer>
            </Box>
        )
}