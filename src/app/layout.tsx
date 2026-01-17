import type { Metadata, Viewport } from "next";
import { Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import LoadingProvider from "@/components/providers/loading-provider";
import { Header, Footer, MobileNav } from "@/components/layout";
import { OrganizationSchema } from "@/components/seo";

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

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
    default: "Kerala Tours and Travel | Best Taxi Service in Kerala | Golden Globe",
    template: "%s | Golden Globe Tours Kerala",
  },
  description:
    "Best Kerala tours and travel agency in Palakkad. Top taxi service, must-visit places, tour packages. Expert Kerala tour operators since 2010.",
  keywords: [
    // === PRIMARY KEYWORDS ===
    "kerala tours and travel",
    "kerala taxi service",
    "best travel agency in kerala",
    "kerala tour operators",
    "kerala tourism",

    // === LOCATION-BASED ===
    "palakkad taxi service",
    "kerala cab booking",
    "kerala tour packages",
    "pattambi taxi service",
    "travel agency near me palakkad",

    // === TOP DESTINATION KEYWORDS ===
    "best places to visit in kerala",
    "must visit places in kerala",
    "kerala tourist places",
    "top tourist destinations in kerala",
    "kerala travel guide",

    // === SPECIFIC KERALA DESTINATIONS ===
    // Backwaters & Houseboats
    "alleppey backwaters",
    "alleppey houseboat packages",
    "kerala houseboat tour",
    "backwater cruise kerala",
    "kumarakom houseboat",

    // Hill Stations
    "munnar tour packages",
    "munnar tea garden tour",
    "munnar honeymoon package",
    "wayanad tour packages",
    "wayanad wildlife tour",
    "vagamon hill station",
    "thekkady tour packages",
    "thekkady periyar safari",

    // Beaches
    "kovalam beach packages",
    "varkala beach tour",
    "bekal fort and beach",

    // Heritage & Culture
    "fort kochi tour",
    "kochi heritage walk",
    "kochi tourism packages",

    // Waterfalls
    "athirapally waterfalls tour",
    "athirapally day trip",

    // Wildlife
    "periyar wildlife sanctuary",
    "wayanad wildlife sanctuary",
    "thekkady wildlife tour",

    // === OUTSIDE KERALA DESTINATIONS ===
    // Goa
    "goa tour packages from kerala",
    "goa beach packages",
    "kerala to goa tour",

    // Karnataka
    "mysore tour packages",
    "mysore palace tour",
    "coorg tour packages",
    "coorg coffee estate tour",
    "ooty tour packages",
    "ooty toy train tour",
    "kodaikanal tour packages",
    "bangalore tour packages",

    // Tamil Nadu
    "pondicherry tour packages",
    "rameshwaram pilgrimage tour",
    "madurai temple tour",

    // === PILGRIMAGE PACKAGES ===
    "kerala pilgrimage tours",
    "guruvayoor temple tour",
    "sabarimala tour packages",
    "tirupati tour from kerala",
    "velankanni church tour",

    // === PACKAGE TYPES ===
    "kerala honeymoon packages",
    "kerala family tour packages",
    "kerala group tour packages",
    "kerala weekend getaway",
    "complete kerala tour",
    "kerala adventure packages",
    "kerala photography tour",

    // === SERVICE KEYWORDS ===
    // Taxi Services
    "kerala tour service",
    "kerala travel services",
    "kerala taxi booking online",
    "airport taxi kerala",
    "kerala sightseeing taxi",
    "local taxi service kerala",
    "intercity taxi kerala",

    // Car Rental
    "car rental kerala",
    "car rental with driver kerala",
    "self drive cars kerala",
    "cab hire kerala",

    // Specific Services
    "airport transfer kerala",
    "city tour taxi kerala",
    "round trip taxi kerala",
    "one way taxi kerala",
    "outstation taxi kerala",

    // === TOUR EXPERIENCES ===
    "kerala backwater tours",
    "kerala hill station tours",
    "kerala wildlife tours",
    "kerala beach tours",
    "kerala heritage tours",
    "kerala cultural tours",
    "kerala ayurveda tours",

    // === DURATION-BASED ===
    "places to visit in kerala for 3 days",
    "kerala 5 day tour package",
    "kerala 7 day tour package",
    "kerala tour itinerary",
    "places to visit kerala 2 days",
    "week trip kerala",

    // === COMPARISON & QUALITY ===
    "best taxi service in kerala",
    "top tour operators in kerala",
    "kerala tour package price",
    "affordable kerala tours",
    "budget kerala packages",
    "luxury kerala tours",

    // === SEASONAL & SPECIAL ===
    "kerala monsoon packages",
    "kerala summer vacation",
    "kerala new year packages",
    "kerala christmas packages",

    // === VEHICLE TYPES ===
    "sedan taxi kerala",
    "suv rental kerala",
    "tempo traveller kerala",
    "innova booking kerala",
    "dzire taxi kerala",
    "ertiga cab kerala",

    // === SPECIFIC ATTRACTIONS ===
    "tea garden tours munnar",
    "spice plantation thekkady",
    "elephant safari kerala",
    "kathakali dance show",

    // === COMBO PACKAGES ===
    "munnar alleppey package",
    "munnar thekkady tour",
    "kochi munnar wayanad tour",
    "kerala goa combo tour",

    // === ACTIVITY-BASED ===
    "houseboat stay kerala",
    "tree house stay wayanad",
    "paragliding vagamon",
    "bamboo rafting kerala",
    "trekking packages kerala",

    // === BRAND KEYWORDS ===
    "golden globe tours",
    "golden globe kerala",
    "golden globe palakkad",
    "golden globe taxi service",

    // === ADDITIONAL LONG-TAIL ===
    "kerala tour packages from palakkad",
    "kerala travel agency near me",
    "best kerala tour packages with price",
    "kerala tourism official packages",
    "kerala trip planner",

    // === LEGACY KEYWORDS ===
    "car rental Pattambi",
    "travel agency Kerala",
    "best cab service",
    "tour operators Kerala",
  ],
  authors: [{ name: "Golden Globe" }],
  creator: "Golden Globe",
  publisher: "Golden Globe",
  formatDetection: {
    email: false,
    telephone: true,
  },
  metadataBase: new URL("https://keralaggtaxitravel.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://keralaggtaxitravel.vercel.app",
    siteName: "Golden Globe Tours Kerala",
    title: "Kerala Tours and Travel | Best Places to Visit | Top Taxi Service",
    description:
      "Discover Kerala's best places with Golden Globe Tours. Expert tour operators offering taxi services, tour packages, and travel guides. Must-visit destinations!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kerala Tours and Travel - Best Travel Agency in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerala Tours and Travel | Best Places to Visit | Top Taxi Service",
    description:
      "Discover Kerala's must-visit places. Expert tour operators, taxi services, complete tour packages.",
    images: ["/og-image.jpg"],
    creator: "@goldenglobe",
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
    icon: "/images/logo.png?v=7",
    shortcut: "/images/logo.png?v=7",
    apple: "/images/logo.png?v=7",
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
        className={`${outfit.variable} ${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <OrganizationSchema />
        <Providers>
          <LoadingProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <MobileNav />
          </LoadingProvider>
        </Providers>
      </body>
    </html>
  );
}
