import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Abimbola Adeyemi",
  description: "A portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
