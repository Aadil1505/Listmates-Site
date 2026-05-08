"use client";

import * as React from "react";
import { Reveal } from "./Reveal";
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

export function Share() {
  return (
    <section id="share" className="relative overflow-hidden py-32 md:py-44">
      <div className="ambient-glow opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="max-w-[52ch]">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
                End the screenshot graveyard
              </p>
              <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.018em] text-foreground">
                See it.{" "}
                <span className="font-serif italic text-primary">
                  Save it.
                </span>
              </h2>
              <p className="mt-5 text-[17px] leading-[1.65] text-muted-foreground">
                Hit Share on any link, pick Listmates. Title and image fill
                themselves.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-[380px]">
              <ShareExtensionSheet />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ShareExtensionSheet() {
  return (
    <FormSheet title="Add to Wishlist">
      {/* URL preview section (no header) — matches the first Section in ShareItemView */}
      <FormSection>
        <div className="flex items-center gap-3 px-5 py-2.5">
          <div
            className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-[10px] bg-ios-fill-quaternary"
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3Qg1WY2vXThiWGBl81uS2XeRVp7AANg_pgl4TC4NyvMpk0iYcOC921xqcw-a6M7N77oE3HNdX4kKJOhr6DSPSX9ftZfjqL4byOrAf_64noo0-sTjMG9eiaw"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[15px] text-ios-text">
              lelabofragrances.com
            </div>
            <div className="mt-0.5 line-clamp-2 break-all text-[12px] leading-[1.3] text-ios-text-secondary">
              lelabofragrances.com/us/en/product/santal-33
            </div>
          </div>
        </div>
      </FormSection>

      <FormSectionHeader>Title</FormSectionHeader>
      <FormSection>
        <FormRow>
          <FormFieldText value="Le Labo Santal 33" />
        </FormRow>
      </FormSection>

      <FormSectionHeader>Details</FormSectionHeader>
      <FormSection>
        <FormRow>
          <FormFieldText value="50mL, the one he keeps borrowing" />
        </FormRow>
        <FormDivider />
        <FormRow>
          <span className="text-[15px] tabular-nums text-ios-text">
            230
          </span>
        </FormRow>
        <FormDivider />
        <FormRow>
          <span className="flex items-center gap-2.5 text-[15px] text-ios-text">
            <TagGlyph />
            Category
          </span>
          <span className="flex items-center gap-1 text-[15px] text-ios-text-secondary">
            Beauty
            <ChevronRight />
          </span>
        </FormRow>
        <FormDivider />
        <FormRow>
          <span className="flex items-center gap-2.5 text-[15px] text-ios-text">
            <HeartGlyph />
            Priority
          </span>
          <SegmentedPriority value={2} />
        </FormRow>
      </FormSection>
    </FormSheet>
  );
}
