"use client";

import * as React from "react";
import { Reveal } from "./Reveal";

const sfRoundedFontStack =
  '"SF Pro Rounded", "SF Pro", -apple-system, ui-rounded, system-ui, sans-serif';

export function ListOverview() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden py-32 md:py-44"
    >
      <div className="ambient-glow opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
            <span className="mr-2 inline-block h-[5px] w-[5px] -translate-y-[2px] rounded-full bg-primary align-middle" />
            A small overview
          </p>
          <h2 className="mx-auto max-w-[24ch] text-center text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground">
            A quiet sense of the list,{" "}
            <span className="font-serif italic text-primary">
              from both sides.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[58ch] text-center text-[17px] leading-[1.65] text-muted-foreground">
            A small card sits at the top of each list. Yours shows the spread
            of prices and how many items you&rsquo;ve flagged as &ldquo;really
            want this.&rdquo; Theirs, when you&rsquo;re shopping for them,
            shows how much you&rsquo;ve already covered.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div className="mx-auto w-full max-w-[460px]">
              <Caption>On your own list</Caption>
              <MyListOverview />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto w-full max-w-[460px]">
              <Caption>On your partner&rsquo;s list</Caption>
              <PartnerOverview />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
      {children}
    </p>
  );
}

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-[16px] border border-black/[0.05] bg-white/85 p-3 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_36px_-16px_oklch(20%_0.02_25/0.18)] backdrop-blur-md"
      style={{ fontFamily: sfRoundedFontStack }}
    >
      {children}
    </div>
  );
}

function OverviewHeader() {
  return (
    <div className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[oklch(50%_0.008_25)]">
      Overview
    </div>
  );
}

/* Mirrors MyListOverviewCard.swift:
   HStack: bar chart (price buckets) on the left, stats column (84pt wide) on the right. */
function MyListOverview() {
  // Same five-bucket scheme as the Swift code, with empty buckets filtered.
  // A realistic spread surfaces three of the five — matches what the app
  // actually renders for most lists.
  const buckets = [
    { id: "b", label: "$25-50", count: 2 },
    { id: "d", label: "$100-250", count: 4 },
    { id: "e", label: "$250+", count: 1 },
  ];
  const total = 12;
  const totalPrice = "$1,420";
  const highPriority = 3;

  return (
    <GlassCard>
      <div className="flex flex-col gap-2">
        <OverviewHeader />

        <div className="flex items-stretch gap-4">
          {/* Chart, left */}
          <div className="flex h-[70px] flex-1 flex-col">
            <BarChart buckets={buckets} />
          </div>

          {/* Stats, right — 84pt fixed width */}
          <div className="flex w-[84px] flex-shrink-0 flex-col items-end gap-1.5">
            <div className="flex flex-col items-end leading-none">
              <span className="text-[32px] font-bold tracking-[-0.01em] text-[oklch(18%_0.01_25)]">
                {total}
              </span>
              <span className="mt-0.5 text-[10px] text-[oklch(50%_0.008_25)]">
                items
              </span>
            </div>

            <div className="my-0.5 h-px w-full bg-black/[0.08]" />

            <div className="flex flex-col items-end leading-none">
              <span className="text-[12px] font-semibold tabular-nums text-primary">
                {totalPrice}
              </span>
              <span className="mt-0.5 text-[10px] text-[oklch(50%_0.008_25)]">
                estimated
              </span>
            </div>

            <div className="flex flex-col items-end leading-none">
              <span className="text-[12px] font-semibold tabular-nums text-[oklch(18%_0.01_25)]">
                {highPriority}
              </span>
              <span className="mt-0.5 text-[10px] text-[oklch(50%_0.008_25)]">
                high priority
              </span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function BarChart({
  buckets,
}: {
  buckets: { id: string; label: string; count: number }[];
}) {
  // Mirrors SwiftUI Charts behaviour: bars auto-fill their slot of the plot
  // area, separated by small gaps, with a 4pt corner radius and tint fill.
  const max = Math.max(...buckets.map((b) => b.count), 1);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 items-end gap-1.5">
        {buckets.map((b) => {
          const heightPct = (b.count / max) * 100;
          return (
            <div
              key={b.id}
              className="flex flex-1 items-end justify-center"
              style={{ height: 52 }}
              aria-label={`${b.label}: ${b.count}`}
            >
              <span
                className="block w-full rounded-[4px] bg-primary"
                style={{ height: `${heightPct}%` }}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>
      <div className="mt-1.5 flex gap-1.5">
        {buckets.map((b) => (
          <span
            key={b.id}
            className="flex-1 text-center text-[8px] tracking-[-0.005em] text-[oklch(50%_0.008_25)]"
          >
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Mirrors PartnerOverviewCard.swift:
   HStack: progress bar + claimed/left labels on the left, stats column (84pt) on the right. */
function PartnerOverview() {
  const items = 9;
  const claimed = 4;
  const left = items - claimed;
  const totalPrice = "$1,240";
  const claimedPct = (claimed / items) * 100;

  return (
    <GlassCard>
      <div className="flex flex-col gap-2">
        <OverviewHeader />

        <div className="flex items-stretch gap-4">
          {/* Progress bar + labels, left */}
          <div className="flex h-[70px] flex-1 flex-col gap-1.5">
            <div className="relative h-[44px] overflow-hidden rounded-[12px] bg-[oklch(50%_0.008_25/0.15)]">
              <div
                className="absolute inset-y-0 left-0 rounded-[12px] bg-primary"
                style={{ width: `${claimedPct}%` }}
                aria-hidden="true"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-[10px] text-primary">
                <CheckCircleFill />
                {claimed} claimed
              </span>
              <span className="text-[10px] text-[oklch(50%_0.008_25)]">
                {left} left
              </span>
            </div>
          </div>

          {/* Stats, right — 84pt fixed width */}
          <div className="flex w-[84px] flex-shrink-0 flex-col items-end gap-1.5">
            <div className="flex flex-col items-end leading-none">
              <span className="text-[32px] font-bold tracking-[-0.01em] text-[oklch(18%_0.01_25)]">
                {items}
              </span>
              <span className="mt-0.5 text-[10px] text-[oklch(50%_0.008_25)]">
                items
              </span>
            </div>

            <div className="my-0.5 h-px w-full bg-black/[0.08]" />

            <div className="flex flex-col items-end leading-none">
              <span className="text-[12px] font-semibold tabular-nums text-primary">
                {claimed} / {items}
              </span>
              <span className="mt-0.5 text-[10px] text-[oklch(50%_0.008_25)]">
                claimed
              </span>
            </div>

            <div className="flex flex-col items-end leading-none">
              <span className="text-[12px] font-semibold tabular-nums text-[oklch(18%_0.01_25)]">
                {totalPrice}
              </span>
              <span className="mt-0.5 text-[10px] text-[oklch(50%_0.008_25)]">
                estimated
              </span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function CheckCircleFill() {
  return (
    <svg width="11" height="11" viewBox="0 0 20 20" aria-hidden="true">
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
  );
}
