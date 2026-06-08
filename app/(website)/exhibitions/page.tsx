"use client"
import Banner from "@/components/common/Banner";
import bannerimg from "@/public/pagesbannerimages/banner-invention-of-light.jpg"
import { useHeaderHeight } from "../../context/HeaderContext";
import FourBlocks from "@/components/common/FourBlocks";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import { StyledContainer } from "@/styles/common.styled";
import ExhibitionContent from "@/components/exhibition/ExhibitionContent";
import CurrentExhibition from "@/components/exhibition/CurrentExhibition";
import PastExhibition from "@/components/exhibition/PastExhibition";

export default function Page(){
    const headerHeight = useHeaderHeight()
    return(
        <>
            <Banner bannerImg={bannerimg} alt="about banner" mt={headerHeight.headerHeight} />
            <ExhibitionContent />
            <CurrentExhibition />
            <PastExhibition />
            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
    )
}