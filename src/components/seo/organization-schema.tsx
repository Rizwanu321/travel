/**
 * Organization Schema (Schema.org JSON-LD)
 * This provides structured data about Golden Globe Tour Taxi Service
 * Helps Google understand your business and show rich results
 */

export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "@id": "https://www.keralaggtaxitravel.com",
        "name": "Golden Globe Tours - Kerala Tours and Travel",
        "alternateName": "Best Travel Agency in Kerala | Golden Globe",
        "description": "Kerala's best tours and travel agency offering taxi services, tour packages to must-visit places. Expert Kerala tour operators providing complete travel services including Munnar, Alleppey, Wayanad packages.",
        "url": "https://www.keralaggtaxitravel.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.keralaggtaxitravel.com/images/logo.png",
            "width": 250,
            "height": 250
        },
        "image": "https://www.keralaggtaxitravel.com/og-image.jpg",
        "telephone": "+919061883919",
        "email": "mdraffi114@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pallath house, Maruthur post",
            "addressLocality": "Pattambi",
            "addressRegion": "Kerala",
            "postalCode": "679306",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.8103,
            "longitude": 76.2272
        },
        "openingHoursSpecification": {
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
        },
        "priceRange": "₹₹",
        "areaServed": [
            {
                "@type": "State",
                "name": "Kerala"
            },
            {
                "@type": "Country",
                "name": "India"
            }
        ],
        "sameAs": [
            "https://facebook.com/goldenglobe",
            "https://instagram.com/goldenglobe",
            "https://twitter.com/goldenglobe",
            "https://youtube.com/goldenglobe"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tour Packages",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Kerala Tour Packages"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Goa Beach Packages"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Taxi Services"
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
