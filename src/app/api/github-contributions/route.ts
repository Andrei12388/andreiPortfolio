import { NextResponse } from "next/server";

export async function GET() {
  const today = new Date();
  const lastYear = new Date();
  lastYear.setFullYear(today.getFullYear() - 1);

  const query = `
    query {
      user(login: "Andrei12388") {
        contributionsCollection(from: "${lastYear.toISOString()}", to: "${today.toISOString()}") {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await globalThis.fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      // Add this to avoid Next.js App Router async storage issues
      cache: "no-store",
    });

    const data = await res.json();
    console.log("Github data",data)
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch GitHub contributions" }, { status: 500 });
  }
}
