"use client"
import { DividerUI, HorizontalDivider, LinkUI, PastLectures } from "@/styles/common.styled";
import { Stack, Typography } from "@mui/material";

export default function LecturebyJethuMundul(){
    return(
        <>
            <Typography variant="title1" color="custom.black">THE HISTORY & AESTHETICS OF EARLY WORLD CINEMA</Typography>
            <Typography variant="subtitle3" color="custom.black">Conducted by Jethu Mundul. Presented by the Dr. Bhau Daji Lad Museum</Typography>
            <Stack direction="row" alignItems="center" mb="10px" flexWrap="wrap">
                <LinkUI href="#section1">About </LinkUI><DividerUI orientation="vertical" />
                <LinkUI href="#section2">Schedule  </LinkUI><DividerUI orientation="vertical" />
                <LinkUI href="#section4">Registration</LinkUI>
            </Stack>
            <PastLectures>
                <Typography variant="subtitle3" color="custom.black" >This course will examine the language of early world cinema, its history and aesthetic, through the development of film-making in the first half of the 20th century. Topics will include an introduction to film analysis, concepts of film style and narrative, through the history of fiction, non fiction and avant-garde. Screenings and lectures will focus on film analysis and the integration of film history and theory. Discussions will allow for an in-depth examination of particular topics, ranging from specific filmmakers and genres to how cinema engages with different cultures and audiences.</Typography>
                <HorizontalDivider />

                <Typography variant="body_h2"><b>About the Lecturer:</b></Typography>
                <Typography variant="subtitle3">Jethu Mundul has 40 years experience as film editor in making experimental films on various socio-cultural issues. An alumnus of the Film and Television Institute of India (FTII), Pune, Jethu Mundul has been a faculty at FTII, NID, IIT, Kochi Biennale and film societies in Bangalore and Bangladesh.</Typography>
                <HorizontalDivider />

                <Typography variant="body_h2"><b>Schedule:</b></Typography>
                <Typography variant="subtitle3">Starting 1st May until 13th June 2017 <br />Mondays & Tuesdays: 5 pm to 8pm <br /> Course will be conducted over 7 weeks</Typography>               
                <HorizontalDivider />

                <Typography variant="body_h2"><b>Registration</b></Typography>
                <Typography variant="subtitle3">Course fee: Rs. 6000 per participant <br />Deadline for registrations: 24th April 2017 <br /> Registration inquiries: <LinkUI href="mailto:education@bdlmuseum.org">education@bdlmuseum.org</LinkUI></Typography>
            </PastLectures>            
        </>
    )
}