import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { mainMetadata } from "@/config/metadata";
import { LayoutHeader,  } from '@/components/common';

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = mainMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <LayoutHeader />
        {children}
      </body>
    </html>
  );
}
