// src/app/api/attendance-api/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Client, Databases } from "node-appwrite";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tableName } = body;

    if (!tableName || typeof tableName !== "string") {
      return NextResponse.json(
        { success: false, message: "Table name is required" },
        { status: 400 }
      );
    }

    const client = new Client()
      .setEndpoint(process.env.APPWRITE_ENDPOINT!)
      .setProject(process.env.APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const databases = new Databases(client);

    // 1️⃣ Create collection
    const collection = await databases.createCollection(
      process.env.DATABASE_ID!,
      tableName.toLowerCase(),
      tableName
    );

    // 2️⃣ Add attributes (columns)
    const dbId = process.env.DATABASE_ID!;
    const colId = tableName.toLowerCase();

    // string: user_id (required, size 64)
    await databases.createStringAttribute(dbId, colId, "user_id", 64, true);

    // text: hhid (required)
    await databases.createTextAttribute(dbId, colId, "hhid", true);

    // string: recordName (required, size 255)
    await databases.createStringAttribute(dbId, colId, "recordName", 255, true);

    // datetime: endDate (nullable)
    await databases.createDatetimeAttribute(dbId, colId, "endDate", false);

    // datetime: startDate (nullable)
    await databases.createDatetimeAttribute(dbId, colId, "startDate", false);

    // datetime: reminderTime (nullable)
    await databases.createDatetimeAttribute(dbId, colId, "reminderTime", false);

    return NextResponse.json({
      success: true,
      message: `Collection "${tableName}" with default columns created successfully`,
      collection,
    });
  } catch (error: unknown) {
  console.error(error);

  let message = "Failed to create collection";

  if (error instanceof Error) {
    message = error.message;
  }

  return NextResponse.json(
    { success: false, message },
    { status: 500 }
  );
}

}
