'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, MessageCircle, ArrowRight } from 'lucide-react';
import { companyInfo, contactInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const footerLinks = {
    services: [
        { label: 'Local Trips', href: '/services' },
        { label: 'Intercity Travel', href: '/services' },
        { label: 'Airport Transfer', href: '/services' },
        { label: 'City Tours', href: '/services' },
        { label: 'Round Trips', href: '/services' },
    ],
    packages: [
        { label: 'Kerala Packages', href: '/packages?category=kerala' },
        { label: 'Goa Packages', href: '/packages?category=goa' },
        { label: 'Hill Station Tours', href: '/packages?category=hillstation' },
        { label: 'Beach Holidays', href: '/packages?category=beach' },
        { label: 'All Packages', href: '/packages' },
    ],
    quickLinks: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/contact' },
        { label: 'Photo Gallery', href: '/photos' },
        { label: 'Customer Reviews', href: '/reviews' },
        { label: 'Contact Us', href: '/contact' },
    ],
};

const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Youtube', color: 'hover:bg-red-600' },
];

const WHATSAPP_NUMBER = '919061883919';

export function Footer() {
    const handleWhatsApp = () => {
        const message = `Hi! I'm interested in your taxi services. Please share more details.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <footer className="bg-slate-900 text-white pb-28 md:pb-8">
            {/* Top CTA Strip */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg md:text-xl font-bold">Ready to start your journey?</h3>
                            <p className="text-white/80 text-sm md:text-base">Book your ride now and experience the best service!</p>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                onClick={handleWhatsApp}
                                className="bg-white text-emerald-600 hover:bg-gray-100 h-11 px-6 font-semibold rounded-xl"
                            >
                                <MessageCircle className="h-5 w-5 mr-2" />
                                WhatsApp
                            </Button>
                            <Button
                                onClick={() => window.location.href = `tel:${contactInfo.phone}`}
                                className="bg-white/20 text-white hover:bg-white/30 h-11 px-6 font-semibold rounded-xl border border-white/30"
                            >
                                <Phone className="h-5 w-5 mr-2" />
                                Call Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info - Takes 2 columns on lg */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl shadow-lg border border-white/5">
                                <img
                                    src="/images/logo.png"
                                    alt="Golden Globe Logo"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-xl text-white">{companyInfo.name}</div>
                                <div className="text-sm text-emerald-400">{companyInfo.tagline}</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            {companyInfo.description}
                        </p>

                        {/* Social Links */}
                        <div className="pt-2">
                            <p className="text-sm font-medium text-gray-300 mb-3">Follow us on social media</p>
                            <div className="flex items-center gap-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center ${social.color} hover:text-white transition-all duration-300`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="font-semibold text-white text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1 group"
                                    >
                                        <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Tour Packages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="font-semibold text-white text-lg mb-4">Tour Packages</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.packages.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1 group"
                                    >
                                        <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="font-semibold text-white text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    className="flex items-start gap-3 text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                        <Phone className="h-4 w-4 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Phone</div>
                                        <div className="text-sm font-medium">{contactInfo.phone}</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="flex items-start gap-3 text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                        <Mail className="h-4 w-4 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Email</div>
                                        <div className="text-sm font-medium">{contactInfo.email}</div>
                                    </div>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <MapPin className="h-4 w-4 text-emerald-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Address</div>
                                    <div className="text-sm">{contactInfo.address}</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <Clock className="h-4 w-4 text-emerald-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Hours</div>
                                    <div className="text-sm font-medium text-emerald-400">Available 24/7</div>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                                Contact
                            </Link>
                            <Link href="/reviews" className="hover:text-emerald-400 transition-colors">
                                Reviews
                            </Link>
                            <span className="text-gray-700">|</span>
                            <span className="text-gray-600">Made with ❤️ in Kerala</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
