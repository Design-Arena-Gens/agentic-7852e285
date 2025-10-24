import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divinoft Developers | Full Stack Web Development Company in Salem, Tamil Nadu",
  description: "Leading web development company in Salem, Tamil Nadu offering full stack development with Python Django, MERN stack, web design, SEO services, web hosting, and complete A-Z website solutions across India.",
  keywords: "web development company Salem, full stack development Tamil Nadu, Python Django developers, MERN stack development, web design Salem, SEO services India, web hosting, website redesign, responsive web development",
  openGraph: {
    title: "Divinoft Developers | Full Stack Web Development Company in Salem",
    description: "Expert web development services including Python Django, MERN stack, SEO, hosting & complete website solutions",
    url: "https://agentic-7852e285.vercel.app",
    siteName: "Divinoft Developers",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://agentic-7852e285.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Salem" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
