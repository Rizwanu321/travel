'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PackageCard } from '@/components/packages/package-card';
import { packages } from '@/lib/data';

export function FeaturedPackages() {
    const featuredPackages = packages.filter((pkg) => pkg.featured).slice(0, 6);

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
                        <Sparkles className="h-4 w-4" />
                        <span>Popular Destinations</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Featured Tour Packages
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our most loved destinations with curated packages at affordable prices.
                    </p>
                </motion.div>

                {/* Package Cards - Horizontal scroll on mobile, grid on desktop */}
                <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0">
                        {featuredPackages.map((pkg, index) => (
                            <div
                                key={pkg.id}
                                className="min-w-[300px] sm:min-w-[320px] md:min-w-0 snap-start"
                            >
                                <PackageCard package_={pkg} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 md:mt-12"
                >
                    <Link href="/packages">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-12 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
                        >
                            <Package className="h-5 w-5 mr-2" />
                            View All {packages.length} Packages
                            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
