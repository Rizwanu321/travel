'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Route, Building2, Camera, Plane, RotateCcw, Car, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    MapPin,
    Route,
    Building2,
    Camera,
    Plane,
    RotateCcw,
    Car,
};

// Service colors - vibrant gradients like the old services page
const serviceColors: Record<string, string> = {
    'Local': 'from-blue-500 to-blue-600',
    'Intercity': 'from-purple-500 to-purple-600',
    'City Tour': 'from-emerald-500 to-teal-600',
    'Site Seeing': 'from-amber-500 to-orange-600',
    'Airport': 'from-rose-500 to-pink-600',
    'Round Trip': 'from-indigo-500 to-violet-600',
};

const WHATSAPP_NUMBER = '917558002009';

export function ServicesSection() {
    const handleEnquiry = (serviceName: string) => {
        const message = `Hi! I'm interested in ${serviceName}. Please share more details.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium mb-4">
                        <Car className="h-4 w-4" />
                        <span>What We Offer</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        Our Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From local trips to intercity travel, we provide comprehensive taxi services for all your needs.
                    </p>
                </motion.div>

                {/* Services Grid - 2 columns on mobile, 3 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || MapPin;
                        const gradientColor = serviceColors[service.type] || 'from-gray-500 to-gray-600';

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all bg-white group">
                                    {/* Image Header with Gradient */}
                                    <div className="relative h-36 md:h-44 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                        {/* Service Badge */}
                                        <div className="absolute top-3 left-3">
                                            <Badge className={`bg-gradient-to-r ${gradientColor} text-white border-0 shadow`}>
                                                {service.type}
                                            </Badge>
                                        </div>

                                        {/* Icon */}
                                        <div className="absolute bottom-3 left-3">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradientColor} flex items-center justify-center shadow-lg`}>
                                                <IconComponent className="h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="p-4 md:p-5">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                                            {service.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {service.description}
                                        </p>

                                        <Button
                                            className={`w-full bg-gradient-to-r ${gradientColor} hover:opacity-90 text-white h-10`}
                                            onClick={() => handleEnquiry(service.name)}
                                        >
                                            <MessageCircle className="h-4 w-4 mr-2" />
                                            Enquire Now
                                        </Button>
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
                    className="text-center mt-8 md:mt-12"
                >
                    <Link href="/services">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white group h-12 md:h-14 px-8 md:px-10 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                            <Car className="h-5 w-5 mr-2" />
                            View Our Vehicles
                            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
