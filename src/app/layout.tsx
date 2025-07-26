import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { mainMetadata } from "@/config/metadata";
import { JsonLdSchemas, LayoutHeader,  } from '@/components/common';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"



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
      <head>
        <JsonLdSchemas />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <LayoutHeader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
