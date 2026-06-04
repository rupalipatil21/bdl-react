import { ChipBox, StackUI } from "@/styles/admin.styled";
import { ChipData, GalleryPopoverProps } from "@/types/form";
import { Button, Chip, Popover, TextField } from "@mui/material";
import { useState } from "react";

export default function GalleryPopover({onChange}: GalleryPopoverProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [chipData, setChipData] = useState<readonly ChipData[]>([]);
    const [label, setLabel ] = useState("")
    const [link, setLink ] = useState("")
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleDelete = (chipToDelete: ChipData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handleAdd = () => {
        if (!label.trim()) return;
        const updatedData = [
            ...chipData,
            {
                key: Date.now(),
                label,
                link
            }
        ]
        setChipData(updatedData)
        onChange(updatedData)
        setLabel("");
        setLink("");
    }

    return(
        <>
            <Button aria-describedby={id} variant="contained" onClick={handleClick} >
                Add gallery links
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                disableScrollLock
            >
                <StackUI>
                    <TextField 
                        size="small"
                        placeholder="Type Text"
                        id="textname" 
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                    <TextField 
                        size="small"
                        placeholder="Type Link" 
                        id="link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <Button variant="outlined" size="small" onClick={()=>{handleAdd(); setAnchorEl(null);}}>Add</Button>
                </StackUI>
            </Popover>
            <ChipBox>
                {
                    chipData.map((item)=>(
                        <Chip
                            key={item.key}
                            label={item.label}
                            onDelete={handleDelete(item)}
                        />
                    ))
                }
            </ChipBox>
            
        </>
    )
}