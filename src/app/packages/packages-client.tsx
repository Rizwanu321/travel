'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, MapPin, Package as PackageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { PackageCard } from '@/components/packages/package-card';
import { packages } from '@/lib/data';

const categories = [
    { id: 'all', label: 'All' },
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
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                            <PackageIcon className="h-4 w-4" />
                            <span>{packages.length}+ Curated Packages</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Tour Packages</h1>
                        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                            Explore our handpicked tour packages to the most beautiful destinations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters - Sticky */}
            <section className="py-4 bg-white border-b sticky top-[60px] md:top-[72px] z-40 shadow-sm">
                <div className="container mx-auto px-4">
                    {/* Search */}
                    <div className="flex gap-3 mb-3">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search packages..."
                                className="pl-10 h-11 bg-gray-50 border-gray-200"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    <X className="h-4 w-4 text-gray-400" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category tabs - Horizontal scroll on mobile */}
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-4 px-4">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={selectedCategory === category.id ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setSelectedCategory(category.id)}
                                className={`shrink-0 rounded-full ${selectedCategory === category.id
                                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                        : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {category.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Destinations */}
            <section className="py-4 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4">
                        <span className="text-sm text-gray-500 shrink-0 flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            Popular:
                        </span>
                        {destinations.slice(0, 10).map((destination) => (
                            <Badge
                                key={destination}
                                variant="secondary"
                                className={`cursor-pointer shrink-0 ${searchQuery === destination
                                        ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                onClick={() => setSearchQuery(searchQuery === destination ? '' : destination)}
                            >
                                {destination}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    {/* Results count */}
                    <div className="mb-4 md:mb-6 flex items-center justify-between">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-gray-900">{filteredPackages.length}</span> packages
                        </p>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="text-sm text-emerald-600 hover:underline"
                            >
                                Clear search
                            </button>
                        )}
                    </div>

                    {filteredPackages.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {filteredPackages.map((pkg, index) => (
                                <PackageCard key={pkg.id} package_={pkg} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <PackageIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
                            <p className="text-gray-500 mb-4">
                                Try adjusting your search or filter criteria.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('all');
                                }}
                            >
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
