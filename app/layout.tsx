import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "EmergencyMitra — Aapka Emergency Saathi",
  description:
    "Connect with verified local doctors in under 2 minutes. Available 24/7 for voice, video, or in-person consultations. 100% NMC verified doctors across India.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-charcoal antialiased">{children}</body>
    </html>
  );
}
