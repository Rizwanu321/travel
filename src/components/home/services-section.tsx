'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Route, Building2, Camera, Plane, RotateCcw, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    MapPin,
    Route,
    Building2,
    Camera,
    Plane,
    RotateCcw,
};

export function ServicesSection() {
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-secondary-foreground text-sm font-medium mb-4">
                        <CheckCircle className="h-4 w-4" />
                        <span>What We Offer</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our Services
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From local trips to intercity travel, we provide comprehensive taxi and travel services for all your needs.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || MapPin;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="group h-full hover-lift border-0 shadow-sm hover:shadow-md">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                                <IconComponent className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-foreground mb-2">
                                                    {service.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/services">
                        <Button size="lg" className="gradient-primary text-white group">
                            Explore All Services
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
