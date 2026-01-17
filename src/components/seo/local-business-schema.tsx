/**
 * LocalBusiness Schema (Schema.org JSON-LD)
 * Critical for local SEO and Google Maps ranking
 * Shows your business in local search results
 */

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://keralaggtaxitravel.vercel.app#localbusiness",
        "name": "Golden Globe Tour Taxi Service",
        "image": "https://keralaggtaxitravel.vercel.app/images/logo.png",
        "description": "Best taxi service and tour packages in Kerala. We offer city tours, airport taxi service, round trip cabs, and self-drive cars at affordable prices.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pallath house, Maruthur post, Pattambi",
            "addressLocality": "Palakkad",
            "addressRegion": "Kerala",
            "postalCode": "679306",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.8103,
            "longitude": 76.2272
        },
        "url": "https://keralaggtaxitravel.vercel.app",
        "telephone": "+919061883919",
        "email": "mdraffi114@gmail.com",
        "priceRange": "₹₹",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        "paymentAccepted": "Cash, UPI, Online Transfer",
        "currenciesAccepted": "INR",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1"
        },
        "hasMap": "https://maps.app.goo.gl/nC2GSje1pVNpuHrDA",
        "areaServed": {
            "@type": "State",
            "name": "Kerala"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
