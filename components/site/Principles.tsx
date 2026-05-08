"use client";

import * as React from "react";
import { Reveal } from "./Reveal";
import { AppListItemCard } from "./AppListItemCard";

export function Principles() {
  return (
    <section id="how" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">

            How it works
          </p>
          <h2 className="mx-auto max-w-[22ch] text-center text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground">
            Like you&rsquo;ve been{" "}
            <span className="font-serif italic text-primary">
              paying attention.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-28 md:gap-36">
          <Block
            number="01"
            title="Catch it before you forget."
            body={
              <>
                Paste a link or jot a thought. Title and image fill in for
                you.
              </>
            }
            visual={<AddVisual />}
            imageRight
          />
          <Block
            number="02"
            title="Buy it. They never know."
            body={
              <>
                Tap claim. A rose check appears only on your side, never on
                theirs.
              </>
            }
            visual={<ClaimVisual />}
            imageRight={false}
          />
          <ClosingBlock
            number="03"
            statement={
              <>
                Your lists live in{" "}
                <span className="font-serif italic text-primary">
                  your iCloud,
                </span>{" "}
                not ours.
              </>
            }
            body={
              <>
                No accounts, no servers, just CloudKit. What you want stays
                between the two of you.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function Block({
  number,
  title,
  body,
  visual,
  imageRight,
}: {
  number: string;
  title: string;
  body: React.ReactNode;
  visual: React.ReactNode | null;
  imageRight: boolean;
}) {
  const Text = (
    <Reveal>
      <div className="max-w-[52ch]">
        <div className="mb-5 flex items-center gap-3 text-[13px] font-semibold tracking-[0.08em] text-muted-foreground/70">
          <span className="font-serif text-[28px] leading-none not-italic text-primary">
            {number}
          </span>
        </div>
        <h3 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground">
          {title}
        </h3>
        <p className="mt-5 text-[17px] leading-[1.65] text-muted-foreground">
          {body}
        </p>
      </div>
    </Reveal>
  );

  if (!visual) return <div>{Text}</div>;

  const Visual = (
    <Reveal delay={0.15}>
      <div className="flex justify-center md:justify-start">{visual}</div>
    </Reveal>
  );

  return (
    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
      {imageRight ? (
        <>
          {Text}
          {Visual}
        </>
      ) : (
        <>
          <div className="md:order-2">{Text}</div>
          <div className="md:order-1">{Visual}</div>
        </>
      )}
    </div>
  );
}

function AddVisual() {
  return (
    <div className="relative w-full max-w-[420px]">
      {/* Subtle stacked cards behind to suggest a list */}
      <div
        className="absolute -bottom-3 left-6 right-6 -z-10 h-16 rounded-[16px] border border-ios-glass-border bg-ios-glass opacity-65 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-6 left-12 right-12 -z-20 h-16 rounded-[16px] border border-ios-glass-border bg-ios-glass opacity-40"
        aria-hidden="true"
      />

      <AppListItemCard
        priority={3}
        title="Aesop Hwyl Eau de Parfum"
        note="50mL, for the dresser"
        domain="aesop.com"
        price="$185"
        thumbnail={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQFoRWL__cv8qJTw00ix3QDv90qtBOXqMJOz2YicitrQmKgdblY"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        }
      />
    </div>
  );
}

function ClaimVisual() {
  return (
    <div className="relative w-full max-w-[420px]">
      <AppListItemCard
        perspective="partner"
        isClaimed
        priority={2}
        title="Canon PowerShot G7 X Mark III"
        note="The vlogging one, in black"
        domain="usa.canon.com"
        price="$749"
        thumbnail={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzXKC5GkOQgPWcbEcrBj7ecDaM1vti5HllAkJyahEEiJiHPZOZl4gpB-bY7Ol764yswSi-Sx_dTMyH_yIFzFM4Y154yLnzIxw8azyoTZmv-WyumNzvR7Fu_L8Urux34u3RseaZs1XRCg&usqp=CAc"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        }
      />
      <p className="mt-3 pl-1 font-serif text-[13px] italic text-muted-foreground/80">
        Only you see this check. They&rsquo;ll never know.
      </p>
    </div>
  );
}

function ClosingBlock({
  number,
  statement,
  body,
}: {
  number: string;
  statement: React.ReactNode;
  body: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-[760px] pt-4 text-center md:pt-10">
        <div className="mb-5 flex items-center justify-center gap-3">
          <ICloudGlyph />
          <span className="font-serif text-[28px] leading-none not-italic text-primary">
            {number}
          </span>
        </div>
        <h3 className="text-[clamp(28px,3.8vw,44px)] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground">
          {statement}
        </h3>
        <p className="mx-auto mt-6 max-w-[56ch] text-[17px] leading-[1.65] text-muted-foreground">
          {body}
        </p>
      </div>
    </Reveal>
  );
}

function ICloudGlyph() {
  return (
    <svg
      width="34"
      height="22"
      viewBox="0 0 34 22"
      aria-hidden="true"
      className="text-primary"
    >
      <path
        d="M9.4 19.5h17a5.5 5.5 0 0 0 1.1-10.9 7 7 0 0 0-13.7-1.8 5.7 5.7 0 0 0-4.4 12.7z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
