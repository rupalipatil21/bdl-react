"use client"
import { useHeaderHeight } from "@/app/context/HeaderContext";
import { BannerContainer } from "@/styles/common.styled";
import { Bannerimage } from "@/types/form";
import Image from "next/image";

export default function Banner({ bannerImg, alt}: Bannerimage){
    const headerHeight = useHeaderHeight();
    return(
        <BannerContainer maxWidth={false} disableGutters headerheight={headerHeight.headerHeight}>
            <Image src={bannerImg} alt={alt} />
        </BannerContainer>
    )
}