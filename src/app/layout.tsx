import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode, headers } from "next/headers";
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
  title: "HealthCo | Health Insurance Made for Real Life",
  description:
    "HealthCo makes health insurance simple. Get affordable plans, virtual care, $3 medications, and a dedicated Care Team.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();
  const requestHeaders = await headers();
  const isIframeRequest = requestHeaders.get("sec-fetch-dest") === "iframe";
  const shouldEnableVisualEditing = isDraftMode && isIframeRequest;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SanityLive />
        {shouldEnableVisualEditing && <VisualEditing />}
        <DraftModeBanner isDraftModeEnabled={isDraftMode} />
      </body>
    </html>
  );
}
