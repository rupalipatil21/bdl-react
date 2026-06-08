import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { ObjectId } from "mongodb";

const sanitizeFileName = (name: string) => {
  return name
    .trim()
    .replace(/\s+/g, "-")        // replace spaces with -
    .replace(/[^a-zA-Z0-9.-]/g, "") // remove unsafe chars
    .toLowerCase();
};

interface DataToInsert {
  subtitles?: FormDataEntryValue[];
  galleryLinks?: unknown[];
  image?: string;
  bannerImage?: string;
  pdf?: string;
  createdAt?: Date;
  [key: string]: unknown;
}


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const collectionName = searchParams.get("collection");
    const latest = searchParams.get("latest"); // optional flag


    const client = await connectDB();
    const db = client.db(process.env.MONGODB_DB)
    const collection = db.collection(collectionName as string)

    let data;

  if (latest === "true") {
    // Fetch only the last record
    const lastRecord = await collection
      .find()
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();
    data = lastRecord[0] || null;
  } else {
    // Fetch all records
    data = await collection.find().sort({ createdAt: -1 }).toArray();
  }
      return NextResponse.json(data);

}

export async function POST(req: NextRequest) {
  try{ 
    const formData = await req.formData()
    const collectionName = formData.get("collection") as string
    const uploadpath = formData.get("uploadpath") as string
    const uploadPdfpath = formData.get("uploadPdfpath") as string

    const client = await connectDB();
    const db = client.db(process.env.MONGODB_DB)
    const collection = db.collection(collectionName)

    const dataToInsert: DataToInsert = {}

    let imageFile: File | null = null;
    let bannerImageFile: File | null = null;
    let pdfFile: File | null = null;
    let imageName: string | null = null


    formData.forEach((value, key) => {
      if (key === "subtitle[]") {
        if (!dataToInsert.subtitles) dataToInsert.subtitles = [];
        dataToInsert.subtitles.push(value);
      }

      if (key === "galleryLinks") {
        dataToInsert.galleryLinks = JSON.parse(value as string);
        return;
      }

      if (key === "image") {
        if(value instanceof File) {
          const safename = `${sanitizeFileName(value.name)}`;
          imageFile = new File([value], safename, {
            type: value.type,
            lastModified: Date.now(),
          });
          return
        } else if(typeof value === "string") {
          imageName = value
        }        

        return;
      }
       
      if (key === "bannerImage" && value instanceof File) {
        const safeName = `${sanitizeFileName(value.name)}`;
        bannerImageFile = new File([value], safeName, {
          type: value.type,
          lastModified: Date.now(),
        });

        return;
      }

      if(key === "pdf" && value instanceof File) {
        const safeName = `${sanitizeFileName(value.name)}`;

        pdfFile = new File([value], safeName, {
          type: value.type,
          lastModified: Date.now(),
        });
      }

      if (!["collection", "image", "uploadpath", "uploadPdfpath"].includes(key)) {
        dataToInsert[key] = value;
      }
    })

    const saveFile = async (file: File, folder: string) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadsDir = path.join(process.cwd(), `public/${folder}`);
      if (!fs.existsSync(uploadsDir))
        fs.mkdirSync(uploadsDir, { recursive: true });

      const filePath = path.join(uploadsDir, file.name);
      fs.writeFileSync(filePath, new Uint8Array(buffer));
      return file.type === "application/pdf" ? `${uploadPdfpath}/${file.name}` : `${uploadpath}/${file.name}`;

    };

    if (imageFile && (imageFile as File).size > 0) {
      const imagePath = await saveFile(imageFile, uploadpath )
      dataToInsert.image = imagePath
    }
    
    if (bannerImageFile && (bannerImageFile as File).size > 0) {
      const imagePath = await saveFile(bannerImageFile, uploadpath )
      dataToInsert.bannerImage = imagePath
    }

    if (imageName) {
      dataToInsert.image = imageName
    }

    if (pdfFile && (pdfFile as File).size > 0) {
      const pdfPath = await saveFile(pdfFile, uploadPdfpath)
      dataToInsert.pdf = pdfPath
    }

    dataToInsert.createdAt = new Date();

    const result = await collection.insertOne(dataToInsert)
    const insertedId = result.insertedId.toString();

    return NextResponse.json({ success: true, message: "Data saved successfully", lastInsertId: insertedId });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

      return NextResponse.json(
        { message: "Error in Adding data " + message },
        { status: 500 }
      );
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const collectionName = url.searchParams.get("collection") as string;

    if (!id)
      return NextResponse.json({ error: "Missing job ID" }, { status: 400 });

    const formData = await req.formData()

    const updateData: DataToInsert = {};

    const saveFile = async (file: File) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadsDir = path.join(process.cwd(), "public/uploads/upcomingevent");
      if (!fs.existsSync(uploadsDir))
        fs.mkdirSync(uploadsDir, { recursive: true });

      const filePath = path.join(uploadsDir, file.name);
      fs.writeFileSync(filePath, new Uint8Array(buffer));
      return `/uploads/upcomingevent/${file.name}`;
    };

    let imageFile: File | null = null;

    formData.forEach((value, key) => {
      if (key === "subtitle[]") {
        if (!updateData.subtitles) updateData.subtitles = [];
        updateData.subtitles.push(value);
      } 
      if (key === "image" && value instanceof File) {
        const safeName = `${sanitizeFileName(value.name)}`;

        imageFile = new File([value], safeName, {
          type: value.type,
          lastModified: Date.now(),
        });

        return;
      }
      if (!["collection", "image"].includes(key)) {
        updateData[key] = value;
      }
    });

    if (imageFile && (imageFile as File).size > 0) {
      const imagePath = await saveFile(imageFile)
      updateData.image = imagePath
    }

    delete updateData.collection;
    updateData.updatedAt = new Date();

    const client = await connectDB();
    const db = client.db(process.env.MONGODB_DB)
    const collection = db.collection(collectionName)

    await collection.updateOne({ _id: new ObjectId(id)}, {$set: updateData })

    return NextResponse.json({ succes: true, message: "Data updated successfully" });
  } catch (error: unknown) {
      const message =
      error instanceof Error ? error.message : "Unknown error";

      return NextResponse.json(
        { message: "Error in updating data " + message },
        { status: 500 }
      );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const collectionName = searchParams.get("collection");
    const id = searchParams.get("id");

    if (!collectionName || !id) {
      return NextResponse.json(
        { message: "Missing collection or id" },
        { status: 400 }
      );
    }
    const client = await connectDB();
    const db = client.db(process.env.MONGODB_DB)
    const collection = db.collection(collectionName)

    const result = await collection.deleteOne({
      _id: new ObjectId(id),
    })

    return NextResponse.json({
      success: true,
      message: "Record deleted successfully",
      deletedCount: result.deletedCount,
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
        { message: "Error in Deleting data " + message },
        { status: 500 }
    );
  }
}

