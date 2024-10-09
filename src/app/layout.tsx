import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import React, { Suspense } from "react";
import ReactQueryProvider from "../components/reactqueryprovider/ReactQueryProvider";
import Head from "next/head";

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

export const metadata: Metadata = {
  title: "Furniro-Elanchezhiyan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins`}
      >
        <Suspense fallback={<div>Loading please wait</div>}>
          <ReactQueryProvider>
            <Navbar />
            {children}
            <Footer />
          </ReactQueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
