import { Metadata } from 'next';
import { CategoriesPageClient } from './categories-client';

export const metadata: Metadata = {
    title: 'Travel Categories | Car Rentals, Tours & Packages | Golden Globe',
    description: 'Browse car rentals, tour operators, tour packages, and holiday packages. Find the perfect travel option for your needs with Golden Globe Tours in Kerala.',
    keywords: ['car rental Kerala', 'tour operators', 'holiday packages', 'travel categories', 'Kerala tourism', 'Golden Globe categories', 'travel options'],
    openGraph: {
        title: 'Travel Categories | Golden Globe Tours',
        description: 'Browse car rentals, tour operators, tour packages, and holiday packages. Find your perfect Kerala travel option.',
        type: 'website',
        url: 'https://keralatravel.vercel.app/categories',
        siteName: 'Golden Globe Tour Taxi Service',
        images: [{
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Golden Globe Travel Categories - Tours, Packages & Car Rentals'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Travel Categories | Golden Globe Tours',
        description: 'Browse car rentals, tour operators, tour packages, and holiday packages.',
        images: ['/og-image.jpg'],
        creator: '@goldenglobe'
    },
    alternates: {
        canonical: '/categories'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function CategoriesPage() {
    return <CategoriesPageClient />;
}
