"use client"

import { MissionBox } from "@/styles/about.styled"
import { Box, Grid, Typography } from "@mui/material"

export default function MissionStatement(){
    return(
        <Box padding={{ xs: "25px", md: 0}}>
            <Typography variant="title1" color="custom.black">Mission Statement</Typography>
            <Grid container size={{ xs: 12, md: 8}} padding={"0 !important"}>  
                <MissionBox>
                    <Typography variant="info_text" color="custom.grey1">
                        The Dr. Bhau Daji Lad Mumbai City Museum seeks to serve the community as an institution dedicated to excellence in cultural education through exhibitions and different visual and intellectual media. To engage the community, especially children, to promote a greater appreciation of Mumbai’s artistic, cultural and economic history and development and to promote cross cultural understanding and cultural awareness at all levels.
                    </Typography>
                </MissionBox>
            </Grid>
        </Box>
    )
}