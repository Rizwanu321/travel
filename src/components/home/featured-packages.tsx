'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PackageCard } from '@/components/packages/package-card';
import { packages } from '@/lib/data';

export function FeaturedPackages() {
    const featuredPackages = packages.filter((pkg) => pkg.featured).slice(0, 3);

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                        <Sparkles className="h-4 w-4" />
                        <span>Popular Destinations</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Featured Tour Packages
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover our most loved destinations with curated packages that offer the best experiences at affordable prices.
                    </p>
                </motion.div>

                {/* Package Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featuredPackages.map((pkg, index) => (
                        <PackageCard key={pkg.id} package_={pkg} index={index} />
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/packages">
                        <Button size="lg" variant="outline" className="group">
                            View All {packages.length} Packages
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
