'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Package } from '@/types';

interface PackageCardProps {
    package_: Package;
    index?: number;
}

export function PackageCard({ package_: pkg, index = 0 }: PackageCardProps) {
    const discount = pkg.originalPrice
        ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
        : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="h-full"
        >
            <Link href={`/packages/${pkg.id}`} className="block h-full">
                <div className="h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    {/* Image Container */}
                    <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
                        <img
                            src={pkg.image}
                            alt={pkg.destination}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                            <div className="flex gap-2">
                                {pkg.featured && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                        <Sparkles className="h-3 w-3" />
                                        Featured
                                    </span>
                                )}
                                {discount > 0 && (
                                    <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                        {discount}% OFF
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Bottom Content on Image */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-lg">
                                {pkg.destination}
                            </h3>
                            <div className="flex items-center gap-3 text-white/90 text-sm">
                                <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {pkg.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    4.8
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        {/* Package Name */}
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                            {pkg.name}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                            {pkg.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {pkg.highlights.slice(0, 3).map((highlight) => (
                                <span
                                    key={highlight}
                                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                                >
                                    {highlight}
                                </span>
                            ))}
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div>
                                <p className="text-xs text-gray-400 mb-0.5">Starting from</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl font-bold text-emerald-600">
                                        ₹{pkg.price.toLocaleString()}
                                    </span>
                                    {pkg.originalPrice && (
                                        <span className="text-sm text-gray-400 line-through">
                                            ₹{pkg.originalPrice.toLocaleString()}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <Button
                                size="sm"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-4 h-9 group-hover:shadow-md transition-all"
                            >
                                Book Now
                                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
