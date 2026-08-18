import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import favicon from "./favicone.png";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
  metadataBase: new URL("https://meegintravels.com"),
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
  openGraph: {
    title: "MEegin Tours & Travels | Nepal Tour Packages",
    description:
      "Premium Nepal tour packages, custom trips and destination experiences with trusted local expertise.",
    url: "https://meegintravels.com",
    siteName: "MEegin Tours & Travels",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEegin Tours & Travels Nepal landscape",
      },
    ],
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
      </body>
    </html>
  );
}
