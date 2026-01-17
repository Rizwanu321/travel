import { MetadataRoute } from 'next';
import { packages } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://keralatravel.vercel.app';

    // Static pages with proper priorities
    const staticPages = [
        { url: '', priority: 1.0, changeFrequency: 'daily' as const },
        { url: '/packages', priority: 0.9, changeFrequency: 'daily' as const },
        { url: '/services', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/categories', priority: 0.7, changeFrequency: 'weekly' as const },
        { url: '/reviews', priority: 0.8, changeFrequency: 'daily' as const },
        { url: '/photos', priority: 0.6, changeFrequency: 'weekly' as const },
        { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    ];

    const staticRoutes = staticPages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    // Dynamic package routes - higher priority for featured packages
    const packageRoutes = packages.map((pkg) => ({
        url: `${baseUrl}/packages/${pkg.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: pkg.featured ? 0.9 : 0.7,
    }));

    return [...staticRoutes, ...packageRoutes];
}
