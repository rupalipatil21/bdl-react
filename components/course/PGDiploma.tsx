"use client"

import { useToggleState } from "@/hooks/useToggleState";
import { ContentBox, DividerUI, FacultyBox, HorizontalDivider, LinkUI, MoreText, ToggleLink } from "@/styles/common.styled"
import { Box, Stack, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Gallery from "../common/Gallery";
import { courseGalleryImages } from "@/lib/galleryimages";

export default function PGDiploma(){
    const { isExpanded, handleClickToggle } = useToggleState();
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Post Graduate Diploma in Modern & Contemporary Indian Art</Typography>
                <Stack direction="row" alignItems="center" mb="10px" flexWrap="wrap">
                    <LinkUI href="#section1">Course Details  </LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section2">Admissions  </LinkUI><DividerUI orientation="vertical" />
                    <LinkUI href="#section3">Eligibility </LinkUI> <DividerUI orientation="vertical" />
                    <LinkUI href="#section4">Faculty</LinkUI>
                </Stack>

                <Typography variant="subtitle3" color="custom.black">
                    The Post-graduate Diploma in Modern and Contemporary Indian Art offered by the Museum will be starting soon. The course began in 2012 in response to the need for an academic course in Art History and Curatorial Studies in Mumbai. With a view to developing the pedagogy in this area, the year-long, weekend course covers the theoretical and critical study of the history of Indian Art from 1850 to the present. It enables students to understand Indian art in the broader context of Indian history, sociology, politics, gender and cultural studies. The course further explores new readings of Indian Art within the context of international modern and contemporary art history.
                </Typography>

                <Typography variant="subtitle3" color="custom.black" mb={2}>Gallery Visits</Typography>
                <Typography variant="subtitle3" color="custom.black" mb={2}>The course includes visits to Mumbai’s premier art galleries, museums and artist studios every Saturday afternoon. These visits have received tremendous support from galleries and artists who schedule special viewings of works and conversations with artists or curators. The visits allow our students the opportunity to interact with professionals in the field and participate in on-site debates and discussions.</Typography>
                <Typography variant="subtitle3" color="custom.black" mb={2}>Teaching Days / Hours</Typography>
                <Typography variant="subtitle3" color="custom.black">Details will be announced soon.</Typography>
                <HorizontalDivider />

                <Typography variant="title1" color="custom.black" mb="10px">Course Details</Typography>
                <Typography variant="subtitle3" color="custom.black" mb="10px">
                    <b>Title: </b> Modern and Contemporary Indian Art and Curatorial Studies (1850 to the present) <b>Time:</b> 1 year <b>Fees: </b> Will be announced soon. <b>Library Deposit: </b> Will be announced soon (refundable) 
                </Typography>
                <Typography variant="subtitle3" color="custom.black" mb="10px"><b>SPECIAL AUDIT OFFER</b>  </Typography>
                <Typography variant="subtitle3" color="custom.overlay2" mb="10px">
                    The Museum offers 4 additional options to audit the Course as Observer-Status. <br />
                    1.  A bouquet of 5 lecture modules <br />
                    2.  A bouquet of 10 lecture modules <br />
                    3.  A bouquet of 20 lecture modules <br />
                    4.  The complete lecture modules <br /><br />
                    Please Note: Availing these options will not include a certificate at the end of the Course. A certificate will be awarded only if the Course has been completed in its entirety along with attendance/term papers/assignments/portfolio, etc.
                </Typography>

                <Box id="readmore" >
                    <ToggleLink fontSize={16} fontWeight={500} onClick={()=>handleClickToggle("readmore")}>
                        Read {isExpanded["readmore"] ? "Less" : "More" }
                        {isExpanded["readmore"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>

                    {
                        isExpanded["readmore"] ? 
                        <MoreText>
                            <Typography variant="body_h2" color="custom.black" mb="10px">Chair</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px">Mrs. Tasneem Zakaria Mehta – Managing Trustee and Director, Dr. Bhau Daji Lad Museum</Typography><br /><br />

                            <Typography variant="body_h2" color="custom.black" mb="10px">Why a Course of Modern & Contemporary Indian Art?</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px">In India, academic courses in Art History and Modern and Visual Art/Culture are offered in New Delhi, Kolkata, Bengaluru and Vadodara. Unfortunately, there is no equivalent course offered in Mumbai covering similar content. Mumbai is one of the most important cities for the production of Contemporary Art. It is the city that gave birth to the Indian Modern Art movement. <br /><br />In response to this lacuna and with a view to developing the pedagogy in this area, the Dr. Bhau Daji Lad Museum offers a 1 year PG Diploma course in ‘Modern & Contemporary Indian Art’. <br /><br /> Multiple perspectives and readings will be encouraged through a range of research methods that combine a multitude of approaches. The diploma program will be taught by acclaimed Indian and International Academic Faculty. The course aims to offer lectures and seminars by visiting scholars and artists from across the world, visits to exhibitions in Mumbai’s premier art galleries, field trips to museums and artist studios as relevant to the course material. The course will give students an excellent grounding in the development of the modern aesthetic sensibility in Indian and related artistic practices.</Typography><br />

                            <Typography variant="body_h2" color="custom.black" mb="10px">Job Opportunities</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px">The course will enable students to seek avenues of employment in various art and cultural institutions and benefit the cultural industry with trained specialists as Curators, Exhibition Managers, Museum Curators, Art Historians, Art Critics, Art Writers, Art Educators and Arts Managers. It aims to create an effective knowledge base for the participants and establish linkages with the market and institutions to enable successful placements. Several business houses and fund managers are increasingly engaging with contemporary art as a form of investment. This course will provide an opportunity for informed decisions towards collecting and investing in Art for those already engaged in this area.</Typography>
                        </MoreText>
                        : ""
                    }
                </Box>
                
                <HorizontalDivider />
                <Typography variant="body_h2" color="custom.black" mb="10px">Admissions</Typography>
                <Typography variant="subtitle3" color="custom.black" mb="10px">Details of the admission process will be updated soon</Typography>
                
                <HorizontalDivider />
                <Typography variant="body_h2" color="custom.black" mb="10px">Eligibility</Typography>
                <Typography variant="subtitle3" color="custom.black" mb="10px">Details will be announced soon.</Typography>
                
                <HorizontalDivider />
                <FacultyBox id="readmore" >
                    <ToggleLink variant="body_h2" onClick={()=>handleClickToggle("readmore2")}>
                        Past Faculty
                        {isExpanded["readmore2"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>

                    {
                        isExpanded["readmore2"] ? 
                        <>
                            <Typography variant="font_16" color="custom.black" >Deeptha Achar</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Professor at the Department of English, Faculty of Arts, MS University, Vadodara.</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Nancy Adajania</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Independent Curator and Cultural Theorist, Mumbai</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Naman Ahuja</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Associate Professor, School of Arts and Aesthetics, JNU, New Delhi</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Rahaab Allana</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Curator, Alkazi Foundation for the Arts, New Delhi</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Rupert Richard Arrowsmith</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Research Associate, UCL, UK</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Mortimer Chatterjee</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Independent Art Curator & Gallerist, Mumbai</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Saryu Doshi</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Art Historian and Research scholar</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Annapurna Garimella</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Designer and Art Historian, Managing Director at Jackfruit Research & Design Pvt. Ltd, Bengaluru</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Ranjit Hoskote</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Cultural Theorist, Poet & Independent Curator, Mumbai</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Jyotindra Jain</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Director and Managing Trustee of CIViC: Centre for Indian Visual Culture, New Delhi Retired Professor, School of Art and Aesthetics, JNU, New Delhi; Former Director, National Handlooms and Handicrafts Museum</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Suresh Jayaram</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Visual Artist, Writer and Curator. Founder Director of Visual Art Collective 1shanthiroad, Bengaluru</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Prof. (Dr.) Deepak Kannal</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Professor & Former Dean, Art History Department, Maharaja Sayajirao University, Vadodara</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Raman Siva Kumar</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Senior Professor, Viswabharati University, Shantiniketan, Kolkatta</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Arshiya Lokhandwala</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Art Historian, Curator and Gallerist, Mumbai</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Sanjoy Kumar Mallik</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Senior Faculty, Vishwabharati University, Shantiniketan, Kolkata</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dilnavaz Mehta</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Independent Researcher and Art Historian, Mumbai</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Mrs. Tasneem Zakaria Mehta</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Honorary Director, Dr. Bhau Daji Lad City Museum, Mumbai</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Partha Mitter</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Emeritus Professor of Art History, University of Sussex</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Parul Dave Mukherji</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Dean, School of Art & Aesthetics, JNU, New Delhi</i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Ratan Parimoo</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Art Historian and Critic, Former Director of L.D. Museum and N.C. Mehta Collection, Ahmedabad </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Johan Pijnappel</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Independent Art Historian and Curator, Mumbai </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Ram Rahman</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Photographer and activist, New Delhi </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Ashish Rajadhyaksha</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Film and Cultural Theorist, Mumbai </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Santhosh Sadanand</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Assistant Professor at the School of Culture and Creative Expressions, Ambedkar University, New Delhi </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Abhay Sardesai</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Former Editor, Art India Magazine, Mumbai </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr Shukla Sawant</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Professor, School of Art and Aesthetics, JNU, New Delhi </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Girish Shahane</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Art Critic, Curator and Writer, Mumbai </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Vidya Shivdas</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Independent Curator & Researcher, New Delhi </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Gayatri Sinha</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Independent Critic & Curator, New Delhi </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Pooja Sood</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Independent Researcher and Director of KHOJ, New Delhi </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Kaiwan Mehta</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Professor, Balwant Seth School of Architecture, Mumbai </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Roobina Karode</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Director & Chief Curator at the Kiran Nadar Museum of Art, New Delhi </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Dr. Zehra Jumabhoy</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Lecturer in History of Art at University of Bristol </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Latika Gupta</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Visiting Faculty of Visual Arts, Ashoka University, Haryana </i></Typography>
                            <HorizontalDivider />
                            
                            <Typography variant="font_16" color="custom.black" >Deepthi Sasidharan</Typography>
                            <Typography variant="subtitle3" color="custom.black" mb="10px"><i>Founder, Director, Eka Archiving Services and Independent Curator</i></Typography>
                            
                        </>
                        : ""
                    }
                </FacultyBox>

                <Typography variant="body_h2" color="custom.black" mb="10px">Image Gallery</Typography>
                <Gallery galleryimages={courseGalleryImages} />
            </ContentBox>
        </>
    )
}