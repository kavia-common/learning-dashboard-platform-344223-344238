import React from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function NotificationsPage() {
  const items = [
    {
      title: "New lesson available",
      body: "Unit 3: Asking for Directions is ready.",
      time: "2h ago",
    },
    {
      title: "Progress milestone",
      body: "You completed 5 sessions this week.",
      time: "Yesterday",
    },
    {
      title: "Reminder",
      body: "Try a 10-minute speaking drill today.",
      time: "2 days ago",
    },
  ];

  return (
    <DashboardShell activePath="/notifications">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
        <p className="mt-2 text-sm text-slate-600">
          Updates about lessons, progress, and reminders.
        </p>

        <ul className="mt-6 space-y-3">
          {items.map((n) => (
            <li key={n.title} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">{n.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{n.body}</p>
                </div>
                <span className="rounded-full bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700">
                  {n.time}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </DashboardShell>
  );
}
