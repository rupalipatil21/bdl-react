import { useToggleState } from "@/hooks/useToggleState";
import { ContentBox, DescriptionBox, HorizontalDivider, LinkUI, PastLectures, ToggleLink } from "@/styles/common.styled";
import { Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import useCrud from "@/hooks/useCrud";
import { useRefreshData } from "@/hooks/useRefreshData";
import { useCallback, useEffect } from "react";
import { ProgramItem, UpcomingItem } from "@/types/form";

export default function PublicLectures(){
    const { isExpanded, handleClickToggle } = useToggleState();
    const { getAll } = useCrud("/api/crud-event")
    const fetchData = useCallback(async () => {
        return await getAll("explore");
    }, [getAll]);
    const {refresh, data } = useRefreshData(fetchData)

    useEffect(()=>{
        refresh()
    }, [refresh])

    const publicLectureData = data?.filter(
        (item: ProgramItem) => {
            return item.program === "public_lectures"
        }
    ) || [];
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Public Lectures</Typography>
                <Typography variant="subtitle3" color="custom.black" mb={1}>
                    In its aim to promote a greater understanding of traditional and contemporary arts, the Museum regularly conducts public lectures with visiting scholars, researchers and art historians on a wide range of topics. Through extensive programing the Museum seeks to serve the community as an institution dedicated to excellence in cultural education. These open-to-public evening lectures promote cross cultural understanding and cultural awareness.
                </Typography>
            </ContentBox>
            <LinkUI href="https://www.youtube.com/@BDLMuseum/videos" target="_blank">Click here to watch past lectures on the Museum&apos;s YouTube channel</LinkUI>
            <HorizontalDivider />
            { publicLectureData && publicLectureData.length > 0 && 
            <><Typography variant="title1" color="custom.black">Selection of Past Lectures</Typography></>}

            {
                publicLectureData.map((data: UpcomingItem, index: number) => {                  
                    const text = data.subtitles;
                    const [first, second] = text[0].split(",")
                    return(
                        <PastLectures key={index}>
                            <Typography variant="font_16" color="custom.black" mb={0} mt="25px"><i>{data.title}</i></Typography>
                            <Typography variant="body_h4" color="custom.black" mb={0}><i>{first} </i> {second && ","}<span>{second}</span></Typography>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" >
                                <Typography variant="body_h4" color="custom.black">
                                    {data.date}
                                </Typography>
                                <ToggleLink variant="body_h4" onClick={()=>handleClickToggle("readmore"+index)}>
                                    Read {isExpanded["readmore"] ? "Less" : "More" }
                                    {isExpanded["readmore"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </ToggleLink>
                            </Stack>
                            {
                                isExpanded["readmore"+index] ?
                                <DescriptionBox color="custom.black" dangerouslySetInnerHTML={{ __html: data.descriptionHTML }} ></DescriptionBox>
                                : ""
                            }
                            <HorizontalDivider />
                        </PastLectures>
                    )
                })
            }
            
        </>
    )
}