"use client";

import * as React from "react";
import { Reveal } from "./Reveal";
import { AppListItemCard } from "./AppListItemCard";

export function ClaimDemo() {
  return (
    <section
      id="privacy"
      className="relative overflow-hidden border-y border-border py-32 md:py-44"
    >
      <div className="ambient-glow opacity-60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 md:px-8">
        <Reveal>
          <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
            <span className="mr-2 inline-block h-[5px] w-[5px] -translate-y-[2px] rounded-full bg-primary align-middle" />
            The claim
          </p>
          <h2 className="mx-auto max-w-[22ch] text-center text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground">
            One list, two views.{" "}
            <span className="font-serif italic text-primary">
              The check is just for you.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div className="mx-auto w-full max-w-[420px]">
              <Caption>What Theo sees on his own list</Caption>
              <ListView claimedId={null} />
              <p className="mt-4 pl-1 text-[12px] text-muted-foreground/80">
                No checks, no claim hints. Nothing changes for him.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto w-full max-w-[420px]">
              <Caption>What you see on Theo&rsquo;s list</Caption>
              <ListView claimedId="dutch-oven" />
              <p className="mt-4 pl-1 text-[12px] text-muted-foreground/80">
                A quiet rose check on the one you&rsquo;ve claimed.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-16 max-w-[44ch] text-center text-[17px] leading-[1.6] text-muted-foreground">
            Theo&rsquo;s list looks the same to him whether you&rsquo;ve
            claimed something or not. The check lives only on your side, a
            private note that you&rsquo;ve got the gift covered.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
      {children}
    </p>
  );
}

type Item = {
  id: string;
  title: string;
  note?: string;
  domain?: string;
  price?: string;
  priority: 1 | 2 | 3;
  thumbnail: React.ReactNode;
};

function ProductImage({ src }: { src: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="h-full w-full object-cover"
    />
  );
}

const items: Item[] = [
  {
    id: "santal",
    title: "Le Labo Santal 33",
    note: "50mL, the one he keeps borrowing",
    domain: "lelabofragrances.com",
    price: "$230",
    priority: 2,
    thumbnail: (
      <ProductImage src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3Qg1WY2vXThiWGBl81uS2XeRVp7AANg_pgl4TC4NyvMpk0iYcOC921xqcw-a6M7N77oE3HNdX4kKJOhr6DSPSX9ftZfjqL4byOrAf_64noo0-sTjMG9eiaw" />
    ),
  },
  {
    id: "dutch-oven",
    title: "Le Creuset 5.5qt Dutch Oven",
    note: "Color: Oyster",
    domain: "lecreuset.com",
    price: "$399",
    priority: 3,
    thumbnail: (
      <ProductImage src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFpmotqYauyWAu96JZgWZr1X_SQ56hH3RMQsee4_0Z-olyh1rcTQhvF7BW2mWd4YV9I93--Q0XpwublKrbhJFiHD-uL3vTt2zIK3HOcEMd-xzXJ1jVn9NaGsIO5QGaLvahZhQfk73b_A&usqp=CAc" />
    ),
  },
  {
    id: "boston",
    title: "Birkenstock Boston Suede",
    note: "Taupe, size 10",
    domain: "birkenstock.com",
    price: "$165",
    priority: 2,
    thumbnail: (
      <ProductImage src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScbtyP49ax62LfWfrmOcZV6sPHQmLcNng4CZ4BslgbATfHyHlWsjCxvH0jqNcHjV6krZIXJc6wPSjr7uAGAgUqgJiPo7mVRvGA-issljjBgX3sGhR8tL0qQQ" />
    ),
  },
  {
    id: "cookbook",
    title: "Modern Comfort Food",
    note: "Ina Garten",
    domain: "barnesandnoble.com",
    price: "$25",
    priority: 1,
    thumbnail: (
      <ProductImage src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyASkpC9KDDGoVnhUQj7dxGJgARCFLna8ZU4nPROIs3D0QuDpddVjhB1OjN2fmk1ccuXgrj2y_ctqjWTC67oLqiHI0RmtyBA" />
    ),
  },
];

function ListView({ claimedId }: { claimedId: string | null }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <AppListItemCard
          key={item.id}
          perspective={claimedId === null ? "mine" : "partner"}
          isClaimed={claimedId !== null && item.id === claimedId}
          priority={item.priority}
          title={item.title}
          note={item.note}
          domain={item.domain}
          price={item.price}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
}
