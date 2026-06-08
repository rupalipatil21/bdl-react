'use client'
import Banner from "@/components/common/Banner";
import bannerimg from "@/public/pagesbannerimages/learn/families-banner-small.jpg"
import FourBlocks from "@/components/common/FourBlocks";
import { StyledContainer } from "@/styles/common.styled";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import CommonContent from "@/components/common/CommonContent";
import { useHeaderHeight } from "@/app/context/HeaderContext";

export default function Page(){
    const headerHeight = useHeaderHeight();
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