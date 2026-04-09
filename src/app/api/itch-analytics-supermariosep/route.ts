import { NextResponse } from "next/server";

interface ItchGame {
  id: number;
  title: string;
  url: string;
  views_count?: number;
  downloads_count?: number;
  purchases_count?: number;
  cover_url?: string;
}

interface ItchResponse {
  games: ItchGame[];
}


export async function GET() {
  const apiKey = process.env.ITCH_API_KEY;
  const gameId = Number(process.env.ITCH_GAME_ID_SUPERMARIOSEP);

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

    const data: ItchResponse = await res.json();

   const game = data.games.find((g) => g.id === gameId);

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
      cover_img: game.cover_url,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch itch analytics" },
      { status: 500 }
    );
  }
}
