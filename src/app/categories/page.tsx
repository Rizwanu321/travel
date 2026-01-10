import { Metadata } from 'next';
import { CategoriesPageClient } from './categories-client';

export const metadata: Metadata = {
    title: 'Categories',
    description: 'Browse car rentals, tour operators, tour packages, and holiday packages. Find the perfect travel option for your needs with Kerala Tours.',
    keywords: ['car rental Kerala', 'tour operators', 'holiday packages', 'travel categories'],
};

export default function CategoriesPage() {
    return <CategoriesPageClient />;
}
