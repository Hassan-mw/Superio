import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation/Navigation";
import Footer from "./(LandingPageComponents)/Footer/Footer";
import { DataProvider } from "./ContextApi/ContextApi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Superio - Just another WordPress",
  description:"Find Jobs, Employment & Career Opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="w-screen h-screen overflow-y-auto  flex flex-col bg-[#f7f8fc] overflow-x-hidden">
         <div><Navigation/></div>
         <DataProvider>

        {children}
         </DataProvider>
      <div className='w-full  bg-white flex items-center justify-center border-t'><Footer/></div>

      </div>
      </body>
    </html>
  );
}
