import { Metadata } from 'next';
import { PhotosPageClient } from './photos-client';

export const metadata: Metadata = {
    title: 'Photo Gallery',
    description: 'View our photo gallery showcasing vehicles, destinations, and happy travelers. See our fleet of cars and beautiful Kerala destinations.',
    keywords: ['Kerala photos', 'travel gallery', 'car fleet', 'destination images'],
};

export default function PhotosPage() {
    return <PhotosPageClient />;
}
