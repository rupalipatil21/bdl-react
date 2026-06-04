"use client"

import { ArrowNext, ArrowPrev } from "@/styles/home.styled";
import Image from "next/image"
import arrowleft from "@/public/moreatbdl/left.png"
import arrowright from "@/public/moreatbdl/right.png"
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoreAtBdlSlider, SliderImageBox } from "@/styles/common.styled";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { moreAtBdlData } from "@/lib/common.constants";

function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <ArrowNext onClick={onClick} right={{ xs: "-25px !important", md: "-38px !important"}}>
      <Image src={arrowright} alt="arrow right" height="23" />
    </ArrowNext>
  );
} 

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <ArrowPrev onClick={onClick} left={{xs: "-25px !important", md: "-38px !important"}} >
      <Image src={arrowleft} alt="arrow left" height="23" />
    </ArrowPrev>
  );
}

export default function MoreAtBdl(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return(
        <>
        <MoreAtBdlSlider>
            <Typography variant="left_title" color="custom.black" mb="20px">More at BDL</Typography>
            <Box>
                <Slider {...settings}> 
                    {moreAtBdlData.map((item,index)=>(
                        <Link href={item.link} key={index}>
                            <SliderImageBox>
                                <Image src={item.img} fill alt="slider 1" style={{ objectFit: 'cover' }} />
                            </SliderImageBox>
                            <Typography variant="caption1" color="custom.white">{item.caption}</Typography>
                        </Link>
                    ))}
                </Slider>
            </Box>
        </MoreAtBdlSlider>
        </>
    )
}