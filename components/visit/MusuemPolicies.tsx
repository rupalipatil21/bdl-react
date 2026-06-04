"use client"

import { StyledGridContainer, LinkUI, ListUI } from "@/styles/common.styled"
import { Grid, ListItem, Stack, Typography } from "@mui/material"
import Image from "next/image"
import policy from "@/public/icons/policies.svg"
import photography from "@/public/icons/photography.svg"
import { policies } from "@/lib/visit.data"
import { photographyguidelines } from "@/lib/visit.data"
import { useHeaderHeight } from "@/app/context/HeaderContext"

export default function MusuemPolicies(){
    const headerHeight = useHeaderHeight()
    return(
        <>
            <StyledGridContainer padding={{xs: "0px 15px", lg: 0}} container mt={"0 !important"} headerheight={headerHeight.headerHeight}>
                <Grid size={{xs: 12, md: 6}} id="musuempolicy" >
                    <Stack direction="row" columnGap={1} alignItems="center" mb="10px">
                        <Image src={policy} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Museum Policies
                        </Typography> 
                    </Stack> 
                    <Typography variant="subtitle3" color="custom.black" fontWeight={700} mb={2}>
                        The Museum endeavours to make every visit a special and memorable one. We hope you will assist us by following the rules while on the premises.
                    </Typography>

                    <ListUI>
                        {
                            policies.map((item, index) => (
                            <ListItem disablePadding key={index}>
                                <Typography variant="subtitle3" color="custom.black">{item}</Typography>
                            </ListItem>
                            ))
                        }
                        
                    </ListUI>

                </Grid>
                <Grid size={{xs: 12, md: 6}} id="photography" >
                    <Stack direction="row" columnGap={1} alignItems="center" mb="10px">
                        <Image src={photography} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Photography Guidelines
                        </Typography> 
                    </Stack> 
                    <ListUI>
                        {
                            photographyguidelines.map((item, index) => (
                            <ListItem disablePadding key={index}>
                                <Typography variant="subtitle3" color="custom.black">{item}</Typography>
                            </ListItem>
                            ))
                        }
                        <ListItem disablePadding>
                            <Typography variant="subtitle3" color="custom.black">Any enquiries relating to press, the use of images for publication and commercial filming and photography should be made to +91 22 23731234 / 65560394 or by email to <LinkUI href="mailto:enquiry@bdlmuseum.org">enquiry@bdlmuseum.org.</LinkUI></Typography>
                        </ListItem>
                    </ListUI>
                    
                </Grid>
                <Grid size={12}>
                    <Typography variant="subtitle3" color="custom.black">The Museum is under CCTV surveillance. The Museum reserves the right, at its sole discretion, to withhold and/or withdraw permission to photograph on its premises or to reproduce photographs of objects in its collection or on view during special exhibitions. </Typography>
                </Grid>
            </StyledGridContainer>
        </>
    )
}