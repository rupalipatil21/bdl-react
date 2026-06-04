"use client"

import { modernContemporary } from "@/lib/modernContemporary";
import { CloseButton, ContentWrapper, HorizontalDivider, LinkUI, StoryDialog } from "@/styles/common.styled"
import { CollectionPopupProps } from "@/types/form";
import { DialogContent, Grid, Typography } from "@mui/material"
import Image from "next/image";
import { useState } from "react";

export default function ModernContemporary(){
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<CollectionPopupProps | null>(null);

    const handleClickOpen = (data: CollectionPopupProps) => {
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
            <Typography variant="title1" color="custom.black">Modern & Contemporary</Typography>
            <Typography variant="subtitle3" color="custom.black">Since the establishment of the Museum Trust in 2003, the Museum has augmented its permanent collection with new acquisitions, to create a comprehensive representation of the city’s art and culture from the 19th century onwards, including contemporary art.</Typography>
            <Typography variant="subtitle3" color="custom.black">A collection of paintings by early 20th century J.J. School artists offer valuable insights into the School’s formative period and the beginnings of Indian modernism, complementing the Museum’s permanent collection from the early modern period. These works are illustrative of the revivalist, ‘Indian Renaissance’ art movement of the time, which drew inspiration from classical Indian art practices, specifically, the earlier tradition of Rajput painting. Artworks by Rustom Siodia, Keshav Phadke, Kamalakant Save and Subhadra Anandkar are a part of this collection.</Typography>
            <Typography variant="subtitle3" color="custom.black">Through its robust exhibition programme, the Museum invites artists to respond to the Museum’s collection, history and archives. The Museum has acquired works by contemporary artists such as Sheba Chhachhi, Atul Dodiya, Archana Hande, Nalini Malani, Jitish Kallat, Reena Saini Kallat, Prajakta Potnis, Ranjani Shettar, Praneet Soi, L. N. Tallur, and Thukral and Tagra.</Typography>
            <Typography variant="subtitle3" color="custom.black">To know more about the Museum’s contemporary art collection, visit the Museum’s page on <LinkUI href="https://artsandculture.google.com/partner/dr-bhau-daji-lad-mumbai-city-museum" target="_blank">Google Arts and Culture</LinkUI></Typography>
            <HorizontalDivider />

            <Grid container columnSpacing="30px" rowSpacing={2}>
                {
                    modernContemporary.map((data, index) => {
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