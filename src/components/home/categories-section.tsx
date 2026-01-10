'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Car, Package, Palmtree } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Car,
    Users,
    Package,
    Palmtree,
};

export function CategoriesSection() {
    return (
        <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full text-purple-600 text-sm font-medium mb-4">
                        <Package className="h-4 w-4" />
                        <span>Browse by Category</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our Categories
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Find exactly what you need - from car rentals to complete holiday packages.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => {
                        const IconComponent = iconMap[category.icon] || Package;

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/categories/${category.id}`}>
                                    <Card className="group h-full hover-lift border-0 shadow-sm hover:shadow-lg cursor-pointer overflow-hidden">
                                        {/* Category Image Header */}
                                        <div className="h-32 relative overflow-hidden">
                                            {category.image ? (
                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full gradient-primary" />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <IconComponent className="h-7 w-7 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        <CardContent className="p-5 text-center">
                                            <h3 className="font-semibold text-lg text-foreground mb-2">
                                                {category.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                                {category.description}
                                            </p>
                                            <div className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                                                <span>{category.count} options</span>
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
