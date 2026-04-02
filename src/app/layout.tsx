import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SanityLive } from "@/sanity/live";
import DraftModeBanner from "@/components/DraftModeBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oscar Health | Health Insurance Made for Real Life",
  description:
    "Oscar Health makes health insurance simple. Get affordable plans, virtual care, $3 medications, and a dedicated Care Team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SanityLive />
        <DraftModeBanner />
      </body>
    </html>
  );
}
