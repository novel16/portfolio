import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "./portfolio-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = profile.name + " | Full-stack Web Developer";

export const metadata: Metadata = {
  title,
  description: profile.description,
  openGraph: { title, description: profile.description, type: "website", locale: "en_PH" },
};

export const viewport: Viewport = {
  themeColor: "#101617",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geistSans.variable + " " + geistMono.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
