import * as React from "react";

type Priority = 1 | 2 | 3;

type Props = {
  thumbnail?: React.ReactNode;
  domain?: string;
  title: string;
  note?: string;
  price?: string;
  priority: Priority;
  perspective?: "mine" | "partner";
  isClaimed?: boolean;
  className?: string;
};

export function AppListItemCard({
  thumbnail,
  domain,
  title,
  note,
  price,
  priority,
  perspective = "mine",
  isClaimed = false,
  className = "",
}: Props) {
  return (
    <div
      className={`font-sf-rounded relative overflow-hidden rounded-[16px] border border-ios-glass-border bg-ios-glass shadow-[inset_0_1px_0_var(--ios-glass-inset),0_10px_30px_-12px_oklch(20%_0.02_25/0.18)] backdrop-blur-md p-4 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-[52px] w-[52px] flex-shrink-0 overflow-hidden rounded-[10px] bg-ios-fill-quaternary">
          {thumbnail}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <PriorityHearts priority={priority} />
            {price && (
              <span className="text-[14px] font-semibold leading-none text-primary tabular-nums">
                {price}
              </span>
            )}
          </div>

          <div className="mt-2 line-clamp-2 text-[15px] font-semibold leading-[1.25] tracking-[-0.005em] text-ios-text">
            {title}
          </div>

          {note && (
            <div className="mt-1 truncate text-[13px] leading-[1.3] text-ios-text-tertiary">
              {note}
            </div>
          )}

          {domain && (
            <div className="mt-1 truncate text-[12px] leading-[1.3] text-ios-text-secondary">
              {domain}
            </div>
          )}
        </div>
      </div>

      {perspective === "partner" && (
        <div
          className="absolute bottom-[10px] right-[10px] flex h-[22px] w-[22px] items-center justify-center"
          aria-label={isClaimed ? "Claimed" : "Not claimed"}
        >
          {isClaimed ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="9" fill="var(--primary)" />
              <path
                d="M5.6 10.2l3 3 5.8-6.2"
                fill="none"
                stroke="white"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="none"
                stroke="oklch(50% 0.008 25 / 0.30)"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}

function PriorityHearts({ priority }: { priority: Priority }) {
  // Brand rose at varying opacity (low = 0.35, medium = 0.65, high = 1.0).
  const fillOpacity =
    priority === 3 ? 1.0 : priority === 2 ? 0.65 : 0.35;
  return (
    <span
      className="inline-flex items-center gap-[3px]"
      aria-label={`Priority ${priority} of 3`}
    >
      {[1, 2, 3].map((level) => {
        const filled = level <= priority;
        return (
          <Heart
            key={level}
            filled={filled}
            opacity={filled ? fillOpacity : 0.3}
          />
        );
      })}
    </span>
  );
}

function Heart({ filled, opacity }: { filled: boolean; opacity: number }) {
  const color = filled ? "var(--primary)" : "var(--ios-text-secondary)";
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="block"
    >
      <path
        d="M8 13.5s-5.2-3.1-5.2-7A2.8 2.8 0 0 1 8 4.6a2.8 2.8 0 0 1 5.2 1.9c0 3.9-5.2 7-5.2 7z"
        fill={filled ? color : "none"}
        fillOpacity={filled ? opacity : undefined}
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth={filled ? 0 : 1.4}
        strokeLinejoin="round"
      />
    </svg>
  );
}
