import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "DevPeaks | Digital Agency",
  description: "DevPeaks is a global digital agency specializing in high-performance web development, AI solutions, and digital strategy for startups and enterprises.",
  keywords: ["Digital Agency", "Web Development", "Next.js", "AI Solutions", "DevPeaks", "Saqib Ali Butt", "Abdullah Naveed"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[#030712] text-white selection:bg-blue-500/30`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
