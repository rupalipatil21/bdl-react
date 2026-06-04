"use client"

import { useToggleState } from "@/hooks/useToggleState";
import { LinkUI, StyledGridContainer, ToggleLink } from "@/styles/common.styled"
import { Box, Grid, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function ExhibitionContent(){
    const { isExpanded, handleClickToggle } = useToggleState();

    return(
        <>
            <StyledGridContainer container >
                <Grid size={12} offset={{xs:0, md:1}} alignItems="start" position="relative">
                    <Typography variant="title1" color="custom.black">Exhibitions</Typography>
                    <Typography variant="subtitle3" color="custom.black">
                        The Museum has pioneered contemporary art exhibitions presented in the extraordinary 19th-century building, built to showcase the city’s contemporary art and craftsmanship. The Museum’s robust exhibition programme invites artists to engage with these collections and archives and interrogate its founding principles. The Museum also hosts exhibitions in collaboration with galleries and other institutions in the Special Project Space (SPS) in the Museum Plaza. Over 85 exhibitions have been presented since 2008, which include collaborations with both local and international institutions and organisations. Past exhibitions have showcased contemporary creative practices in design, crafts and textiles, architecture, urbanism, and film and video art.
                    </Typography>
                    <Box id="readmore" mt="20px">
                        <ToggleLink variant="font_18" onClick={()=>handleClickToggle("readmore")}>
                            <i>Read {isExpanded["readmore"] ? "Less" : "More" }</i>
                            {isExpanded["readmore"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ToggleLink>

                        {
                            isExpanded["readmore"] ? 
                            <Typography variant="subtitle3" color="custom.black">A series of curated exhibitions titled &apos;Engaging Traditions&apos;, invites artists to respond to the Museum’s collection, history and archives, addressing issues that speak directly to the traditions and issues that underlie the founding of the Museum, yet evoke the present by challenging orthodoxies and questioning assumptions. Several distinguished contemporary artists including Jitish Kallat, Sudarshan Shetty, L.N. Tallur and Ranjini Shettar have participated in this programme. <br /><br /> Through collaborations with international institutes, the Museum has hosted several exhibitions. Contemporary Photography and the Olympic Posters were presented from the V & A Museum, London. German artist Eberhard Havekost&apos;s works were presented in collaboration with the Dresden State Art Collections and the exhibition Social Fabric was showcased with INIVA (Institute of International Visual Arts) London, and the Goethe-Institut, Max Mueller Bhavan, Mumbai. The Museum collaborated with the Guggenheim Museum, New York, to present the BMW Guggenheim Lab in Mumbai,and the Ermenegildo Zegna group on the project <LinkUI fontsize={14} href="https://www.bdlmuseum.org/exhibitions/2013/zegnart-public.php">ZegnArt Public</LinkUI> in 2013. Most recently, the Museum hosted an acclaimed masterpiece of the <LinkUI fontsize={14} href="https://www.bdlmuseum.org/exhibitions/2013/the-florentine-renaissance.php">Florentine Renaissance</LinkUI>, Lorenzo Ghiberti’s (Italian, 1378-1455) The Gates of Paradise (1425-52), through a special collaboration with the Guild of the Dome Association, Kunsthistorisches Institut in Florenz, Max-Planck-Institute, and the Museum of the Opera del Duomo. <LinkUI fontsize={14} href="https://www.bdlmuseum.org/exhibitions/2014/folk-archive.php">Folk Archive</LinkUI>, a vibrant, visual account of contemporary popular British culture was held in collaboration with the British Council.</Typography>
                            : ""
                        }
                    </Box>
                </Grid>
            </StyledGridContainer>
        </>
    )
}