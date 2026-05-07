import * as React from "react";

export const sfRoundedFontStack =
  '"SF Pro Rounded", "SF Pro", -apple-system, ui-rounded, system-ui, sans-serif';

export function FormSheet({
  title,
  children,
  saveDisabled = false,
}: {
  title: string;
  children: React.ReactNode;
  saveDisabled?: boolean;
}) {
  return (
    <div
      className="overflow-hidden rounded-[28px] border border-black/[0.05] bg-[oklch(95%_0.005_25)] shadow-[0_24px_60px_-20px_oklch(20%_0.02_25/0.22)]"
      style={{ fontFamily: sfRoundedFontStack }}
    >
      {/* Sheet handle */}
      <div className="flex justify-center pt-2.5 pb-1">
        <span className="block h-[5px] w-9 rounded-full bg-black/15" aria-hidden="true" />
      </div>

      {/* Nav bar */}
      <div className="flex items-center justify-between px-5 pt-2 pb-3">
        <span className="text-[15px] font-normal text-primary" aria-hidden="true">
          Cancel
        </span>
        <span className="text-[15px] font-semibold tracking-[-0.005em] text-[oklch(18%_0.01_25)]">
          {title}
        </span>
        <span
          className={`text-[15px] font-bold ${
            saveDisabled ? "text-[oklch(60%_0.008_25)]" : "text-primary"
          }`}
          aria-hidden="true"
        >
          Save
        </span>
      </div>

      {/* Form body */}
      <div className="px-5 pt-3 pb-5">{children}</div>
    </div>
  );
}

export function FormSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      {children}
    </div>
  );
}

export function FormSectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 pt-6 pb-1.5 text-[13px] font-normal uppercase tracking-[0.04em] text-[oklch(45%_0.008_25)]">
      {children}
    </div>
  );
}

export function FormRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 px-5 py-2.5 min-h-[44px]">
      {children}
    </div>
  );
}

export function FormDivider() {
  return <div className="ml-5 h-px bg-black/[0.07]" aria-hidden="true" />;
}

export function FormFieldText({
  value,
  placeholder = false,
}: {
  value: string;
  placeholder?: boolean;
}) {
  return (
    <span
      className={`text-[15px] tracking-[-0.005em] ${
        placeholder ? "text-[oklch(60%_0.008_25)]" : "text-[oklch(18%_0.01_25)]"
      }`}
    >
      {value}
    </span>
  );
}

export function TagGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(50% 0.008 25)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7" cy="7" r="1.4" fill="oklch(50% 0.008 25)" stroke="none" />
    </svg>
  );
}

export function HeartGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(50% 0.008 25)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function ChevronRight() {
  return (
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" aria-hidden="true">
      <path d="M2 2l5 5-5 5" stroke="oklch(60% 0.008 25)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SegmentedPriority({ value }: { value: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center rounded-[8px] bg-black/[0.06] p-[2px]">
      {[1, 2, 3].map((n) => {
        const selected = n === value;
        return (
          <span
            key={n}
            className={`flex h-[26px] w-[34px] items-center justify-center rounded-[7px] text-[13px] tabular-nums ${
              selected
                ? "bg-white font-semibold text-[oklch(18%_0.01_25)] shadow-[0_1px_2px_rgba(0,0,0,0.10)]"
                : "text-[oklch(40%_0.008_25)]"
            }`}
          >
            {n}
          </span>
        );
      })}
    </div>
  );
}
