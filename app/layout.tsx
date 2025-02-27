import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
      <body
        className={`${inter.className} bg-neutral-900 max-w-[1920px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
