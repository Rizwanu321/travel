'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, MapPin, Package as PackageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { PackageCard } from '@/components/packages/package-card';
import { packages } from '@/lib/data';

const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'kerala', label: 'Kerala' },
    { id: 'domestic', label: 'Domestic' },
    { id: 'outside-kerala', label: 'Outside Kerala' },
];

const destinations = [...new Set(packages.map((pkg) => pkg.destination))];

export function PackagesPageClient() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPackages = packages.filter((pkg) => {
        const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
        const matchesSearch =
            pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen">
            {/* Hero Header */}
            <section className="gradient-hero text-white py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                            <PackageIcon className="h-4 w-4" />
                            <span>33+ Curated Packages</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Explore our handpicked tour packages to the most beautiful destinations.
                            From beaches to hills, we have got you covered.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-6 bg-background border-b sticky top-[64px] md:top-[104px] z-40">
                <div className="container mx-auto px-4">
                    {/* Search */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search packages or destinations..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Filter className="h-4 w-4" />
                            Filters
                        </Button>
                    </div>

                    {/* Category tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={selectedCategory === category.id ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setSelectedCategory(category.id)}
                                className={selectedCategory === category.id ? 'gradient-primary text-white' : ''}
                            >
                                {category.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destinations Quick Links */}
            <section className="py-6 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
                        <span className="text-sm text-muted-foreground shrink-0 flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            Popular:
                        </span>
                        {destinations.map((destination) => (
                            <Badge
                                key={destination}
                                variant="secondary"
                                className="cursor-pointer hover:bg-primary/20 transition-colors shrink-0"
                                onClick={() => setSearchQuery(destination)}
                            >
                                {destination}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    {/* Results count */}
                    <div className="mb-6 text-muted-foreground">
                        Showing {filteredPackages.length} packages
                    </div>

                    {filteredPackages.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {filteredPackages.map((pkg, index) => (
                                <PackageCard key={pkg.id} package_={pkg} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <PackageIcon className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                            <h3 className="text-xl font-semibold text-foreground mb-2">No packages found</h3>
                            <p className="text-muted-foreground">
                                Try adjusting your search or filter criteria.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
