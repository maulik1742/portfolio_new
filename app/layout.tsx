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
  title: "Maulik Solanki | Full-Stack Developer (React, Next.js, Node.js)",
  description:
    "Maulik Solanki is a Full-Stack Developer with 3.5+ years of experience building scalable, high-performance web applications using React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Maulik Solanki",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Maulik Solanki" }],
  creator: "Maulik Solanki",
  openGraph: {
    title: "Maulik Solanki | Full-Stack Developer Portfolio",
    description:
      "Explore projects, skills, and experience of Maulik Solanki — a Full-Stack Developer specializing in React, Next.js, and scalable web applications.",
    url: "https://your-domain.com",
    siteName: "Maulik Solanki Portfolio",
    images: [
      {
        url: "/og-image.png", // add this in /public
        width: 1200,
        height: 630,
        alt: "Maulik Solanki Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maulik Solanki | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and Node.js. Building scalable, modern web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
