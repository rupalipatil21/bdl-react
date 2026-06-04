"use client"

import { bombayHistory } from "@/lib/bombayHistory";
import { CloseButton, ContentWrapper, HorizontalDivider, StoryDialog } from "@/styles/common.styled"
import { CollectionPopupProps } from "@/types/form";
import { DialogContent, Grid, Typography } from "@mui/material"
import Image from "next/image";
import { useState } from "react";

export default function BombayHistory(){
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<CollectionPopupProps | null>(null);

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
            <Typography variant="title1" color="custom.black">Mumbai (Bombay) History</Typography>
            <Typography variant="subtitle3" color="custom.black">The Museum’s collection of miniature clay models, dioramas, maps, lithographs, photographs and rare books document and illustrate the life of the people of Mumbai and the history of the city from the late 18th to early 20th centuries.</Typography>
            <Typography variant="subtitle3" color="custom.black">In early 1900s the curators envisioned the Museum to be a centre for the collection and exhibition of pictorial records and antiquities of the history of the city and the neighbourhood in which the Museum was situated. A collection of facsimiles of maps, plans, prints and photographs of the islands of Bombay (now Mumbai) were procured. This collection was opened to the public in 1918. Dated between 1600 and 1900, the collection records the architectural history of the city and its evolution from seven islands to a vibrant urban centre or the Urbs Prima in Indis (first city in India) by the mid 19th century. It also chronicles the evolution in geography that resulted from invasions, economic growth and urban planning. On display are maps depicting the development of Bombay from the late 17th – early 20th centuries.</Typography>
            <Typography variant="subtitle3" color="custom.black">The collection includes models of the earliest boats in the city’s harbour, the first textile mills in Worli and a diorama of Bombay Castle, the administrative headquarters at the heart of the British Fort.</Typography>
            <Typography variant="subtitle3" color="custom.black">The Museum’s collection of glass negatives is a visual record of 19th century Mumbai. The collection has more than 1500 glass negatives and documents various aspects of the city including architecture, prominent citizens and old city views.</Typography>
            <HorizontalDivider />

            <Grid container columnSpacing="30px" rowSpacing={2}>
                {
                    bombayHistory.map((data, index) => {
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
                                splitDetails?.map((detail, index)=>(
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