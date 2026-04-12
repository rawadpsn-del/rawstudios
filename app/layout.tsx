import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raw Studios — Custom Apps for Local Businesses",
  description:
    "I build ordering apps, loyalty programs, and custom mobile apps for restaurants and local businesses in Cleveland.",
  openGraph: {
    title: "Raw Studios — Custom Apps for Local Businesses",
    description:
      "I build ordering apps, loyalty programs, and custom mobile apps for restaurants and local businesses in Cleveland.",
    url: "https://rawstudios.info",
    siteName: "Raw Studios",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
