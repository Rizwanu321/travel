import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://keralatravel.vercel.app';

    // Static pages
    const staticPages = [
        '',
        '/packages',
        '/services',
        '/categories',
        '/photos',
        '/reviews',
        '/contact',
        '/about',
    ];

    // Package IDs - you can add more as needed
    const packageIds = [
        'kerala-1', 'kerala-2', 'kerala-3', 'kerala-4', 'kerala-5',
        'kerala-6', 'kerala-7', 'kerala-8', 'kerala-9', 'kerala-10',
        'goa-1', 'goa-2', 'goa-3', 'goa-4', 'goa-5', 'goa-6', 'goa-7',
        'munnar-1', 'munnar-2', 'munnar-3', 'munnar-4',
        'mysore-1', 'mysore-2', 'mysore-3',
        'bekal-1', 'bekal-2', 'bekal-3', 'bekal-4',
    ];

    const staticRoutes = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const packageRoutes = packageIds.map((id) => ({
        url: `${baseUrl}/packages/${id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...packageRoutes];
}
