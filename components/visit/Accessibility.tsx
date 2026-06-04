"use client"

import { StyledGridContainer, LinkUI, HorizontalDivider, DividerUI } from "@/styles/common.styled";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import accessibility from "@/public/icons/accessbility.svg"
import tour from "@/public/icons/tours.svg"
import { useHeaderHeight } from "@/app/context/HeaderContext";

export default function Accessibility(){
    const headerHeight = useHeaderHeight()
    return(
        <>
            <StyledGridContainer padding={{xs: "0px 15px", lg: 0}} container mt={"0 !important"} headerheight={headerHeight.headerHeight} gap={{xs: "15px", md: 0 }}>
                <Grid size={{xs: 12, md: 6}} id="accessibility">
                    <Stack direction="row" columnGap={1} alignItems="center" mb="10px">
                        <Image src={accessibility} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Accessibility
                        </Typography> 
                    </Stack> 
                    <Typography variant="title1" color="custom.black" mb={0}>
                        By Bus
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Towards Veer Mata Jijabai Bhosale Udyan (Rani Baug) <br />
                        1, 3, 5, 6 Ltd, 7 Ltd, 8 Ltd, 9, 11 Ltd, 15, 18, 19 Ltd, 21 Ltd, 22 Ltd, 25 Ltd, 50, 51, 64, 67, 69, 126, 134, 168, 50 Ltd.
                    </Typography>
                    
                    <Typography variant="title1" color="custom.black" mb={0}>
                        By Train
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Central Line - Byculla (East) Station, 2 mins walk <br />
                        Western Line - Mahalaxmi Station, 10 mins by taxi via Jacob Circle <br />
                        Harbour Line - Reay Road, 5 mins by taxi, 10 min walk
                    </Typography>
                    
                    <Typography variant="title1" color="custom.black" mb={0}>
                        Parking
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Pay-and-park facilities are available within the compound for 2 wheelers, cars and buses. Kindly note that parking may not be available between 5 pm to 6:30 pm due to traffic regulations at the Zoo entrance.
                    </Typography>
                    
                    <Typography variant="title1" color="custom.black" mb={0}>
                        Visitors with Disabilities
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black" >
                        Kindly note that currently only the ground floor of the Museum is wheelchair friendly and accessible through a ramp at the entrance of the Museum. The Museum Plaza, including visitor facilities such as the Cafe, Shop and washrooms are accessible externally through a separate entrance. If you need special assistance during your visit, please contact the Museum ahead of your visit or request assistance at the ticket counter. We are also working towards including braille labels and gallery sheets which are presently not available. The Museum is committed to ensuring a positive experience to visitors with diverse needs.
                    </Typography>

                </Grid>
                <Grid size={{xs: 12, md: 6}} id="taketour" >
                    <Stack direction="row" columnGap={1} alignItems="center" mb="10px">
                        <Image src={tour} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Take a Tour
                        </Typography> 
                    </Stack> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        The Education team offers engaging public and private guided tours of the Museum and ongoing special exhibitions. To organise virtual tours for educational institutions, please contact us.
                    </Typography>

                    <Typography variant="title1" color="custom.black" mb={0}>
                        Free Museum Tours
                    </Typography> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Join us for free public tours every weekend to explore the Museum’s collection, history, architecture, and contemporary exhibitions. These tours are designed for visitors of all backgrounds, ages, and interests.
                    </Typography>

                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Museum entry ticket applicable. No prior registration required. For groups of more than 7 people, please write to us at
                        <LinkUI href="mailto:education@bdlmuseum.org."> education@bdlmuseum.org.</LinkUI>
                    </Typography>

                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Every Saturday & Sunday <br />
                        11:30 am – English <br />
                        12:30 pm – Hindi/Marathi
                    </Typography>

                    <Typography variant="title1" color="custom.black" mb={0}>
                        Private Tours
                    </Typography> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Groups may book themed tours on request. Particularly popular are tours that focus on the history, development and cultural heritage of Mumbai. Groups may also book interpretive tours of the Museum’s temporary special exhibitions. Our tours can be conducted for audiences of varied age and interests.
                    </Typography>
                    <Stack direction="row" alignItems="center" mb="26px" flexWrap="wrap">
                        <LinkUI href="/learn/school-and-ngos">School Groups </LinkUI><DividerUI orientation="vertical" />
                        <LinkUI href="/learn/colleges-and-young-adults">College Groups  </LinkUI><DividerUI orientation="vertical" />
                        <LinkUI href="/learn/private-groups"> Private Groups </LinkUI> <DividerUI orientation="vertical" />
                    </Stack>
                </Grid>
                <Grid size={12}><HorizontalDivider /></Grid>
            </StyledGridContainer>
        </>
    )
}