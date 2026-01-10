'use client';

import { motion } from 'framer-motion';
import { Users, Package, Car, MapPin, Clock, Award } from 'lucide-react';
import { stats } from '@/lib/data';

const statItems = [
    {
        icon: Package,
        value: `${stats.totalPackages}+`,
        label: 'Tour Packages',
        color: 'text-primary',
    },
    {
        icon: Users,
        value: `${(stats.happyCustomers / 1000).toFixed(0)}K+`,
        label: 'Happy Travelers',
        color: 'text-blue-500',
    },
    {
        icon: Clock,
        value: `${stats.yearsExperience}+`,
        label: 'Years Experience',
        color: 'text-amber-500',
    },
    {
        icon: Car,
        value: `${stats.vehiclesAvailable}+`,
        label: 'Vehicles',
        color: 'text-purple-500',
    },
    {
        icon: MapPin,
        value: `${stats.destinations}+`,
        label: 'Destinations',
        color: 'text-red-500',
    },
    {
        icon: Award,
        value: '4.9',
        label: 'Rating',
        color: 'text-green-500',
    },
];

export function StatsSection() {
    return (
        <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {statItems.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-2xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <stat.icon className={`h-8 w-8 md:h-10 md:w-10 mx-auto mb-2 ${stat.color}`} />
                            <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                            <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
