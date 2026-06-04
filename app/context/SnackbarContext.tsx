"use client";

import { createContext, useCallback, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

export type SnackbarSeverity = "success" | "error" | "warning" | "info";

interface SnackbarContextType {
  showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
}

export const SnackbarContext = createContext<SnackbarContextType | null>(null);

export function SnackbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] =
    useState<SnackbarSeverity>("success");

  const showSnackbar = useCallback(
    (msg: string, type: SnackbarSeverity = "success") => {
      setMessage(msg);
      setSeverity(type);
      setOpen(true);
    },
    []
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
        >
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}
