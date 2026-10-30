import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { EventPopup, eventConfig } from "@/components/ui/event-popup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MEegin Tours & Travels | Nepal Tour Packages",
  description:
    "Premium Nepal tour packages, custom trips and destination experiences with trusted local expertise.",
  metadataBase: new URL("https://www.meegintoursandtravel.com"),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "MEegin Tours & Travels | Nepal Tour Packages",
    description:
      "Premium Nepal tour packages, custom trips and destination experiences with trusted local expertise.",
    url: "https://www.meegintoursandtravel.com",
    siteName: "MEegin Tours & Travels",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "MEegin Tours & Travels logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MEegin Tours & Travels | Nepal Tour Packages",
    description:
      "Premium Nepal tour packages, custom trips and destination experiences with trusted local expertise.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F7FAFC] text-[#172033] antialiased">
        <Navbar />
        {children}
        <Footer />
        <EventPopup config={eventConfig} />
      </body>
    </html>
  );
}
