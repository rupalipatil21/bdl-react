import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const collectionName = searchParams.get("collection")
        const id = searchParams.get("id")

        if (!collectionName || !id) {
            return new Response("Missing collection or id", { status: 400 });
        }

        const client = await connectDB()
        const db = client.db(process.env.MONGODB_DB)
        const collection = db.collection(collectionName as string)

        const data = await collection.findOne({_id: new ObjectId(id)})

        if (data?.currentExh !== undefined) {
            data.currentExh = data.currentExh === "true";
        }
        
        return NextResponse.json({data})

    } catch (err) {
        console.error("Error:", err);
        return NextResponse.json({message: "Error while fetching data"},{status: 500})
    }
}