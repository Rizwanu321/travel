import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header, Footer, MobileNav } from "@/components/layout";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10B981" },
    { media: "(prefers-color-scheme: dark)", color: "#047857" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Kerala Tours | Best Taxi Service & Travel Agency in Kerala",
    template: "%s | Kerala Tours",
  },
  description:
    "Book affordable cab services in Kerala. City tours, airport taxi, round trips, self-drive cars. Explore Goa, Munnar, Mysore, Bekal with 33+ tour packages. Pattambi, Palakkad.",
  keywords: [
    "Kerala taxi service",
    "Palakkad cab booking",
    "Kerala tour packages",
    "Munnar trip",
    "Goa packages",
    "airport taxi Kerala",
    "car rental Pattambi",
    "travel agency Kerala",
    "best cab service",
    "tour operators Kerala",
  ],
  authors: [{ name: "Kerala Tours" }],
  creator: "Kerala Tours",
  publisher: "Kerala Tours",
  formatDetection: {
    email: false,
    telephone: true,
  },
  metadataBase: new URL("https://keralatours.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://keralatours.com",
    siteName: "Kerala Tours",
    title: "Kerala Tours | Best Taxi Service & Travel Agency in Kerala",
    description:
      "Book affordable cab services in Kerala. City tours, airport taxi, round trips, self-drive cars. Explore Goa, Munnar, Mysore, Bekal with 33+ tour packages.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kerala Tours - Best Travel Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerala Tours | Best Taxi Service & Travel Agency in Kerala",
    description:
      "Book affordable cab services in Kerala. City tours, airport taxi, round trips, self-drive cars.",
    images: ["/og-image.jpg"],
    creator: "@keralatours",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileNav />
        </Providers>
      </body>
    </html>
  );
}
