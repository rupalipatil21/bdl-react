"use client"
import CommonContent from "@/components/common/CommonContent";
import FourBlocks from "@/components/common/FourBlocks";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import { CarouselCaptionRight, DotBox, SliderBox, StyledContainer } from "@/styles/common.styled";
import { List, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderImage } from "@/styles/common.styled";
import Link from "next/link";
import google1 from "@/public/explore/google-art/publicationnews.jpg"
import google2 from "@/public/explore/google-art/b40.jpg"
import google3 from "@/public/explore/google-art/wewearculture-banner.jpg"
import Image from "next/image";
import partnership from "@/public/explore/partnership.jpg"

export default function Page() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots:React.ReactNode) => (
      <DotBox>
          <List>
          {dots}
          </List>
      </DotBox>
      ),
  };
    return(
        <>
        <SliderBox className="slider-container google-slider" homeslider={true}>
                <Slider {...settings}>
                        <SliderImage imgsrc={google1.src} className="slide-image">
                            <CarouselCaptionRight>
                                <Typography variant="font_18" color="custom.black">Digital Exhibition</Typography>
                                <Typography variant="captionTitle" color="custom.black">A Hall of Wonder</Typography>
                                <Typography>The exhibition celebrates 150 years of <br /> Dr. Bhau Daji Lad Museum, the first <br /> Museum in Mumbai, India</Typography>
                                <Typography variant="captionTitle" color="custom.black"><Link href="#">Click here to Visit!</Link></Typography>
                                <Stack direction="row" alignItems="center">
                                    <Typography variant="font_18" color="custom.black" mb="0 !important">
                                    In partnership with Google Arts & Culture</Typography>
                                    <Image src={partnership.src} alt="partnership" width={30} height={36} />
                                </Stack>
                            </CarouselCaptionRight>
                        </SliderImage>
                        <SliderImage imgsrc={google2.src}>
                        </SliderImage>
                        <SliderImage imgsrc={google3.src}>
                        </SliderImage>
                </Slider>
            </SliderBox>
            <CommonContent />
            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
    )
}