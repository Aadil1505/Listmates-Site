"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AppStoreBadge } from "./AppStoreBadge";

export function Hero() {
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -60]);
  const stickerY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -30]);
  const stickerR = useTransform(scrollYProgress, [0, 1], reduced ? [-7, -7] : [-7, -3]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="ambient-glow" aria-hidden="true" />

      {/* Background "two" wordmark — soft, behind everything */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[36%] z-0 flex justify-center select-none md:top-[42%]"
      >
        <span
          className="font-serif italic text-foreground/[0.035] dark:text-foreground/[0.06]"
          style={{
            fontSize: "clamp(280px, 50vw, 720px)",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
          }}
        >
          two
        </span>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[920px] flex-col items-center px-5 text-center md:px-8">
        {/* Eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-[12px] font-medium tracking-tight text-muted-foreground backdrop-blur uppercase"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Made for two. Now on iOS
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="tracking-display mt-7 font-semibold leading-[0.98] text-foreground"
          style={{ fontSize: "clamp(44px, 9vw, 96px)" }}
        >
          A Wishlist
          <br />
          For The{" "}
          <span className="font-serif italic font-bold text-primary">
            Two Of You.
          </span>
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="mt-6 max-w-[42ch] text-[17px] leading-[1.55] text-muted-foreground md:text-[19px]"
        >
          Keep the things you&apos;d love in one quiet place, shared just with
          your person. Claim their gifts in secret.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <AppStoreBadge size="lg" />
          <a
            href="#how"
            className="inline-flex h-12 items-center gap-2 rounded-full px-2 text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Phone with floating sticker */}
        <motion.div
          style={{ y: phoneY }}
          className="relative mt-12 w-full max-w-[280px] sm:max-w-[320px] md:mt-16 md:max-w-[360px]"
        >
          

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            style={{
              filter: "drop-shadow(0 40px 60px oklch(20% 0.02 25 / 0.22))",
            }}
          >
            <Image
              src="/images/phone-1.png"
              alt="Listmates wishlist on iPhone"
              width={1080}
              height={1920}
              priority
              className="h-auto w-full rotate-4"
            />
          </motion.div>

          {/* Floating "claimed" sticker, tilted, half off the phone */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 10, rotate: -7, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -7, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.7,
            }}
            style={{ y: stickerY, rotate: stickerR }}
            className="absolute -right-2 bottom-[18%] flex items-center gap-2.5 rounded-2xl border border-primary/20 bg-card/95 px-3.5 py-2.5 text-left backdrop-blur sm:-right-6 md:-right-12"
          >
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div className="leading-tight">
              <div className="text-[11px] font-semibold tracking-tight text-foreground">
                Claimed by you
              </div>
              <div className="text-[10px] text-muted-foreground">
                Only you see this
              </div>
            </div>
          </motion.div>

          {/* Tiny floating "+ added" sticker on the other side */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10, rotate: 6, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 6, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.85,
            }}
            className="absolute -left-2 top-[14%] flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 text-[11px] font-medium text-foreground backdrop-blur sm:-left-6 md:-left-10"
            style={{ rotate: 6 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Add Anything
          </motion.div>
        </motion.div>

        {/* Quiet stat row at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[12px] text-muted-foreground/70 md:mt-20"
        >
          <Stat>Add anything in seconds</Stat>
          <Dot />
          <Stat>Beautiful link previews</Stat>
          <Dot />
          <Stat>Private to the two of you</Stat>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return <span className="font-medium tracking-tight">{children}</span>;
}

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="h-0.5 w-0.5 rounded-full bg-muted-foreground/40"
    />
  );
}
