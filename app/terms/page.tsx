import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service · Listmates",
  description:
    "The terms that apply when you use Listmates. Plain English, with the legal bits where they're needed.",
  alternates: { canonical: "https://listmates.app/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          title="Terms of Service"
          effectiveDate="Effective May 6, 2026"
          intro={
            <>
              <p>
                These terms apply when you use Listmates, the iOS app for
                paired wishlists. By installing or using the app you agree to
                these terms. If you don&rsquo;t agree, please don&rsquo;t use
                the app.
              </p>
              <p className="mt-4">
                We&rsquo;ve tried to keep them short and readable. Where the
                law requires specific language, we&rsquo;ve included it.
              </p>
            </>
          }
        >
          <h2>1. The app</h2>
          <p>
            Listmates is an iOS application that lets two people keep linked
            wishlists using their iCloud accounts. The app stores your data
            in your own iCloud via Apple CloudKit; we don&rsquo;t run servers
            or hold your content. Some features depend on Apple services
            (iCloud, CloudKit, push notifications, the App Store), and your
            use of those services is also subject to Apple&rsquo;s terms.
          </p>

          <h2>2. Eligibility &amp; accounts</h2>
          <p>
            You must be at least 13 years old (or the minimum age in your
            country) and have a valid iCloud account to use Listmates. You
            are responsible for the security of your iCloud account and the
            devices on which you use the app.
          </p>

          <h2>3. Pairing with another person</h2>
          <p>
            Listmates is designed for two people who choose to share a paired
            list. By inviting or accepting an invitation, you confirm that
            the other person consents to being paired with you. Either of you
            can leave the pair at any time. We are not responsible for
            disputes between paired users; pair access is controlled by you
            both, not by us.
          </p>

          <h2>4. Your content</h2>
          <p>
            You keep all rights to the content you put into Listmates: items,
            notes, links, and so on (your &ldquo;Content&rdquo;). Because your
            Content is stored in your iCloud, we don&rsquo;t take a license to
            it and we don&rsquo;t use it for any purpose beyond making the app
            work for you and the partner you&rsquo;ve paired with.
          </p>
          <p>
            You are responsible for your Content. Don&rsquo;t use Listmates
            to store anything unlawful, infringing, abusive, or that
            you don&rsquo;t have the right to keep.
          </p>

          <h2>5. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the app to harass, threaten, or harm anyone, including a current or former partner.</li>
            <li>Reverse engineer, tamper with, or attempt to interfere with the app or Apple&rsquo;s services.</li>
            <li>Use the app to violate any law, regulation, or third-party right.</li>
            <li>Try to access another person&rsquo;s data without permission.</li>
          </ul>

          <h2>6. Links and third-party sites</h2>
          <p>
            Items in your list may include links to third-party websites
            (retailers, etc.). Those sites are not operated by us. When the
            app loads a preview for a link, it contacts the website
            directly. We&rsquo;re not responsible for the content,
            availability, pricing, or practices of those third parties.
          </p>

          <h2>7. Purchases</h2>
          <p>
            Listmates is currently free to use. If we offer paid features in
            the future, they will be sold through the App Store and subject
            to Apple&rsquo;s purchase, refund, and subscription policies in
            addition to these terms. Pricing and availability may change.
          </p>

          <h2>8. Changes to the app</h2>
          <p>
            We may update, change, or discontinue features at any time, and
            we may release updates that fix bugs, change behavior, or
            add functionality. Where reasonable we&rsquo;ll tell you about
            material changes.
          </p>

          <h2>9. Termination</h2>
          <p>
            You can stop using Listmates at any time by deleting the app.
            We may suspend or terminate access if you materially violate
            these terms or use the app in a way that endangers another
            person. Deletion of the app does not by itself remove data from
            your iCloud. See the{" "}
            <Link href="/privacy">Privacy Policy</Link> for how to remove it.
          </p>

          <h2>10. Disclaimer</h2>
          <p>
            Listmates is provided &ldquo;as is&rdquo; and &ldquo;as
            available.&rdquo; To the maximum extent permitted by law, we
            disclaim all warranties, express or implied, including
            merchantability, fitness for a particular purpose, and
            non-infringement. We don&rsquo;t warrant that the app will be
            uninterrupted, error-free, or that data will never be lost. You
            are responsible for backing up anything important, and because
            data lives in your iCloud, Apple&rsquo;s backup tools are the
            right place to start.
          </p>

          <h2>11. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Listmates and its
            developer will not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of
            profits, revenue, data, or goodwill, arising from your use of
            the app. Our total liability for any claim relating to the app
            will not exceed the greater of (a) the amount you paid us for
            the app in the twelve months before the claim or (b) US $20.
          </p>
          <p>
            Some jurisdictions don&rsquo;t allow certain limitations, in
            which case those limitations apply only to the extent permitted.
          </p>

          <h2>12. Apple-specific terms</h2>
          <p>
            You acknowledge that these terms are between you and Listmates,
            not Apple, and Apple is not responsible for the app or its
            content. Apple has no obligation to provide support for the app.
            If the app fails to conform to any applicable warranty, you may
            notify Apple, and Apple will refund the purchase price (if any);
            Apple has no other warranty obligation. Apple is not responsible
            for product claims, intellectual property claims, or compliance
            with consumer-protection or similar laws regarding the app.
            Apple and its subsidiaries are third-party beneficiaries of
            these terms and may enforce them against you.
          </p>

          <h2>13. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of New York,
            United States, without regard to its conflict-of-laws rules.
            Disputes will be resolved in the state or federal courts located
            in New York County, New York, except where mandatory local law
            requires otherwise.
          </p>

          <h2>14. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. If we make material
            changes, we&rsquo;ll update the effective date above and, where
            appropriate, notify you in the app. Your continued use of
            Listmates after changes take effect means you accept the
            updated terms.
          </p>

          <h2>15. Contact</h2>
          <p>
            Questions about these terms?{" "}
            <a href="mailto:hello@listmates.app">hello@listmates.app</a>.
          </p>

          <p className="mt-12 text-[13px] text-muted-foreground">
            See also: <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
