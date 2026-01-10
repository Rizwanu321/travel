'use client';

import { motion } from 'framer-motion';
import { Star, ThumbsUp, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { reviews } from '@/lib/data';

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`h-4 w-4 ${star <= rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-muted text-muted'
                        }`}
                />
            ))}
        </div>
    );
}

export function ReviewsSection() {
    const displayReviews = reviews.slice(0, 4);

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full text-amber-600 text-sm font-medium mb-4">
                        <Star className="h-4 w-4 fill-amber-500" />
                        <span>Customer Love</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What Our Travelers Say
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Real reviews from real travelers who experienced our services across Kerala and beyond.
                    </p>

                    {/* Overall Rating */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="h-6 w-6 fill-amber-400 text-amber-400"
                                />
                            ))}
                        </div>
                        <span className="text-2xl font-bold text-foreground">4.9</span>
                        <span className="text-muted-foreground">(500+ reviews)</span>
                    </div>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {displayReviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full hover-lift border-0 shadow-sm">
                                <CardContent className="p-6">
                                    {/* Quote icon */}
                                    <Quote className="h-8 w-8 text-primary/20 mb-4" />

                                    {/* Rating */}
                                    <StarRating rating={review.rating} />

                                    {/* Comment */}
                                    <p className="text-foreground mt-4 mb-6 leading-relaxed">
                                        &ldquo;{review.comment}&rdquo;
                                    </p>

                                    {/* User info */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                                    {review.userName.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-medium text-foreground">{review.userName}</div>
                                                <div className="text-sm text-muted-foreground">{review.location}</div>
                                            </div>
                                        </div>

                                        {review.helpful && (
                                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                                <ThumbsUp className="h-4 w-4" />
                                                <span>{review.helpful}</span>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Submit Review CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground mb-4">
                        Traveled with us? Share your experience!
                    </p>
                    <a
                        href="/reviews#submit"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-card border rounded-full font-medium text-foreground hover:bg-muted transition-colors"
                    >
                        Write a Review
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
