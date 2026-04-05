import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "Engineering Tomorrow | Titan Construction",
  description: "A world-class construction company specializing in residential, commercial, and industrial engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }} className="antialiased bg-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
