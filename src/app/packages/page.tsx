import { Metadata } from 'next';
import { PackagesPageClient } from './packages-client';

export const metadata: Metadata = {
    title: 'Tour Packages',
    description: 'Explore 33+ tour packages to Goa, Kerala, Munnar, Mysore, Bekal, and more. Best prices, curated experiences, and hassle-free booking with Kerala Tours.',
    keywords: ['tour packages', 'Kerala tours', 'Goa packages', 'Munnar trip', 'Mysore tour', 'holiday packages'],
};

export default function PackagesPage() {
    return <PackagesPageClient />;
}
