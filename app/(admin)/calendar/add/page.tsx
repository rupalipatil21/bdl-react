"use client"

import { CardHeaderStyle, BackLink, CardContentUI } from "@/styles/admin.styled"
import { Card, Divider } from "@mui/material"
import ExhibitionForm from "../../exhibition/exhibitionForm"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AddCalendar(){
    return(
        <>
            <Card>
                <CardHeaderStyle title="Add Calendar" action={
                    <BackLink href="/calendar-list"><ArrowBackIcon />Back to list </BackLink>
                } />
                <Divider />
                <CardContentUI>
                    <ExhibitionForm form="calendar" />
                </CardContentUI>
            </Card>
        </>
    )
}