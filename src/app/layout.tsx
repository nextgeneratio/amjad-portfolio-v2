import { ReticleDev } from './reticle-dev';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { portfolio } from "@/data/portfolio";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: `${portfolio.name} | ICT Undergraduate & Software Developer`,
    template: `%s | ${portfolio.name}`,
  },
  description:
    "Amjad Hasan is an ICT undergraduate and software developer in Sri Lanka, building practical applications with programming, databases, and web technologies.",
  openGraph: {
    title: `${portfolio.name} | ICT Undergraduate & Software Developer`,
    description:
      "Portfolio website for Amjad Hasan, featuring practical software projects, educational background, and business-oriented problem solving.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | ICT Undergraduate & Software Developer`,
    description:
      "Portfolio website for Amjad Hasan, featuring practical software projects, educational background, and business-oriented problem solving.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">{process.env.NODE_ENV === 'development' ? <ReticleDev /> : null}
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
