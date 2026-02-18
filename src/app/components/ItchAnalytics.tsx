"use client";

import { useEffect, useState } from "react";

interface ItchStats {
  views: number;
  downloads: number;
  browserplays: number;
  title: string;

  // optional because API may not return it
  downloads_over_time?: number[];
}

export default function ItchAnalytics() {
  const [stats, setStats] = useState<ItchStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetch("/api/itch-analytics");
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

  if (loading) return <p>Loading Itch.io analytics...</p>;
  if (!stats) return <p>No analytics available.</p>;

  return (
    <div
      className="
        p-4 rounded-lg shadow-md max-w-md
        transition-transform duration-300 ease-out
        hover:scale-110
      "
    >
      <h2 className="text-2xl font-bold mb-4">Itch.io Analytics</h2>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xl font-semibold">{stats.title}</p>
          <p className="text-sm text-blue-600">Game</p>
        </div>

        <div>
          <p className="text-xl font-semibold">{stats.views}</p>
          <p className="text-sm text-blue-600">Views</p>
        </div>

        <div>
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
