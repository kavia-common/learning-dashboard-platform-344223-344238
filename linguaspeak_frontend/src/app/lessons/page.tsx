import Link from "next/link";
import React from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function LessonsPage() {
  const lessons = [
    { title: "Unit 1: Greetings & Introductions", href: "/lessons/unit-1-greetings" },
    { title: "Unit 2: Ordering Food", href: "/lessons/unit-2-food" },
    { title: "Unit 3: Asking for Directions", href: "/lessons/unit-3-directions" },
  ];

  return (
    <DashboardShell activePath="/lessons">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Lessons</h1>
        <p className="mt-2 text-sm text-slate-600">
          Choose a unit to open its workspace. (UI placeholder; wire to backend later.)
        </p>

        <ul className="mt-5 space-y-2">
          {lessons.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>{l.title}</span>
                <span className="text-slate-400">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </DashboardShell>
  );
}
