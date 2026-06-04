"use client"

import { earlyModern } from "@/lib/earlyModernPeriod";
import { CloseButton, ContentWrapper, HorizontalDivider, StoryDialog } from "@/styles/common.styled"
import { CollectionPopupProps } from "@/types/form";
import { DialogContent, Grid, Typography } from "@mui/material"
import Image from "next/image";
import { useState } from "react";

export default function EarlyModernPeriod(){
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<CollectionPopupProps | null>(null);
    console.log(selectedItem);
    

    const handleClickOpen = (data:CollectionPopupProps) => {
        setSelectedItem(data)
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const splitText = selectedItem != null ? selectedItem?.date.split("\n") : undefined;
    const splitDetails = selectedItem?.details.split("\n");
    return(
        <ContentWrapper>
            <Typography variant="title1" color="custom.black">Early Modern Period</Typography>
            <Typography variant="subtitle3" color="custom.black">The Museum&apos;s extraordinary collection of models and dioramas served to document the life and culture of 19th century Mumbai and is an important extension of the colonial project to capture in minute detail the people of India. Produced under the tutelage of the Museum&apos;s curators Ernst Fern and C. L. Burns, both of whom were also principals of the Sir J. J. School of Art, the collection also forms a unique art historical reference to the larger genre of Company School painting. ‘Company painting’ refers to the hybrid style that emerged during the early 18th to the 19th centuries. Used to document different aspects of Indian life such as festivals, occupations, communities, local rulers and monuments, the style was naturalistic and displays European influence on Indian art.</Typography>
            <Typography variant="subtitle3" color="custom.black">From the mid-19th century, schools of Art and technical training established by the British in India, imparted western art education to Indian artists and craftsmen. Closely associated with the earliest museums, these institutions critically impacted the development of art practice in India.</Typography>
            <Typography variant="subtitle3" color="custom.black">In Mumbai, the Sir Jamsetjee Jeejeebhoy School, then popularly known as the Bombay School of Art, opened in 1856 with the intention of teaching students the ‘science of art’, or the technical skills required to become master draughtsmen. The School shared a close association with the Museum, then known as the Victoria and Albert Museum, with several principals of the School serving simultaneously as the Museum’s curators. As a result, the Museum became a showcase for the new designs, decorative art products and modes of representation in painting and sculpture that were created by the students of the School. Some of these students later became Mumbai’s most renowned artists like Rao Bahadur M. V. Dhurandhar, Baburao Sadwelkar and P. A. Dhond.</Typography>
            <HorizontalDivider />

            <Grid container columnSpacing="30px" rowSpacing={2}>
                {
                    earlyModern.map((data, index) => {
                        const splitedtext = data.date.split("\n");
                        return(
                            <Grid size={{xs: 12, md: 3}} key={index}>
                                <Image src={data.img} width={200} height={168} alt="Bombay history" onClick={() => handleClickOpen(data)} />
                                <Typography variant="menuLink"><b>{data.name}</b> <br /> <i>{splitedtext[0]} <br />{splitedtext[1]}</i></Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <StoryDialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <CloseButton aria-label="close" onClick={handleClose}>×</CloseButton>
                <DialogContent>
                    <Grid container columnSpacing={5} alignItems="center">
                        <Grid size={6}>
                            { selectedItem && <Image src={selectedItem?.popupimg} width={500} height={251} alt="" /> }
                        </Grid>
                        <Grid size={6}>
                            <Typography variant="menuLink" margin="10px 0"><b>{selectedItem?.name}</b> <br /> <i>{splitText && splitText[0]}<br />{splitText && splitText[1]}</i></Typography>
                            {
                                splitDetails?.map((detail, index: number)=>(
                                    <Typography variant="subtitle3" key={index} mb="10px">{detail}</Typography>
                                ))
                            }
                        </Grid>
                    </Grid>
                </DialogContent>
            </StoryDialog>
        </ContentWrapper>
    )
}