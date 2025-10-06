import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Agarwal - Agentic AI Engineer",
  description:
    "Building intelligent agent systems & software. Specialized in Agentic AI and Python engineering with 2+ years of experience.",
  keywords: [
    "Agentic AI",
    "Python",
    "Software Engineer",
    "Portfolio",
    "AI Agent",
    "RAG",
    "Multi-agent Systems",
  ],
  authors: [{ name: "Priyanshu Agarwal" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
