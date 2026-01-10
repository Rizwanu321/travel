import { Metadata } from 'next';
import { ReviewsPageClient } from './reviews-client';

export const metadata: Metadata = {
    title: 'Customer Reviews',
    description: 'Read reviews from our happy travelers. 4.9 rating from 500+ customers. See what people say about Kerala Tours taxi and travel services.',
    keywords: ['Kerala Tours reviews', 'customer testimonials', 'travel reviews', 'taxi service ratings'],
};

export default function ReviewsPage() {
    return <ReviewsPageClient />;
}
