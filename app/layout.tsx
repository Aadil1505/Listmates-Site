import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Listmates · A wishlist for the two of you",
  description:
    "A private, paired wishlist app for couples. Add anything in seconds, claim gifts quietly, and share one quiet space, synced through iCloud.",
  openGraph: {
    title: "Listmates · A wishlist for the two of you",
    description:
      "A private, paired wishlist app for couples. Built native on iOS with CloudKit.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F2F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0D0D" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
