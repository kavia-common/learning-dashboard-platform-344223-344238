"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  BellIcon,
  BookOpenIcon,
  ChevronLeftIcon,
  MenuIcon,
  SearchIcon,
  ShieldIcon,
} from "./icons";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export type DashboardShellProps = {
  children: React.ReactNode;
  activePath?: string;
};

/**
 * PUBLIC_INTERFACE
 * DashboardShell provides the dashboard layout: top nav, collapsible sidebar, and main content area.
 */
export function DashboardShell({ children, activePath = "/" }: DashboardShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Dashboard", href: "/", icon: <BookOpenIcon className="h-5 w-5" /> },
      { label: "Lessons", href: "/lessons", icon: <BookOpenIcon className="h-5 w-5" /> },
      { label: "Notifications", href: "/notifications", icon: <BellIcon className="h-5 w-5" /> },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-slate-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
              onClick={() => setSidebarCollapsed((v) => !v)}
              aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {sidebarCollapsed ? (
                <MenuIcon className="h-5 w-5" title="Expand" />
              ) : (
                <ChevronLeftIcon className="h-5 w-5" title="Collapse" />
              )}
            </button>

            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <BookOpenIcon className="h-5 w-5" title="LinguaSpeak" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-slate-900">LinguaSpeak</p>
                <p className="text-xs text-slate-500">Learning dashboard</p>
              </div>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center px-4 md:flex">
            <div className="relative w-full max-w-xl">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Search lessons, units, exercises…"
                aria-label="Search"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/notifications"
              className="relative inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
              aria-label="Open notifications"
            >
              <BellIcon className="h-5 w-5" />
              <span className="absolute right-1 top-1 inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
            </Link>

            <Link
              href="/admin"
              className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:inline-flex"
            >
              <ShieldIcon className="h-5 w-5 text-slate-700" />
              Admin
            </Link>

            <div className="inline-flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                LS
              </span>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">Learner</p>
                <p className="text-xs text-slate-500">Free plan</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[auto,1fr]">
        {/* Sidebar */}
        <aside
          className={[
            "sticky top-[72px] h-[calc(100vh-72px-24px)] self-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
            sidebarCollapsed ? "w-[72px]" : "w-full lg:w-[280px]",
          ].join(" ")}
          aria-label="Sidebar"
        >
          <div className="flex h-full flex-col">
            <div className="border-b border-slate-100 px-3 py-3">
              <p
                className={[
                  "text-xs font-semibold uppercase tracking-wide text-slate-500",
                  sidebarCollapsed ? "text-center" : "",
                ].join(" ")}
              >
                {sidebarCollapsed ? "Nav" : "Navigation"}
              </p>
            </div>

            <nav className="flex-1 p-2">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activePath === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={[
                          "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition",
                          isActive
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700 hover:bg-slate-50",
                          sidebarCollapsed ? "justify-center" : "",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                        title={sidebarCollapsed ? item.label : undefined}
                      >
                        <span
                          className={[
                            "text-slate-500 group-hover:text-slate-700",
                            isActive ? "text-blue-700" : "",
                          ].join(" ")}
                        >
                          {item.icon}
                        </span>
                        {sidebarCollapsed ? null : <span>{item.label}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-700">
                  {sidebarCollapsed ? "Tip" : "Today’s tip"}
                </p>
                {sidebarCollapsed ? null : (
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Practice aloud for 2 minutes to boost pronunciation confidence.
                  </p>
                )}
              </div>
            </nav>

            <div className="border-t border-slate-100 p-3">
              <Link
                href="/admin"
                className={[
                  "flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200",
                  sidebarCollapsed ? "justify-center" : "",
                ].join(" ")}
                title={sidebarCollapsed ? "Admin" : undefined}
              >
                <ShieldIcon className="h-5 w-5 text-slate-700" />
                {sidebarCollapsed ? null : <span>Admin</span>}
              </Link>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
