"use client"

import { AddMoreButton, CustomSwitch, DialogContentHeight, ErrorTypography, FileWrapper, FormControlUI, FormUI, HiddenInput, PreviewBox, WrapInput } from "@/styles/admin.styled";
import { Box, Button, Dialog, DialogActions, DialogProps, DialogTitle, FormControlLabel, FormHelperText, Grid, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from "next/image";
import { CloseOutlined } from "@mui/icons-material";
import { validateForm } from "@/utils/validation";
import useCrud from "@/hooks/useCrud";
import useValidateImageDimensions from "@/hooks/useValidateImageDimensions";
import SaveIcon from '@mui/icons-material/Save';
import useSnackbar from "@/hooks/useSnackbar";
import CloseIcon from '@mui/icons-material/Close';
import { SelectChangeEvent } from '@mui/material/Select'
import { FormErrorsProp, FormValues, ValidateSchema } from "@/types/form";

export interface DialogProp {
    fullscreen?: boolean;
    open: boolean;
    mode?: string | null
    onClose?: DialogProps["onClose"]
    onSuccess: () => void;
    editEvent?: FormValues | null;
    modalTitle?: string;
}

export default function DialogPage({fullscreen, open, mode, onClose, editEvent, modalTitle}:DialogProp){
    const { saveData, update } = useCrud("api/crud-event") 
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string | null >(null);
    const [errors, setErrors] = useState<FormErrorsProp>({});
    const [removeImage, setRemoveImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const { showSnackbar } = useSnackbar();
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [recordId, setRecordId] = useState(null)
    const [status, setStatus] = useState(true)
    const { validateImageDimension } = useValidateImageDimensions()
    const [formData, setFormData] = useState({ 
        title: "",
        subtitle: [],
        image: "",
        upcominglink: "",
        registerlink: "",
        date: "",
        status: true,
        category: "",
    })
    const width = mode === "calendar" ? 270 : 458
    const height = mode === "calendar" ? 200 : 277
    
    const handleClick = () => {
        inputRef.current?.click();
    };
    console.log(errors);
    

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const imageError = await validateImageDimension(file, width, height);

        if (imageError) {
            setErrors((prev) => ({
            ...prev,
            image: imageError,
            }));
            setPreview(null);
            e.target.value = "";
            return;
        }

        setPreview(URL.createObjectURL(file));
        setImageFile(file);
        const fileErrors = validateForm(
            { image: file }, 
            { image: schema.image }        // validate only image field
        );
        setErrors((prev) => ({ ...prev, image: fileErrors.image || "" }));
        setRemoveImage(false)
    };

    const [subtitles, setSubtitles] = useState<string[]>([""]);

    const handleAddMore = () => {
        setSubtitles([...subtitles, ""]);
    };

    const handleRemove = (index: number) => {
        setSubtitles(subtitles.filter((_, i) => i !== index));
    };

    const handleChange = (
        e:
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        | SelectChangeEvent<string>,
        index?:number,
    ) => {
        const { name, value } = e.target;
        if (index !== undefined) {
            setSubtitles((prev)=>{
                const updated = [...prev]
                updated[index] = value;
                return updated
            })
            setErrors((prev:FormErrorsProp) => ({ 
                ...prev, 
                subtitles: prev.subtitles
                ? prev.subtitles.map((err: string, i: number) =>
                    i === index ? "" : err
                )
                : undefined
            }))
            return
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "",}))
    };

    const handleSelectChange = (
        e:
        | React.ChangeEvent<HTMLInputElement>
        | SelectChangeEvent<string>
    ) => {
        const { name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }))

    }

    
    const schema: ValidateSchema = {
        title: [{ type: "required"}],
        subtitles: [{ type: "required"}],
        image: (mode === "edit" || mode === "upcoming")
            ? removeImage
                ? [
                    { type: "required", message: "Image is required" },
                    { type: "file", allowedTypes: ["image/jpeg", "image/png"], maxSize: 100 * 1024 * 1024 }
                ]
                : [
                    { type: "file", allowedTypes: ["image/jpeg", "image/png"], maxSize: 100 * 1024 * 1024 }
                ]
            : mode === "calendar"
            ? [
                { type: "required" },
                { type: "file", allowedTypes: ["image/jpeg", "image/png"], maxSize: 100 * 1024 * 1024 }
            ]
            : [
                { type: "required" },
                { type: "file", allowedTypes: ["image/jpeg", "image/png"], maxSize: 100 * 1024 * 1024 }
            ],
        // category: [{ type: "required" }]
    }
    
    if (mode === "calendar") {
        schema.category = [{ type: "required" }];
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        
        const data = new FormData()

        const validationErrors = validateForm({
            title: formData.title,
            subtitles: subtitles,
            image: removeImage ? null : imageFile || null
        }, schema);

        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            return; 
        }

        setLoading(true)

        const uploadImagePath = mode === "calendar" ? "/uploads/calendar" : "/uploads/upcomingevent"

        data.append("title", formData.title)
        data.append("upcominglink", formData.upcominglink)
        data.append("registerlink", formData.registerlink)
        data.append("date", formData.date)
        data.append("status", String(formData.status))
        data.append("category", formData.category)
        data.append("uploadpath", uploadImagePath)
        if (subtitles.length > 0) {
            subtitles.forEach((item) => {
                data.append("subtitle[]", item)
            })
        }

        if (imageFile) {
            data.append("image", imageFile);
        } else if (formData.image) {
            data.append("image", formData.image); // only if it's URL string
        }

        try{
            const res = 
                mode === "edit" || recordId 
                    ? await update("upcomingEvents", editEvent!._id, data) 
                : mode === "calendar" 
                    ? await saveData("calendar", data)
                    : await saveData("upcomingEvents", data)

            if(res) {
                if(res.lastInsertId){
                    setRecordId(res.lastInsertId)
                }
                showSnackbar(res.message, "success")
            }
            setLoading(false)   
        }catch {
            setLoading(false)
            showSnackbar("error", "error")
        }
    }
    
    const handleButtonClose = () => {
        onClose?.({}, "escapeKeyDown");
    };

    useEffect(()=>{
        if ((mode === "edit" || mode === "upcoming" || mode === "calendar") && editEvent) {
            setSubtitles(editEvent.subtitles && editEvent.subtitles.length ? editEvent.subtitles : [""])

            setFormData({
                title: editEvent?.title || "",
                subtitle: editEvent?.subtitles || [],
                image: editEvent?.image || "",
                upcominglink: editEvent?.upcominglink || "",
                registerlink: editEvent?.registerlink || "",
                date: editEvent?.date || "",
                status: editEvent?.status || true,
                category: editEvent?.category || "",
            });
        } 
    }, [mode, editEvent])

    const handleRemoveImage = () => {
        setImageFile(null);
        setPreview(null);
        setRemoveImage(true);
        setErrors((prev) => ({ ...prev, image: "" }));
    };

    const showPreview =  !removeImage && (preview || ((mode === "edit" || mode === "upcoming") && formData?.image));
    const showUpload = !showPreview;

    return(
            <Dialog
                fullScreen={fullscreen}
                open={open}
                onClose={onClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="sm"
            >
                <Box component="form" onSubmit={handleSubmit}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <DialogTitle id="responsive-dialog-title">
                            {
                                mode === "add" 
                                    ? "Add upcoming event" 
                                : mode === "upcoming" 
                                    ? "Save upcoming event" 
                                : mode === "calendar"
                                    ? "Save calendar event"
                                    : "Edit upcoming event"
                            }
                        </DialogTitle>
                        <Box>
                            <FormControlLabel
                                control={
                                    <CustomSwitch 
                                        defaultChecked 
                                        name="status" 
                                        checked={status}
                                        onChange={(e) => {
                                            const checked = e.target.checked;

                                            setStatus(e.target.checked);
                                            setFormData(prev => ({
                                            ...prev,
                                            status: checked,
                                            }));

                                        }} 
                                    />
                                }
                                label="Active"
                            />
                            <IconButton
                                aria-label="close"
                                onClick={()=>{handleButtonClose(); setRecordId(null)}}
                                >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                    
                    <DialogContentHeight dividers>
                        <FormUI>
                            <Grid container spacing={2}>
                                <Grid size={12}>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Title" 
                                        variant="outlined" 
                                        size="small"
                                        fullWidth 
                                        name="title" 
                                        error={Boolean(errors.title)}
                                        helperText={typeof errors.title === "string" ? errors.title : ""}
                                        onChange={handleChange}
                                        value={formData.title}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Stack gap={2} width="100%">
                                        {subtitles.map((value, index) => (
                                            <WrapInput
                                                key={index}
                                                spacing={1}
                                            >
                                            <TextField
                                                value={value}
                                                onChange={(e) => handleChange(e,index)}
                                                fullWidth
                                                size="small"
                                                multiline
                                                label={`Subtitle ${index + 1}`}
                                                name={`subtitle${index + 1}`} 
                                                helperText={errors.subtitles?.[index] || ""}
                                                error={Boolean(errors.subtitles?.[index])}
                                            />

                                            {subtitles.length > 1 && (
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleRemove(index)}
                                                >
                                                    <CloseOutlined fontSize="small" />
                                                </IconButton>
                                            )}
                                            </WrapInput>
                                        ))}
                                    </Stack>

                                    <AddMoreButton startIcon={<AddIcon />} onClick={handleAddMore}>
                                        Add more subtitle
                                    </AddMoreButton>
                                </Grid>

                                <Grid size={{xs: 12, md: 6}}>
                                    {!modalTitle &&
                                    <TextField 
                                        id="upcominglink" 
                                        label="Upcoming Link" 
                                        variant="outlined" 
                                        size="small"
                                        fullWidth 
                                        name="upcominglink" 
                                        onChange={handleChange}
                                    />}
                                </Grid>
                                <Grid size={{xs: 12, md: 6}}>
                                    {!modalTitle && <TextField 
                                        id="registerlink" 
                                        label="Register Link" 
                                        variant="outlined" 
                                        size="small"
                                        fullWidth 
                                        name="registerlink" 
                                        multiline
                                        onChange={handleChange}
                                    />}
                                </Grid>
                                
                                <Grid size={{xs: 12, md: 6}}>
                                    <TextField 
                                        id="date" 
                                        label="Date" 
                                        variant="outlined" 
                                        size="small"
                                        fullWidth 
                                        name="date" 
                                        onChange={handleChange}
                                        value={formData.date}
                                        
                                    />
                                </Grid>
                                <Grid size={{xs: 12, md: 6}}>
                                    { mode === "calendar" &&
                                    <FormControlUI size="small" error={Boolean(errors.category)} >
                                        <InputLabel>Category</InputLabel>
                                        <Select
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            label="Category"
                                            onChange={handleSelectChange}
                                            
                                        >
                                            <MenuItem value="">
                                            <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="exhibitions">Exhibitions</MenuItem>
                                            <MenuItem value="event_programms">Events & Programmes  </MenuItem>
                                            <MenuItem value="learn">Learn</MenuItem>
                                        </Select>
                                        <FormHelperText>{errors.category ?? ""}</FormHelperText>
                                    </FormControlUI>
                                    }
                                </Grid>
                            
                                <Box width="100%">
                                    <FileWrapper onClick={showUpload ? handleClick : undefined} iserror={!!errors.image}>
                                        {showUpload && (
                                        <><HiddenInput
                                            type="file"
                                            accept="image/*"
                                            ref={inputRef}
                                            onChange={handleFileChange}
                                            id="eventimg"
                                        />
                                        <Stack spacing={1}>
                                            <Typography variant="subtitle1">
                                                Click to upload image
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Supported file types JPG, PNG
                                            </Typography>
                                        </Stack></>
                                        )}
                                        { showPreview  && (
                                            <PreviewBox>
                                                <Image
                                                    src={preview ?? formData?.image}
                                                    alt="preview"
                                                    width={100}
                                                    height={100}
                                                />
                                                <DeleteIcon 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setPreview(null); 
                                                        setErrors((prev) => ({ 
                                                            ...prev, 
                                                            image: "" }
                                                        ));
                                                        handleRemoveImage()
                                                        setFormData((prev)=>({
                                                            ...prev,
                                                            image: ""
                                                        }))
                                                    }} 
                                                />
                                            </PreviewBox>
                                        )}
                                    </FileWrapper>
                                    <Stack direction="row" justifyContent="space-between" >
                                        <ErrorTypography variant="font_12"  iserror={!!errors.image}>{errors.image ? errors.image : ""}</ErrorTypography>
                                        <Typography variant="imgText">Image dimensions {width}X{height}</Typography>
                                    </Stack>
                                    
                                </Box>
                            </Grid>
                        </FormUI>
                    </DialogContentHeight>
                    <DialogActions>
                        <Button variant="outlined" autoFocus onClick={()=>{handleButtonClose(); setRecordId(null)}}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" loadingPosition="start" autoFocus loading={loading} startIcon={<SaveIcon />}>
                            Save
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
    )
}