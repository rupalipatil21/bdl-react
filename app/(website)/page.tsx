"use client"
import Carousel from "@/components/common/Carousel";
import { DotBox, StyledContainer } from "@/styles/common.styled";
import { List } from "@mui/material";
import HomeExhibition from "@/components/home/HomeExhibition";
import HomeUpcoming from "@/components/home/HomeUpcoming";
import LearnHome from "@/components/home/LearnHome";
import VirtualTour from "@/components/home/VirtualTour";
import MuseumHome from "@/components/home/MuseumHome";
import FourBlocks from "@/components/common/FourBlocks";
import InstagramFeed from "@/components/home/InstagramFeed";
import { homeCarouselImages } from "@/lib/carouselImages";

export default function Home() {

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
  return (
    <>
      <Carousel settings={settings} images={homeCarouselImages} homeslider={true} />
      <StyledContainer>
        <HomeExhibition />
        <HomeUpcoming />
        <LearnHome />
        <VirtualTour />
        <MuseumHome />
        <FourBlocks />
        <InstagramFeed />
      </StyledContainer>
    </>
  );
}
