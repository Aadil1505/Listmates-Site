import Image from "next/image";
import Link from "next/link";
import { AppStoreBadge } from "./AppStoreBadge";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/0 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-295 items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Link
          href="/#top"
          className="inline-flex items-center gap-2 text-[16px] font-semibold tracking-tight leading-none text-foreground"
        >
          <Wordmark />
          <span className="leading-none">Listmates</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[14px] text-muted-foreground md:flex">
          <Link href="/#how" className="transition-colors hover:text-foreground">
            How it works
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/#faq" className="transition-colors hover:text-foreground">
            FAQ
          </Link>
        </nav>
        <AppStoreBadge size="sm" />
      </div>
    </header>
  );
}

function Wordmark() {
  return (
    <Image
      src="/web-app-manifest-192x192.png"
      alt=""
      aria-hidden="true"
      width={192}
      height={192}
      className="size-6 shrink-0"
      priority
    />
  );
}
