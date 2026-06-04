"use client"

import { BackLink, CardContentUI, CardHeaderStyle } from "@/styles/admin.styled";
import { Card, Divider } from "@mui/material";
import ExhibitionForm from "../exhibitionForm";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AddExhibition(){

    return(
        <>
            <Card>
                <CardHeaderStyle title="Add Exhibiiton" action={
                    <BackLink href="/exhibitions-list"><ArrowBackIcon />Back to list </BackLink>
                } />
                <Divider />
                <CardContentUI>
                    <ExhibitionForm />
                </CardContentUI>
            </Card>
        </>
    )
}