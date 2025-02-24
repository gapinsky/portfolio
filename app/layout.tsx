import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Hero } from "./sections/hero/Hero";
const inter = Inter();

export const metadata: Metadata = {
  title: "Antoni Gapiński",
  description: "React Frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black/[0.9]`}>{children}</body>
    </html>
  );
}
