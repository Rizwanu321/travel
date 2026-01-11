'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Car, Users, Package, Palmtree, ArrowRight, Grid3X3, Check, Star, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, packages } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Car, Users, Package, Palmtree,
};

// Category configuration with images and colors (matching home page)
const categoryConfig: Record<string, {
    image: string;
    gradient: string;
    iconBg: string;
    text: string;
}> = {
    'car-rental': {
        image: '/images/vehicle_innova.png',
        gradient: 'from-blue-600/30 to-blue-800/60',
        iconBg: 'bg-blue-100',
        text: 'text-blue-600',
    },
    'tour-operators': {
        image: '/images/service_city_tour.png',
        gradient: 'from-purple-600/30 to-purple-800/60',
        iconBg: 'bg-purple-100',
        text: 'text-purple-600',
    },
    'tour-packages': {
        image: '/images/destination_munnar.png',
        gradient: 'from-emerald-600/30 to-teal-800/60',
        iconBg: 'bg-emerald-100',
        text: 'text-emerald-600',
    },
    'holiday-packages': {
        image: '/images/destination_alleppey.png',
        gradient: 'from-amber-500/30 to-orange-700/60',
        iconBg: 'bg-amber-100',
        text: 'text-amber-600',
    },
};

// Define which page each category should link to
const categoryLinks: Record<string, string> = {
    'car-rental': '/services',
    'tour-operators': '/services',
    'tour-packages': '/packages',
    'holiday-packages': '/packages',
};

const categoryDetails: Record<string, { features: string[]; description: string }> = {
    'car-rental': {
        features: ['Professional drivers', 'Well-maintained vehicles', 'Flexible hours', '24/7 availability', 'AC & Non-AC options', 'Affordable rates'],
        description: 'Hire a car with an experienced driver for any occasion - weddings, tours, airport transfers, and more.',
    },
    'tour-operators': {
        features: ['Experienced guides', 'Customized itineraries', 'Group discounts', 'Local expertise', 'Multi-language support', 'Best deals'],
        description: 'Professional tour operators with years of experience in creating memorable travel experiences.',
    },
    'tour-packages': {
        features: ['All-inclusive packages', 'Best prices guaranteed', 'Hotel bookings included', 'Sightseeing covered', 'Flexible dates', 'No hidden costs'],
        description: 'Curated tour packages covering the best destinations in Kerala and beyond.',
    },
    'holiday-packages': {
        features: ['Festival specials', 'Family packages', 'Honeymoon deals', 'Weekend getaways', 'Adventure trips', 'Luxury options'],
        description: 'Special holiday packages designed for festivals, vacations, and memorable celebrations.',
    },
};

const WHATSAPP_NUMBER = '919061883919';

export function CategoriesPageClient() {
    const handleEnquiry = (categoryName: string) => {
        const message = `Hi! I'm interested in ${categoryName}. Please share more details and available options.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                            <Grid3X3 className="h-4 w-4" />
                            <span>Browse by Category</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Our Categories</h1>
                        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                            Find exactly what you need - from car rentals to complete holiday packages.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-6 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-6 md:gap-12">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-emerald-600">{categories.length}</div>
                            <div className="text-xs md:text-sm text-gray-500">Categories</div>
                        </div>
                        <div className="w-px h-10 bg-gray-200" />
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-emerald-600">{packages.length}+</div>
                            <div className="text-xs md:text-sm text-gray-500">Packages</div>
                        </div>
                        <div className="w-px h-10 bg-gray-200" />
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-emerald-600">4.9</div>
                            <div className="text-xs md:text-sm text-gray-500">Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-8 md:py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {categories.map((category, index) => {
                            const IconComponent = iconMap[category.icon] || Package;
                            const config = categoryConfig[category.id] || {
                                image: '/images/destination_munnar.png',
                                gradient: 'from-gray-600/30 to-gray-800/60',
                                iconBg: 'bg-gray-100',
                                text: 'text-gray-600',
                            };
                            const details = categoryDetails[category.id] || { features: [], description: '' };
                            const linkUrl = categoryLinks[category.id] || '/packages';

                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white group">
                                        {/* Image Header with Gradient Overlay */}
                                        <div className="h-40 md:h-48 relative overflow-hidden">
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
                                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                                                    <IconComponent className="h-10 w-10 md:h-12 md:w-12 text-white drop-shadow-lg" />
                                                </div>
                                            </div>

                                            {/* Count Badge */}
                                            <div className="absolute top-4 right-4">
                                                <Badge className="bg-white text-gray-900 border-0 shadow-lg px-3 py-1 font-bold">
                                                    {category.count}+
                                                </Badge>
                                            </div>

                                            {/* Rating Badge */}
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-amber-500 text-white border-0 shadow-lg px-2 py-1">
                                                    <Star className="h-3 w-3 fill-current mr-1" />
                                                    4.9
                                                </Badge>
                                            </div>
                                        </div>

                                        <CardContent className="p-5 md:p-6">
                                            {/* Title */}
                                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                                {category.name}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-gray-600 text-sm md:text-base mb-4">
                                                {details.description || category.description}
                                            </p>

                                            {/* Features Grid */}
                                            <div className="grid grid-cols-2 gap-2 mb-5">
                                                {details.features.slice(0, 4).map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2">
                                                        <div className={`w-5 h-5 rounded-full ${config.iconBg} flex items-center justify-center shrink-0`}>
                                                            <Check className={`h-3 w-3 ${config.text}`} />
                                                        </div>
                                                        <span className="text-xs md:text-sm text-gray-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-3">
                                                <Link href={linkUrl} className="flex-1">
                                                    <Button className={`w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white group h-11`}>
                                                        {linkUrl === '/services' ? 'View Services' : 'View Packages'}
                                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="outline"
                                                    className="h-11 px-4 border-gray-200 hover:bg-gray-50"
                                                    onClick={() => handleEnquiry(category.name)}
                                                >
                                                    <MessageCircle className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Not sure what you need?
                        </h2>
                        <p className="text-white/80 mb-6 max-w-xl mx-auto">
                            Contact us and our travel experts will help you plan the perfect trip.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                                className="bg-white text-emerald-600 hover:bg-gray-100 h-12 px-8 text-base rounded-xl shadow-lg font-semibold"
                            >
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Chat on WhatsApp
                            </Button>
                            <Button
                                onClick={() => window.location.href = 'tel:+919061883919'}
                                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/50 h-12 px-8 text-base rounded-xl font-semibold"
                            >
                                <Phone className="h-5 w-5 mr-2" />
                                Call +91 90618 83919
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
