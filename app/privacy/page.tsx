import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy · Listmates",
  description:
    "How Listmates handles your data. Short version: it stays in your iCloud. We don't run servers, don't track you, and don't sell anything.",
  alternates: { canonical: "https://listmates.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          title="Privacy Policy"
          effectiveDate="Effective May 6, 2026"
          intro={
            <>
              <p>
                Listmates is a paired wishlist app for couples. It is built to
                be private by default. Your lists, items, and profile live in
                your own iCloud account, not on our servers. We do not have
                a backend, we do not collect analytics, and we do not track
                you across apps or websites.
              </p>
              <p className="mt-4">
                This page explains exactly what data the app handles, where it
                goes, and what control you have over it.
              </p>
            </>
          }
        >
          <h2>Who we are</h2>
          <p>
            Listmates is published by an independent developer (referred to in
            this policy as &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;Listmates&rdquo;). For privacy questions, contact{" "}
            <a href="mailto:hello@listmates.app">hello@listmates.app</a>.
          </p>

          <h2>The short version</h2>
          <ul>
            <li>We don&rsquo;t run servers. Your data is stored in your own iCloud account using Apple CloudKit.</li>
            <li>We don&rsquo;t collect analytics, telemetry, advertising IDs, or crash logs that identify you.</li>
            <li>We don&rsquo;t use third-party trackers or SDKs.</li>
            <li>We don&rsquo;t sell, rent, or share your information with anyone.</li>
            <li>You can delete your data at any time from inside the app or by signing out of iCloud.</li>
          </ul>

          <h2>What data Listmates handles</h2>
          <p>
            Listmates only handles the information you put into it. All of it
            is stored in your personal iCloud, in containers Apple provides for
            the app. We, the developer, cannot read this data.
          </p>

          <h3>Profile</h3>
          <ul>
            <li><strong>Username:</strong> a short handle you pick.</li>
            <li><strong>Display name:</strong> how you appear to your partner inside the app.</li>
            <li><strong>Avatar color:</strong> a color you choose; not a photo.</li>
          </ul>

          <h3>Wishlist items</h3>
          <ul>
            <li>Title, optional note, optional URL, optional price, priority, and category for each item you add.</li>
            <li>The date the item was added or updated.</li>
            <li>If you paste a link, the app may load a preview (image and title) directly from that website. The website operator may see that request, just like opening any link in a browser.</li>
          </ul>

          <h3>Pairing &amp; claims</h3>
          <ul>
            <li>A pair record connecting your iCloud account with your partner&rsquo;s, created when one of you accepts an invitation.</li>
            <li>&ldquo;Claims&rdquo;: a record indicating you intend to gift a particular item. Claims are visible only to the person who created them, by design.</li>
          </ul>

          <h3>What we do not collect</h3>
          <ul>
            <li>No email address, phone number, mailing address, or password.</li>
            <li>No contacts, photos, microphone, camera, or location data.</li>
            <li>No advertising identifier (IDFA), no fingerprinting, no cross-app or cross-site tracking.</li>
            <li>No third-party analytics or marketing SDKs.</li>
          </ul>

          <h2>Where your data lives</h2>
          <p>
            Listmates uses <strong>Apple iCloud (CloudKit)</strong> to store
            your data. Your private list lives in your iCloud private database.
            When you pair with a partner, a small shared container holds the
            data the two of you have agreed to share. Apple operates this
            infrastructure under{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&rsquo;s Privacy Policy
            </a>
            .
          </p>
          <p>
            Because Listmates has no backend of its own, we cannot see, search,
            export, or recover the contents of your lists.
          </p>

          <h2>How your data is used</h2>
          <ul>
            <li>To show your list to you on your devices.</li>
            <li>To show shared items to your paired partner, when you have linked accounts.</li>
            <li>To deliver push notifications related to your pair (for example, when an invitation is accepted) via Apple Push Notification service.</li>
          </ul>
          <p>
            We do not use your data for advertising, profiling, or any form of
            personalization beyond making the app work.
          </p>

          <h2>Sharing with your partner</h2>
          <p>
            Pairing is opt-in and uses Apple&rsquo;s CloudKit Sharing. When you
            accept an invitation, the items you add (other than items you have
            privately claimed for them) become visible to your partner inside
            the app. Either of you can leave the pair from the app at any
            time, which ends future sharing.
          </p>

          <h2>Third parties</h2>
          <p>
            We do not share your data with third parties. The only services
            involved in running Listmates are operated by Apple:
          </p>
          <ul>
            <li><strong>iCloud / CloudKit:</strong> storage and pair sharing.</li>
            <li><strong>Apple Push Notification service:</strong> to deliver notifications.</li>
            <li><strong>App Store:</strong> to deliver and update the app.</li>
          </ul>
          <p>
            If you tap a link saved in your list, that website is reached
            directly from your device. We have no relationship with those
            sites.
          </p>

          <h2>Children</h2>
          <p>
            Listmates is intended for adults in committed relationships. The
            app is not directed to children under 13, and we do not knowingly
            collect information from children. If you believe a child has used
            the app inappropriately, contact us and we will help.
          </p>

          <h2>Your rights and choices</h2>
          <ul>
            <li><strong>Access &amp; export.</strong> Your data lives in your iCloud, and Apple offers tools to view and export it.</li>
            <li><strong>Edit or delete.</strong> You can edit or delete any item, claim, or your profile from inside the app.</li>
            <li><strong>End sharing.</strong> Either partner can leave the pair to stop future sharing.</li>
            <li><strong>Delete everything.</strong> Deleting the app and signing out of iCloud removes Listmates&rsquo;s local data; deleting your iCloud data through iOS Settings &gt; Apple ID &gt; iCloud &gt; Manage Account Storage removes it from iCloud.</li>
          </ul>
          <p>
            Depending on where you live (for example, the EU/UK under GDPR or
            California under the CCPA), you may have additional rights such as
            the right to access, correct, or delete personal information, or
            to lodge a complaint with a supervisory authority. Because we
            don&rsquo;t hold your data, those requests are best handled
            directly through your device and iCloud account, but we&rsquo;ll
            help where we can. Email{" "}
            <a href="mailto:hello@listmates.app">hello@listmates.app</a>.
          </p>

          <h2>Security</h2>
          <p>
            Listmates relies on Apple&rsquo;s CloudKit for transport and
            storage security, including encryption in transit and at rest.
            Access to your data requires being signed in to your iCloud
            account on a trusted device. We recommend keeping iOS up to date
            and protecting your device with a passcode or biometrics.
          </p>

          <h2>International users</h2>
          <p>
            iCloud data may be stored or processed by Apple in countries other
            than your own. Apple is responsible for that infrastructure under
            its own privacy terms.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we make material changes to this policy, we will update the
            effective date above and, where appropriate, notify you in the
            app. Continued use of Listmates after changes take effect means
            you accept the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions, concerns, or requests:{" "}
            <a href="mailto:hello@listmates.app">hello@listmates.app</a>.
          </p>

          <p className="mt-12 text-[13px] text-muted-foreground">
            See also: <Link href="/terms">Terms of Service</Link>.
          </p>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
