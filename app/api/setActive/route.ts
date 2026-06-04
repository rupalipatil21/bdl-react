import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req: Request) {
    try {
        const { id, collection } = await req.json();
        if(!id?.length){
            return NextResponse.json({error: "No IDs provided"}, {status: 400})
        }

        const client = await connectDB();
        const db = client.db(process.env.MONGODB_DB);


        // Step 1 → deactivate previous active row
        await db.collection(collection).updateMany(
        { status: "true" },
        { $set: { status: "false" } }
        );

        // Step 2 → activate selected row
        await db.collection(collection).updateOne(
        { _id: new ObjectId(id) },
        { $set: { status: "true" } }
        );

        const data = await db.collection(collection).find().sort({ createdAt: -1 }).toArray();

        return NextResponse.json({ success: true, data: data });

    } catch (err) {
        console.error(err);
        return NextResponse.json(
        { message: "Update failed" },
        { status: 500 }
        );
    }
}
