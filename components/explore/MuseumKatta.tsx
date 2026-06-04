import { useToggleState } from "@/hooks/useToggleState";
import { ContentBox, DescriptionBox, HorizontalDivider, PastLectures, ToggleLink } from "@/styles/common.styled";
import { Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import useCrud from "@/hooks/useCrud";
import { useRefreshData } from "@/hooks/useRefreshData";
import { useCallback, useEffect } from "react";
import { FormValues, ProgramItem } from "@/types/form";

export default function MuseumKatta(){
    const { isExpanded, handleClickToggle } = useToggleState();
    const { getAll } = useCrud("/api/crud-event")
    const fetchData = useCallback(async () => {
        return await getAll("explore");
    }, [getAll]);
    const {refresh, data } = useRefreshData(fetchData)

    useEffect(()=>{
        refresh()
    }, [refresh])

    const museumKattaData = data?.filter(
        (item: ProgramItem) => {
            return item.program === "museum_katta"
        }
    ) || [];
    console.log(museumKattaData)
    return(
        <>
            <ContentBox>
                <Typography variant="title1" color="custom.black">Museum Katta</Typography>
                <Typography variant="subtitle3" color="custom.black" mb={1}>
                    Museum Katta, a curated programme series in Marathi, showcases historical and contemporary social and cultural practices in folk art, cinema, literature, theatre, music, and visual arts. It aims to be a mediator between artists and audience in building sensitive contemporary responses through pioneering historical projects, experiments, and programmes as a form of documentation.
                </Typography>
            </ContentBox>
            <HorizontalDivider />
            
            { museumKattaData && museumKattaData.length > 0 && 
            <><Typography variant="title1" color="custom.black">Past editions</Typography></>}

            {
                museumKattaData.map((data: FormValues, index: number) => {
                    return(
                        <PastLectures key={index}>
                            <Typography variant="subtitle3" color="custom.black" mb={0}><b><i>{data.title}</i></b></Typography>
                            <Typography variant="subtitle3" color="custom.black" mb={0}><i>{data.subtitles}</i></Typography>
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
                                // ( data.subtitles?.map((subItem:any, index: number) => (
                                // )))
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