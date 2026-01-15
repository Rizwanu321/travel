'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Quote, MapPin, Globe, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { reviews } from '@/lib/data';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

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
    const [filterCountry, setFilterCountry] = useState<string>('all');
    const [filterRating, setFilterRating] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('recent');

    // Get unique countries
    const countries = useMemo(() => {
        const uniqueCountries = [...new Set(reviews.map((r) => r.country || 'India'))];
        return uniqueCountries.sort();
    }, []);

    // Filter and sort reviews
    const filteredReviews = useMemo(() => {
        let filtered = reviews;

        // Filter by country
        if (filterCountry !== 'all') {
            filtered = filtered.filter((r) => (r.country || 'India') === filterCountry);
        }

        // Filter by rating
        if (filterRating !== 'all') {
            filtered = filtered.filter((r) => r.rating === parseInt(filterRating));
        }

        // Sort
        if (sortBy === 'recent') {
            filtered = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else if (sortBy === 'helpful') {
            filtered = [...filtered].sort((a, b) => (b.helpful || 0) - (a.helpful || 0));
        } else if (sortBy === 'rating') {
            filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        }

        return filtered;
    }, [filterCountry, filterRating, sortBy]);

    const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

    // Count reviews by country
    const countryStats = useMemo(() => {
        const stats: Record<string, number> = {};
        reviews.forEach((r) => {
            const country = r.country || 'India';
            stats[country] = (stats[country] || 0) + 1;
        });
        return stats;
    }, []);

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
                            <span>Global Customer Reviews</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Travelers Say</h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                            Real reviews from travelers worldwide who experienced Kerala with Golden Globe Tours.
                        </p>

                        {/* Overall Rating */}
                        <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
                            <div className="text-5xl font-bold mb-2">{avgRating.toFixed(1)}</div>
                            <div className="flex items-center gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-6 w-6 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <div className="text-sm text-white/70">Based on {reviews.length} verified reviews</div>
                        </div>

                        {/* International Customers Badge */}
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                                <div className="flex items-center gap-2">
                                    <Globe className="h-5 w-5" />
                                    <div className="text-left">
                                        <div className="text-2xl font-bold">{countries.length}</div>
                                        <div className="text-sm text-white/70">Countries</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                                <div className="text-left">
                                    <div className="text-2xl font-bold">{reviews.filter(r => r.rating === 5).length}</div>
                                    <div className="text-sm text-white/70">5-Star Reviews</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters & Sort */}
            <section className="py-6 bg-background border-b sticky top-[64px] md:top-[104px] z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Filter className="h-4 w-4" />
                            <span className="font-medium">{filteredReviews.length} Reviews</span>
                        </div>

                        <div className="flex flex-wrap gap-3 w-full md:w-auto">
                            {/* Country Filter */}
                            <Select value={filterCountry} onValueChange={setFilterCountry}>
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <Globe className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="All Countries" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Countries ({reviews.length})</SelectItem>
                                    {countries.map((country) => (
                                        <SelectItem key={country} value={country}>
                                            {country} ({countryStats[country]})
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Rating Filter */}
                            <Select value={filterRating} onValueChange={setFilterRating}>
                                <SelectTrigger className="w-full sm:w-[150px]">
                                    <Star className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="All Ratings" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Ratings</SelectItem>
                                    <SelectItem value="5">5 Stars</SelectItem>
                                    <SelectItem value="4">4 Stars</SelectItem>
                                    <SelectItem value="3">3 Stars</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Sort By */}
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-full sm:w-[150px]">
                                    <SelectValue placeholder="Sort By" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="recent">Most Recent</SelectItem>
                                    <SelectItem value="helpful">Most Helpful</SelectItem>
                                    <SelectItem value="rating">Highest Rating</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
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
                                        {/* Country Badge */}
                                        {review.country && (
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                                    <Globe className="h-3 w-3" />
                                                    {review.country}
                                                </span>
                                            </div>
                                        )}

                                        <Quote className="h-8 w-8 text-primary/20 mb-4" />

                                        <StarRating rating={review.rating} />

                                        <p className="text-foreground mt-4 mb-6 leading-relaxed line-clamp-6">
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

                    {filteredReviews.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No reviews found matching your filters.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
