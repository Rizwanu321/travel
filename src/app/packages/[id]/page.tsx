import { Metadata } from 'next';
import { packages } from '@/lib/data';
import { PackageDetailsClient } from './package-details-client';
import { PackageSchema, BreadcrumbSchema } from '@/components/seo';
import { notFound } from 'next/navigation';

interface PackagePageProps {
    params: {
        id: string;
    };
}

// Generate static params for all packages (SSG)
export async function generateStaticParams() {
    return packages.map((pkg) => ({
        id: pkg.id,
    }));
}

// Generate dynamic metadata for each package
export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const pkg = packages.find(p => p.id === resolvedParams.id);

    if (!pkg) {
        return {
            title: 'Package Not Found',
            description: 'The tour package you are looking for could not be found.',
        };
    }

    const title = `${pkg.name} - ${pkg.destination} Tour Package`;
    const description = `${pkg.description} Book ${pkg.duration} ${pkg.destination} package starting from ₹${pkg.price}. ${pkg.highlights.slice(0, 3).join(', ')}. Best Kerala tour operator.`;

    return {
        title,
        description,
        keywords: [
            pkg.destination,
            pkg.name,
            pkg.category,
            'Kerala tour package',
            `${pkg.destination} travel`,
            `${pkg.destination} trip`,
            ...pkg.highlights,
            'Golden Globe tours',
            'Kerala taxi service',
        ],
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://www.keralaggtaxitravel.com/packages/${pkg.id}`,
            siteName: 'Golden Globe Tour Taxi Service',
            images: [
                {
                    url: `https://www.keralaggtaxitravel.com${pkg.image}`,
                    width: 1200,
                    height: 630,
                    alt: `${pkg.destination} - ${pkg.name} tour package`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`https://www.keralaggtaxitravel.com${pkg.image}`],
            creator: '@goldenglobe',
        },
        alternates: {
            canonical: `/packages/${pkg.id}`,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

// Server Component - Handles SEO and data fetching
export default async function PackagePage({ params }: PackagePageProps) {
    const resolvedParams = await params;
    const pkg = packages.find(p => p.id === resolvedParams.id);

    if (!pkg) {
        notFound();
    }

    // Get similar packages on the server
    const similarPackages = packages
        .filter(p => p.id !== resolvedParams.id && p.category === pkg.category)
        .slice(0, 3);

    // Breadcrumb data for SEO
    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Packages', url: '/packages' },
        { name: pkg.destination, url: `/packages/${pkg.id}` },
    ];

    return (
        <>
            {/* SEO Structured Data */}
            <PackageSchema pkg={pkg} />
            <BreadcrumbSchema items={breadcrumbItems} />

            {/* Client Component for Interactive UI */}
            <PackageDetailsClient pkg={pkg} similarPackages={similarPackages} />
        </>
    );
}
