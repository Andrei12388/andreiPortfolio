"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface CalendarData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export default function GithubContributions() {
  const [calendar, setCalendar] = useState<CalendarData>({
    totalContributions: 0,
    weeks: [],
  });

  useEffect(() => {
    fetch("/api/github-contributions")
      .then(res => res.json())
      .then(data => {
        const calendarData = data.data.user.contributionsCollection.contributionCalendar;
        setCalendar({
          totalContributions: calendarData.totalContributions,
          weeks: calendarData.weeks,
        });
      });
  }, []);

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions: Andrei12388</h2>
      <p className="mb-2 font-medium">Total contributions: {calendar.totalContributions}</p>

      <div className="flex gap-0.5">
        {calendar.weeks.map((week, i) => (
          <div key={i} className="flex flex-col gap-0.5">
            {week.contributionDays.map((day, j) => (
              <div
                key={j}
                title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? "s" : ""}`}
                style={{ backgroundColor: day.color }}
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm transition-colors duration-200"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
