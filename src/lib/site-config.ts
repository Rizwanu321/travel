/**
 * Centralized Site Configuration
 * All site-wide settings including domain, SEO, and business info
 * Update this file when changing domain or business details
 */

export const siteConfig = {
    // === DOMAIN CONFIGURATION ===
    url: "https://www.keralaggtaxitravel.com",
    name: "Golden Globe Tours",
    siteName: "Golden Globe Tours Kerala",
    shortName: "Golden Globe",

    // === BUSINESS INFORMATION ===
    business: {
        legalName: "Golden Globe Tour Taxi Service",
        alternateName: "Best Travel Agency in Kerala | Golden Globe",
        phone: "+919061883919",
        phoneDisplay: "+91 90618 83919",
        email: "mdraffi114@gmail.com",
        whatsapp: "+919061883919",
        foundingYear: 2010,
    },

    // === ADDRESS ===
    address: {
        street: "Pallath house, Maruthur post",
        locality: "Pattambi",
        region: "Kerala",
        district: "Palakkad",
        postalCode: "679306",
        country: "IN",
        countryName: "India",
    },

    // === GEOLOCATION ===
    geo: {
        latitude: 10.8103,
        longitude: 76.2272,
        mapsUrl: "https://maps.app.goo.gl/nC2GSje1pVNpuHrDA",
    },

    // === SOCIAL MEDIA ===
    social: {
        facebook: "https://facebook.com/goldenglobe",
        instagram: "https://instagram.com/goldenglobe",
        twitter: "https://twitter.com/goldenglobe",
        youtube: "https://youtube.com/goldenglobe",
        twitterHandle: "@goldenglobe",
    },

    // === SEO DEFAULTS ===
    seo: {
        defaultTitle: "Kerala Tours and Travel | Best Taxi Service in Kerala | Golden Globe",
        titleTemplate: "%s | Golden Globe Tours Kerala",
        defaultDescription: "Best Kerala tours and travel agency in Palakkad. Top taxi service, must-visit places, tour packages. Expert Kerala tour operators since 2010.",
        ogImagePath: "/og-image.jpg",
        logoPath: "/images/logo.png",
    },

    // === RATINGS ===
    ratings: {
        aggregateRating: "4.8",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
    },

    // === BUSINESS HOURS ===
    hours: {
        opens: "00:00",
        closes: "23:59",
        is24x7: true,
    },

    // === PAYMENT ===
    payment: {
        accepted: "Cash, UPI, Online Transfer",
        currency: "INR",
        priceRange: "₹₹",
    },
} as const;

// Helper functions for common URL patterns
export const getSiteUrl = (path: string = "") => `${siteConfig.url}${path}`;
export const getOgImageUrl = () => `${siteConfig.url}${siteConfig.seo.ogImagePath}`;
export const getLogoUrl = () => `${siteConfig.url}${siteConfig.seo.logoPath}`;
