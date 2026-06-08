"use client";

import useSnackbar from "@/hooks/useSnackbar";
import { SelectEditInputCellProps } from "@/types/form";
import { Select, SelectChangeEvent } from "@mui/material";
import { useGridApiContext } from "@mui/x-data-grid";

export default function SelectEditInputCell<T>(props: SelectEditInputCellProps<T>) {
    const { showSnackbar } = useSnackbar();
    const { id, value, field, setRows, refresh } = props;
    const apiRef = useGridApiContext();

    const handleChange = async (event: SelectChangeEvent) => {
        const newValue = event.target.value;

        await apiRef.current.setEditCellValue({ id, field, value: newValue });
        apiRef.current.stopCellEditMode({ id, field });

        if (newValue === "true") {
            try {
                const res = await fetch("/api/setActive", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        collection: "upcomingEvents",
                        id,
                    }),
                });

                const json = await res.json();
                setRows(json.data);
                refresh?.(true)
                showSnackbar("Row updated successfully ", "success")
            } catch{
                showSnackbar("Error while updating row ", "error")
            } finally {
                refresh?.(false);
            }
        }
    };

    return (
        <Select
            value={value ?? "false"}
            onChange={handleChange}
            size="small"
            native
            autoFocus
        >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
        </Select>
    );
}
