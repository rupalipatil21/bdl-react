import { NextResponse } from "next/server";
import { LOGIN_CREDENTIALS } from "../credentials";

export async function POST(req: Request){
    try {
        const { email, password } = await req.json()

        if( email === LOGIN_CREDENTIALS.email && password === LOGIN_CREDENTIALS.password){
            const res = NextResponse.json({ success: true }, { status: 200 });

            res.cookies.set("session", "LoggedIn", {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60, // 1 hour
            });

            return res;
        }
        

        return NextResponse.json(
        {
            success: false,
            message: "Invalid email or password",
        }, 
        { status: 401 })

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 },
        );
    }   
}