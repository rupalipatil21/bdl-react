import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {condition, collectionName} = await req.json()
        if (!collectionName) {
            return new Response("Missing collection name", { status: 400 });
        }

        const client = await connectDB()
        const db = client.db(process.env.MONGODB_DB)
        const collection = db.collection(collectionName as string)

        const data = await collection.find(condition).toArray();
        return NextResponse.json({data})
        
    }catch(err) {
        console.error("Error:", err);
        return NextResponse.json({message: "Error while fetching data"}, {status: 500})
    }
}