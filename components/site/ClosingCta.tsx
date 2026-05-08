"use client";

import * as React from "react";
import { Reveal } from "./Reveal";
import { AppStoreBadge } from "./AppStoreBadge";

export function ClosingCta() {
  return (
    <section
      id="download"
      className="relative overflow-hidden py-32 md:py-44"
    >
      <div className="ambient-glow" aria-hidden="true" />

      {/* Background "two" wordmark, echo of hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 justify-center select-none"
      >
        <span
          className="font-serif italic text-foreground/[0.035] dark:text-foreground/[0.06]"
          style={{
            fontSize: "clamp(220px, 40vw, 560px)",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
          }}
        >
          two
        </span>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[820px] flex-col items-center px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
            Ready when you are
          </p>
          <h2 className="mx-auto max-w-[18ch] text-[clamp(36px,6vw,64px)] font-semibold leading-[1.02] tracking-[-0.02em] text-foreground">
            Never blow it{" "}
            <span className="font-serif italic text-primary">again.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] text-[17px] leading-[1.55] text-muted-foreground md:text-[18px]">
            One quiet place for the two of you. Free, private, and built for
            iPhone.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <AppStoreBadge size="lg" />
            <p className="text-[12px] font-medium tracking-tight text-muted-foreground/70">
              Free. Pair in 30 seconds. No account.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
