"use client"
import useValidateImageDimensions from "@/hooks/useValidateImageDimensions";
import { FormUI, FileWrapper, HiddenInput, PreviewBox, ErrorTypography } from "@/styles/admin.styled";
import { validateForm } from "@/utils/validation";
import { Dialog, Box, DialogTitle, DialogContent, Grid, TextField, Stack, Typography, DialogActions, Button, DialogProps } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import useCrud from "@/hooks/useCrud";
import useSnackbar from "@/hooks/useSnackbar";
import { CloseReason, FormErrors, ValidateSchema } from "@/types/form";

export interface DialogProp {
    open: boolean;
    onClose: DialogProps["onClose"]
}

export default function BannerDialog({ open, onClose}:DialogProp){
    const { saveData, update } = useCrud("api/crud-event") 
    const { showSnackbar } = useSnackbar();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false);
    const [recordId, setRecordId] = useState(null);
    const [errors, setErrors] = useState<FormErrors>({});
    const [preview, setPreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const { validateImageDimension } = useValidateImageDimensions()
    const [formData, setFormData] = useState({
        pageName: "",
        pageLink: "",
        image: ""
    })
    const schema: ValidateSchema = {
        pageName: [{ type: "required"}],
        image: 
            [
                { type: "required" },
                { type: "file", allowedTypes: ["image/jpeg", "image/png"], maxSize: 100 * 1024 * 1024 }
            ]
    }

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleButtonClose = ()=> {
        onClose?.({}, "buttonClick" as CloseReason);
    }

    const handleChange = (
        e: 
        | React.ChangeEvent<HTMLInputElement>,
        index?: number
    ) => {
        const { name, value } = e.target;
        if (index !== undefined) {
            setErrors((prev:FormErrors) => ({ 
                ...prev, 
            }))
            return
        }
        setFormData((prev) => ({ ...prev, [name]: value}))
        setErrors((prev:FormErrors)=> ({...prev, [name]: ""}))
    }

    const handleFileChange = async (e:React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0]
        if(!file) return

        const imageError = await validateImageDimension(file, 1570, 593);

        if(imageError){
            setErrors((prev: FormErrors)=>({
                ...prev,
                image: imageError,
            }))

            setPreview(null)
            e.target.value = "";
            return;
        }

        setPreview(URL.createObjectURL(file));
        setImageFile(file);
        const fileError = validateForm(
            {image: file},
            {image: schema.image}
        )
        setErrors((prev: FormErrors)=>({
            ...prev,
            image: fileError.image || ""
        }))
    }

    const handleRemoveImage = ()=> {
        setPreview(null);
        setImageFile(null);
        setErrors((prev: FormErrors) => ({ ...prev, image: ""}))
    }

    const data = new FormData()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        const validationErrors = validateForm({
            pageName: formData.pageName,
            image: imageFile || null
        }, schema);

        setErrors(validationErrors);
        
        if(Object.keys(validationErrors).length > 0) {
            return
        }

        setLoading(true)
        

        data.append("pagename", formData.pageName)
        data.append("pagelink", formData.pageLink)
        data.append("uploadpath", "/pagesbannerimages")

        if(imageFile){
            data.append("image", imageFile)
        }

        try{
            const res = recordId ? await update("bannerImages", recordId, data) : await saveData("bannerImages", data)

            if(res) {
                if(res.lastInsertId){
                    setRecordId(res.lastInsertId)
                }
                setLoading(false)
                showSnackbar(res.message, "success")
            }
        }catch {
            showSnackbar("error", "error")
        }
    }

    // useEffect(()=>{

    //         setFormData({
    //             pageName: formData.pageName || "",
    //             pageLink: formData.pageLink || "",
    //             image: formData.image || "",
    //         });
    // }, [])
    return(
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth="sm"
        >
            <Box component="form" onSubmit={handleSubmit}>
                <DialogTitle id="responsive-dialog-title">
                    Add Banner
                </DialogTitle>
                <DialogContent dividers >
                    <FormUI>
                        <Grid container size={12} spacing={2}>
                            <TextField 
                                id="outlined-basic" 
                                label="Page Name" 
                                variant="outlined" 
                                size="small"
                                fullWidth 
                                name="pageName" 
                                error={Boolean(errors.pageName)}
                                helperText={typeof errors.pageName === "string" ? errors.pageName : ""}
                                onChange={handleChange}
                                value={formData.pageName}
                            />

                            <TextField 
                                id="pagelink" 
                                label="Page Link" 
                                variant="outlined" 
                                size="small"
                                fullWidth 
                                name="pagelink" 
                            />
                        
                            <Box width="100%">
                                <FileWrapper onClick={handleClick} iserror={Boolean(errors.image)}>
                                    {!preview && (
                                    <><HiddenInput
                                        type="file"
                                        accept="image/*"
                                        ref={inputRef}
                                        onChange={handleFileChange}
                                        id="bannerimg"
                                    />
                                    <Stack spacing={1}>
                                        <Typography variant="subtitle1">
                                            Click to upload Banner image
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            PNG, JPG files and  dimensions should be  1570X593
                                        </Typography>
                                    </Stack></>
                                    )}
                                    { preview  && (
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
                                                    setErrors((prev:FormErrors) => ({ 
                                                        ...prev, 
                                                        image: "" }
                                                    ));
                                                    handleRemoveImage();
                                                    setFormData((prev)=>({
                                                        ...prev,
                                                        image: ""
                                                    }));
                                                }} 
                                            />
                                        </PreviewBox>
                                    )} 
                                </FileWrapper>
                                <ErrorTypography variant="font_12"  iserror={Boolean(errors.image)}>{errors.image ? errors.image : ""}</ErrorTypography>
                            </Box>
                            
                        </Grid>
                    </FormUI>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" autoFocus onClick={()=>{handleButtonClose(); setRecordId(null);}}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" loadingPosition="start" autoFocus loading={loading} >
                        Save
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    )
}