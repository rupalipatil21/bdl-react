
'use client'
import Banner from "@/components/common/Banner";
import aboutbanner from "@/public/pagesbannerimages/aboutus/Museum-Mumbai-Gallery-banner.jpg"
import { useHeaderHeight } from "../../context/HeaderContext";
import FourBlocks from "@/components/common/FourBlocks";
import { StyledContainer } from "@/styles/common.styled";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import CommonContent from "@/components/common/CommonContent";

export default function Page(){
    const headerHeight = useHeaderHeight();
    return(
        <>
            <Banner bannerImg={aboutbanner} alt="about banner" mt={headerHeight.headerHeight} />
            <CommonContent />
            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
        
    )
}