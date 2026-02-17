import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.ITCH_API_KEY;
  const gameId = Number(process.env.ITCH_GAME_ID);

  if (!apiKey || !gameId) {
    return NextResponse.json(
      { error: "Missing ITCH_API_KEY or ITCH_GAME_ID" },
      { status: 400 }
    );
  }

  try {
    // ✅ correct endpoint
    const res = await fetch(
      `https://itch.io/api/1/${apiKey}/my-games`,
      { cache: "no-store" }
    );

    const data = await res.json();

    const game = data.games.find((g: any) => g.id === gameId);

    if (!game) {
      return NextResponse.json(
        { error: "Game not found in your itch account" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      title: game.title,
      views: game.views_count,
      downloads: game.downloads_count,
      purchases: game.purchases_count,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch itch analytics" },
      { status: 500 }
    );
  }
}
