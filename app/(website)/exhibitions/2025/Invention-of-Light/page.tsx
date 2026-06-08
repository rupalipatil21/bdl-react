"use client"
import Banner from "@/components/common/Banner";
import bannerimg from "@/public/pagesbannerimages/banner-invention-of-light.jpg"
import { useHeaderHeight } from "@/app/context/HeaderContext"; 
import FourBlocks from "@/components/common/FourBlocks";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import { StyledContainer } from "@/styles/common.styled";
import ExhibitionInnerContent from "@/components/exhibition/ExhibitionInnerContent";

export default function Page(){
    const headerHeight = useHeaderHeight()
    return(
        <>
            <Banner bannerImg={bannerimg} alt="about banner" mt={headerHeight.headerHeight} />
            <ExhibitionInnerContent />
            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
    )
}