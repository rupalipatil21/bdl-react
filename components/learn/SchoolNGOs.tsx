"use client"

import { useToggleState } from "@/hooks/useToggleState";
import { ContentBox, DescriptionBox, DividerUI, HorizontalDivider, ImageUI, LinkUI, MoreText, ToggleLink } from "@/styles/common.styled"
import { Box, Grid, Stack, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Gallery from "../common/Gallery";
import { schoolngosImages } from "@/lib/galleryimages";
import { tourDetails, workshopDetails } from "@/lib/learnData";
import React from "react";

export default function SchoolNGOs(){
    const { isExpanded, handleClickToggle } = useToggleState();
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Schools & NGOs</Typography>
                <Stack direction="row" alignItems="center" mb="10px" flexWrap="wrap">
                    <LinkUI href="#section1">Guided Tours  </LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section2"> Workshops  </LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section3"> CAS at Museum </LinkUI> <DividerUI orientation="vertical" />
                    <LinkUI href="#section4">Workshops for Teachers</LinkUI>
                </Stack>

                <Typography variant="subtitle3" color="custom.black">
                    The Museum offers schools and NGO groups the opportunity to critically and creatively engage with its permanent collections and contemporary exhibitions through interpretive gallery visits and workshops.
                </Typography>
                <HorizontalDivider />

                <Typography variant="title1" color="custom.black" mb={2}>Guided Tours</Typography>
                <Typography variant="subtitle3" color="custom.black" mb={2}>Educational groups may book themed tours, which are curriculum and age appropriate, on request. Particularly popular are tours that focus on the history, development and cultural heritage of Mumbai. Groups may also book interpretive tours of the Museum’s temporary special exhibitions. Our tours can be conducted for audiences of varied ages and interests</Typography>


                <Box id="readmore" mb={5}>
                    <ToggleLink fontSize={16} fontWeight={500} onClick={()=>handleClickToggle("readmore")}>
                        Tours Details
                        {isExpanded["readmore"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>

                    {
                        isExpanded["readmore"] ? 
                        <MoreText>
                            {
                                tourDetails.map((tour, index) => (
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
                
                <Typography variant="subtitle3" color="custom.black" mb="10px"><b>Registration Details</b><br /><b>Duration: </b>1 hour. Conducted on request, as per availability. Weekdays only, except Wednesdays.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Charges: </b><br /><b>Private Schools</b> (up to Grade XII) - Rs 20 per student, museum entry ticket applicable. <br />Min. 30 students. INR 600 (for 30 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Colleges </b> (above Grade XII)  - Rs 40 per student, museum entry ticket applicable. <br />Min. 20 students. INR 800 (for 20 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>BMC schools</b> - Free, museum entry ticket applicable for teachers.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>CSR Groups: </b> Rs 200 per participant, museum entry ticket applicable.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Language: </b> English, Hindi and Marathi</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Contact: </b> For more information please contact <LinkUI href="mailto:education@bdlmuseum.org">education@bdlmuseum.org</LinkUI> /+91 22 23731234</Typography>
                
                <HorizontalDivider />
                <Typography variant="body_h2" color="custom.black" mb="10px">Workshops</Typography>
                <Typography variant="subtitle3" color="custom.black" mb="10px">All workshops are pre-registered and include an interactive discussion focused on a particular display or collection, followed by an associated creative activity. Popular workshops inspired by our permanent collection include silver-work, pottery, mapping memories and spaces, Ragamala painting, and puppet making.</Typography>
                
                <Box id="readmore" mb={5}>
                    <ToggleLink fontSize={16} fontWeight={500} onClick={()=>handleClickToggle("readmore2")}>
                        Workshop Details
                        {isExpanded["readmore2"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>

                    {
                        isExpanded["readmore2"] ? 
                        <MoreText>
                            {workshopDetails.map((workshop, index) => (
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

                <Typography variant="subtitle3" color="custom.black" mb="10px"><b>Registration Details</b><br /><b>Duration: </b>2 hours. Conducted on request, as per availability. Weekdays only, except Wednesdays. <br /> <b>Recommended number of participants per session:</b> max. 40.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Charges: </b><br /><b>Private Schools</b> (CBSE, ICSE, State board | up to Grade XII) - Rs 150 per student, museum entry ticket applicable. <br />Min. 20 students. INR 3000 (for 20 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Private Schools </b> (IB board | up to Grade XII) - Rs 250 per student, museum entry ticket applicable. <br />Min. 20 students. INR 5000 (for 20 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Colleges </b> (above Grade XII) - Rs 250 per student, museum entry ticket applicable. <br />Min. 20 students. INR 5000 (for 20 participants) must be paid in case of a smaller group.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>BMC schools</b> - Free, museum entry ticket applicable for teachers.</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>CSR Groups: </b> Rs 350 per participant, museum entry ticket applicable. <br />Min. 20 participants. INR 7000 (for 20 participants) must be paid in case of a smaller group</Typography>
                <Typography variant="subtitle3" color="custom.black"><b>Language: </b> English, Hindi and Marathi, All materials provided.</Typography>
                <Typography variant="subtitle3" color="custom.black" mb={4}><b>Contact: </b> For more information please contact <LinkUI href="mailto:education@bdlmuseum.org">education@bdlmuseum.org</LinkUI> /+91 22 23731234</Typography>

                <Typography variant="body_h2" color="custom.black" mb="10px">Image Gallery</Typography>
                <Gallery galleryimages={schoolngosImages} />
            </ContentBox>
        </>
    )
}