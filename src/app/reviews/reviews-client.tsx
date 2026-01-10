'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Quote, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { reviews } from '@/lib/data';

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`h-5 w-5 ${star <= rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-muted text-muted'
                        }`}
                />
            ))}
        </div>
    );
}

export function ReviewsPageClient() {
    const [filterLocation, setFilterLocation] = useState<string | null>(null);

    const locations = [...new Set(reviews.map((r) => r.location))];
    const filteredReviews = filterLocation
        ? reviews.filter((r) => r.location === filterLocation)
        : reviews;

    const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

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
                            <Star className="h-4 w-4 fill-white" />
                            <span>Customer Reviews</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Travelers Say</h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                            Real reviews from real travelers who experienced our services across Kerala and beyond.
                        </p>

                        {/* Overall Rating */}
                        <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
                            <div className="text-5xl font-bold mb-2">{avgRating.toFixed(1)}</div>
                            <div className="flex items-center gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-6 w-6 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <div className="text-sm text-white/70">Based on {reviews.length * 100}+ reviews</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Location Filter */}
            <section className="py-6 bg-background border-b sticky top-[64px] md:top-[104px] z-40">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
                        <span className="text-sm text-muted-foreground flex items-center gap-1 shrink-0">
                            <MapPin className="h-4 w-4" />
                            Location:
                        </span>
                        <Button
                            variant={filterLocation === null ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFilterLocation(null)}
                            className={filterLocation === null ? 'gradient-primary text-white' : ''}
                        >
                            All
                        </Button>
                        {locations.map((location) => (
                            <Button
                                key={location}
                                variant={filterLocation === location ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setFilterLocation(location)}
                                className={filterLocation === location ? 'gradient-primary text-white' : ''}
                            >
                                {location}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews List - Full Width Grid */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl font-semibold text-foreground mb-6">
                        {filteredReviews.length} Reviews
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredReviews.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="h-full hover-lift border-0 shadow-sm">
                                    <CardContent className="p-6">
                                        <Quote className="h-8 w-8 text-primary/20 mb-4" />

                                        <StarRating rating={review.rating} />

                                        <p className="text-foreground mt-4 mb-6 leading-relaxed">
                                            &ldquo;{review.comment}&rdquo;
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                                        {review.userName.split(' ').map(n => n[0]).join('')}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-medium text-foreground">{review.userName}</div>
                                                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                                                        <MapPin className="h-3 w-3" />
                                                        {review.location}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                {review.helpful && (
                                                    <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                        <ThumbsUp className="h-4 w-4" />
                                                        <span>{review.helpful}</span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
                                            {new Date(review.date).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
