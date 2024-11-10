import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter} from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: "--font-inter",
  })

export const metadata: Metadata = {
  title: "Mehreen Munsif Ali",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-gradient-to-b from-gray-50 via-orange-200 via-70% to-gray-50` }
      >
        <HeaderComponent/>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
