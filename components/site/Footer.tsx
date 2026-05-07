import * as React from "react";
import Image from "next/image";
import { AppStoreBadge } from "./AppStoreBadge";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-32 pb-12 md:pt-44">
      <div className="ambient-glow opacity-50" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 md:px-8">
        <Reveal>
          <p className="mx-auto max-w-[18ch] text-center font-serif text-[clamp(36px,6vw,68px)] leading-[1.05] tracking-[-0.015em] text-foreground">
            Made with care, for the{" "}
            <span className="italic text-primary">two of you.</span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <AppStoreBadge size="lg" />
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-[13px] text-muted-foreground/70 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/web-app-manifest-192x192.png"
              alt=""
              aria-hidden="true"
              width={192}
              height={192}
              className="size-6 shrink-0"
            />
            <span className="text-muted-foreground">Listmates</span>
            <span aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="/privacy" className="hover:text-foreground">
              Privacy
            </a>
            <a href="/terms" className="hover:text-foreground">
              Terms
            </a>
            <a href="/#faq" className="hover:text-foreground">
              FAQ
            </a>
            <a
              href="mailto:hello@listmates.app"
              className="hover:text-foreground"
            >
              hello@listmates.app
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
