"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CaptionBox, CarouselCaption, CarouselCaptionH1, CarouselCaptionH2, SliderBox, SliderImage } from "@/styles/common.styled";
import Link from "next/link";
import { CarouselProps } from "@/types/form";

export default function Carousel({settings, images, homeslider}:CarouselProps) {
    return(
        <>
        <SliderBox className="slider-container" homeslider={homeslider}>
            <Slider {...settings}>
                {images.map(({ src, caption, caption1, caption2, objectPosition }, i:number) => (
                <Link href="#" target="_blank" key={i}>  
                    <SliderImage imgsrc={src} objectPosition={objectPosition ? objectPosition : undefined}>
                        <CaptionBox>
                            {caption && <CarouselCaption>{ caption} </CarouselCaption>}
                            {caption1 && <CarouselCaptionH1>{ caption1} </CarouselCaptionH1>}
                            {caption2 && <CarouselCaptionH2>{ caption2} </CarouselCaptionH2>}
                        </CaptionBox>
                    </SliderImage>
                </Link>
                ))}
            </Slider>
        </SliderBox>
        </>
    )
}