import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const conn = await connectDB();

    return Response.json({
      success: true,
      readyState: mongoose.connection.readyState,
      database: mongoose.connection.db?.databaseName,
      host: mongoose.connection.host,
    });
  } catch (err) {
    console.error("Mongo Error:", err);

    return Response.json({
      success: false,
      error: err instanceof Error ? err.message : String(err),
    });
  }
}
