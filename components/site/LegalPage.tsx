import * as React from "react";

type Props = {
  title: string;
  intro: React.ReactNode;
  effectiveDate: string;
  children: React.ReactNode;
};

export function LegalPage({ title, intro, effectiveDate, children }: Props) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="ambient-glow opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[760px] px-5 md:px-8">
        <p className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
          {effectiveDate}
        </p>

        <h1 className="mt-4 font-serif text-[clamp(40px,6vw,68px)] leading-[1.05] tracking-[-0.015em] text-foreground">
          {title}
        </h1>

        <div className="mt-8 text-[17px] leading-[1.65] text-muted-foreground">
          {intro}
        </div>

        <div className="legal-prose mt-14">{children}</div>
      </div>
    </section>
  );
}
