"use client";

import * as React from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function TwoLists() {
  return (
    <section
      id="lists"
      className="relative overflow-hidden py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">

            Birthdays, handled
          </p>
          <h2 className="mx-auto max-w-[18ch] text-center text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground">
            Your list.{" "}
            <span className="font-serif italic text-primary">
              Their list.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="relative mx-auto mt-16 w-full max-w-[920px] md:mt-24"
            style={{
              filter: "drop-shadow(0 40px 60px oklch(20% 0.02 25 / 0.18))",
            }}
          >
            
            <Image
              src="/images/phone-2.png"
              alt="Two iPhones side by side, each showing one partner's wishlist"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-16 max-w-[40ch] text-center text-[17px] leading-[1.55] text-muted-foreground md:mt-24">
            They drop in what they want, all year. You see it long before
            you need it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
