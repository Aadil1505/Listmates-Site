import * as React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  width?: number;
  rotate?: number;
};

export function PhoneFrame({ children, className = "", width = 320, rotate = 0 }: Props) {
  const aspect = 19.5 / 9.5;
  const height = Math.round(width * aspect);
  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        filter: "drop-shadow(0 30px 60px oklch(20% 0.02 25 / 0.10))",
      }}
    >
      <div
        className="absolute inset-0 rounded-[44px] border bg-[var(--foreground)]"
        style={{
          padding: 8,
          borderColor: "var(--border)",
        }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[36px] bg-background"
          style={{
            boxShadow: "inset 0 0 0 1px oklch(50% 0.01 25 / 0.08)",
          }}
        >
          {/* Dynamic island */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-2 z-20 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-[var(--foreground)]"
          />
          {children}
        </div>
      </div>
    </div>
  );
}
