import * as React from "react";

export type ListItem = {
  id: string;
  title: string;
  source?: string;
  price?: string;
  priority?: 1 | 2 | 3;
  swatch?: string;
  claimed?: boolean;
};

type Props = {
  owner: string;
  initial?: string;
  swatch?: string;
  items: ListItem[];
  showClaimedBadge?: boolean;
  variant?: "self" | "partner";
};

export function ListScreen({
  owner,
  initial,
  swatch = "oklch(72% 0.16 18)",
  items,
  showClaimedBadge = false,
  variant = "self",
}: Props) {
  return (
    <div className="flex h-full w-full flex-col bg-background pt-12">
      {/* Status bar */}
      <div className="flex items-center justify-between px-7 pt-2 text-[11px] font-semibold text-foreground">
        <span>9:41</span>
        <span className="flex items-center gap-1 opacity-80">
          <span className="inline-block h-[8px] w-[14px] rounded-[2px] border border-current" />
        </span>
      </div>

      {/* Nav header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-semibold text-white"
            style={{ background: swatch }}
          >
            {initial ?? owner[0]}
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-foreground">
              {owner}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {variant === "self" ? "Your list" : "Their list"}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-hidden="true"
            tabIndex={-1}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          {variant === "self" && (
            <button
              aria-hidden="true"
              tabIndex={-1}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Section title */}
      <div className="px-5 pb-2">
        <h3 className="font-serif text-[28px] leading-tight tracking-tight text-foreground">
          {variant === "self" ? "My list" : `${owner}'s list`}
        </h3>
        <p className="text-[11px] text-muted-foreground/70">
          {items.filter((i) => !i.claimed).length} items
          {variant === "partner" && showClaimedBadge && (
            <>
              {" · "}
              <span style={{ color: "var(--primary)" }}>1 claimed by you</span>
            </>
          )}
        </p>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-hidden px-3 pb-5">
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative flex items-center gap-3 rounded-2xl border px-3 py-2.5 ${
                item.claimed
                  ? "border-primary/30 bg-accent"
                  : "border-border bg-card"
              }`}
            >
              <div
                className="h-12 w-12 flex-shrink-0 rounded-xl"
                style={{
                  background: item.swatch ?? "oklch(88% 0.04 25)",
                }}
              />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[12px] font-semibold text-foreground">
                  {item.title}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  {item.source && <span className="truncate">{item.source}</span>}
                  {item.price && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{item.price}</span>
                    </>
                  )}
                </div>
              </div>
              {item.priority && (
                <div className="flex flex-col gap-[2px]" aria-hidden="true">
                  {[1, 2, 3].map((p) => (
                    <span
                      key={p}
                      className="block h-[3px] w-[10px] rounded-full"
                      style={{
                        background:
                          p <= item.priority!
                            ? "var(--primary)"
                            : "var(--border)",
                      }}
                    />
                  ))}
                </div>
              )}
              {item.claimed && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-center justify-around border-t border-border bg-card/80 px-5 py-3 pb-6 backdrop-blur">
        <TabIcon active={variant === "self"} label="My list" icon="list" />
        <TabIcon active={variant === "partner"} label="Theirs" icon="heart" />
        <TabIcon active={false} label="Profile" icon="person" />
      </div>
    </div>
  );
}

function TabIcon({
  active,
  label,
  icon,
}: {
  active: boolean;
  label: string;
  icon: "list" | "heart" | "person";
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "var(--primary)" : "var(--muted-foreground)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {icon === "list" && (
          <>
            <path d="M8 6h13M8 12h13M8 18h13" />
            <circle cx="3.5" cy="6" r="1.2" fill="currentColor" />
            <circle cx="3.5" cy="12" r="1.2" fill="currentColor" />
            <circle cx="3.5" cy="18" r="1.2" fill="currentColor" />
          </>
        )}
        {icon === "heart" && (
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        )}
        {icon === "person" && (
          <>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
          </>
        )}
      </svg>
      <span
        className="text-[9px] font-medium"
        style={{ color: active ? "var(--primary)" : "var(--muted-foreground)" }}
      >
        {label}
      </span>
    </div>
  );
}
