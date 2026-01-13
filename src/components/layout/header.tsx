'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { companyInfo, contactInfo } from '@/lib/data';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/packages', label: 'Packages' },
    { href: '/services', label: 'Services' },
    { href: '/categories', label: 'Categories' },
    { href: '/photos', label: 'Photos' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top bar with contact info - hidden on mobile */}
            <div className="hidden md:block gradient-primary text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4">
                        <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                            <Phone className="h-3.5 w-3.5" />
                            <span>{contactInfo.phone}</span>
                        </a>
                        <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{companyInfo.locations[2]}, {companyInfo.locations[3]}</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="animate-pulse">🟢</span>
                        <span>Available 24/7</span>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="glass border-b border-white/20 safe-top">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden">
                                <img
                                    src="/images/logo.png?v=7"
                                    alt="Golden Globe Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg text-gradient leading-tight">{companyInfo.name}</span>
                                <span className="text-[10px] text-muted-foreground leading-tight">{companyInfo.tagline}</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full hover:bg-primary/10 transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button
                                className="gradient-primary text-white shadow-lg hover:shadow-xl transition-shadow"
                                onClick={() => {
                                    const message = `Hi! I'd like to book a taxi. Please share available vehicles and rates.`;
                                    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
                                }}
                            >
                                Book Now
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon" className="relative">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <div className="flex flex-col h-full">
                                    {/* Mobile menu header */}
                                    <div className="gradient-primary p-6 text-white">
                                        <div className="flex items-center gap-3">
                                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-md border border-white/10 bg-black/20">
                                                <img
                                                    src="/images/logo.png?v=7"
                                                    alt="Golden Globe Logo"
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">{companyInfo.name}</div>
                                                <div className="text-sm opacity-80">{companyInfo.tagline}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile navigation links */}
                                    <nav className="flex-1 p-4">
                                        <div className="space-y-1">
                                            {navLinks.map((link, index) => (
                                                <motion.div
                                                    key={link.href}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-200"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </nav>

                                    {/* Mobile menu footer */}
                                    <div className="p-4 border-t">
                                        <Button
                                            className="w-full gradient-primary text-white shadow-lg"
                                            size="lg"
                                            onClick={() => {
                                                const message = `Hi! I'd like to book a taxi. Please share available vehicles and rates.`;
                                                window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
                                                setIsOpen(false);
                                            }}
                                        >
                                            Book Now
                                        </Button>
                                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                            <Phone className="h-4 w-4" />
                                            <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">
                                                {contactInfo.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
