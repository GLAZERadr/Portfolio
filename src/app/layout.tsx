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
  title: "Adrian Portfolio Website",
  description: "Building innovative solutions with modern technologies. Passionate about creating seamless user experiences and AI-powered applications that shape the future.",
  keywords: ["Adrian Glazer", "Full-Stack Developer", "AI Engineer", "Python", "React", "Next.js"],
  authors: [{ name: "Adrian Glazer" }],
  creator: "Adrian Glazer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adrianglazer.dev",
    siteName: "Adrian Glazer Portfolio",
    title: "Adrian Portfolio Website",
    description: "Building innovative solutions with modern technologies. Passionate about creating seamless user experiences and AI-powered applications that shape the future.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Portfolio Website",
    description: "Building innovative solutions with modern technologies. Passionate about creating seamless user experiences and AI-powered applications that shape the future.",
    creator: "@world_disrupter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
