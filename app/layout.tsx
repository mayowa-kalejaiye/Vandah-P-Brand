import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victory Abu - Web3 Strategist & Community Builder",
  description: "Web3 enthusiast and Crypto strategist portfolio",
  openGraph: {
    title: "Victory Abu - Web3 Strategist & Community Builder",
    description: "Web3 enthusiast and Crypto strategist portfolio",
    url: "https://www.vandah.com",
    siteName: "Vandah",
    images: [
      {
        url: "public/Vandah2.png", // just change this path later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${dmSans.className} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
