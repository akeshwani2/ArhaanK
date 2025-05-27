import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Arhaan Keshwani",
  description: "Arhaan Keshwani's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSerif.className}>
      {children}
        <Analytics />
      </body>
    </html>
  );
}
