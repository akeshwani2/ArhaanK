import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


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
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
