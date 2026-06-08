"use client"

import { BackLink, CardContentUI, CardHeaderStyle } from "@/styles/admin.styled";
import { Card, Divider } from "@mui/material";
import ExhibitionForm from "../../exhibitionForm";
import { useParams } from "next/navigation";
import useCrud from "@/hooks/useCrud";
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FormValues } from "@/types/form";

export default function AddExhibition(){
    const {id} = useParams();
    const { getById } = useCrud(`/api/getById`);
    const [data, setData] = useState<FormValues | null>(null);
    
    useEffect(()=>{
        if(!id) return;
        const fetchData = async () => {
            try {
                const res = await getById("exhibitions", String(id))
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
                    <BackLink href="/exhibitions-list"><ArrowBackIcon />Back to list </BackLink>
                } />
                <Divider />
                <CardContentUI>
                    <ExhibitionForm initialData={data}  />
                </CardContentUI>
            </Card>
        </>
    )
}