"use client"

import { IconButtonUI } from "@/styles/admin.styled"
import { Tooltip } from "@mui/material"
import { ReactElement } from "react";

interface IconProps {
    title?: string;
    icon?: ReactElement;
    onClick?: () => void
}

export default function IconWithTooltip({ title, icon, onClick }: IconProps){
    return(
        <Tooltip title={title} arrow>
            <IconButtonUI color="inherit"
                onClick={onClick}
            >
                {icon} 
            </IconButtonUI>
        </Tooltip>
    )
}