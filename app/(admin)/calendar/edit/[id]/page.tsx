"use client"

import { BackLink, CardContentUI, CardHeaderStyle } from "@/styles/admin.styled";
import { Card, Divider } from "@mui/material";
import { useParams } from "next/navigation";
import useCrud from "@/hooks/useCrud";
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExhibitionForm from "@/app/(admin)/exhibition/exhibitionForm";
import { CalendarFormValues } from "@/types/form";

export default function EditCalendar(){
    const {id} = useParams();
    const { getById } = useCrud(`/api/getById`);
    const [data, setData] = useState<CalendarFormValues>();
    useEffect(()=>{
        if(!id) return;
        const fetchData = async () => {
            try {
                const res = await getById("calendar", String(id))
                setData(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    },[id, getById])

    return(
        <>
            <Card>
                <CardHeaderStyle title="Edit Exhibiiton" action={
                    <BackLink href="/calendar-list"><ArrowBackIcon />Back to list </BackLink>
                } />
                <Divider />
                <CardContentUI>
                    <ExhibitionForm initialData={data} form="calendar" />
                </CardContentUI>
            </Card>
        </>
    )
}