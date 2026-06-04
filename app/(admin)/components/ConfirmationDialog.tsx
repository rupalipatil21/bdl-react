import { ConfirmationDialogProps } from "@/types/form"
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"

export default function ConfirmationDialog({open, dialogMessage, dialogTitle, onConfirm, onClose}: ConfirmationDialogProps){
    return (
        <>
            <Dialog
                open={open}
                disableScrollLock
            >
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogMessage}
                    
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="inherit" onClick={onClose}>
                    No
                    </Button>
                    <Button
                        onClick={onConfirm}
                        color="error"
                        variant="contained"
                        type="submit"
                    >
                    Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}