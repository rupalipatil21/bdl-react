"use client"

import { useToggleState } from "@/hooks/useToggleState";
import { ContentBox, DescriptionBox, DividerUI, HorizontalDivider, ImageUI, LinkUI, MoreText, ToggleLink } from "@/styles/common.styled"
import { Box, Grid, Stack, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Gallery from "../common/Gallery";
import { collegesImages } from "@/lib/galleryimages";
import { collegesTourDetails, collegesWorkshopDetails } from "@/lib/learnData";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function CollegesYoungAdults(){
    const { isExpanded, handleClickToggle } = useToggleState();
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Colleges & Young Adults</Typography>
                <Stack direction="row" alignItems="center" mb="10px" flexWrap="wrap">
                    <LinkUI href="#section1">Workshops  </LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section2"> Guided Tours</LinkUI>
                </Stack>

                <Typography variant="subtitle3" color="custom.black">
                    The Museum invites college students to engage with its collections, history and exhibitions through interpretive gallery tours and workshops. Especially popular are sessions focused on the history, development and heritage of Mumbai, decorative art traditions and contemporary art practice, and museum interpretation and curating using the Dr. Bhau Daji Lad Museum as a case study.
                </Typography>
                <HorizontalDivider />

                <Typography variant="title1" color="custom.black" mb={2}>Workshops</Typography>

                <Box id="readmore" mb={5}>
                    <ToggleLink fontSize={16} fontWeight={500} onClick={()=>handleClickToggle("readmore")}>
                        Workshop Details
                        {isExpanded["readmore"] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </ToggleLink>

                    {
                        isExpanded["readmore"] ? 
                        <MoreText>
                            {
                                collegesWorkshopDetails.map((tour, index) => (
                                    <React.Fragment key={index}>
                                    <Grid container spacing={4}>
                                        <Grid size={{ xs: 12, md: 5 }}>
                                            <ImageUI src={tour.img} alt="Article Image" width="458" height="277" />
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 7 }}>
                                            <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>{tour.title}</b></Typography>
                                            <Typography variant="subtitle3" mb="10px">{tour.subtitle}</Typography>
                                        </Grid>
                                    </Grid>
                                    <HorizontalDivider />
                                    </React.Fragment>
                                ))
                            }
                        </MoreText>
                        : ""
                    }
                </Box>
                
                <Typography variant="subtitle3" color="custom.black" mb="10px"><b>Registration Details</b><br /><b>Duration of workshops: </b>2 hours Conducted on request, as per availability. Weekdays only, except Wednesdays. <br /> <b>Recommended number of participants per session:</b> max. 40.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Charges: </b><br /><b>Private Schools</b> (CBSE, ICSE, State board | up to Grade XII) - Rs 150 per student, museum entry ticket applicable. <br />Min. 20 students. INR 3000 (for 20 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Private Schools </b> (IB board | up to Grade XII) - Rs 250 per student, museum entry ticket applicable. <br />Min. 20 students. INR 5000 (for 20 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Colleges </b> (above Grade XII) - Rs 250 per student, museum entry ticket applicable. <br />Min. 20 students. INR 5000 (for 20 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>BMC schools /NGOs</b> - Free, museum entry ticket applicable for teachers.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>CSR Groups: </b> Rs 350 per participant, museum entry ticket applicable. <br />Min. 20 participants. INR 7000 (for 20 participants) must be paid in case of a smaller group</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Language: </b> English, Hindi and Marathi, All materials provided.</Typography>
                <Typography variant="subtitle3" color="custom.black" mb={4}><b>Contact: </b> For more information please contact <LinkUI href="mailto:education@bdlmuseum.org">education@bdlmuseum.org</LinkUI> /+91 22 23731234</Typography>
                
                <HorizontalDivider />
                <Typography variant="body_h2" color="custom.black" mb="10px">Guided Tours</Typography>
                <Typography variant="subtitle3" color="custom.black" mb="10px">Educational groups may book themed tours, which are curriculum and age appropriate, on request. Particularly popular are tours that focus on the history, development and cultural heritage of Mumbai. Groups may also book interpretive tours of the Museum’s temporary special exhibitions.</Typography>
                
                <Box id="readmore" mb={5}>
                    <ToggleLink fontSize={16} fontWeight={500} onClick={()=>handleClickToggle("readmore2")}>
                        Tours Details
                        {isExpanded["readmore2"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>

                    {
                        isExpanded["readmore2"] ? 
                        <MoreText>
                            {collegesTourDetails.map((workshop, index) => (
                                    <React.Fragment key={index}>
                                    <Grid container spacing={4}>
                                        <Grid size={{ xs: 12, md: 5 }}>
                                            <ImageUI src={workshop.img} alt="Article Image" width="458" height="277" />
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 7 }}>
                                            <Typography variant="body_h2" color="cusotm.black" lineHeight={1.43}><b>{workshop.title}</b></Typography>
                                            <DescriptionBox fontSize={14} color="custom.black" dangerouslySetInnerHTML={{ __html: workshop.subtitle }} whiteSpace="pre-line"></DescriptionBox>
                                        </Grid>
                                    </Grid>
                                    <HorizontalDivider />
                                    </React.Fragment>
                                ))
                            }
                            
                        </MoreText>
                        : ""
                    }
                </Box>

                <Typography variant="subtitle3" color="custom.black" mb="10px"><b>Registration Details</b><br /><b>Duration: </b>1 hour. Conducted on request, as per availability. Weekdays only, except Wednesdays. <br /><b>Language: </b> English, Hindi and Marathi <br /><b>Contact: </b> For more information please contact <LinkUI href="mailto:education@bdlmuseum.org">education@bdlmuseum.org</LinkUI> /+91 22 23731234</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Charges: </b><br /><b>Private Schools</b> (up to Grade XII) - Rs 20 per student, museum entry ticket applicable. <br />Min. 30 students. INR 600 (for 30 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Colleges </b> (above Grade XII) - Rs 40 per student, museum entry ticket applicable. <br />Min. 20 students. INR 800 (for 20 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>BMC schools /NGOs</b> - Free, museum entry ticket applicable for teachers.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>CSR Groups: </b> Rs 200 per participant, museum entry ticket applicable.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Language: </b> Rs 200 per participant, museum entry ticket applicable.</Typography>
                <Typography variant="subtitle3" color="custom.black" mb={4}><b>Contact: </b> For more information please contact <LinkUI href="mailto:education@bdlmuseum.org">education@bdlmuseum.org</LinkUI> /+91 22 23731234</Typography>

                <Typography variant="body_h2" color="custom.black" mb="10px">Image Gallery</Typography>
                <Gallery galleryimages={collegesImages} />
            </ContentBox>
        </>
    )
}