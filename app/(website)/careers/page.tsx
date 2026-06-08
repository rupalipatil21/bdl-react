
'use client'
import bannerimg from "@/public/pagesbannerimages/career/carrer-banner-small.jpg"
import { useHeaderHeight } from "../../context/HeaderContext";
import FourBlocks from "@/components/common/FourBlocks";
import { StyledContainer, StyledGridContainer } from "@/styles/common.styled";
import MoreAtBdl from "@/components/common/MoreAtBdl";
import Banner from "@/components/common/Banner";
import { Grid, Typography } from "@mui/material";

export default function Page(){
    const headerHeight = useHeaderHeight();
    return(
        <>
            <Banner bannerImg={bannerimg} alt="about banner" mt={headerHeight.headerHeight} />
            <StyledGridContainer container>
                <Grid size={{xs: 12}} offset={{xs:0, md:1}}>
                    <Typography variant="title1" color="custom.black">Careers</Typography>
                    <Typography variant="title1" color="custom.black" mt="36px">To Apply</Typography>
                    <Typography variant="subtitle3" color="custom.black">
                        <b>Kindly send your resume with a covering letter and contact details (with subject: job title) to: <br />enquiry@bdlmuseum.org <br />For further information call +91 22 23731234 / 65560394</b>
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black">The Museum invites you to send in your CV if you are interested in working with us for the following positions.</Typography>
                    <Typography variant="subtitle3" color="custom.black">Kindly note that we do not have the resources to respond to each query we receive. If you do not receive a response to your emails after two months, please assume that you have not been selected for the position.</Typography>

                    <Typography variant="title1" color="custom.black" mt="36px">Conservator</Typography>
                    <Typography variant="subtitle3" color="custom.black" >
                        Qualifications: Master&apos;s in conservation from a recognised Indian or international university / Master&apos;s or Bachelor&apos;s degree in Fine Art from a recognised Indian or international university with a certified training course in conservation. <br />Experience: Minimum one year work experience in practical conservation is a must. <br />Additional requirements: Photography and computer skills. <br />Preference would be given to candidates with training at National Research Laboratory for Cultural Property (NRLC) and other similar recognised institutions
                    </Typography>
                    <Typography variant="subtitle3" color="custom.black" >
                        Recruitment process:<br />- Reviewing applications received on email noted on this page <br />- Resume screening <br />- In person interviewing <br />- Shortlisted candidates would have to qualify a practical test (As they are coming from unknown sources we must know their practical skills) <br />Kindly note that only shortlisted candidates will be contacted by the Museum office.
                    </Typography>

                    <Typography variant="title1" color="custom.black" mt="36px">Administrative & Establishment Manager</Typography>
                    <Typography variant="subtitle3" color="custom.black" >
                        Should have minimum 5 years experience in managing a Cultural or Educational Organisation. Must have strong organizational, communication and computer skills. Should be able to manage the building and personnel. Knowledge of Marathi essential.
                    </Typography>

                    <Typography variant="title1" color="custom.black" mt="36px">Course Instructor</Typography>
                    <Typography variant="subtitle3" color="custom.black" >
                        M.A. in Art History / Visual studies with a focus on Early modern, Modern and Contemporary art. Minimum 1 year work experience is essential. The Course Instructor will manage the Museum&apos;s course on &apos;Modern and Contemporary Indian Art and Curatorial Studies. This is a part-time position.
                    </Typography>

                    <Typography variant="title1" color="custom.black" mt="36px">Design Consultant</Typography>
                    <Typography variant="subtitle3" color="custom.black" >
                        Qualifications: Trained in Design at NIFT, NID or similar institution with 2-5 years work experience in design, retail and product development to help develop products for and manage the Museum shop. This is a part-time position.
                    </Typography>
                </Grid>
            </StyledGridContainer>
            <StyledContainer pt="30px !important">
                <MoreAtBdl />
                <FourBlocks />
            </StyledContainer>
        </>
        
    )
}