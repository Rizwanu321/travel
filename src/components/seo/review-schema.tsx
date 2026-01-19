/**
 * Review Schema (Schema.org JSON-LD)
 * Shows star ratings and reviews in Google search results
 * Improves click-through rates with rich snippets
 */

import type { Review } from '@/types';

interface ReviewSchemaProps {
    review: Review;
}

export function ReviewSchema({ review }: ReviewSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "TravelAgency",
            "name": "Golden Globe Tour Taxi Service",
            "image": "https://www.keralaggtaxitravel.com/images/logo.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pattambi",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
            },
            "telephone": "+919061883919"
        },
        "author": {
            "@type": "Person",
            "name": review.userName
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": "5",
            "worstRating": "1"
        },
        "reviewBody": review.comment,
        "datePublished": review.date,
        "publisher": {
            "@type": "Organization",
            "name": "Golden Globe Tour Taxi Service"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * Aggregate Review Schema for the reviews page
 * Shows overall rating in search results
 */
export function AggregateReviewSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.keralaggtaxitravel.com",
        "name": "Golden Globe Tour Taxi Service",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500",
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
