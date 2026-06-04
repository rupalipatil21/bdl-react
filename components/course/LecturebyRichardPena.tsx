"use client"

import { useToggleState } from "@/hooks/useToggleState";
import { DescriptionBox, DividerUI, HorizontalDivider, LinkUI, PastLectures, ToggleLink } from "@/styles/common.styled";
import { Box, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function LecturebyRichardPena(){
    const { isExpanded, handleClickToggle } = useToggleState();
    return(
        <>
            <Typography variant="title1" color="custom.black">Past Lectures</Typography>

            <PastLectures>
                <Typography variant="font_16" color="custom.black" mb={0} mt="25px"><i>Altered Visions: The American Avant-Garde, 1943-1968</i></Typography>
                <Box mb="10px">
                    {/* <Typography variant="body_h4" color="custom.black"> */}
                        Film and Lecture series by Richard Peña, Director Emeritus, New York Film Festival; Professor Emeritus of Film and Media Studies, Columbia University
                    {/* </Typography> */}
                    <ToggleLink variant="body_h4" onClick={()=>handleClickToggle("readmore")} className="readmore">
                        Read {isExpanded["readmore"] ? "Less" : "More" }
                        {isExpanded["readmore"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>
                </Box>
                {
                    isExpanded["readmore"] ?
                    <DescriptionBox color="custom.black" >
                        <Typography variant="body_h4">27th - 30th March, 2025</Typography>
                        <Typography variant="body_h4">This 4-day film and lecture series will explore the intellectual and artistic roots of this movement, tracing its development through four of its most important phases and tendencies.</Typography>
                        <Typography variant="body_h4">During the 1920s, largely in France and Germany, a new kind of cinema began to emerge, very often made by artists already associated with other artistic media. These “avant-garde films” were a kind of aesthetic protest against the dominance of the Hollywood film model, demonstrating the many possibilities for cinematic language. Although there were some earlier examples of avant-garde filmmaking in the US, it was really in the 1940s, with the sudden availability of cameras sold off by the US military and the drastic improvements in 16mm film stock, that a newly-energized film avant-garde erupted in the US. From a wide variety of backgrounds, these filmmakers made works that were not only daringly personal, but also pushed the boundaries of film style and language.</Typography>
                        <HorizontalDivider />
                        <Typography variant="body_h4"><b>Thursday, 27th March | 5:30 pm - 8:00 pm</b></Typography>
                        <Typography variant="body_h4">The Trance Film; Beginnings of the Cinematic Avant-Garde <br />Works by Maya Deren, Curtis Harrington, Kenneth Anger</Typography>
                        <HorizontalDivider />
                        <Typography variant="body_h4"><b>Friday, 28th March: 5:30 pm - 8:00 pm</b></Typography>
                        <Typography variant="body_h4">The Lyrical Film; Works by Stan Brakhage, Bruce Baillie</Typography>
                        <HorizontalDivider />
                        <Typography variant="body_h4"><b>Saturday, 29th March: 5:00 pm - 7:30 pm</b></Typography>
                        <Typography variant="body_h4">Avant-Garde Cinema and Radical Theater <br />Works by Christopher MacLaine, Bruce Connor, Marie Menken</Typography>
                        <HorizontalDivider />
                        <Typography variant="body_h4"><b>Sunday, 30th March: 2:30 pm - 5:00 pm</b></Typography>
                        <Typography variant="body_h4">The Structural Film; Works by Michael Snow, Larry Gottheim, Paul Sharits</Typography>
                        <HorizontalDivider />
                        <Typography variant="body_h4">Age: 16 and above <br /> Charges: Rs. 1000 for the entire course. 50% waiver available for students with valid ID. <br />Limited seats | Prior registration necessary. <br />Museum entry charges applicable.</Typography>
                        <LinkUI href="https://urbanaut.app/spot/altered-visions-lecture-series-with-richard-pena">Register Here</LinkUI>
                    </DescriptionBox>
                    : ""
                }
                <HorizontalDivider />
            </PastLectures>

            <PastLectures>
                <Typography variant="font_16" color="custom.black" mb={0} mt="25px"><i>A PANORAMA OF LATIN AMERICAN CINEMA</i></Typography>
                <Box mb="10px">
                    {/* <Typography variant="body_h4" color="custom.black"> */}
                        4 day lecture series by Richard Peña <br /> Presented by the Dr. Bhau Daji Lad Museum in collaboration with Columbia Global Centers l Mumbai
                    {/* </Typography> */}
                    <ToggleLink variant="body_h4" onClick={()=>handleClickToggle("readmore2")} className="readmore">
                        Read {isExpanded["readmore2"] ? "Less" : "More" }
                        {isExpanded["readmore2"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>
                </Box>
                {
                    isExpanded["readmore2"] ?
                    <DescriptionBox color="custom.black" >
                        <Stack direction="row" alignItems="center" mb="10px" flexWrap="wrap">
                            <LinkUI href="#section1">About </LinkUI><DividerUI orientation="vertical" />
                            <LinkUI href="#section2">Schedule  </LinkUI><DividerUI orientation="vertical" />
                            <LinkUI href="#section3"> Films Included </LinkUI> <DividerUI orientation="vertical" />
                            <LinkUI href="#section4">Registration</LinkUI>
                        </Stack>
                        <Typography variant="body_h4">10th -14th March 2017</Typography>
                        <Typography variant="body_h4">A special 4 day film lecture series on film movements in Latin America in countries such as Brazil, Cuba and Argentina since the 1950s. Conducted by Richard Peña, professor of Film Studies at Columbia University and former Director of the New York Film Festival.</Typography>
                        <HorizontalDivider />
                        <Typography variant="body_h2"><b>About the programme:</b></Typography>
                        <Typography variant="body_h4">The uniqueness of Latin American culture lay in having the status of being both “insider” and “outsider” to Western culture. Being both part of the West and distanced from it, Latin America has been in a remarkable position to offer critiques and reassessments of western cultural forms, including in the cinema. Each session will begin with an overview of Latin American in a particular period, followed by an introduction to a particular film. After each screening, the film will be analyzed and related to the cinematic, historical and political issues being addressed.</Typography>
                        <Typography variant="body_h4">All films would be screened with English subtitles.</Typography>
                        <HorizontalDivider />
                        <Typography variant="body_h2"><b>Schedule:</b></Typography>
                        <Typography variant="body_h4">10th March, Friday | 5 pm - 8 pm <br />11th March, Saturday | 10.30 am - 1.30 pm and 3 pm - 6 pm <br /> 12th March, Sunday | 10.30 am - 1.30 pm <br />13th March- HOLIDAY (Holi) <br />14th March, Tuesday | 5 pm - 8 pm</Typography>
                        <HorizontalDivider />

                        <Typography variant="body_h2"><b>Films included:</b></Typography>
                        <Typography variant="body_h4">
                            LOS OLVIDADOS, 1950, Luis Buñuel, Mexico <br /> EARTH ENTRANCED, 1967, Glauber Rocha, Brazil <br />PORTRAIT OF TERESA, 1979, Pastor Vega, Cuba <br />LA CIENAGA, 2001, Lucrecia Martel, Argentina <br /> RODRIGO D. -- NO FUTRE, 1990, Victor Gaviria, Colombia
                            <ToggleLink variant="body_h4" color="custom.green" onClick={()=>handleClickToggle("readmore3")} className="readmore">
                                Read {isExpanded["readmore3"] ? "Less" : "More" }
                                {isExpanded["readmore3"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </ToggleLink>
                        </Typography>

                        {
                            isExpanded["readmore3"] ? 
                            <Box mt="40px">
                                <Typography variant="body_h2"><b>Details about the films:</b></Typography>
                                <Typography variant="body_h2" mb="5px"><b>LOS OLVIDADOS, 1950, Luis Buñuel, Mexico</b></Typography>
                                <Typography variant="body_h4">Spanish exile and surrealist Buñuel joined the then burgeoning Mexican film industry in the late Forties and soon created perhaps its unquestionable masterpiece. A searing, revealing look at a group of street kids in Mexico City, LOS OLVIDADOS went beyond the neorealist aim of exposing poverty and injustice to include a powerful and shocking portrait of the deeper emotional lives of these young men.</Typography>
                                <HorizontalDivider />
                                
                                <Typography variant="body_h2" mb="5px"><b>EARTH ENTRANCED, 1967, Glauber Rocha, Brazil</b></Typography>
                                <Typography variant="body_h4">Internationally, the Sixties featured a number of &quot;new wave&quot; film movements, composed of young filmmakers who challenged cinema establishments with their new, radical approaches to filmmaking and politics. Perhaps none of these &quot;new waves&quot; was more remarkable than Brazil&apos;s &quot;Cinema Novo,&quot; (New Cinema); Glauber Rocha&apos;s EARTH ENTRANCED is perhaps the quintessential Cinema Novo work, a vibrant, emotional portrait of an artist who throws himself into the political maelstrom of his times.</Typography>
                                <HorizontalDivider />
                                
                                <Typography variant="body_h2" mb="5px"><b>PORTRAIT OF TERESA, 1979, Pastor Vega, Cuba</b></Typography>
                                <Typography variant="body_h4">Cuba created the region&apos;s first fully nationalized cinema, one that saw itself as having a key role in the creation and education of a revolutionary society. Pastor Vega&apos;s PORTRAIT OF TERESA tackles one of the Cuban&apos;s most troublesome topics--the role of women and the changes that had been wrought on gender roles by the Revolution--with a complexity and insight that had Cuban audiences erupting into passionate debates after many screenings.</Typography>
                                <HorizontalDivider />
                                
                                <Typography variant="body_h2" mb="5px"><b>LA CIENAGA, 2001, Lucrecia Martel, Argentina</b></Typography>
                                <Typography variant="body_h4">After practically disappearing in the early Nineties, Latin American cinema triumphantly re-emerged by the end of the decade. Argentina led the charge, with a movement of young filmmakers working largely in digital formats and who offered not only a host of new cinematic approaches but also revelations of totally new regions and subjects. Lucrecia Martel&apos;s LA CIENAGA (THE SWAMP) was hailed as that movement&apos;s first great masterpiece, an unsparing look at the disintegration of middle-class family spending its summer in the lush, almost jungle-like region that separates Argentina from Bolivia.</Typography>
                                <HorizontalDivider />
                                
                                <Typography variant="body_h2" mb="5px"><b>RODRIGO D. -- NO FUTRE, 1990, Victor Gaviria, Colombia</b></Typography>
                                <Typography variant="body_h4">By the Nineties, filmmaking had become a truly regional phenomenon, with many new countries, and new filmmakers, emerging to add their voices and reveal their experiences. The drug war then raging in central Colombia inspired one of the era&apos;s true masterworks, Victor Gaviria&apos;s RODRIGO D -- NO FUTURE, a breathtaking, punk-flavored chronicle of a group of young men living on the fringes on the fringes of the narcotics trade.</Typography><br />
                                <Typography variant="body_h4">Click <LinkUI href="http://arts.columbia.edu/film/faculty/richard-pena" target="_blank">HERE</LinkUI> to know more about Professor Richard Peña</Typography>
                            </Box>
                            : ""
                        }

                        <HorizontalDivider />
                        <Typography variant="body_h2"><b>Registration</b></Typography>
                        <Typography variant="body_h4">Free. Limited seats. Seating on each day will be on a first-come, first-serve basis. <br />Register at <LinkUI href="mailto:education@bdlmuseum.org">education@bdlmuseum.org</LinkUI> <br />Museum entry charges apply.</Typography>
                    </DescriptionBox>
                    : ""
                }
                <HorizontalDivider />
            </PastLectures>
            
        </>
    )
}