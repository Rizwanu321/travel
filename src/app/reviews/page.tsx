import { Metadata } from 'next';
import { ReviewsPageClient } from './reviews-client';
import { AggregateReviewSchema } from '@/components/seo';

export const metadata: Metadata = {
    title: 'Customer Reviews | 4.8★ from 500+ Travelers | Golden Globe Tours',
    description: 'Read reviews from our happy travelers. 4.8 rating from 500+ customers. See what people say about Golden Globe Tours taxi and travel services in Kerala.',
    keywords: ['Golden Globe reviews', 'customer testimonials', 'travel reviews', 'taxi service ratings', 'Kerala tours feedback', 'customer satisfaction'],
    openGraph: {
        title: 'Customer Reviews | 4.8★ from 500+ Travelers | Golden Globe',
        description: 'Read genuine reviews from 500+ happy travelers. See why Golden Globe Tours is the #1 choice in Kerala.',
        type: 'website',
        url: 'https://keralatravel.vercel.app/reviews',
        siteName: 'Golden Globe Tour Taxi Service',
        images: [{
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Golden Globe Customer Reviews - 4.8 Star Rating'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Customer Reviews | 4.8★ from 500+ Travelers',
        description: 'Read genuine reviews from happy travelers about Golden Globe Tours.',
        images: ['/og-image.jpg'],
        creator: '@goldenglobe'
    },
    alternates: {
        canonical: '/reviews'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function ReviewsPage() {
    return (
        <>
            <AggregateReviewSchema />
            <ReviewsPageClient />
        </>
    );
}
