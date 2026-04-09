"use client";

import { useEffect, useState } from "react";

interface ItchStats {
  views: number;
  downloads: number;
  browserplays: number;
  title: string;
  cover_img: string;

  // optional because API may not return it
  downloads_over_time?: number[];
}

export default function ItchAnalyticsSuperMarioSep() {
  const [stats, setStats] = useState<ItchStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetch("/api/itch-analytics-supermariosep");
        const data: ItchStats = await res.json();

        setStats(data);
      } catch (err) {
        console.error("Failed to fetch itch analytics:", err);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) return <p>Loading SuperMarioSep analytics...</p>;
  if (!stats) return <p>No analytics available.</p>;

  return (
    <div
      className="
        p-4 rounded-lg shadow-md max-w-md
        transition-transform duration-300 ease-out
        hover:scale-110
      "
    >

    <div className="flex items-center gap-8">
  <img src={stats.cover_img} className="w-12 h-12" />

  <div className="flex-1 min-w-0">
    <p className="text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
      {stats.title}
    </p>
    <p className="text-sm text-blue-600">Game</p>
  </div>

  <div className="text-center">
    <p className="text-xl font-semibold">{stats.views}</p>
    <p className="text-sm text-blue-600">Views</p>
  </div>

  <div className="text-center">
    <p className="text-xl font-semibold">{stats.downloads}</p>
    <p className="text-sm text-blue-600">Downloads</p>
  </div>
</div>

      {stats.downloads_over_time?.length && (
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-1">Downloads Over Time</h3>

          <div className="flex gap-0.5">
            {stats.downloads_over_time.map((d, i) => (
              <div
                key={i}
                style={{ height: `${d}px` }}
                className="w-1 bg-green-500 transition-all duration-300"
                title={`${d} downloads`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
