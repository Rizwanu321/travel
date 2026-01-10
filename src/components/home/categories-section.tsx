'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Car, Package, Palmtree, Grid3X3, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Car,
    Users,
    Package,
    Palmtree,
};

// Category configuration with images and colors
const categoryConfig: Record<string, {
    image: string;
    gradient: string;
    link: string;
    linkText: string;
}> = {
    'car-rental': {
        image: '/images/vehicle_innova.png',
        gradient: 'from-blue-600/20 to-blue-800/40',
        link: '/services',
        linkText: 'View Services',
    },
    'tour-operators': {
        image: '/images/service_city_tour.png',
        gradient: 'from-purple-600/20 to-purple-800/40',
        link: '/services',
        linkText: 'View Services',
    },
    'tour-packages': {
        image: '/images/destination_munnar.png',
        gradient: 'from-emerald-600/20 to-teal-800/40',
        link: '/packages',
        linkText: 'View Packages',
    },
    'holiday-packages': {
        image: '/images/destination_alleppey.png',
        gradient: 'from-amber-500/20 to-orange-700/40',
        link: '/packages',
        linkText: 'View Packages',
    },
};

export function CategoriesSection() {
    return (
        <section className="py-10 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
                        <Grid3X3 className="h-4 w-4" />
                        <span>Browse by Category</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        Our Categories
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find exactly what you need - from car rentals to complete holiday packages.
                    </p>
                </motion.div>

                {/* Categories Grid - 2 columns on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((category, index) => {
                        const IconComponent = iconMap[category.icon] || Package;
                        const config = categoryConfig[category.id] || {
                            image: '/images/destination_munnar.png',
                            gradient: 'from-gray-600/80 to-gray-800/80',
                            link: '/categories',
                            linkText: 'View Options',
                        };

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={config.link}>
                                    <Card className="group h-full hover:shadow-xl transition-all cursor-pointer overflow-hidden border-0 shadow-lg bg-white">
                                        {/* Image Header with Gradient Overlay */}
                                        <div className="h-28 md:h-36 lg:h-40 relative overflow-hidden">
                                            {/* Background Image */}
                                            <img
                                                src={config.image}
                                                alt={category.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`} />

                                            {/* Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                                                    <IconComponent className="h-7 w-7 md:h-8 md:w-8 text-white drop-shadow-lg" />
                                                </div>
                                            </div>

                                            {/* Count Badge */}
                                            <div className="absolute top-2 md:top-3 right-2 md:right-3">
                                                <Badge className="bg-white text-gray-900 border-0 text-xs px-2 py-0.5 font-bold shadow-lg">
                                                    {category.count}+
                                                </Badge>
                                            </div>

                                            {/* Rating Badge */}
                                            <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3">
                                                <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                                                    <Star className="h-3 w-3 text-amber-400 fill-current" />
                                                    <span className="text-xs font-medium text-white">4.9</span>
                                                </div>
                                            </div>
                                        </div>

                                        <CardContent className="p-3 md:p-4">
                                            {/* Title */}
                                            <h3 className="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-2 leading-tight line-clamp-1">
                                                {category.name}
                                            </h3>

                                            {/* Description - hidden on smallest screens */}
                                            <p className="text-xs text-gray-500 mb-2 md:mb-3 line-clamp-2 hidden sm:block">
                                                {category.description}
                                            </p>

                                            {/* CTA Link */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs md:text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
                                                    {config.linkText}
                                                </span>
                                                <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Categories CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-8 md:mt-12"
                >
                    <Link href="/categories">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white group h-12 md:h-14 px-8 md:px-10 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                            <Grid3X3 className="h-5 w-5 mr-2" />
                            View All Categories
                            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
