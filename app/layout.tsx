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
  metadataBase: new URL("https://www.vandah.com"),

  title: {
    default: "Victory Abu | Fintech PM & Web3 Strategist",
    template: "%s | Victory Abu",
  },
  description: "Fintech project manager and Web3 strategist focused on execution, launch coordination, and operations for ambitious financial products and ecosystems.",
  keywords: ["Victory Abu", "Fintech PM", "Web3 Strategist", "Operations Manager", "Project Manager", "Blockchain", "Crypto", "Systems Thinker", "Launch Coordination"],
  authors: [{ name: "Victory Abu", url: "https://www.vandah.com" }],
  creator: "Victory Abu",
  publisher: "Victory Abu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Victory Abu | Fintech PM & Web3 Strategist",
    description: "Fintech project manager and Web3 strategist focused on execution, launch coordination, and operations for ambitious financial products and ecosystems.",
    url: "https://www.vandah.com",
    siteName: "Victory Abu Portfolio",
    images: [
      {
        url: "/Vandah2.png", 
        width: 1200,
        height: 630,
        alt: "Victory Abu - Fintech PM & Web3 Strategist",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Victory Abu | Fintech PM & Web3 Strategist",
    description: "Fintech project manager and Web3 strategist focused on execution, launch coordination, and operations for ambitious financial products and ecosystems.",
    images: ["/Vandah2.png"],
    creator: "@realvandah", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Replace with actual Search Console tag
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
