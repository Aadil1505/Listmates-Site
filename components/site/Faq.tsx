"use client";

import * as React from "react";
import { Reveal } from "./Reveal";

const items = [
  {
    q: "Who is Listmates for?",
    a: "Couples: dating, engaged, married, long-distance. The app is built around two people sharing one quiet space, with the option to claim gifts in secret. It works year-round, but tends to come out around birthdays, anniversaries, and the holidays.",
  },
  {
    q: "Do we both need iPhones?",
    a: "Yes. Listmates is built natively on iOS using CloudKit, which means it relies on each person having an Apple ID and an iPhone (or iPad). An Android version isn't on the roadmap.",
  },
  {
    q: "What does Apple, or you, see?",
    a: "Your lists live in your own iCloud, shared privately with your partner through Apple's CloudKit. We don't run servers, we don't have user accounts, and we don't have analytics that read your content. We can't see your lists, even if we wanted to.",
  },
  {
    q: "Is it free?",
    a: "Listmates is free to download and free to use for the core experience. If we add anything beyond that later, it'll be a small one-time unlock. No subscriptions, no nagging upgrade prompts.",
  },
  {
    q: "What if we break up?",
    a: "Either of you can unpair at any time, from Profile. Unpairing wipes the shared wishlist for both of you and dissolves the iCloud share, so there's nothing left to clean up later. We never had a copy on our end, because we don't run servers.",
  },
  {
    q: "Can I move my list to a new phone?",
    a: "Yes. Sign into the same iCloud account on the new device, install Listmates, and your list comes with you. There's nothing to migrate manually.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-28 md:py-36">
      <div className="mx-auto max-w-[820px] px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
            
            Questions
          </p>
          <h2 className="mx-auto max-w-[22ch] text-center text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground">
            The things{" "}
            <span className="font-serif italic text-primary">
              people ask.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {items.map((item, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[18px] font-medium tracking-[-0.01em] text-foreground">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white group-open:border-primary"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.65] text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
