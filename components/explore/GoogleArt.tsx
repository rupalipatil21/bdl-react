"use client"
import { ContentBox, LinkUI } from "@/styles/common.styled";
import { Typography } from "@mui/material";

export default function GoogleArt(){
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Google Arts & Culture</Typography>
                
                <Typography variant="subtitle3" color="custom.black" mb={1} >
                    <LinkUI target="_blank" href="https://artsandculture.google.com/partner/dr-bhau-daji-lad-mumbai-city-museum">Click here</LinkUI> to take a virtual tour of the Museum!
                </Typography>
                <Typography variant="subtitle3" color="custom.black" mb={1}>
                    The Museum is delighted to announce the launch of an online, three-dimensional exhibition titled <LinkUI target="_blank" href="https://artsandculture.google.com/pocketgallery/-AXxYWLmkfJIHA">&apos;A Hall of Wonder&apos;</LinkUI> in celebration of International Museum Day, 2023. We are the first Museum in Mumbai to adopt Google Arts & Culture&apos;s &apos;pocket gallery&apos; and among 55+ museums across the world to adopt the new digital gallery format.
                </Typography>
                <Typography variant="subtitle3" color="custom.black" mb={1}>
                    Since 2016, the Museum has collaborated with Google Arts & Culture, a unique tool that encourages deeper public engagement with the collection and makes the museum accessible to people across the world. Online visitors can now experience over 200 highlights from a rare collection of early art and design practices from the late 18th to early 20th centuries as well as contemporary art exhibitions displayed at the Museum.
                </Typography>
                <Typography variant="subtitle3" color="custom.black" mb={1}>
                    Google Arts & culture uses Google’s photography technology inside and outside the Museum to create the standard-resolution, 360-degree, panoramic images of selected galleries and exterior depictions of the Museum, giving users the ability to experience a “virtual tour” of those selected parts of the Museum.
                </Typography>
                <Typography variant="subtitle3" color="custom.black" mb={1}>
                    Through such virtual tours and other features, online audiences will be able to curate their own Museum visit, compile their favorite collections and share these with others.
                </Typography>
                <Typography variant="subtitle3" color="custom.black" mb={1}>
                    The Museum is also a part of Google Arts & Culture’s largest virtual exhibition! ‘We Wear Culture’ is an extensive online project that launched worldwide on 8th June 2017, where over 180 other cultural institutions across the world have come together to share their collections to tell the story of attires and textiles from different cultures.
                </Typography>
                <Typography variant="subtitle3" color="custom.black" mb={1}>
                    Through the 3 exhibitions put together by the Museum, explore <LinkUI target="_blank" href="https://www.google.com/culturalinstitute/beta/u/0/exhibit/EAKy8kNCYEA_JQ">how people dressed in the past,</LinkUI> <LinkUI target="_blank" href="https://www.google.com/culturalinstitute/beta/u/0/exhibit/ZgIyJuZPKKf9KQ">the history and role of Mumbai in the international cotton trade, </LinkUI> and <LinkUI target="_blank" href="https://www.google.com/culturalinstitute/beta/u/0/exhibit/swJSnaCzbyBFIA"> rare cloth samples</LinkUI>  that were sent to England from India in the 19th century!
                </Typography>

            </ContentBox>
        </>
    )
}