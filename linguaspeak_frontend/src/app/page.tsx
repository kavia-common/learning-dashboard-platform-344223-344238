import Link from "next/link";
import React from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { LessonWorkspaceCard } from "@/components/dashboard/LessonWorkspaceCard";
import { ProgressBar } from "@/components/dashboard/ProgressBar";

type NotificationItem = {
  id: string;
  title: string;
  body: string;
  timeLabel: string;
  tone: "info" | "success" | "warning";
};

export default function Home() {
  const lessonCards = [
    {
      unitLabel: "Unit 1 • Foundations",
      title: "Greetings & Introductions",
      description:
        "Warm-up phrases, pronunciation drills, and a short speaking prompt to build momentum.",
      href: "/lessons/unit-1-greetings",
    },
    {
      unitLabel: "Unit 2 • Everyday",
      title: "Ordering Food",
      description:
        "Vocabulary + roleplay: place an order, ask for recommendations, and handle follow-up questions.",
      href: "/lessons/unit-2-food",
    },
    {
      unitLabel: "Unit 3 • Travel",
      title: "Asking for Directions",
      description:
        "Listening practice and map-based prompts to improve comprehension under pressure.",
      href: "/lessons/unit-3-directions",
    },
  ];

  const notifications: NotificationItem[] = [
    {
      id: "n1",
      title: "New lesson available",
      body: "Unit 3: Asking for Directions is ready in your workspace.",
      timeLabel: "2h ago",
      tone: "info",
    },
    {
      id: "n2",
      title: "Progress milestone",
      body: "You completed 5 sessions this week. Keep it up!",
      timeLabel: "Yesterday",
      tone: "success",
    },
    {
      id: "n3",
      title: "Reminder",
      body: "Schedule a 10-minute speaking drill to stay consistent.",
      timeLabel: "2 days ago",
      tone: "warning",
    },
  ];

  return (
    <DashboardShell activePath="/">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr,360px]">
        {/* Main column */}
        <section className="min-w-0">
          <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Welcome back
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
              Your learning workspace
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Pick up where you left off, track your progress, and jump into focused
              practice cards.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/lessons"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                Browse lessons
              </Link>
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                Admin access
              </Link>
            </div>
          </header>

          <div className="mt-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Lesson workspaces
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Modular cards for focused exercises and quick re-entry.
                </p>
              </div>
              <Link
                href="/lessons"
                className="text-sm font-semibold text-blue-700 hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {lessonCards.map((c) => (
                <LessonWorkspaceCard key={c.href} {...c} />
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">
                Quick practice
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                3-minute drills to keep momentum on busy days.
              </p>

              <div className="mt-4 grid gap-3">
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  Pronunciation warm-up
                  <span className="mt-1 block text-xs font-normal text-slate-600">
                    Minimal pairs + mouth position hints
                  </span>
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  Listening sprint
                  <span className="mt-1 block text-xs font-normal text-slate-600">
                    Short clips + comprehension checks
                  </span>
                </button>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">
                Next session plan
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                A simple checklist to guide today’s practice.
              </p>

              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Review Unit 2 vocabulary (5 min)",
                  "Complete roleplay card: Ordering (8 min)",
                  "Finish speaking prompt & self-score (3 min)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                      ✓
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        {/* Right column */}
        <aside className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Progress</h3>
            <p className="mt-1 text-sm text-slate-600">
              Track completion and keep your streak alive.
            </p>

            <div className="mt-4 space-y-4">
              <ProgressBar value={62} label="Unit completion" />
              <ProgressBar value={80} label="Weekly sessions" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-500">Streak</p>
                <p className="mt-1 text-xl font-bold text-slate-900">4 days</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-500">XP</p>
                <p className="mt-1 text-xl font-bold text-slate-900">1,240</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-bold text-slate-900">
                Notifications
              </h3>
              <Link
                href="/notifications"
                className="text-sm font-semibold text-blue-700 hover:underline"
              >
                See all
              </Link>
            </div>

            <ul className="mt-4 space-y-3">
              {notifications.map((n) => {
                const toneStyles =
                  n.tone === "success"
                    ? "bg-emerald-50 text-emerald-800"
                    : n.tone === "warning"
                      ? "bg-amber-50 text-amber-800"
                      : "bg-blue-50 text-blue-800";

                return (
                  <li key={n.id} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-900">
                          {n.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {n.body}
                        </p>
                      </div>
                      <span
                        className={[
                          "shrink-0 rounded-full px-2 py-1 text-xs font-semibold",
                          toneStyles,
                        ].join(" ")}
                      >
                        {n.timeLabel}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">
              Admin & settings
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Access management and configuration tools.
            </p>
            <div className="mt-4">
              <Link
                href="/admin"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                Go to Admin
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </DashboardShell>
  );
}
