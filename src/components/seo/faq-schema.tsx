/**
 * FAQ Schema for Kerala Tourism Questions
 * Helps rank for informational queries about Kerala tourism
 */

export function FAQSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the best places to visit in Kerala?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best places to visit in Kerala include Munnar (tea gardens and hill stations), Alleppey (backwaters and houseboats), Wayanad (wildlife and nature), Thekkady (Periyar wildlife sanctuary), Fort Kochi (heritage sites), Kovalam (beaches), and Athirappilly (waterfalls). Golden Globe Tours offers complete tour packages to all must-visit places in Kerala."
                }
            },
            {
                "@type": "Question",
                "name": "What are the must-visit places in Kerala?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Must-visit places in Kerala include: 1) Munnar - famous tea gardens, 2) Alleppey - Kerala backwaters, 3) Wayanad - wildlife and hill stations, 4) Thekkady - Periyar wildlife sanctuary, 5) Kochi - historic Fort Kochi, 6) Kovalam - pristine beaches, 7) Varkala - cliff beaches, 8) Athirappilly - spectacular waterfalls. Book a complete Kerala tour package with Golden Globe Tours."
                }
            },
            {
                "@type": "Question",
                "name": "Which is the best travel agency in Kerala?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Golden Globe Tours is one of the best travel agencies in Kerala, offering expert tour services since 2010. We provide complete Kerala tour packages, taxi services, and customized itineraries covering all tourist destinations including Munnar, Alleppey, Wayanad, and more. Based in Palakkad, we serve all of Kerala with 24/7 taxi and tour services."
                }
            },
            {
                "@type": "Question",
                "name": "What is the cost of Kerala tour packages?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kerala tour packages range from ₹5,000 to ₹25,000 depending on duration, destinations, and accommodation. Golden Globe Tours offers affordable Kerala tour packages for couples, families, and groups. Popular packages include 3-day Munnar tours (₹8,000), 2-day Alleppey houseboat packages (₹12,000), and 5-day complete Kerala tours (₹18,000). Contact us for customized tour packages."
                }
            },
            {
                "@type": "Question",
                "name": "Which are the top tourist destinations in Kerala?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Top tourist destinations in Kerala are: Munnar (hill station with tea plantations), Alleppey (backwater cruises), Wayanad (wildlife safaris), Thekkady (spice gardens), Kumarakom (bird sanctuary), Fort Kochi (Dutch heritage), Kovalam Beach (beach resort), Varkala (cliffs and beaches), and Athirappilly Falls (largest waterfall in Kerala). Golden Globe Tours covers all these destinations."
                }
            },
            {
                "@type": "Question",
                "name": "How to book Kerala taxi service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Book Kerala taxi service with Golden Globe Tours online through our website or call +91 90618 83919. We offer 24/7 taxi services including airport transfers, city tours, intercity travel, and sightseeing. Our fleet includes sedans, SUVs, and tempo travellers. Flexible hourly, daily, and package-based bookings available for all Kerala destinations."
                }
            },
            {
                "@type": "Question",
                "name": "What services do Kerala tour operators provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kerala tour operators like Golden Globe Tours provide: complete tour packages, customized itineraries, taxi services (sedan, SUV, tempo traveller), hotel bookings, houseboat reservations, sightseeing tours, airport transfers, experienced drivers, tour guides, and 24/7 customer support. We handle all travel arrangements for a hassle-free Kerala vacation."
                }
            },
            {
                "@type": "Question",
                "name": "Best time to visit Kerala tourist places?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best time to visit Kerala is from October to March (winter season) when the weather is pleasant. December to February is ideal for beach destinations like Kovalam. June to September (monsoon) is perfect for experiencing Kerala's lush greenery and Ayurvedic treatments. Hill stations like Munnar can be visited year-round. Golden Globe Tours operates throughout the year."
                }
            },
            {
                "@type": "Question",
                "name": "What are popular Kerala travel packages?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Popular Kerala travel packages include: Munnar Hill Station Tour (3 days), Alleppey Backwater Houseboat (2 days), Wayanad Wildlife Package (3 days), Complete Kerala Tour (7 days covering Munnar, Alleppey, Thekkady), Honeymoon Packages, Family Tour Packages, and Kerala-Goa Combo Tours. Golden Globe Tours offers customizable packages for all budgets."
                }
            },
            {
                "@type": "Question",
                "name": "Places to visit in Kerala for 3 days?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For a 3-day Kerala trip, visit: Day 1 - Munnar (tea gardens, Mattupetty Dam, Echo Point), Day 2 - Thekkady (Periyar wildlife sanctuary, spice plantation), Day 3 - Alleppey (backwater cruise, houseboat stay). Alternatively, explore Kochi-Munnar-Alleppey or Wayanad-Calicut combination. Golden Globe Tours offers customized 3-day Kerala packages with taxi service."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
