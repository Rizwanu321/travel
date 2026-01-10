import { Metadata } from 'next';
import { ContactPageClient } from './contact-client';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Kerala Tours. Call us, WhatsApp, or visit our office in Pattambi, Palakkad. 24/7 customer support available.',
    keywords: ['contact Kerala Tours', 'taxi booking contact', 'Palakkad taxi', 'customer support'],
};

export default function ContactPage() {
    return <ContactPageClient />;
}
