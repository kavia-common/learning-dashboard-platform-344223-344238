import React from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function Unit3DirectionsPage() {
  return (
    <DashboardShell activePath="/lessons">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Unit 3 • Asking for Directions
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Build confidence with map prompts and listening under time pressure.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { title: "Phrases", body: "Turn left/right, straight ahead, next to…" },
            { title: "Map drill", body: "Follow a route with step-by-step prompts." },
            { title: "Listening sprint", body: "Short clips with quick checks." },
            { title: "Speaking challenge", body: "Explain a route clearly and concisely." },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-base font-bold text-slate-900">{c.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
              <button
                type="button"
                className="mt-4 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                Start
              </button>
            </div>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
