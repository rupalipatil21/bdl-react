import { connectDB } from "@/lib/mongodb";

export async function GET() {
  // try {
  //   const client = await connectDB();

  //   const db = client.db(process.env.MONGODB_DB);

  //   const collections = await db.listCollections().toArray();

  //   return Response.json({
  //     success: true,
  //     database: db.databaseName,
  //     collections: collections.map(c => c.name),
  //   });
  // } catch (err) {
  //   return Response.json({
  //     success: false,
  //     error: err instanceof Error ? err.message : String(err),
  //   });
  // }

  const uri = process.env.MONGODB_URI || "";

  return Response.json({
    exists: !!uri,
    startsWith: uri.substring(0, 20),
    endsWith: uri.substring(uri.length - 20),
    length: uri.length,
  });
}
