import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await connectDB();

    const db = client.db(process.env.MONGODB_DB);

    const collections = await db.listCollections().toArray();

    return Response.json({
      success: true,
      database: db.databaseName,
      collections: collections.map(c => c.name),
    });
  } catch (err) {
    return Response.json({
      success: false,
      error: err instanceof Error ? err.message : String(err),
    });
  }
}
