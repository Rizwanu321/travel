'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { companyInfo, contactInfo } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
    services: [
        { label: 'Local Trips', href: '/services#local' },
        { label: 'Intercity Travel', href: '/services#intercity' },
        { label: 'Airport Transfer', href: '/services#airport' },
        { label: 'City Tours', href: '/services#city-tour' },
        { label: 'Round Trips', href: '/services#round-trip' },
    ],
    packages: [
        { label: 'Kerala Packages', href: '/packages?category=kerala' },
        { label: 'Goa Packages', href: '/packages?destination=goa' },
        { label: 'Munnar Tours', href: '/packages?destination=munnar' },
        { label: 'Mysore Tours', href: '/packages?destination=mysore' },
        { label: 'All Packages', href: '/packages' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Gallery', href: '/photos' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
    ],
};

const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
];

export function Footer() {
    return (
        <footer className="bg-foreground text-background/90 pb-24 md:pb-8">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                                KT
                            </div>
                            <div>
                                <div className="font-bold text-lg text-background">{companyInfo.name}</div>
                                <div className="text-xs text-background/60">{companyInfo.tagline}</div>
                            </div>
                        </div>
                        <p className="text-sm text-background/70 leading-relaxed">
                            {companyInfo.description.slice(0, 120)}...
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="font-semibold text-background mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-background/70 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Packages Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="font-semibold text-background mb-4">Tour Packages</h3>
                        <ul className="space-y-2">
                            {footerLinks.packages.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-background/70 hover:text-primary transition-colors"
                                    >
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
                        <h3 className="font-semibold text-background mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    className="flex items-start gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                                >
                                    <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                                    <span>{contactInfo.phone}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="flex items-start gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                                >
                                    <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                                    <span>{contactInfo.email}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-background/70">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>{contactInfo.address}</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-background/70">
                                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>Available 24/7</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            <Separator className="bg-background/10" />

            {/* Copyright */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-background/50">
                    <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        {footerLinks.company.slice(3, 5).map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
