'use client';

import { motion } from 'framer-motion';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/data';

export function CTASection() {
    return (
        <section className="py-16 md:py-20 relative overflow-hidden">
            {/* Background Image with overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/cta_adventure.png"
                    alt="Kerala Adventure"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-white max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready for Your Next Adventure?
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                        Book your cab now and experience the best travel services in Kerala.
                        Our team is available 24/7 to assist you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={`tel:${contactInfo.phone}`}>
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 shadow-lg"
                            >
                                <Phone className="h-5 w-5 mr-2" />
                                Call Us Now
                            </Button>
                        </a>
                        <a
                            href={`https://wa.me/${contactInfo.whatsapp}?text=Hi! I'm interested in booking a cab.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8"
                            >
                                <MessageSquare className="h-5 w-5 mr-2" />
                                WhatsApp Us
                            </Button>
                        </a>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70"
                    >
                        <span className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            Free Cancellation
                        </span>
                        <span className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            No Hidden Charges
                        </span>
                        <span className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            24/7 Support
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
