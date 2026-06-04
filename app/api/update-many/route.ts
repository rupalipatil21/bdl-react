import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    try{
        const { collection, ids, data} = await req.json()
        if(!ids?.length){
            return NextResponse.json({error: "No IDs provided"}, {status: 400})
        }

        const objectIds = ids.map((id: string) => new ObjectId(id));
        const client = await connectDB()
        const db = client.db(process.env.MONGODB_DB);

        const result = await db.collection(collection).updateMany(
            {_id: {$in: objectIds }},
            {$set: {...data, updatedAt: new Date()}}
        )

        return NextResponse.json({success: true, modified: result.modifiedCount})
    } catch {
        return NextResponse.json({error: "Update failed"}, { status: 500})
    }
}