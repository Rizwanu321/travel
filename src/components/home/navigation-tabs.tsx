'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Home,
    Package,
    Star,
    Car,
    Image,
    Grid3X3,
    ChevronRight
} from 'lucide-react';

const navTabs = [
    { id: 'overview', label: 'Overview', icon: Home, href: '#overview' },
    { id: 'packages', label: 'Tour Packages', icon: Package, href: '#packages' },
    { id: 'services', label: 'Services', icon: Car, href: '#services' },
    { id: 'categories', label: 'Categories', icon: Grid3X3, href: '#categories' },
    { id: 'photos', label: 'Photos', icon: Image, href: '/photos' },
    { id: 'reviews', label: 'Reviews', icon: Star, href: '#reviews' },
];

export function NavigationTabs() {
    const [activeTab, setActiveTab] = useState('overview');

    const handleTabClick = (tabId: string, href: string) => {
        setActiveTab(tabId);

        // If it's an internal anchor, scroll to it
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                const offset = 150; // Account for sticky header
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section id="overview" className="py-3 md:py-4 bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-3 md:px-4">
                {/* Horizontal scrollable tabs */}
                <div className="flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide pb-1 -mb-1">
                    {navTabs.map((tab, index) => (
                        <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {tab.href.startsWith('/') ? (
                                <a href={tab.href}>
                                    <button
                                        className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id
                                                ? 'bg-emerald-600 text-white shadow-md'
                                                : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                                            }`}
                                    >
                                        <tab.icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                        <span>{tab.label}</span>
                                    </button>
                                </a>
                            ) : (
                                <button
                                    onClick={() => handleTabClick(tab.id, tab.href)}
                                    className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id
                                            ? 'bg-emerald-600 text-white shadow-md'
                                            : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                                        }`}
                                >
                                    <tab.icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                    <span>{tab.label}</span>
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
