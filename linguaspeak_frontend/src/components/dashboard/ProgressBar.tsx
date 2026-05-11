import React from "react";

export type ProgressBarProps = {
  value: number;
  label?: string;
};

/**
 * PUBLIC_INTERFACE
 * ProgressBar renders an accessible progress indicator with a percent label.
 */
export function ProgressBar({ value, label }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const ariaLabel = label ?? "Progress";

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-900">{ariaLabel}</p>
        <p className="text-sm text-slate-600 tabular-nums">{clamped}%</p>
      </div>

      <div
        className="mt-2 h-2 w-full rounded-full bg-slate-100"
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
      >
        <div
          className="h-2 rounded-full bg-[var(--color-primary)] transition-[width] duration-300"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
