"use client";

import * as React from "react";
import { Reveal } from "./Reveal";
import { AppListItemCard } from "./AppListItemCard";
import {
  FormSheet,
  FormSection,
  FormSectionHeader,
  FormRow,
  FormDivider,
  FormFieldText,
  TagGlyph,
  HeartGlyph,
  ChevronRight,
  SegmentedPriority,
} from "./FormSheet";

export function AddInApp() {
  return (
    <section
      id="add"
      className="relative overflow-hidden border-y border-border py-32 md:py-44"
    >
      <div className="ambient-glow opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
            Thinking of something?
          </p>
          <h2 className="mx-auto max-w-[22ch] text-center text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground">
            Get it down,{" "}
            <span className="font-serif italic text-primary">
              fast.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 grid items-start gap-14 md:grid-cols-3 md:gap-10">
          <Step
            number="01"
            title="Tap the plus."
            caption="A small floating button, lower-right of your list."
          >
            <PlusFabVisual />
          </Step>

          <Step
            number="02"
            title="Fill it out."
            caption="Title, link, price, priority. Paste a URL and the title fills itself."
          >
            <NewItemSheetVisual />
          </Step>

          <Step
            number="03"
            title="Done."
            caption="It lands in your list, and on your partner's view too."
          >
            <ResultCardVisual />
          </Step>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  caption,
  children,
}: {
  number: string;
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="flex flex-col">
        <div className="mb-6 flex items-end gap-3">
          <span className="font-serif text-[28px] leading-none not-italic text-primary">
            {number}
          </span>
          <h3 className="text-[20px] font-semibold leading-tight tracking-[-0.01em] text-foreground">
            {title}
          </h3>
        </div>

        <div className="mb-5 flex min-h-[280px] items-center justify-center">
          {children}
        </div>

        <p className="mt-auto text-[14px] leading-[1.55] text-muted-foreground">
          {caption}
        </p>
      </div>
    </Reveal>
  );
}

/* Step 1 — the plus FAB.
   In MyListView.swift: 56×56 circle, SF Symbol "plus" 22pt semibold,
   .buttonStyle(.glassProminent), bottom-trailing of the list. */
function PlusFabVisual() {
  return (
    <div className="relative h-[260px] w-full max-w-[300px]">
      {/* Hint of list rows behind, fading out toward the bottom */}
      <div
        className="absolute inset-x-4 top-2 flex flex-col gap-2 [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_95%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_95%)]"
        aria-hidden="true"
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[54px] rounded-[14px] border border-ios-glass-border bg-ios-glass backdrop-blur-md"
            style={{ opacity: 1 - i * 0.18 }}
          />
        ))}
      </div>

      {/* The plus FAB — bottom-right, glassProminent (tinted) */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute bottom-3 right-3 flex h-[64px] w-[64px] items-center justify-center rounded-full text-white"
        style={{
          background:
            "radial-gradient(120% 120% at 30% 25%, oklch(72% 0.20 18 / 0.95), oklch(60% 0.18 18) 60%, oklch(54% 0.18 18))",
          boxShadow:
            "0 14px 30px -8px oklch(54% 0.18 18 / 0.45), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.10)",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M13 5v16M5 13h16" />
        </svg>
      </button>
    </div>
  );
}

/* Step 2 — the AddEditItemSheet form.
   Mirrors AddEditItemSheet.swift exactly:
   - NavigationStack title "New Item" inline
   - Cancel / Save toolbar (Save semibold, accent color)
   - Section "Title": TextField placeholder "What do you want?"
   - Section "Details": Note, Link, Price, Category picker, Priority segmented */
function NewItemSheetVisual() {
  return (
    <div className="w-full max-w-[340px]">
      <FormSheet title="New Item">
        <FormSectionHeader>Title</FormSectionHeader>
        <FormSection>
          <FormRow>
            <FormFieldText value="Le Creuset 5.5qt Dutch Oven" />
          </FormRow>
        </FormSection>

        <FormSectionHeader>Details</FormSectionHeader>
        <FormSection>
          <FormRow>
            <FormFieldText value="Color: Oyster" />
          </FormRow>
          <FormDivider />
          <FormRow>
            <span className="truncate text-[15px] text-ios-text-secondary">
              lecreuset.com/dutch-ovens/5.5qt
            </span>
          </FormRow>
          <FormDivider />
          <FormRow>
            <span className="text-[15px] tabular-nums text-ios-text">
              399
            </span>
          </FormRow>
          <FormDivider />
          <FormRow>
            <span className="flex items-center gap-2.5 text-[15px] text-ios-text">
              <TagGlyph />
              Category
            </span>
            <span className="flex items-center gap-1 text-[15px] text-ios-text-secondary">
              Home
              <ChevronRight />
            </span>
          </FormRow>
          <FormDivider />
          <FormRow>
            <span className="flex items-center gap-2.5 text-[15px] text-ios-text">
              <HeartGlyph />
              Priority
            </span>
            <SegmentedPriority value={3} />
          </FormRow>
        </FormSection>
      </FormSheet>
    </div>
  );
}

/* Step 3 — the resulting list row, using the real AppListItemCard
   (already mirrors MyItemCardView.swift). */
function ResultCardVisual() {
  return (
    <div className="w-full max-w-[340px]">
      <AppListItemCard
        priority={3}
        title="Le Creuset 5.5qt Dutch Oven"
        note="Color: Oyster"
        domain="lecreuset.com"
        price="$399"
        thumbnail={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFpmotqYauyWAu96JZgWZr1X_SQ56hH3RMQsee4_0Z-olyh1rcTQhvF7BW2mWd4YV9I93--Q0XpwublKrbhJFiHD-uL3vTt2zIK3HOcEMd-xzXJ1jVn9NaGsIO5QGaLvahZhQfk73b_A&usqp=CAc"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        }
      />
    </div>
  );
}
