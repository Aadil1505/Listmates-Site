import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TwoLists } from "@/components/site/TwoLists";
import { ClaimDemo } from "@/components/site/ClaimDemo";
import { Principles } from "@/components/site/Principles";
import { Share } from "@/components/site/Share";
import { ListOverview } from "@/components/site/ListOverview";
import { Occasions } from "@/components/site/Occasions";
import { Quote } from "@/components/site/Quote";
import { Native } from "@/components/site/Native";
import { Faq } from "@/components/site/Faq";
import { ClosingCta } from "@/components/site/ClosingCta";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TwoLists />
        <ClaimDemo />
        <Principles />
        <Share />
        <ListOverview />
        <Occasions />
        <Quote />
        <Native />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
