import { Metadata } from 'next';
import { ServicesPageClient } from './services-client';

export const metadata: Metadata = {
    title: 'Taxi & Travel Services | Airport Transfer, City Tours | Golden Globe',
    description: 'Golden Globe offers local trips, intercity travel, airport transfers, city tours, and round trips. Multiple vehicle options from sedans to tempo travellers. 24/7 service in Kerala.',
    keywords: ['taxi service Kerala', 'car rental', 'airport transfer', 'local taxi', 'intercity cab', 'Golden Globe taxi', 'Palakkad taxi service', 'Kerala cab booking'],
    openGraph: {
        title: 'Taxi & Travel Services | Golden Globe Tours',
        description: 'Local trips, intercity travel, airport transfers, and city tours. Multiple vehicle options available 24/7.',
        type: 'website',
        url: 'https://keralatravel.vercel.app/services',
        siteName: 'Golden Globe Tour Taxi Service',
        images: [{
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Golden Globe Taxi Services - Professional Car Rental in Kerala'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Taxi & Travel Services | Golden Globe Tours',
        description: 'Local trips, intercity travel, airport transfers, and city tours. 24/7 service.',
        images: ['/og-image.jpg'],
        creator: '@goldenglobe'
    },
    alternates: {
        canonical: '/services'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function ServicesPage() {
    return <ServicesPageClient />;
}
