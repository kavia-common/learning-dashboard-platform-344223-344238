import Link from "next/link";
import React from "react";

export type LessonWorkspaceCardProps = {
  title: string;
  description: string;
  unitLabel: string;
  href: string;
  ctaLabel?: string;
};

/**
 * PUBLIC_INTERFACE
 * LessonWorkspaceCard renders a clickable card representing a lesson/unit workspace.
 */
export function LessonWorkspaceCard({
  title,
  description,
  unitLabel,
  href,
  ctaLabel = "Open workspace",
}: LessonWorkspaceCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {unitLabel}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>

        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          Active
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-secondary)]" />
          <span>Last opened: today</span>
        </div>

        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
