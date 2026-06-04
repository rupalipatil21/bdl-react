"use client"

import { HorizontalDivider, LinkUI, Map, StyledGridContainer } from "@/styles/common.styled"
import { Grid, Typography } from "@mui/material"

export default function Address(){
    return(
        <>
            <StyledGridContainer padding={{xs: "0px 15px", lg: 0}} mt={"16px !important"} container gap={{xs: "15px", md: 0 }}>
                <Grid size={{xs: 12, md: 6}} >
                    <Typography variant="title1" color="custom.black" mb="5px">
                        Address
                    </Typography> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Dr. Bhau Daji Lad Museum, <br />
                        Veermata Jijabai Bhosale Botanical Udyan and Zoo (Rani Baug), <br />
                        91/A, Dr Babasaheb Ambedkar Road, <br />
                        Byculla East Mumbai 400027 India <br />
                        +91 22 2374 1234 <br />
                        +91 22 2371 4119
                    </Typography>

                    <Typography variant="title1" color="custom.black" mb="5px">
                        Coordinates
                    </Typography> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        18°58&apos;46.4&quot;N 72°50&apos;05.3&quot;E
                    </Typography>

                    <Typography variant="title1" color="custom.black" mb="5px">
                        How to get here
                    </Typography> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Veermata Jijabai Bhosale Botanical Udyan and Zoo (Rani Baug), Byculla (East) is a major landmark in the area. The Museum is located in the same compound, a 2 mins walk from Byculla (East) Station.
                    </Typography>

                    <LinkUI href="/contact">Contact Us</LinkUI>
                </Grid>
                <Grid size={{xs: 12, md: 6}} >
                    <Map>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.9233114356266!2d72.83262661473502!3d18.978993959946735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5b428e70af%3A0x79efde6c140c2e05!2sDr.%20Bhau%20Daji%20Lad%20Museum!5e0!3m2!1sen!2sin!4v1635510219363!5m2!1sen!2sin"
                            style={{ width: "100%", height: "100%", border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </Map>
                </Grid>
                <Grid size={12}><HorizontalDivider /></Grid>
            </StyledGridContainer>
        </>
    )
}