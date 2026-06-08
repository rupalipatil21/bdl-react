"use client"
import { BannerContainer } from "@/styles/common.styled";
import { Bannerimage } from "@/types/form";
import Image from "next/image";

export default function Banner({ bannerImg, alt, mt}: Bannerimage){
    return(
        <BannerContainer maxWidth={false} disableGutters headerheight={mt}>
            <Image src={bannerImg} alt={alt} />
        </BannerContainer>
    )
}