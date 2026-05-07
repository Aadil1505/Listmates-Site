import * as React from "react";

type Props = {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function AppStoreBadge({
  href = "https://apps.apple.com/app/listmates/",
  size = "md",
  className = "",
}: Props) {
  const heights = { sm: 40, md: 48, lg: 56 };
  const h = heights[size];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Listmates on the App Store"
      className={`inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] text-[var(--background)] transition-transform duration-200 ease-out hover:-translate-y-[1px] ${className}`}
      style={{ height: h, paddingInline: h * 0.42 }}
    >
      <svg
        viewBox="0 0 24 24"
        width={h * 0.46}
        height={h * 0.46}
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M16.365 12.43c-.024-2.486 2.03-3.677 2.122-3.736-1.156-1.69-2.953-1.92-3.594-1.946-1.529-.155-2.984.9-3.76.9-.778 0-1.97-.879-3.243-.854-1.668.024-3.205.97-4.062 2.46-1.732 3.003-.443 7.444 1.243 9.881.823 1.193 1.804 2.534 3.082 2.487 1.237-.05 1.704-.802 3.198-.802 1.494 0 1.916.802 3.224.776 1.331-.024 2.176-1.215 2.99-2.413.94-1.385 1.328-2.726 1.351-2.795-.03-.013-2.59-.992-2.62-3.958zM13.94 5.18c.682-.83 1.144-1.98.99-3.123-.96.038-2.122.638-2.825 1.469-.63.736-1.183 1.913-1.034 3.034 1.071.083 2.166-.544 2.87-1.38z" />
      </svg>
      <span className="flex flex-col leading-none text-left">
        <span className="text-[10px] tracking-wide opacity-70">Download on the</span>
        <span className="text-[18px] font-semibold tracking-tight" style={{ marginTop: 2 }}>
          App Store
        </span>
      </span>
    </a>
  );
}
