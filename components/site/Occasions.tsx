"use client";

import * as React from "react";
import { Reveal } from "./Reveal";

const occasions = [
  { label: "Birthdays", note: "The one you can’t blow." },
  { label: "Anniversaries", note: "Year after year, dialed in." },
  { label: "Holidays", note: "Christmas without the chaos." },
  { label: "Just because", note: "Tuesday-night thoughtful." },
];

export function Occasions() {
  return (
    <section
      id="occasions"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="ambient-glow opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[980px] px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
            For every reason you give
          </p>
          <h2 className="mx-auto max-w-[22ch] text-center text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground">
            Every occasion,{" "}
            <span className="font-serif italic text-primary">handled.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mx-auto mt-16 max-w-[760px] divide-y divide-border border-y border-border md:mt-20">
            {occasions.map((o, i) => (
              <li
                key={o.label}
                className="group flex items-baseline justify-between gap-6 py-7 md:py-8"
              >
                <div className="flex items-baseline gap-5 md:gap-7">
                  <span className="font-serif text-[14px] leading-none not-italic tabular-nums text-primary md:text-[15px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(28px,4.4vw,44px)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:text-primary">
                    {o.label}
                  </span>
                </div>
                <span className="font-serif text-[13px] italic leading-[1.4] text-muted-foreground md:text-[15px]">
                  {o.note}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
