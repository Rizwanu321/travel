'use client';

import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Clock, Shield, Car, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/data';

export function CTASection() {
    const features = [
        { icon: Clock, text: '24/7 Availability' },
        { icon: Shield, text: 'Safe & Reliable' },
        { icon: Car, text: 'All Type of Vehicles' },
        { icon: MapPin, text: 'All Kerala Coverage' },
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            {/* Background Image with gradient overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/cta_adventure.png"
                    alt="Kerala Adventure"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-emerald-800/90 to-teal-900/95" />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-white max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20"
                    >
                        <Sparkles className="h-4 w-4 text-amber-400" />
                        <span>Best Taxi Service in Kerala</span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                        Ready for Your Next
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                            Adventure?
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Book your cab now and experience the best travel services in Kerala.
                        Our team is available 24/7 to assist you with all your travel needs.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.text}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/10"
                            >
                                <feature.icon className="h-4 w-4 text-emerald-300" />
                                <span>{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <a
                            href={`https://wa.me/${contactInfo.whatsapp}?text=Hi! I'm interested in booking a cab.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold h-14 px-8 text-base rounded-xl shadow-lg shadow-emerald-500/30 w-full sm:w-auto"
                            >
                                <MessageSquare className="h-5 w-5 mr-2" />
                                Book via WhatsApp
                            </Button>
                        </a>
                        <a href={`tel:${contactInfo.phone}`}>
                            <Button
                                size="lg"
                                className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold h-14 px-8 text-base rounded-xl shadow-lg w-full sm:w-auto"
                            >
                                <Phone className="h-5 w-5 mr-2" />
                                Call +91 90618 83919
                            </Button>
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-white/70"
                    >
                        <span className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                            Free Cancellation
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                            No Hidden Charges
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                            Instant Confirmation
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
