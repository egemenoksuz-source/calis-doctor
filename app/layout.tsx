import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calisdoctor.com"),

  title: {
    default:
      "Calis Doctor | English Speaking Doctor in Çalış Beach & Fethiye",
    template: "%s | Calis Doctor",
  },

  description:
    "24/7 English-speaking private doctor service in Çalış Beach and Fethiye. Hotel visits, home visits, urgent medical care and consultations for tourists, expats and international residents.",

  keywords: [
    "Calis Doctor",
    "Çalış Doctor",
    "doctor in Calis",
    "doctor in Çalış Beach",
    "English speaking doctor Calis",
    "English speaking doctor Fethiye",
    "hotel doctor Calis",
    "hotel doctor Fethiye",
    "home visit doctor Calis",
    "home visit doctor Fethiye",
    "private doctor Calis",
    "private doctor Fethiye",
    "emergency doctor Calis",
    "urgent doctor Calis",
    "doctor near me Calis",
    "doctor for tourists Fethiye",
    "expat doctor Fethiye",
    "international resident doctor Fethiye",
    "24/7 doctor Calis",
    "IV therapy Calis",
    "food poisoning doctor Calis",
    "ear infection doctor Calis",
    "family doctor Fethiye",
    "blood test Calis",
  ],

  authors: [
    {
      name: "Calis Doctor",
      url: "https://calisdoctor.com",
    },
  ],

  creator: "Calis Doctor",
  publisher: "Calis Doctor",
  applicationName: "Calis Doctor",
  category: "Healthcare",

  verification: {
    google: "67UxkbUUlwla4McO99Vgg-lcFpMReZFz3iKzQBSYj6c",
  },

  alternates: {
    canonical: "https://calisdoctor.com",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://calisdoctor.com",
    siteName: "Calis Doctor",
    title:
      "Calis Doctor | English Speaking Doctor in Çalış Beach & Fethiye",
    description:
      "Private English-speaking medical care for tourists, expats and international residents in Çalış Beach and Fethiye. Hotel visits, home visits and urgent medical assistance.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calis Doctor medical care in Çalış Beach and Fethiye",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Calis Doctor | English Speaking Doctor in Çalış Beach & Fethiye",
    description:
      "24/7 private medical care for tourists and international residents in Çalış Beach and Fethiye.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  other: {
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Calis Doctor",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0891b2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-[#f3fbfb] text-slate-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}