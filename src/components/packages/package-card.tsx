'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, MapPin, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
            transition={{ delay: index * 0.1 }}
        >
            <Card className="group overflow-hidden hover-lift border-0 shadow-md">
                {/* Image */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                    {/* Actual destination image */}
                    <img
                        src={pkg.image}
                        alt={pkg.destination}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                        {pkg.featured && (
                            <Badge className="gradient-accent text-foreground border-0 shadow-md">
                                <Sparkles className="h-3 w-3 mr-1" />
                                Featured
                            </Badge>
                        )}
                        {discount > 0 && (
                            <Badge className="bg-red-500 text-white border-0 shadow-md">
                                {discount}% OFF
                            </Badge>
                        )}
                    </div>

                    {/* Destination name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <h3 className="text-xl font-bold text-white">{pkg.destination}</h3>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" className="shadow-lg">
                            View Details
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <CardContent className="p-4">
                    <h4 className="font-semibold text-base line-clamp-1 mb-2">{pkg.name}</h4>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            4.8
                        </span>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {pkg.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {pkg.highlights.slice(0, 3).map((highlight) => (
                            <Badge key={highlight} variant="secondary" className="text-xs font-normal">
                                {highlight}
                            </Badge>
                        ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-end justify-between pt-3 border-t">
                        <div>
                            <span className="text-xs text-muted-foreground">Starting from</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-foreground">₹{pkg.price.toLocaleString()}</span>
                                {pkg.originalPrice && (
                                    <span className="text-sm text-muted-foreground line-through">
                                        ₹{pkg.originalPrice.toLocaleString()}
                                    </span>
                                )}
                            </div>
                        </div>
                        <Link href={`/packages/${pkg.id}`}>
                            <Button size="sm" className="gradient-primary text-white">
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
