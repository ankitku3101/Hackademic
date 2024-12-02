import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/sections/Footer";
import { Toaster } from "react-hot-toast";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Whatsapp from "@/components/Whatsapp";


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
  title: "Hackademic",
  description: "never compromise on security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Whatsapp />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
              padding: "16px",
              borderRadius: "8px",
              fontSize: "14px",
            },
            success: {
              style: {
                background: "#28a745",
                color: "#fff",
              },
            },
            error: {
              style: {
                background: "#dc3545",
                color: "#fff",
              },
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
