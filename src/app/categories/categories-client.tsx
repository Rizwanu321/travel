'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Car, Users, Package, Palmtree, ArrowRight, Grid3X3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { categories } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Car, Users, Package, Palmtree,
};

const categoryDetails: Record<string, { features: string[]; image: string }> = {
    'car-rental': {
        features: ['Professional drivers', 'Well-maintained vehicles', 'Flexible hours', '24/7 availability'],
        image: 'from-blue-500/30 to-blue-600/30',
    },
    'tour-operators': {
        features: ['Experienced guides', 'Customized itineraries', 'Group discounts', 'Local expertise'],
        image: 'from-purple-500/30 to-purple-600/30',
    },
    'tour-packages': {
        features: ['All-inclusive', 'Best prices', 'Hotel bookings', 'Sightseeing included'],
        image: 'from-green-500/30 to-green-600/30',
    },
    'holiday-packages': {
        features: ['Festival specials', 'Family packages', 'Honeymoon deals', 'Weekend getaways'],
        image: 'from-amber-500/30 to-amber-600/30',
    },
};

export function CategoriesPageClient() {
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
                            <Grid3X3 className="h-4 w-4" />
                            <span>Browse by Category</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Categories</h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Find exactly what you need - from car rentals to complete holiday packages.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {categories.map((category, index) => {
                            const IconComponent = iconMap[category.icon] || Package;
                            const details = categoryDetails[category.id] || { features: [], image: 'from-gray-500/30 to-gray-600/30' };

                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="h-full hover-lift border-0 shadow-lg overflow-hidden">
                                        {/* Image header */}
                                        <div className={`h-48 bg-gradient-to-br ${details.image} relative`}>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                    <IconComponent className="h-12 w-12 text-foreground/70" />
                                                </div>
                                            </div>
                                            <div className="absolute top-4 right-4 bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                                                {category.count} options
                                            </div>
                                        </div>

                                        <CardContent className="p-6">
                                            <h2 className="text-2xl font-bold text-foreground mb-2">
                                                {category.name}
                                            </h2>
                                            <p className="text-muted-foreground mb-6">
                                                {category.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid grid-cols-2 gap-3 mb-6">
                                                {details.features.map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>

                                            <Link href={`/packages?category=${category.id}`}>
                                                <Button className="w-full gradient-primary text-white group">
                                                    Explore {category.name}
                                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
