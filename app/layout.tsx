import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" });

export const metadata: Metadata = {
  title: "Antoni Gapiński - React Developer",
  description: "React Frontend developer",
  icons: {
    icon: "/icons/student.png",
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
        className={`${inter.className} bg-neutral-900 max-w-[1920px] mx-auto`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
