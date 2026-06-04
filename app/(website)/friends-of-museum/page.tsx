
'use client'
import { useHeaderHeight } from "../../context/HeaderContext";
import FourBlocks from "@/components/common/FourBlocks";
import { StyledContainer } from "@/styles/common.styled";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import CommonContent from "@/components/common/CommonContent";
import { Box } from "@mui/material";

export default function Page(){
    const headerHeight = useHeaderHeight();
    return(
        <Box marginTop={headerHeight.headerHeight+`px`}>
            <CommonContent />
            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </Box>
        
    )
}