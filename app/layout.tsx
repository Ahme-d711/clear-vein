import type { Metadata } from "next";
import { Reem_Kufi } from "next/font/google";
import "./globals.css";

const reemKufi = Reem_Kufi({
  subsets: ["latin", "arabic"],
  variable: "--font-reem-kufi",
});

export const metadata: Metadata = {
  title: "Doctor Landing Page", // Updated title for context
  description: "Doctor landing page built with Next.js",
};

import { Toaster } from "react-hot-toast";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${reemKufi.variable} antialiased font-sans`} // Added font-sans class
      >
        <Toaster position="top-center" reverseOrder={false} />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

