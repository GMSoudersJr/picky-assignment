import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { montserrat } from "@/fonts";


export const metadata: Metadata = {
  title: "Picky Assignment",
  description: "An assignment to create a discussion page with local data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
