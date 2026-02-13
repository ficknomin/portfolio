import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mykola Fomin — Full-Stack Software Engineer",
  description:
    "Full-stack engineer based in London. Building production-grade web applications with Next.js, TypeScript & AWS. Available for freelance and full-time roles.",
  keywords: [
    "full-stack developer",
    "software engineer",
    "Next.js",
    "TypeScript",
    "React",
    "London",
    "freelance",
    "web developer",
  ],
  authors: [{ name: "Mykola Fomin" }],
  creator: "Mykola Fomin",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Mykola Fomin — Full-Stack Software Engineer",
    description:
      "Full-stack engineer building production-grade web applications with Next.js, TypeScript & AWS.",
    siteName: "Mykola Fomin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mykola Fomin — Full-Stack Software Engineer",
    description:
      "Full-stack engineer building production-grade web applications with Next.js, TypeScript & AWS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrains.variable} ${geist.variable} font-body antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
