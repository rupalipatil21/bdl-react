import { connectDB } from "@/db";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
    try{
        const body = await request.json();
        console.log(body);

        const {email, password} = body;

        const getUser = await User.findOne(email);

        if (getUser) {
            return NextResponse.json({message: "With with same email id already exists"});
        }

        const newUser = new User({
            email,
            password
        })

        await newUser.save();

        return NextResponse.json({message: "User created "}, {status: 200})

    } catch(error:unknown) {
        const message =
            error instanceof Error ? error.message : "Unknown error";

        return NextResponse.json(
            { message: "Error in fetching data " + message },
            { status: 500 }
        );

    }
}