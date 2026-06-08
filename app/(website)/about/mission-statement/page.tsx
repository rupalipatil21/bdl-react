"use client"
import { useHeaderHeight } from "@/app/context/HeaderContext";
import Banner from "@/components/common/Banner";
import bannerimg from "@/public/about/mission-banner-small.webp"
import CommonContent from "@/components/common/CommonContent";
import FourBlocks from "@/components/common/FourBlocks";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import { StyledContainer } from "@/styles/common.styled";

export default function MissionStatement(){
    const headerHeight = useHeaderHeight()
    return(
        <>
            <Banner bannerImg={bannerimg} alt="about banner" mt={headerHeight.headerHeight} />
            <CommonContent />
            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
    )
}