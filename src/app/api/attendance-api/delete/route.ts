import { NextRequest, NextResponse } from "next/server";
import { Client, Databases } from "node-appwrite";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { tableId } = body;

    if (!tableId || typeof tableId !== "string") {
      return NextResponse.json(
        { success: false, message: "Table ID is required" },
        { status: 400 }
      );
    }

    const client = new Client()
      .setEndpoint(process.env.APPWRITE_ENDPOINT!)
      .setProject(process.env.APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const databases = new Databases(client);

    await databases.deleteCollection(process.env.DATABASE_ID!, tableId);

    return NextResponse.json({
      success: true,
      message: `Collection "${tableId}" deleted successfully`,
    });
  } catch (error: unknown) {
    console.error(error);

    let message = "Failed to delete collection";
    if (error instanceof Error) message = error.message;

    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}