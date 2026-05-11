import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinguaSpeak Dashboard",
  description:
    "Dashboard-style learning workspace with lessons, progress tracking, notifications, and admin access.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
