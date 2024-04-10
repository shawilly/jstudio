import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Richmond Hair Studio",
  description: "created by shawilly.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-screen">
      <body
        className={cn(
          "bg-[#282b2d] font-sans text-[#282b2d] antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
