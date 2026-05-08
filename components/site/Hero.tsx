"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
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
        className="pointer-events-none absolute inset-x-0 top-[62%] z-0 flex justify-center select-none sm:top-[55%] md:top-[42%]"
      >
        <span
          className="font-serif italic text-foreground/[0.035] dark:text-foreground/6"
          style={{
            fontSize: "clamp(280px, 50vw, 720px)",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
          }}
        >
          two
        </span>
      </div>

      <div className="relative z-10 mx-auto flex max-w-230 flex-col items-center px-5 text-center md:px-8">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="tracking-display mt-7 font-semibold leading-[0.98] text-foreground"
          style={{ fontSize: "clamp(44px, 9vw, 96px)" }}
        >
          Stop Guessing.{" "}
          <br/>
          <span className="font-serif italic font-bold text-primary">
            Start Nailing It.
          </span>
        </motion.h1>

        {/* iOS app icon */}
        <motion.a
          href="https://apps.apple.com/app/listmates/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Listmates on the App Store"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.06, y: -3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          className="group relative mt-10 block cursor-pointer md:mt-12"
          style={{
            width: 112,
            height: 112,
            filter:
              "drop-shadow(0 18px 32px oklch(20% 0.02 25 / 0.20)) drop-shadow(0 6px 10px oklch(20% 0.02 25 / 0.10))",
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-lg"
            style={{
              borderRadius: "25.2px",
              background:
                "linear-gradient(155deg, oklch(100% 0 0 / 0.28) 0%, oklch(100% 0 0 / 0.10) 45%, oklch(100% 0 0 / 0.06) 70%, oklch(100% 0 0 / 0.16) 100%)",
              WebkitMaskImage: "radial-gradient(white, black)",
            }}
          >
            <Image
              src="/web-app-manifest-512x512.png"
              alt="Listmates app icon"
              width={512}
              height={512}
              priority
              className="absolute inset-0 m-auto object-contain"
              style={{ width: "72%", height: "72%" }}
            />
            {/* glossy top highlight */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
              style={{
                background:
                  "linear-gradient(180deg, oklch(100% 0 0 / 0.18) 0%, oklch(100% 0 0 / 0) 100%)",
                borderTopLeftRadius: "25.2px",
                borderTopRightRadius: "25.2px",
              }}
            />
            {/* edge ring */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                borderRadius: "25.2px",
                boxShadow:
                  "inset 0 1px 0 oklch(100% 0 0 / 0.28), inset 0 0 0 1px oklch(0% 0 0 / 0.06)",
              }}
            />
          </div>
        </motion.a>

        {/* App name under icon */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="mt-3 text-[13px] font-medium tracking-tight text-foreground/80"
        >
          Listmates
        </motion.span>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="mt-6 max-w-[42ch] text-[17px] leading-[1.55] text-muted-foreground md:text-[19px]"
        >
          They&apos;ve been telling you all year. You just needed somewhere
          to put it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <AppStoreBadge size="lg" />
          <Link
            href="/#how"
            className="inline-flex h-12 items-center gap-2 rounded-full px-2 text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Friction-killer line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-4 text-[12px] font-medium tracking-tight text-muted-foreground/70"
        >
          Free. Pair in 30 seconds. No account.
        </motion.p>

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
          <Stat>No more &ldquo;what do you want?&rdquo; texts</Stat>
          <Dot />
          <Stat>No more duplicate gifts</Stat>
          <Dot />
          <Stat>No more disappointed smiles</Stat>
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
