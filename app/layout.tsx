import type { Metadata } from "next";
import { Syne, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clear Steps — Learn. Understand. Prove It.",
  description:
    "India's most complete CBSE learning platform. Concept videos, topic notes, quizzes, mock papers and AI evaluation — all in one place. Class 5–12.",
  keywords:
    "CBSE, online learning, AI evaluation, mock papers, Class 10, Class 12, board exam, India",
  openGraph: {
    title: "Clear Steps — Learn. Understand. Prove It.",
    description:
      "India's most complete CBSE learning platform with AI answer evaluation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body className="font-sans bg-surface text-ink overflow-x-hidden">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
