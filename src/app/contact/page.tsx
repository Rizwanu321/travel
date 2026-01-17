import { Metadata } from 'next';
import { ContactPageClient } from './contact-client';
import { LocalBusinessSchema } from '@/components/seo';

export const metadata: Metadata = {
    title: 'Contact Us | +91 90618 83919 | Pattambi, Palakkad | Golden Globe',
    description: 'Get in touch with Golden Globe Tours. Call us at +91 90618 83919, WhatsApp, or visit our office in Pattambi, Palakkad. 24/7 customer support available for bookings.',
    keywords: ['contact Golden Globe', 'taxi booking contact', 'Palakkad taxi', 'customer support', 'Kerala tours phone number', 'travel agency contact'],
    openGraph: {
        title: 'Contact Us | Golden Globe Tours',
        description: 'Call +91 90618 83919 or visit our office in Pattambi, Palakkad. 24/7 customer support for taxi and tour bookings.',
        type: 'website',
        url: 'https://keralaggtaxitravel.vercel.app/contact',
        siteName: 'Golden Globe Tour Taxi Service',
        images: [{
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Contact Golden Globe Tours - 24/7 Customer Support'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us | Golden Globe Tours',
        description: 'Call +91 90618 83919 or visit our office in Pattambi, Palakkad. 24/7 support.',
        images: ['/og-image.jpg'],
        creator: '@goldenglobe'
    },
    alternates: {
        canonical: '/contact'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function ContactPage() {
    return (
        <>
            <LocalBusinessSchema />
            <ContactPageClient />
        </>
    );
}
