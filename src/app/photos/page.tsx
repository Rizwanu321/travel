import { Metadata } from 'next';
import { PhotosPageClient } from './photos-client';

export const metadata: Metadata = {
    title: 'Photo Gallery | Vehicles & Kerala Destinations | Golden Globe Tours',
    description: 'View our photo gallery showcasing vehicles, destinations, and happy travelers. See our fleet of cars and beautiful Kerala destinations. Premium taxi and tour services.',
    keywords: ['Kerala photos', 'travel gallery', 'car fleet', 'destination images', 'Golden Globe gallery', 'Kerala tourism photos', 'taxi service photos'],
    openGraph: {
        title: 'Photo Gallery | Golden Globe Tours',
        description: 'View our fleet of vehicles, beautiful Kerala destinations, and happy travelers. Professional taxi and tour services.',
        type: 'website',
        url: 'https://keralatravel.vercel.app/photos',
        siteName: 'Golden Globe Tour Taxi Service',
        images: [{
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Golden Globe Photo Gallery - Vehicles and Kerala Destinations'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Photo Gallery | Golden Globe Tours',
        description: 'View our fleet of vehicles and beautiful Kerala destinations.',
        images: ['/og-image.jpg'],
        creator: '@goldenglobe'
    },
    alternates: {
        canonical: '/photos'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function PhotosPage() {
    return <PhotosPageClient />;
}
