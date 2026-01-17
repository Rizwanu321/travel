import { Metadata } from 'next';
import { PackagesPageClient } from './packages-client';

export const metadata: Metadata = {
    title: 'Tour Packages | 47+ Destinations | Golden Globe Tours',
    description: 'Explore 47+ tour packages to Goa, Kerala, Munnar, Mysore, Bekal, and more. Best prices, curated experiences, and hassle-free booking with Golden Globe Tours.',
    keywords: ['tour packages', 'Kerala tours', 'Goa packages', 'Munnar trip', 'Mysore tour', 'holiday packages', 'Golden Globe tours', 'travel packages India'],
    openGraph: {
        title: 'Tour Packages | 47+ Destinations | Golden Globe Tours',
        description: 'Explore 47+ tour packages to Goa, Kerala, Munnar, Mysore, Bekal, and more. Best prices and hassle-free booking.',
        type: 'website',
        url: 'https://keralaggtaxitravel.vercel.app/packages',
        siteName: 'Golden Globe Tour Taxi Service',
        images: [{
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Golden Globe Tour Packages - Explore Kerala and Beyond'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tour Packages | 47+ Destinations | Golden Globe Tours',
        description: 'Explore 47+ tour packages to Goa, Kerala, Munnar, Mysore, Bekal, and more.',
        images: ['/og-image.jpg'],
        creator: '@goldenglobe'
    },
    alternates: {
        canonical: '/packages'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function PackagesPage() {
    return <PackagesPageClient />;
}
