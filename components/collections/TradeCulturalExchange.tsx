"use client"

import { tradeCulturalExchange } from "@/lib/tradeCulturalExchange";
import { CloseButton, ContentWrapper, HorizontalDivider, StoryDialog } from "@/styles/common.styled"
import { CollectionPopupProps } from "@/types/form";
import { DialogContent, Grid, Typography } from "@mui/material"
import Image from "next/image";
import { useState } from "react";

export default function TradeCulturalExchange(){
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
            <Typography variant="title1" color="custom.black">Trade & Cultural Exchange</Typography>
            <Typography variant="subtitle3" color="custom.black">Trade was always the dominant impulse in colonial India. At the height of Industrial Revolution in 1851, Prince Albert, consort of Queen Victoria, conceived of international exhibitions to display industrial products from British colonies, a trend that soon spread to other European nations. Trade in Indian fine and decorative arts was stimulated by these international exhibitions and fairs of the late 19th and early 20th centuries, which along with the Arts and Crafts movement in England, created international interest in Indian design and craftsmanship. Indian artisans were asked to produce objects of art to be sent all over the world for these international exhibitions.</Typography>
            <Typography variant="subtitle3" color="custom.black">In response to a growing market, experiments to modify Indian fine and decorative art products to suit European and anglicised Indian elite tastes were conducted by workshops and technical schools established by the British to train Indian artisans and craftsmen. From these schools and workshops emerged products for trade that merged Indian design with European form.</Typography>
            <Typography variant="subtitle3" color="custom.black">Copies of the industrial art products sent to the Paris Universal Exhibition in 1855 forms the nucleus of the collection in the Museum’s Industrial Arts Gallery.</Typography>
            <HorizontalDivider />

            <Grid container columnSpacing="30px" rowSpacing={2}>
                {
                    tradeCulturalExchange.map((data, index) => {
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
                                splitDetails?.map((detail,index: number)=>(
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