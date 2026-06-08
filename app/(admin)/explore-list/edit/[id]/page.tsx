"use client"

import { BackLink, CardContentUI, CardHeaderStyle } from "@/styles/admin.styled";
import { Card, Divider } from "@mui/material";
import { useParams } from "next/navigation";
import useCrud from "@/hooks/useCrud";
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExhibitionForm from "@/app/(admin)/exhibition/exhibitionForm";
import { FormValues } from "@/types/form";

export default function AddExhibition(){
    const {id} = useParams();
    const { getById } = useCrud(`/api/getById`);
    const [data, setData] = useState<FormValues | null>(null);
    
    useEffect(()=>{
        if(!id) return;
        const fetchData = async () => {
            try {
                const res = await getById("explore", String(id))
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
                <CardHeaderStyle title="Edit Explore" action={
                    <BackLink href="/explore-list"><ArrowBackIcon />Back to list </BackLink>
                } />
                <Divider />
                <CardContentUI>
                    <ExhibitionForm initialData={data} form="explore" />
                </CardContentUI>
            </Card>
        </>
    )
}