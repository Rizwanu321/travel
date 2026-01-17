/**
 * TouristTrip Schema for Package Pages
 * This helps Google show rich results for tour packages
 * Including price, itinerary, ratings, and booking information
 */

import type { Package } from '@/types';

interface PackageSchemaProps {
    pkg: Package;
}

export function PackageSchema({ pkg }: PackageSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "@id": `https://keralaggtaxitravel.vercel.app/packages/${pkg.id}`,
        "name": pkg.name,
        "description": pkg.description,
        "image": `https://keralaggtaxitravel.vercel.app${pkg.image}`,
        "touristType": "Leisure",
        "itinerary": {
            "@type": "ItemList",
            "itemListElement": pkg.highlights.map((highlight, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": highlight
            }))
        },
        "offers": {
            "@type": "Offer",
            "price": pkg.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
            "url": `https://keralaggtaxitravel.vercel.app/packages/${pkg.id}`,
            "seller": {
                "@type": "TravelAgency",
                "name": "Golden Globe Tour Taxi Service",
                "telephone": "+919061883919"
            }
        },
        "provider": {
            "@type": "TravelAgency",
            "name": "Golden Globe Tour Taxi Service",
            "telephone": "+919061883919",
            "url": "https://keralaggtaxitravel.vercel.app"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "120",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
