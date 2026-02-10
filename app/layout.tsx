import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Removed Geist imports
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// Removed Geist font configurations

const roboto = Roboto({
  weight: ["400", "500","600", "700"], // Added regular and medium weights as well
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doctor Landing Page", // Updated title for context
  description: "Doctor landing page built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased font-sans`} // Added font-sans class
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
