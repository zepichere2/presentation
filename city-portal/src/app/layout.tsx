import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Unified City Services",
  description:
    "One Portal. All City Services. Pay bills, request services, track updates, and chat with an assistant.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Unified City Services",
    description:
      "No more confusion. Get everything you need in one place.",
    url: "https://example.com",
    siteName: "Unified City Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
