
'use client'
import bannerimg from "@/public/pagesbannerimages/contact/contact-banner-small.jpg"
import { useHeaderHeight } from "../../context/HeaderContext";
import FourBlocks from "@/components/common/FourBlocks";
import { LinkUI, StyledContainer, StyledGridContainer } from "@/styles/common.styled";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import Banner from "@/components/common/Banner";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import address from "@/public/icons/address.png"
import phone from "@/public/icons/phone.png"
import visitinghours from "@/public/icons/visting-hours.png"
import enquiry from "@/public/icons/information.png"

export default function Page(){
    const headerHeight = useHeaderHeight();
    return(
        <>
            <Banner bannerImg={bannerimg} alt="about banner" mt={headerHeight.headerHeight} />
            <StyledGridContainer container>
                <Grid size={{xs: 12}} offset={{xs:0, md:1}}>
                    <Typography variant="title1" color="custom.black">Contact</Typography>
                </Grid>
                <Grid size={{xs: 12}} offset={{xs:0, md:1}}>
                    <Grid container >
                        <Grid size={{xs: 12, md: 4}} >
                            <Stack direction="row" columnGap={1} alignItems="center" mt="10px" mb="10px">
                                <Image src={address} width={28} height={28} alt="direction" /> 
                                <Typography variant="title1" color="custom.black" mb={0}>
                                    Address
                                </Typography> 
                            </Stack>
                            <Typography variant="subtitle3" color="custom.black">
                                    DR. BHAU DAJI LAD MUSEUM <br />91 A, Rani Baug <br />Veer Mata Jijbai Bhonsle Udyan <br />Dr Baba Saheb Ambedkar Marg <br />Byculla East <br />Mumbai, Maharashtra 400027 <br />India
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}} >
                            <Stack direction="row" columnGap={1} alignItems="center" mt="10px" mb="10px">
                                <Image src={phone} width={28} height={28} alt="direction" /> 
                                <Typography variant="title1" color="custom.black" mb={0}>
                                    Phone
                                </Typography> 
                            </Stack>
                            <Typography variant="subtitle3" color="custom.black">
                                    +91 22 2374 1234 <br />+91 22 2371 4119
                            </Typography>
                            
                            <Stack direction="row" columnGap={1} alignItems="center" mt="10px" mb="10px">
                                <Image src={visitinghours} width={28} height={28} alt="direction" /> 
                                <Typography variant="title1" color="custom.black" mb={0}>
                                    Visiting Hours
                                </Typography> 
                            </Stack>
                            <Typography variant="subtitle3" color="custom.black">
                                    10:00 am to 6:00 pm (last entry at 5:30 pm) <br />Closed on Wednesdays and certain public holidays
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 4}} >
                            <Stack direction="row" columnGap={1} alignItems="center" mt="10px" mb="10px">
                                <Image src={enquiry} width={28} height={28} alt="direction" /> 
                                <Typography variant="title1" color="custom.black" mb={0}>
                                    Enquiries
                                </Typography> 
                            </Stack>
                            <Typography variant="subtitle3" color="custom.black" mb={0}>
                                    <b>Careers: </b><LinkUI href="enquiry@bdlmuseum.org">enquiry@bdlmuseum.org</LinkUI>
                            </Typography>
                            <Typography variant="subtitle3" color="custom.black" mb={0}>
                                    <b>Press & Marketing: </b><LinkUI href="enquiry@bdlmuseum.org">enquiry@bdlmuseum.org</LinkUI>
                            </Typography>
                            <Typography variant="subtitle3" color="custom.black" mb={0}>
                                    <b>PG Diploma Course: </b><LinkUI href="education@bdlmuseum.org">education@bdlmuseum.org</LinkUI>
                            </Typography>
                            <Typography variant="subtitle3" color="custom.black" mb={0}>
                                    <b>Visits & Workshops: </b><LinkUI href="education@bdlmuseum.org">education@bdlmuseum.org</LinkUI>
                            </Typography>
                            <Typography variant="subtitle3" color="custom.black" mb={0}>
                                    <b>Events & Venue Hire: </b><LinkUI href="enquiry@bdlmuseum.org">enquiry@bdlmuseum.org</LinkUI>
                            </Typography>
                            <Typography variant="subtitle3" color="custom.black" mb={0}>
                                    <b>For correspondence with the Director&apos;s Office: </b><LinkUI href="managingtrustee@bdlmuseum.org">managingtrustee@bdlmuseum.org</LinkUI>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledGridContainer>
            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
        
    )
}