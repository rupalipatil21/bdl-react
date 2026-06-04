"use client"
import { CardUI, LoginContainer } from "@/styles/admin.styled";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/public/bdl-logo.svg"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginErrorProps } from "@/types/form";

export default function Page(){
    const router = useRouter();
    const [error, setError] = useState({email: "", password: ""})
    const [loading, setLoading] = useState(false);
    const [apiErrorMessage, setApiErrorMessage] = useState("")
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prev => ({...prev, [name]: value, }))
        setError(prev => ({...prev, [name]: "", }))
    }

    const validateInputs = () =>{
        let hasError = false
        const newErrors: LoginErrorProps = {}

        if(!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Please enter a valid email address."
            hasError = true
        }
        if(!form.password.trim()) {
            newErrors.password = "Password is required"
            hasError = true
        }
        
        setError(prev => ({ ...prev, ...newErrors}))
        return !hasError
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!validateInputs()) return
        setLoading(true);

        const res = await fetch("/api/fetch-data", { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password
            })
        })

        if(res.status === 200){
            router.replace("/upcoming-event");
        }else {
            const result = await res.json()
            setApiErrorMessage(result.message)
            setLoading(false)
        }
        
    }
    return(
        <>
            <LoginContainer>
                <CardUI variant="outlined">
                    <Image src={logo} alt="BDL logo" height={50} width={50} />
                    <Typography
                        component="h1"
                        variant="h4"
                    >
                        Sign in
                    </Typography>
                    {apiErrorMessage && (
                        <Typography color="error" variant="body2">
                        {apiErrorMessage}
                        </Typography>
                    )}
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <FormControl>
                            <TextField
                                error={Boolean(error.email)}
                                helperText={error.email}
                                label="Email"
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                size="small"
                                onChange={handleChange}
                            />                
                        </FormControl>
                        <FormControl>
                            <TextField
                                error={Boolean(error.password)}
                                helperText={error.password}
                                label="Password"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="********"
                                required
                                fullWidth
                                size="small"
                                onChange={handleChange}
                            />                
                        </FormControl>
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}
                        >
                            {loading ? "Please wait..." : "Sign in"}
                        </Button>
                    </Box>
                </CardUI>
            </LoginContainer>
        </>
    )
}