"use client"

import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowNext, ArrowPrev, InstaBox, InstaFeed } from "@/styles/home.styled";
import { Grid, Typography } from "@mui/material";
import feed1 from "@/public/instafeed/instafeed1.webp"
import feed2 from "@/public/instafeed/instafeed2.webp"
import feed3 from "@/public/instafeed/instafeed3.webp"
import feed4 from "@/public/instafeed/instafeed4.webp"
import Image from "next/image";
import arrowleft from "@/public/carousel-left-arrow.png"
import arrowright from "@/public/carousel-right-arrow.png"

function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <ArrowNext onClick={onClick}>
      <Image src={arrowright} alt="arrow right" />
    </ArrowNext>
  );
} 

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <ArrowPrev onClick={onClick}
 >
    <Image src={arrowleft} alt="arrow left" />
    </ArrowPrev>
  );
}
export default function InstagramFeed(){
     const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,  
    };
    return(
        <InstaFeed>
            <Typography variant="font_22" color="custom.black">Connect with us</Typography>
            <Grid container>
                <Grid size={{xs:7,sm: 8}}>
                    <InstaBox>
                        <Slider {...settings}>
                                <Image src={feed1} alt="slider 1" />
                                <Image src={feed2} alt="slider 2" />
                                <Image src={feed3} alt="slider 3" />
                                <Image src={feed4} alt="slider 4" />
                        </Slider>
                        <Typography variant="font_14" color="custom.black">INSTAGRAM</Typography>
                    </InstaBox>
                </Grid>
                <Grid size={1}></Grid>
                <Grid size={{xs:4,sm: 3}}>

                </Grid>
            </Grid>
        </InstaFeed>
    )
}