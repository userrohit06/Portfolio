import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rohit Khatri | Full Stack Developer",
  description:
    "Full-Stack Developer Building Scalable Web Experiences. I design and develop end-to-end web solutions that are clean, scalable, and performance-driven.",
  keywords: [
    "Full-Stack Developer",
    "Full Stack Developer",
    "FullStack Developer",
    "React Developer",
    "MERN Developer",
    "Web Developer",
    "Rohit Khatri",
  ],
  authors: [{ name: "Rohit Khtatri" }],
  creator: "Rohit Khatri",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rohit Khatri | Full Stack Developer",
    description: "Full-Stack Developer Building Scalable Web Experiences",
    siteName: "Rohit Khatri Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
