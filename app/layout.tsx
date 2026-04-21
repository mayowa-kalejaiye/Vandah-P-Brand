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
    default: "Victory Abu | Web3 Strategist & Community Builder",
    template: "%s | Victory Abu",
  },
  description: "Web3 strategist and community builder helping blockchain, SaaS, and tech projects scale communities, drive engagement, and build sustainable ecosystems.",
  keywords: ["Victory Abu", "Web3 Strategist", "Community Builder", "Blockchain", "Crypto", "Community Manager", "Tech Consultant", "SaaS Strategy", "Public Speaker"],
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
    title: "Victory Abu | Web3 Strategist & Community Builder",
    description: "Web3 strategist helping blockchain projects scale communities, drive engagement, and build sustainable ecosystems.",
    url: "https://www.vandah.com",
    siteName: "Victory Abu Portfolio",
    images: [
      {
        url: "/vandah.png", 
        width: 1200,
        height: 630,
        alt: "Victory Abu - Web3 Strategist",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Victory Abu | Web3 Strategist & Community Builder",
    description: "Web3 strategist helping blockchain projects scale communities, drive engagement, and build sustainable ecosystems.",
    images: ["/vandah.png"],
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
