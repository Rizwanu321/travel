import { Metadata } from 'next';
import { ServicesPageClient } from './services-client';

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Kerala Tours offers local trips, intercity travel, airport transfers, city tours, and round trips. Multiple vehicle options from sedans to tempo travellers.',
    keywords: ['taxi service Kerala', 'car rental', 'airport transfer', 'local taxi', 'intercity cab'],
};

export default function ServicesPage() {
    return <ServicesPageClient />;
}
