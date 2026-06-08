"use client"

import { WrapInput, AddMoreButton, StyledRichTextEditor, FileWrapper, HiddenInput, PreviewBox, ErrorTypography, GridScroll, VisuallyHiddenInput, RemoveIcon } from "@/styles/admin.styled";
import { CloseOutlined } from "@mui/icons-material";
import { Box, Grid, TextField, Stack, Button, Typography, FormControlLabel, Checkbox, Divider, FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import { RichTextEditorRef } from "mui-tiptap";
import GalleryPopover from "../components/GalleryPopover";
import { useEffect, useRef, useState } from "react";
import { validateForm } from "@/utils/validation";
import useSnackbar from "@/hooks/useSnackbar";
import useCrud from "@/hooks/useCrud";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Image from "next/image";
import useInput from "@/hooks/useInput";
import { BaseFormData, ChipData, FormErrors, FormProps } from "@/types/form";
import dynamic from "next/dynamic";

export default function ExhibitionForm<T extends BaseFormData>({ initialData, form }: FormProps<T>){
    const [recordId, setRecordId] = useState<string | null>(null)
    const isEditMode = Boolean(recordId || initialData?._id);
    const { values, subtitlles, handleInputChange, handleAddMore, handleRemove, handleFileChange1, preview, setPreview, removeImage1, handleRemoveImage, bannerpreview, setBannerPreview, pdfFile, errors, setErrors, schema1, setValues, setSubtitles, imageFile, handleSelectChange, bannerremoveImage, bannerImageFile } = useInput({
        title: "",
        subtitles: [],
        image: "",
        bannerImage: "",
        upcominglink: "",
        registerlink: "",
        date: "",
        currentExh: true as boolean,
        descriptionHTML: "",
        category: "",
        program: ""
    }, { isEditMode }, form);
    
    const { saveData, update } = useCrud("/api/crud-event") 
    const rteRef = useRef<RichTextEditorRef>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const bannerRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false);
    const { showSnackbar } = useSnackbar();
    const [galleryData, setGalleryData] = useState<ChipData[]>([])

    useEffect(()=>{
        if(!initialData) return;
        
        if(initialData){
            setValues({
                title: initialData.title ?? "",
                subtitles: initialData.subtitles ?? [],
                image: initialData.image ?? "",
                bannerImage: initialData.bannerImage ?? "",
                upcominglink: initialData.upcominglink ?? "",
                registerlink: initialData.registerlink ?? "",
                date: initialData.date ?? "",
                currentExh: initialData.currentExh ?? true,
                descriptionHTML: initialData.descriptionHTML ?? "",
                category: initialData.category ?? "",
                program: initialData.program ?? ""
            });
        }

        if (initialData?.subtitles.length && subtitlles.length === 1) {
            setSubtitles(initialData?.subtitles)
        }
        
        if(initialData?._id) {setRecordId(initialData?._id)}
    },[initialData, setValues, setSubtitles, subtitlles.length])

    const handleClick = (ref:React.RefObject<HTMLInputElement | null>) => {
        ref.current?.click();
    };

    const showPreview =  !removeImage1 && (preview || (values?.image));
    const showUpload = !showPreview;
    const showBannerPreview =  !bannerremoveImage && (bannerpreview || (values?.bannerImage));
    const showBannerUpload = !showBannerPreview;

    const handleChipsData = (data: ChipData[]) => {
        setGalleryData(data)
    }

    const data = new FormData()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        const validationErrors = validateForm({
            title: values.title,
            subtitles: subtitlles,
            image: removeImage1 ? null : imageFile || null,
            pdf: pdfFile,
            category: values.category ?? undefined
        }, schema1);
        
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            if (pdfFile === null) {
                return;
            }
        }

        setLoading(true)

        const editor = rteRef.current?.editor;
        if (!editor) return;

        const contentJSON = editor.getJSON();
        const contentHTML = editor.getHTML();
        const contentText = editor.getText();

        data.append("title", values.title)
        if (values.upcominglink) {
            data.append("upcominglink", values.upcominglink)
        }
        data.append("registerlink", values.registerlink)
        data.append("date", values.date)
        data.append("currentExh", String(values.currentExh))
        data.append("descriptionJSON", JSON.stringify(contentJSON));
        data.append("descriptionHTML", contentHTML);
        data.append("descriptionText", contentText);
        data.append("uploadpath", "/uploads/upcomingevent")
        data.append("uploadPdfpath", "/uploads/pdf")

        if (values.category) {
            data.append("category", values.category)
        }
        if (values.program) {
            data.append("program", values.program)
        }

        if (subtitlles.length > 0) {
            subtitlles.forEach((item) => {
                data.append("subtitle[]", item)
            })
        }

        if (galleryData.length > 0) {
            data.append("galleryLinks", JSON.stringify(galleryData));
        }

        if(imageFile){
            data.append("image", imageFile)
        }

        if(bannerImageFile){
            data.append("bannerImage", bannerImageFile)
        }

        if (pdfFile) {
            data.append("pdf", pdfFile)
        }
        try{
            const res = 
                (recordId || initialData) && (form==="calendar") 
                ? await update("calendar", String(recordId), data) 
                : form === "calendar" 
                ? await saveData("calendar", data)
                : (recordId || initialData) && (form==="explore") 
                ? await update("explore", String(recordId), data) 
                : form === "explore"
                ? await saveData("explore", data)
                : recordId || initialData
                ?  await update("exhibitions", String(recordId), data) 
                : await saveData("exhibitions", data)

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

    const width = form === "calendar" ? 270 : 458;
    const height = form === "calendar" ? 200 : 277;

    const TiptapEditor = dynamic(
        () => import("../components/common/TiptapEditor"),
        { ssr: false }
    );

    return(
        <>
            <Box component="form" onSubmit={handleSubmit}>
                <GridScroll container spacing={3}>
                    <Grid size={12}>
                        <TextField 
                            id="title" 
                            label="Title" 
                            variant="outlined" 
                            size="small"
                            fullWidth 
                            name="title" 
                            error={Boolean(errors.title)}
                            helperText={typeof errors.title === "string" ? errors.title : ""}
                            onChange={handleInputChange}
                            value={values.title}
                        />
                    </Grid>
                    <Grid size={12}>
                        <Stack gap={2} width="100%">
                        {subtitlles.map((value, index) => (
                            <WrapInput
                                key={index}
                                spacing={1}
                            >
                                <TextField
                                    value={value}
                                    onChange={(e) => handleInputChange(e,index)}
                                    fullWidth
                                    size="small"
                                    multiline
                                    label={`Subtitle ${index + 1}`}
                                    name={`subtitle${index + 1}`} 
                                    helperText={errors.subtitles?.[index] || ""}
                                    error={Boolean(errors.subtitles?.[index])}
                                />

                                {subtitlles.length > 1 && (
                                    <RemoveIcon
                                        size="small"
                                        onClick={() => handleRemove(index)}
                                    >
                                        <CloseOutlined fontSize="small" />
                                    </RemoveIcon>
                                )}
                                </WrapInput>
                            ))}
                        </Stack>
                        <AddMoreButton startIcon={<AddIcon />} onClick={handleAddMore} >
                            Add more subtitle
                        </AddMoreButton>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <TextField 
                            id="date" 
                            label="Date" 
                            variant="outlined" 
                            size="small"
                            fullWidth 
                            name="date" 
                            error={Boolean(errors.date)}
                            helperText={typeof errors.date === "string" ? errors.date : ""}
                            onChange={handleInputChange}
                            value={values.date}
                        />
                    </Grid>
                    {!(form === "explore") && 
                    <Grid size={{xs: 12, md: 4}}>
                        <TextField 
                            id="upcominglink" 
                            label={form ? "Calendar Link" : "Upcoming Link" }
                            variant="outlined" 
                            size="small"
                            fullWidth 
                            name="upcominglink" 
                            onChange={handleInputChange}
                        />
                    </Grid>
                    }
                    {form === "calendar" &&
                        <Grid size={{xs: 12, md: 4}}>
                            <FormControl fullWidth size="small" error={Boolean(errors.category)}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    id="category"
                                    name="category"
                                    value={values.category}
                                    label="Category"
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem><em>none</em></MenuItem> 
                                    <MenuItem value="exhibitions">Exhibitions</MenuItem>
                                    <MenuItem value="event_programms">Events & Programmes</MenuItem>
                                    <MenuItem value="learn">Learn</MenuItem>
                                </Select>
                                <FormHelperText>{errors.category ?? ""}</FormHelperText>
                            </FormControl>
                        </Grid>
                    }
                    {form === "explore" &&
                        <Grid size={{xs: 12, md: 4}}>
                            <FormControl fullWidth size="small" error={Boolean(errors.category)}>
                                <InputLabel>Select Program</InputLabel>
                                <Select
                                    id="program"
                                    name="program"
                                    value={values.program}
                                    label="Select Program"
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem><em>none</em></MenuItem> 
                                    <MenuItem value="film">Film</MenuItem>
                                    <MenuItem value="performances">Performances</MenuItem>
                                    <MenuItem value="public_lectures">Public Lectures</MenuItem>
                                    <MenuItem value="museum_katta">Museum Katta</MenuItem>
                                    <MenuItem value="crafts_mela">Crafts Mela</MenuItem>
                                </Select>
                                <FormHelperText>{errors.category ?? ""}</FormHelperText>
                            </FormControl>
                        </Grid>
                    }
                    {!(form === "calendar") &&
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField 
                                id="registerlink" 
                                label="Register Link" 
                                variant="outlined" 
                                size="small"
                                fullWidth 
                                name="registerlink" 
                                onChange={handleInputChange}
                            />
                        </Grid>
                    }
                    {!(form === "calendar" || form === "explore") &&
                    <>
                        <Grid size={{xs: 12}} >
                            <Stack direction="row" alignItems="center">
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                    >
                                    Upload Press Release
                                    <VisuallyHiddenInput
                                        type="file"
                                        onChange={(e)=>handleFileChange1(e, "pdf")}
                                    />
                                </Button>
                                <Typography ml={2}>{pdfFile ? pdfFile.name : undefined}</Typography>
                            </Stack>
                            <ErrorTypography variant="font_12" iserror={Boolean(errors.pdf)}>{errors.pdf ? errors.pdf : ""}</ErrorTypography>
                        </Grid>
                        <Grid size={{xs: 12}} >
                            <GalleryPopover onChange={handleChipsData} />
                        </Grid>
                    </>}
                    <Grid size={12}>
                        <StyledRichTextEditor>
                            <TiptapEditor content={values.descriptionHTML} />
                            {/* <RichTextEditor
                                ref={rteRef}
                                extensions={[
                                    StarterKit.configure({
                                    orderedList: {
                                        keepMarks: true,
                                        keepAttributes: false,
                                    },
                                    bulletList: {
                                        keepMarks: true,
                                        keepAttributes: false,
                                    },
                                    }),
                                ]}
                                renderControls={() => (
                                <MenuControlsContainer>
                                    <MenuSelectHeading />
                                    <MenuDivider />
                                    <MenuButtonBold />
                                    <MenuButtonItalic />
                                    <MenuButtonOrderedList />
                                    <MenuButtonBulletedList />
                                </MenuControlsContainer>
                                )}
                                immediatelyRender={false}
                                content={values.descriptionHTML}
                            /> */}
                        </StyledRichTextEditor>
                    </Grid>
                    <Grid size={{xs: 12, md: 6, lg: 4}}>   
                        <Box width="100%">
                            <FileWrapper 
                                onClick={() => showUpload ? handleClick(inputRef) : undefined} iserror={Boolean(errors.image)}
                            >
                                {showUpload && (
                                <><HiddenInput
                                    type="file"
                                    accept="image/*"
                                    ref={inputRef}
                                    onChange={(e)=>handleFileChange1(e, "image", width, height)}
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
                                            src={preview ?? values?.image}
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
                                                handleRemoveImage()
                                                setValues((prev)=>({
                                                    ...prev,
                                                    image: ""
                                                }))
                                            }} 
                                        />
                                    </PreviewBox>
                                )}
                            </FileWrapper>
                            <Stack direction="row" justifyContent="space-between" >
                                <ErrorTypography variant="font_12"  iserror={Boolean(errors.image)}>{errors.image ? errors.image : ""}</ErrorTypography>
                                <Typography variant="imgText">Image dimensions {form === "calendar" ? "270X200" : "458X277"}</Typography>
                            </Stack>
                            
                        </Box>
                    </Grid>
                    {!(form === "calendar") && <>
                    <Grid size={{xs: 12, md: 6, lg: 4}}>
                        <FileWrapper onClick={() => handleClick(bannerRef)}>
                            { showBannerUpload &&
                                <><HiddenInput
                                    type="file"
                                    accept="image/*"
                                    ref={bannerRef}
                                    onChange={(e)=>handleFileChange1(e, "bannerimg" )}
                                    id="bannerimg"
                                />
                                
                                <Stack spacing={1}>
                                    <Typography variant="subtitle1">
                                        Upload image for banner
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Supported file types JPG, PNG
                                    </Typography>
                                </Stack> </>
                            }
                            { showBannerPreview  && 
                                <PreviewBox>
                                    <Image
                                        src={bannerpreview ?? values?.bannerImage}
                                        alt="preview"
                                        width={300}
                                        height={100}
                                        style={{width: "calc(100% - 16px)"}}
                                    />
                                    <DeleteIcon 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setBannerPreview(null); 
                                            setErrors((prev:FormErrors) => ({ 
                                                ...prev, 
                                                image: "" }
                                            ));
                                            handleRemoveImage()
                                            setValues((prev)=>({
                                                ...prev,
                                                image: ""
                                            }))
                                        }} 
                                    />
                                </PreviewBox>
                            }
                        </FileWrapper>
                        <Stack direction="row" justifyContent="space-between" >
                            <ErrorTypography variant="font_12"  iserror={Boolean(errors.bannerimg)}>{errors.bannerimg ? errors.bannerimg : ""}</ErrorTypography>
                            <Typography variant="imgText">Image dimensions 1570X593</Typography>
                        </Stack>
                    </Grid>
                    {!(form === "explore") && 
                    <Grid size={12}>
                        <FormControlLabel 
                            control={
                            <Checkbox id="currentExh" name="currentExh" checked={Boolean(values.currentExh)} onChange={handleInputChange}  />
                            } 
                            label="Set as current exhibition" 
                        />
                    </Grid>
                    }
                    </> }
                </GridScroll>
                <Divider />
                <Grid container spacing={3}>
                    <Grid size={12} display="flex" justifyContent="flex-end" gap={2}>
                        { !initialData && <Button variant="outlined">Reset</Button> }
                        <Button variant="contained" type="submit" loading={loading} loadingPosition="start" autoFocus >
                            {initialData ? "Update" : "Save"} {form ? "" : "Exhibition"}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}