"use client"

import { LinkUI, DividerUI, RestoreBox, HorizontalDivider, ToggleLink, SlideDiv, ListUI } from "@/styles/common.styled"
import { Box, Typography, Stack, Grid, ListItem } from "@mui/material"
import expansion1 from "@/public/about/museum-expansion-01.jpg"
import expansion2 from "@/public/about/museum-expansion-02.jpg"
import expansion3 from "@/public/about/museum-expansion-03.jpg"
import Image from "next/image"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { architects } from "@/lib/constants" 
import { useState } from "react"
import { jury } from "@/lib/constants"

interface Architect {
  text1?: string;
  text2?: string;
  text3?: string
}

interface ExpandedListProps {
  list: Architect[];
}

export default function MuseumExpansion(){
    const [isexpanded , setisexpanded ] = useState<{ [key: string]: boolean }>({});

    const handleClickToggle = (sectionId: string) => {
        setisexpanded((prev) => ({
        ...prev,
        [sectionId]: !prev[sectionId],
        }));
    };
    const ExpandedList : React.FC<ExpandedListProps> = ({list}) => {
        return(
            <>
                 <ListUI>
                    {
                        list.map((architect, index)=>(
                            <ListItem disablePadding key={index}>
                                <Typography variant="subtitle3" color="custom.black"><b>{architect.text1}</b>{architect.text2}</Typography>
                            </ListItem>
                        ))
                    }
                </ListUI>
                <Typography variant="subtitle3" color="custom.black">{list[0].text3}</Typography>
            </>
        )
    }
    return(
        <>
            <Box padding={{xs: "20px 25px", lg: 0}}>
                <Typography variant="title1" color="custom.black">Museum Expansion</Typography>
                <Stack direction="row" alignItems="center" mb="26px" flexWrap="wrap">
                    <LinkUI href="#section1">Design Competition </LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section2">Winning Design  </LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section3">Shortlist of Architects </LinkUI> <DividerUI orientation="vertical" />
                    <LinkUI href="#section4">Jury</LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section4">Vision Document</LinkUI>
                </Stack>
                <Typography variant="subtitle3" color="custom.black">
                    The Museum has embarked on an ambitious expansion plan to develop a new wing on the north side of the Museum, supported by the Municipal Corporation of Greater Mumbai and private donors.
                    <br /><br />
                    The new wing is expected to be 120,000 sq ft, providing new galleries and facilities including a learning centre, a research centre, an auditorium and conference centre, a library and archive, conservation facilities and a new museum shop, a café and a restaurant. At the heart of the new wing will be a permanent gallery to showcase contemporary Mumbai, focusing on Mumbai&apos;s critical role in imagining modern India, and highlighting its cultural achievements. A spacious special exhibitions gallery of international standards will showcase major touring exhibitions.
                    <br /><br />
                    The new Museum wing aims to become the primary centre for the contemporary cultural development of Mumbai. The new Exhibitions galleries and Learning Centre will encourage artistic and creative initiatives to engage a wide spectrum of audiences. The iconic new building will put the Museum on par with leading museums across the world. This is a key moment for the Museum as it reaches out towards new audiences both in India and internationally. It will reposition Indian contemporary culture on the global art and design scene.
                    <br /><br />
                    The new building is more than an extension to the existing Museum. Just as the 1872 building captured an architectural expression of the colonial past of Mumbai, we hope that the new building will set a standard in contemporary museum design and become one of the landmarks of modern Mumbai. The Museum was originally intended to capture the arts and culture of the time; some commentators have called it India’s first contemporary arts museum. Building new facilities will allow us to develop our contemporary content so as Mumbai develops as a global city, we will be able to reflect its culture and achievements. We are hugely enthusiastic about the project and look forward to the process of selecting a design team.”
                    <br />
                    <b>- Tasneem Zakaria Mehta, Managing Trustee & Honorary Director</b>
                    <br /><br />
                    “This is a unique cultural moment for the museum as it reaches out towards new audiences inside India and internationally. The new facilities will allow a greater diversity of activity and enable events like travelling international exhibitions to be held which are impossible in the original heritage building. We will be looking for very creative teams with expertise in contemporary design and landscaping as the museum stands in one of the few green spaces in south Mumbai.”
                    <br />
                    <b>-Malcolm Reading, competition organiser</b>
                </Typography>
            </Box>
            <RestoreBox>
                <Grid container columnGap="30px">
                    <Grid size={{xs: 12 }}>
                        <Image src={expansion1} alt="Museum Expansion" />
                    </Grid>
                    <Grid size={{xs: 12 }}>
                        <Image src={expansion2} alt="Museum Expansion" />
                    </Grid>
                </Grid>
                <HorizontalDivider />
            </RestoreBox>
            <RestoreBox id="section1">
                <Typography variant="title1" color="custom.black">Design Competition</Typography>
                <Typography variant="subtitle3" color="custom.black">
                    An architectural design competition for the new wing was launched in December 2013. Over 100 expressions of interest were received from renowned national and international firms at the first stage of the competition. Of these, 8 shortlisted teams were selected to present their final designs to a panel of eminent jury members. The Municipal Commissioner of Mumbai and Co-Chairman and Trustee of the Museum, Mr Sitaram Kunte, chaired the eleven-person Jury, notable for its array of leading international figures from the museum world, academia and the business community. The Jury met over a three-day period in Mumbai in December 2014 and assessed design submissions, presentations and interviews. Malcolm Reading Consultants organised the competition on behalf of the Museum, combining international standards for architectural competitions with Council of Architecture (India) guidelines.
                </Typography>
                <HorizontalDivider />
            </RestoreBox>
            <RestoreBox id="section2">
                <Typography variant="title1" color="custom.black">Winning Design</Typography>
                <Typography variant="subtitle3" color="custom.black">
                    An international team led by Steven Holl was selected as the winner of the Mumbai City Museum North Wing Design Competition. Based in New York, Steven Holl collaborated with Mumbai-based Opolis Architects. The winning design was distinctive for its sculptural and calligraphic qualities. It proposes a simple volume, which is enlivened by deep subtracting cuts, creating dramatic effects of light and shade. Its central feature is a reflecting pool in a new courtyard between the old and new buildings. The scheme will establish a campus around the Museum in this growing district within Mumbai.
                    <br /><br />
                    Steven Holl Architects will start work immediately on the design development with the Museum; construction is expected to begin in 2015.
                </Typography>
                <Box>
                    <Grid container columnGap="30px">
                        <Grid size={{xs: 12 }}>
                            <Image src={expansion3} alt="Museum Expansion" />
                        </Grid>
                    </Grid>
                    <Typography variant="title1" color="custom.black">About Steven Holl Architects</Typography>
                    <Typography variant="subtitle3" color="custom.black">
                        Steven Holl Architects, is one of the world’s leading contemporary architects, he is famous for projects such as the Nelson Atkins Museum of Art in Kansas, the Herning Museum of Contemporary Art in Denmark and the Kiasma Museum of Contemporary Art in Helsinki. Current work includes the Centre for Creative and Performing Arts at Princeton University, USA, the John F. Kennedy Center for the Performing Arts Expansion in Washington DC, USA and the Museum of Fine Arts, Houston, USA.
                        <br /><br />
                        <i>‘The selection of Steven Holl Architects marks an important moment for the Museum, for Mumbai and for India – this is the first time a design team has been selected through an international design competition for a public building and this initiative will now set a benchmark for other institutions in the region. The Dr. Bhau Daji Lad is one of the best-loved and oldest Museums in India. We are delighted that it will now have a world-class addition by a very gifted team.’</i><br />
                        <i><b>-Jury Chair, Municipal Commissioner Shri Kunte</b></i>
                        <br /><br />
                        <i>‘We have been incredibly impressed by the hard work, commitment and creativity shown by all eight shortlisted teams. However, the winning team produced an outstanding, iconic design, which captivated the Jury. This building will change the cultural conversation in Mumbai and in the wider museum world. The scheme integrates sustainability into the design and is ambitious to set new standards of environmental performance and energy conservation. The campus concept in a growing part of Mumbai will make a real contribution to urban life here. This announcement comes nearly 170 years after the Museum was founded and this decision to appoint Steven Holl Architects promises a great step forward for the Dr. Bhau Daji Lad, it will transform the Museum and the visitor experience.’</i><br />
                        <i><b>-Mrs Mehta, Trustee and Honorary Director of the Museum</b></i>
                        <br /><br />
                        <i>This was an exceptional shortlist – the Museum should be congratulated on the quality of responses it drew from the architectural community. We would like to thank the shortlisted teams for their patience while the competition programme was extended and also the Jury for their insights and indefatigability. In Steven Holl Architects we have a team ready to meet the challenges of the brief, giving the Museum exciting and memorable spaces, which will allow it to renew its mission, engage with new audiences and sparkle as one of the key cultural destinations in Mumbai.’</i><br />
                        <i><b>-Mr Malcolm Reading, Competition Organiser and Chairman of Malcolm Reading Consultants</b></i>
                    </Typography>
                </Box>
            </RestoreBox>
            <RestoreBox id="section3" mt="26px">
                <ToggleLink onClick={()=>handleClickToggle("section3")}>
                    Shortlist of Architects
                    {isexpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ToggleLink>

                <SlideDiv isexpanded={!!isexpanded["section3"]}>
                    <ExpandedList list={architects} />
                </SlideDiv>
                <HorizontalDivider />
            </RestoreBox>
            <RestoreBox id="section4">
                <ToggleLink onClick={()=>handleClickToggle("section4")}>
                    Jury
                    {isexpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ToggleLink>

                <SlideDiv isexpanded={!!isexpanded["section4"]}>
                    <ExpandedList list={jury} />
                </SlideDiv>
                <Typography variant="subtitle3" color="custom.black">
                    <br />
                    Further details of the project are available on the dedicated competition microsite:
                    <br />
                    <LinkUI href="http://competitions.malcolmreading.co.uk/mumbai">http://competitions.malcolmreading.co.uk/mumbai</LinkUI>
                </Typography>
            </RestoreBox>
        </>
    )
}