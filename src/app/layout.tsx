import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aryan-portfolio.dev"),
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.heroSubheadline,
  keywords: [
    "Aryan",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Creative Developer Portfolio",
    "Awwwards Website",
  ],
  authors: [{ name: siteConfig.name, url: "https://aryan-portfolio.dev" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryan-portfolio.dev",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.heroSubheadline,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/profile/avatar.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.heroSubheadline,
    creator: "@aryan_builds",
    images: ["/profile/avatar.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#08090d] text-[#f3f4f6] selection:bg-indigo-600 selection:text-white antialiased relative">
        {children}
      </body>
    </html>
  );
}
