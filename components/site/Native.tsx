"use client";

import * as React from "react";
import { Reveal } from "./Reveal";

export function Native() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-8">
        <Reveal>
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
              <span className="mr-2 inline-block h-[5px] w-[5px] -translate-y-[2px] rounded-full bg-primary align-middle" />
              Built native
            </p>
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.018em] text-foreground">
              Made by hand,{" "}
              <span className="font-serif italic text-primary">
                for iOS.
              </span>
            </h2>
            <div className="mt-6 max-w-[52ch] space-y-4 text-[17px] leading-[1.65] text-muted-foreground">
              <p>
                Listmates is written in SwiftUI, runs on CloudKit, and uses the
                same link-preview engine that powers iMessage. There's no React
                Native shell, no Electron wrapper, no third-party analytics SDK
                stitched into the app.
              </p>
              <p>
                That's also why pairing is one tap, why it works offline, and
                why everything renders at 120Hz on your iPhone.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <Tile
                label="Framework"
                value="SwiftUI"
                detail="Native rendering, built for iOS 26+"
              />
              <Tile label="Sync" value="CloudKit" detail="Apple's encrypted iCloud database" />
              <Tile label="Link previews" value="iOS LP" detail="Same engine as iMessage" />
              <Tile
                label="Accounts"
                value="Zero"
                detail="Pair with iCloud, no signup"
              />
            </div>

            <div className="mt-3 rounded-[20px] border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-foreground">
                    iCloud paired
                  </div>
                  <div className="text-[12px] text-muted-foreground">
                    Encrypted through Apple. We see nothing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Tile({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-[20px] border border-border bg-card p-5">
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
        {label}
      </div>
      <div className="mt-2 text-[22px] font-semibold tracking-[-0.01em] text-foreground">
        {value}
      </div>
      <div className="mt-1 text-[12px] leading-[1.45] text-muted-foreground">
        {detail}
      </div>
    </div>
  );
}
