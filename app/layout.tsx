import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terrance Mike | Software Engineer",
  description: "Full-stack developer specializing in React, TypeScript, and Next.js. Building thoughtful digital experiences.",
  keywords: ["Software Engineer", "React", "TypeScript", "Next.js", "Full Stack Developer"],
  authors: [{ name: "Terrance Mike" }],
  openGraph: {
    title: "Terrance Mike | Software Engineer",
    description: "Full-stack developer specializing in React, TypeScript, and Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
