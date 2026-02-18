import { NextRequest, NextResponse } from "next/server";
import { Client, Databases } from "node-appwrite";

export async function GET(_req: NextRequest) {
  try {
    const client = new Client()
      .setEndpoint(process.env.APPWRITE_ENDPOINT!)
      .setProject(process.env.APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const databases = new Databases(client);

    const response = await databases.listCollections(
      process.env.DATABASE_ID!
    );

    return NextResponse.json({
      success: true,
      collections: response.collections,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to list collections";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
