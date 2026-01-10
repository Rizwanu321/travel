'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ThumbsUp, Quote, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { reviews } from '@/lib/data';

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
    const sizes = {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5'
    };

    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`${sizes[size]} ${star <= rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-gray-200 text-gray-200'
                        }`}
                />
            ))}
        </div>
    );
}

// Gradient colors for review cards
const cardGradients = [
    'from-blue-50 to-indigo-50',
    'from-purple-50 to-pink-50',
    'from-emerald-50 to-teal-50',
    'from-amber-50 to-orange-50',
];

export function ReviewsSection() {
    const displayReviews = reviews.slice(0, 4);

    return (
        <section className="py-10 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-4">
                        <Star className="h-4 w-4 fill-amber-500" />
                        <span>Customer Love</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        What Our Travelers Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real reviews from travelers who experienced our services across Kerala.
                    </p>

                    {/* Overall Rating Stats */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-6 md:mt-8">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 bg-amber-100 px-4 py-2 rounded-full">
                                <StarRating rating={5} size="md" />
                                <span className="text-xl font-bold text-gray-900 ml-1">4.9</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                            <span className="text-sm font-medium">500+ Happy Travelers</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Award className="h-5 w-5 text-amber-500" />
                            <span className="text-sm font-medium">Top Rated Service</span>
                        </div>
                    </div>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {displayReviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden bg-gradient-to-br ${cardGradients[index % cardGradients.length]}`}>
                                <CardContent className="p-5 md:p-6">
                                    {/* Header with Avatar and Rating */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                                                <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-sm">
                                                    {review.userName.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-bold text-gray-900">{review.userName}</div>
                                                <div className="text-sm text-gray-500">{review.location}</div>
                                            </div>
                                        </div>
                                        <Badge className="bg-white/80 text-emerald-600 border-0 shadow-sm">
                                            <CheckCircle2 className="h-3 w-3 mr-1" />
                                            Verified
                                        </Badge>
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <StarRating rating={review.rating} size="md" />
                                        <span className="text-sm font-medium text-gray-600">{review.rating}.0</span>
                                    </div>

                                    {/* Quote Icon and Comment */}
                                    <div className="relative">
                                        <Quote className="absolute -top-1 -left-1 h-8 w-8 text-emerald-200 opacity-50" />
                                        <p className="text-gray-700 leading-relaxed pl-6 italic">
                                            &ldquo;{review.comment}&rdquo;
                                        </p>
                                    </div>

                                    {/* Footer - Location and Helpful */}
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200/50">
                                        <Badge variant="secondary" className="bg-white/60 text-gray-600">
                                            {review.location}
                                        </Badge>
                                        {review.helpful && (
                                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                                <ThumbsUp className="h-4 w-4" />
                                                <span>{review.helpful} found helpful</span>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-12"
                >
                    <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 border-0 shadow-xl overflow-hidden">
                        <CardContent className="p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                Join Our Happy Travelers!
                            </h3>
                            <p className="text-white/80 mb-6">
                                Read what our customers have to say about their travel experiences with us.
                            </p>
                            <Link href="/reviews">
                                <Button
                                    size="lg"
                                    className="bg-white text-emerald-600 hover:bg-gray-100 group h-12 px-8"
                                >
                                    View All Reviews
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
