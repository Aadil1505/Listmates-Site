"use client";

import * as React from "react";
import { Reveal } from "./Reveal";

export function Quote() {
  return (
    <section
      id="promise"
      className="relative overflow-hidden py-32 md:py-44"
    >
      <div className="ambient-glow opacity-50" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[920px] px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70 md:mb-12">
            The promise
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[clamp(28px,4.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground">
            Stop asking each other{" "}
            <span className="font-serif italic text-primary">
              what you want.
            </span>
            <br className="hidden md:block" />
            <span className="md:inline"> Start showing up like you</span>{" "}
            <span className="font-serif italic text-primary">
              already knew.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-14 flex items-center justify-center gap-3 md:mt-20">
            <span aria-hidden="true" className="h-px w-10 bg-border" />
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-primary"
            />
            <span aria-hidden="true" className="h-px w-10 bg-border" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
