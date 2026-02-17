"use client";

import { useEffect, useState } from "react";

interface ItchStats {
  views: number;
  downloads: number;
  browserplays: number;
  title: string;
  [key: string]: any;
}

export default function ItchAnalytics() {
  const [stats, setStats] = useState<ItchStats | null>(null);

  useEffect(() => {
    fetch("/api/itch-analytics")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setStats(data);
      });
  }, []);

  if (!stats) return <p>Loading Itch.io analytics...</p>;

  return (
   
    <div className="p-4  rounded-lg shadow-md max-w-md hover:scale-120">
      <h2 className="text-2xl font-bold mb-4">Itch.io Analytics</h2>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xl font-semibold">{stats.title}</p>
          <p className="text-sm text-gray-600">Game</p>
        </div>
        <div>
          <p className="text-xl font-semibold">{stats.views}</p>
          <p className="text-sm text-gray-600">Views</p>
        </div>
        <div>
          <p className="text-xl font-semibold">{stats.downloads}</p>
          <p className="text-sm text-gray-600">Downloads</p>
        </div>
        
      </div>

      {/* Optional: show recent downloads trend if available */}
      {stats.downloads_over_time && (
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-1">Downloads Over Time</h3>
          <div className="flex gap-0.5">
            {stats.downloads_over_time.map((d: number, i: number) => (
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
