import React from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function Unit2FoodPage() {
  return (
    <DashboardShell activePath="/lessons">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Unit 2 • Ordering Food
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Focus on real-world dialogs, menu vocabulary, and follow-up questions.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { title: "Menu vocab", body: "Foods, preferences, and quantities." },
            { title: "Listening", body: "Catch common restaurant questions." },
            { title: "Speaking prompt", body: "Place an order in 60 seconds." },
            { title: "Roleplay", body: "Handle substitutions and clarifications." },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-base font-bold text-slate-900">{c.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
              <button
                type="button"
                className="mt-4 rounded-xl bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-emerald-200"
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
