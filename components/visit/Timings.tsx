"use client"

import { HorizontalDivider, LinkUI, StyledGridContainer } from "@/styles/common.styled"
import { Grid, Stack, Typography } from "@mui/material"
import Image from "next/image"
import timings from "@/public/icons/current-timings.svg"
import tickets from "@/public/icons/ticket.svg"
import externalview from "@/public/visit/external-view01.jpg"
import { useHeaderHeight } from "@/app/context/HeaderContext"

export default function Timings(){
    const headerHeight = useHeaderHeight()
    return(
        <>
            <StyledGridContainer padding={{xs: "0px 15px", lg: 0}} container mt={"0 !important"} headerheight={headerHeight.headerHeight} gap={{xs: "15px", md: 0 }}>
                <Grid size={{xs: 12, md: 6}}  id="timings">
                    <Stack direction="row" columnGap={1} alignItems="center" mb="10px">
                        <Image src={timings} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Timings
                        </Typography> 
                    </Stack> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        The BDL Museum is open to all from 10:00 am to 5:30 pm. <br />Closed on all Wednesdays and select public holidays. <br /> see <LinkUI href="/calendar"> Calendar</LinkUI> page to plan your visit. <br />
                        <LinkUI href="#">Public Holidays</LinkUI>
                    </Typography>

                    <Image src={externalview} alt="external view" style={{ width: "100%", height: "auto" }}/>
                </Grid>
                <Grid size={{xs: 12, md: 6}} >
                    <Stack direction="row" columnGap={1} alignItems="center" mb="10px">
                        <Image src={tickets} width={25} height={25} alt="direction" /> 
                        <Typography variant="title1" color="custom.black" mb={0}>
                            Tickets
                        </Typography> 
                    </Stack> 
                    <Typography variant="title1" color="custom.black" mb={0}>
                        Indian Nationals
                    </Typography> 
                    <LinkUI href="https://bdlmuseum.mcgm.gov.in/">Click here to buy Museum tickets online</LinkUI>
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        (including PIO, OCI, NRI with ID) <br />
                        Adult - Rs.20/- <br />
                        Children (3 - 12 years) - 10/- <br />
                        School / University / College students (with valid ID) - 10/- <br />
                        Senior Citizens (above 60 Years) - 10/- <br />
                        Police and members of the armed forces - 10/- <br />
                        BMC Employees - 10/- <br />
                        For school and other group bookings contact  
                        <LinkUI href="mailto:education@bdlmuseum.org"> education@bdlmuseum.org</LinkUI> or +91 22 2372 1234
                    </Typography>

                    <Typography variant="title1" color="custom.black" mb={0}>
                        International Citizens
                    </Typography> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        Adult - 200/- <br />
                        Children (3 - 12 years) - 100/-
                    </Typography>

                    <Typography variant="title1" color="custom.black" mb={0}>
                        FREE entry for
                    </Typography> 
                    <Typography variant="subtitle3" color="custom.black" mb={2}>
                        BMC School Students, visitors with physical disabilities <br />
                        <b>* Entry Tickets are required for all public programmes at the Museum.</b>
                    </Typography>
                </Grid>
                <Grid size={12}><HorizontalDivider /></Grid>
            </StyledGridContainer>
        </>
    )
}