import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import useValidateImageDimensions from "./useValidateImageDimensions";
import { validateForm } from "@/utils/validation";
import { FieldValue, FileField, FormErrors, ValidateSchema } from "@/types/form";

export default function useInput<T extends Record<string, FieldValue>>(
    defaultValues: T,
    options?: { isEditMode?: boolean},
    form?: string
){
    const [values, setValues] = useState<T>(defaultValues);
    const [subtitlles, setSubtitles] = useState<string[]>([""]);
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const { validateImageDimension } = useValidateImageDimensions();
    const [preview, setPreview] = useState<string | null >(null);
    const [bannerpreview, setBannerPreview] = useState<string | null >(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [bannerImageFile, setBannerImageFile] = useState<File | null>(null);
    const [bannerremoveImage, setBannerRemoveImage] = useState(false);
    const [removeImage1, setRemoveImage] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const { isEditMode = false } = options || {};

    const schema1: ValidateSchema = {
        title: [{ type: "required"}],
        subtitles: [{ type: "required"}],
        image: form === "explore"
        ? [
            { type: "file", allowedTypes: ["image/jpeg", "image/png"], maxSize: 100 * 1024 * 1024 }
        ]
        : isEditMode
            ? removeImage1
                ? [
                    { type: "required", message: "Image is required" },
                    { type: "file", allowedTypes: ["image/jpeg", "image/png"], maxSize: 100 * 1024 * 1024 }
                ]
                : []
            : [
                { type: "required" },
                { type: "file", allowedTypes: ["image/jpeg", "image/png"], maxSize: 100 * 1024 * 1024 }
            ],
        pdf: [{ type: "file", allowedTypes: ["application/pdf"], maxSize: 100 * 1024 * 1024 }],
        // category: [{ type: "required" }]
    }

    const handleFileChange1 = async (e: React.ChangeEvent<HTMLInputElement>, field: FileField, width?:number, height?: number) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (field === "pdf") {
            if (file.type !== "application/pdf") {
                setPdfFile(null);
            } else {
                setPdfFile(file);
            }
        } else {
            const dimenstionErr = 
            field === "image" 
                ?  await validateImageDimension(file, width ?? 0, height ?? 0)
                : await validateImageDimension(file, 1570, 593);
            
            if (dimenstionErr ) {
                setErrors((prev: FormErrors) => ({
                    ...prev,
                    [field]: dimenstionErr,
                }));

                if(field === "image") setPreview(null);
                if(field === "bannerimg") setBannerPreview(null);

                e.target.value = "";
                return;
            }

            if (field === "image") {
                setPreview(URL.createObjectURL(file));
                setImageFile(file);
                setRemoveImage(false)
            }

            if (field === "bannerimg") {
                setBannerPreview(URL.createObjectURL(file));
                setBannerImageFile(file);
                setBannerRemoveImage(false)
            }
        }

        const fileErrors = validateForm(
            { [field]: file  }, 
            { [field]: schema1[field] }        // validate only image field
        );

        setErrors((prev:FormErrors) => ({ ...prev, [field]: fileErrors[field] || "" }));
    };
    
    function handleInputChange(
        e:
            | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>,
        index?: boolean | number,
    ) {
        const { name, value, type } = e.target as HTMLInputElement;

        if (typeof index === "number") {
            setSubtitles((prev) => {
                const updated = [...prev];
                updated[index] = value;
                return updated;
            });

            setErrors((prev) => ({
            ...prev,
            subtitles: Array.isArray(prev.subtitles)
            ? prev.subtitles.map((err, i) =>
                i === index ? "" : err
            )
            : [],
            }));
            return;
        }

        if (type === "checkbox" && typeof index === "boolean") {
            setValues((prev) => ({
                ...prev,
                [name]: index,
            }));
            return;
        }

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev: FormErrors) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSelectChange = (
        e:
        | React.ChangeEvent<HTMLInputElement>
        | SelectChangeEvent<string>
    ) => {
        const { name, value} = e.target
        setValues(prev => ({
            ...prev,
            [name]: value
        }))

        setErrors((prev: FormErrors) => ({
            ...prev,
            [name]: "",
        }))

    }

    const handleAddMore = () => {
        setSubtitles([...subtitlles, ""]);
    };

    const handleRemove = (index: number) => {
        setSubtitles(subtitlles.filter((_, i) => i !== index));
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        setPreview(null);
        setRemoveImage(true);
        setErrors((prev: FormErrors) => ({ ...prev, image: "" }));
    };

    return {
        values,
        subtitlles,
        setSubtitles,
        handleInputChange,
        setValues,
        handleAddMore,
        handleRemove,
        pdfFile,
        setPreview,
        preview,
        handleFileChange1,
        removeImage1,
        handleRemoveImage,
        bannerpreview,
        setBannerPreview,
        errors,
        setErrors,
        schema1,
        imageFile,
        handleSelectChange,
        bannerremoveImage,
        bannerImageFile
    }
}