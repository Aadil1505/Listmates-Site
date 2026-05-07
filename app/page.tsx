import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TwoLists } from "@/components/site/TwoLists";
import { Principles } from "@/components/site/Principles";
import { Share } from "@/components/site/Share";
import { AddInApp } from "@/components/site/AddInApp";
import { ListOverview } from "@/components/site/ListOverview";
import { ClaimDemo } from "@/components/site/ClaimDemo";
import { Native } from "@/components/site/Native";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TwoLists />
        <Principles />
        <ClaimDemo />
        <Share />
        <AddInApp />
        <ListOverview />
        <Native />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
