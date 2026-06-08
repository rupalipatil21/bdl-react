import { FieldValue, FormDataType, ValidateSchema, ValidationRule } from "@/types/form";

export function validateField(value: FieldValue, rules: ValidationRule[]){
    
    for(const rule of rules ){
        switch (rule.type) {
            case "required":
                if(!value || (typeof value === "string" && value.trim() === "")) {
                    return rule.message || "This field is required"
                }
                // if (Array.isArray(value)) {
                //     value.forEach((item, index) => {
                //         if (!item || item.trim() === "") {
                //             errors[`${fieldName}.${index}`] = rule.message || "This field is required";
                //         }
                //     })
                // }
                if (Array.isArray(value)) {
                    const itemErrors = value.map(v =>
                        !v || v.trim() === "" ? (rule.message || "This field is required") : undefined
                    ).filter((error): error is string => error !== undefined);;

                    if (itemErrors.some(e => e !== undefined)) {
                        return itemErrors; // return array of errors
                    }
                }
                break;

            case "file": 
                if(value){
                    const file = value as File
                    if(rule.allowedTypes && !rule.allowedTypes.includes(file.type)) {
                        return rule.message || "Invalid file type"
                    }

                    if (rule.maxSize && file.size > rule.maxSize) {
                        return rule.message || "File is too large"
                    }
                }
                break;
        
            default:
                break;
        } 
    }
}

export function validateForm(
  formData: FormDataType,
  schema: ValidateSchema
): Partial<Record<string, string | string[]>> {
  const errors: Partial<Record<string, string | string[]>> = {};

  for (const field in schema) {
    const fieldError = validateField(formData[field], schema[field]);

    if (fieldError) {
      errors[field] = fieldError;
    }
  }

  return errors;
}