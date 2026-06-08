"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import { classNames } from "primereact/utils";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import { GalleryBar, TitleContainer } from "@/styles/common.styled";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PauseIcon from '@mui/icons-material/Pause';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import { Box } from "@mui/material";
import { GalleryProp, Index, ItemTemplate } from "@/types/form";
import Image from "next/image";

export default function Gallery({ galleryimages }: GalleryProp) { 
  const [images, setImages] = useState<ItemTemplate[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [isAutoPlayActive, setAutoPlayActive] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const galleria = useRef<Galleria>(null);

  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 5 },
    { breakpoint: "960px", numVisible: 4 },
    { breakpoint: "768px", numVisible: 3 },
    { breakpoint: "560px", numVisible: 1 },
  ];

  useEffect(() => {

    const bindDocumentListeners = () => {
      document.addEventListener("fullscreenchange", onFullScreenChange);
    };

    const unbindDocumentListeners = () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
    };

    galleryimages.getImages().then((data) => setImages(data));
    bindDocumentListeners();
    return () => unbindDocumentListeners();
  }, [galleryimages]);

  const onItemChange = (e: Index) => { 
    setActiveIndex(e.index);
    if (showThumbnails) {
      setShowThumbnails(false);
    }
  }

  const onFullScreenChange = () => setFullScreen((prev) => !prev);

  const openFullScreen = () => {
    const elem = document.querySelector(".custom-galleria") as HTMLElement;
    if (elem?.requestFullscreen) elem.requestFullscreen();
  };

  const closeFullScreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
  };

  const toggleFullScreen = () => {
    if (isFullScreen) closeFullScreen();
    else openFullScreen();
  };

  const thumbnailTemplate = (item: ItemTemplate) => (
    <div className="thumbnail-wrapper">
      {/* <img src={item.thumbnailImageSrc} alt={item.alt} /> */}
      <Image
        src={item.thumbnailImageSrc!}
        alt={item.alt!}
        width={150}
        height={100}
      />
      <div className="caption">
        <h4>{item.title}</h4>
      </div>
    </div>
  );

  const itemTemplate = (item: ItemTemplate) => (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={item.itemImageSrc}
      alt={item.alt}
      style={{
        width: isFullScreen ? "100vw" : "auto",
        height: isFullScreen ? "100vh" : "auto",
        objectFit: "cover",
        maxWidth: "100%",
      }}
    />
    // <ImageThumb isfullscreen={isFullScreen}>
    //   <Image 
    //     src={item.itemImageSrc!}
    //     alt={item.alt!}
    //     fill
    //   />
    // </ImageThumb>
  );

  const renderFooter = () => {

    const autoPlayIcon = isAutoPlayActive ? <PauseIcon /> : <PlayArrowIcon />

    return (
      <GalleryBar>
        <Button icon={<ViewCompactIcon />} onClick={() => setShowThumbnails((prev) => !prev)} />
        <Button
          icon={autoPlayIcon}
          onClick={() => {
            if (!isAutoPlayActive) {
              galleria.current?.startSlideShow();
              setAutoPlayActive(true);
            } else {
              galleria.current?.stopSlideShow();
              setAutoPlayActive(false);
            }
          }}
        />
        {images.length > 0 && (
          <TitleContainer >
            <span>{activeIndex + 1}/{images.length}</span>
            <span className="title">{images[activeIndex].title}</span>
          </TitleContainer>
        )}
        <Button icon={<CopyAllIcon />} className="fullscreen-button" />
        <Button icon={<FullscreenIcon />} onClick={toggleFullScreen}  />
      </GalleryBar>
    );
  };

  return (
    <Box bgcolor="custom.grey3" position="relative" className={`galleria-wrapper ${showThumbnails ? "thumb-open" : ""}`}>
      <Galleria
        ref={galleria}
        value={images}
        activeIndex={activeIndex}
        onItemChange={onItemChange}
        showThumbnails={showThumbnails}
        showItemNavigators
        showItemNavigatorsOnHover
        numVisible={5}
        circular
        transitionInterval={3000}
        responsiveOptions={responsiveOptions}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        footer={renderFooter()}
        style={{ maxWidth: "auto", margin: "auto" }}
        className={classNames("custom-galleria", { fullscreen: isFullScreen })}
      />
    </Box>
  );
}
