import Link from "next/link";
import React from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function AdminPage() {
  return (
    <DashboardShell activePath="/admin">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Admin</h1>
        <p className="mt-2 text-sm text-slate-600">
          Admin tools placeholder. Wire this to authentication/authorization later.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              title: "Lesson management",
              body: "Create, edit, and publish lesson content and units.",
            },
            {
              title: "User management",
              body: "View users, progress, and account status.",
            },
            {
              title: "Notifications",
              body: "Send targeted reminders and announcements.",
            },
            {
              title: "Analytics",
              body: "Track engagement and lesson performance.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-base font-bold text-slate-900">{c.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
              <button
                type="button"
                className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Open
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
            ← Back to dashboard
          </Link>
        </div>
      </section>
    </DashboardShell>
  );
}
