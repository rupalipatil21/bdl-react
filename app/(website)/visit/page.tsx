"use client"
import Banner from "@/components/common/Banner";
import bannerimg from "@/public/pagesbannerimages/visit/visit-banner-small.jpg"
import { useHeaderHeight } from "../../context/HeaderContext";
import FourBlocks from "@/components/common/FourBlocks";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import { StyledContainer } from "@/styles/common.styled";
import VisitContent from "@/components/visit/VisitContent";

export default function Page(){
    const headerHeight = useHeaderHeight()
    return(
        <>
            <Banner bannerImg={bannerimg} alt="about banner" mt={headerHeight.headerHeight} />
            <VisitContent />
            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
    )
}