'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BedDouble, Users, MapPin, CheckCircle2, MessageCircle, ArrowRight, Expand, Eye, Coffee, Wifi, Wind, Bath } from 'lucide-react';
import { contactInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';

const roomTypes = [
    {
        id: 'studio',
        label: 'Premium Studio',
        tagline: 'Ideal for Couples',
        maxOccupancy: 2,
        size: '450 sq.ft',
        view: 'Nature / Resort Views',
        description: 'An intimate, luxurious space designed for couples and solo travelers. Features elegant modern decor and a plush king-sized bed.',
        features: ['King Size Bed', 'Air Conditioning', 'En-suite Bathroom'],
        image: '/images/room_studio.png',
        iconColor: 'text-emerald-500',
        iconBg: 'bg-emerald-50'
    },
    {
        id: '1bhk',
        label: '1 BHK Suite',
        tagline: 'Best for Small Families',
        maxOccupancy: 3,
        size: '650 sq.ft',
        view: 'Pool / Garden Views',
        description: 'A spacious suite offering a distinctly separate bedroom and living area. Perfect for unwinding after a long day of Kerala sightseeing.',
        features: ['Private Bedroom', 'Living Area', 'Scenic Balcony'],
        image: '/images/room_1bhk.png',
        iconColor: 'text-teal-500',
        iconBg: 'bg-teal-50'
    },
    {
        id: '2bhk',
        label: '2 BHK Family Stay',
        tagline: 'Perfect for Families',
        maxOccupancy: 6,
        size: '1200 sq.ft',
        view: 'Lake / Mountain Views',
        description: 'Features two elegant bedrooms and a massive shared living hall, giving your family the perfect blend of privacy and togetherness.',
        features: ['Two Bedrooms', 'Spacious Hall', 'Dining Area'],
        image: '/images/room_2bhk.png',
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-50'
    },
    {
        id: '3bhk',
        label: '3 BHK Luxury Villa',
        tagline: 'Ultimate Group Getaway',
        maxOccupancy: 9,
        size: '2000+ sq.ft',
        view: 'Premium Panoramic Views',
        description: 'The pinnacle of group luxury. Book a complete 3 BHK layout featuring massive bedrooms, a sprawling hall, and premium amenities.',
        features: ['Three Bedrooms', 'Massive Living Room', 'Premium Kitchen'],
        image: '/images/room_3bhk.png',
        iconColor: 'text-indigo-500',
        iconBg: 'bg-indigo-50'
    },
];

const availableLocations = [
    'Alleppey', 'Munnar', 'Thekkady', 'Kovalam',
    'Wayanad', 'Kumarakom', 'Kochi', 'Varkala'
];

const globalAmenities = [
    { icon: Wifi, label: 'Free Hi-Speed WiFi' },
    { icon: Coffee, label: 'Complimentary Breakfast' },
    { icon: Wind, label: 'Fully Air-Conditioned' },
    { icon: Bath, label: 'Premium Toiletries' }
];

export function RoomsSection() {
    const handleEnquire = (roomLabel: string) => {
        const message = `🌴 *Room / Stay Enquiry*\n━━━━━━━━━━━━━━━━━━━━━\n\n🛏️ *Room Type:* ${roomLabel}\n📍 *Preferred Location:* _(choose location)_\n📅 *Check-in / Check-out:* _(dates)_\n\nHi! I'm interested in booking a *${roomLabel}*. Please share availability and pricing details.\n\n━━━━━━━━━━━━━━━━━━━━━\n_Sent from Kerala Tours Website_`;
        window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="rooms" className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
                        <BedDouble className="h-4 w-4" />
                        <span>Premium Accommodations</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Find Your Perfect Stay in Kerala
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                        From intimate studios for perfect honeymoons to expansive 3 BHK villas for the whole family. Experience world-class comfort wherever your journey takes you.
                    </p>

                    {/* Global Amenities Strip */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-4xl mx-auto py-6 border-y border-gray-100">
                        {globalAmenities.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                                <item.icon className="w-5 h-5 text-emerald-500" />
                                <span className="text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Locations Marquee */}
                <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto mb-10">
                    <span className="text-sm font-bold text-gray-800 mr-2 flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        Available Across:
                    </span>
                    {availableLocations.map((loc) => (
                        <span key={loc} className="px-3 py-1.5 bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 text-gray-600 text-sm font-medium rounded-lg border border-gray-200 transition-colors cursor-default">
                            {loc}
                        </span>
                    ))}
                    <span className="px-3 py-1.5 bg-gray-900 text-white text-sm font-bold rounded-lg shadow-sm border border-gray-800">
                        + Many More...
                    </span>
                </div>

                {/* Premium Horizontal Cards Layout */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-14">
                    {roomTypes.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col md:flex-row h-full max-h-[1000px] md:max-h-[380px]"
                        >
                            {/* Left Image Section */}
                            <div className="relative w-full md:w-2/5 h-64 md:h-full overflow-hidden shrink-0">
                                <Image
                                    src={room.image}
                                    alt={room.label}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                        {room.tagline}
                                    </span>
                                </div>
                            </div>

                            {/* Right Content Section */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white items-start text-left">
                                <div className="flex justify-between items-start w-full mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                                        {room.label}
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md shrink-0">
                                        <Users className="w-3.5 h-3.5" />
                                        Up to {room.maxOccupancy}
                                    </div>
                                </div>

                                {/* Micro Details */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-4 w-full">
                                    <span className="flex items-center gap-1.5">
                                        <Expand className="w-4 h-4 text-gray-400" /> {room.size}
                                    </span>
                                    <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300" />
                                    <span className="flex items-center gap-1.5">
                                        <Eye className="w-4 h-4 text-gray-400" /> {room.view}
                                    </span>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-3 w-full">
                                    {room.description}
                                </p>

                                <ul className="space-y-2.5 mb-8 flex-grow w-full">
                                    {room.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className={`w-4 h-4 ${room.iconColor} shrink-0`} />
                                            <span className="text-gray-700 font-medium text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className="w-full sm:w-auto bg-gray-900 hover:bg-emerald-600 text-white rounded-xl py-5 px-8 font-semibold shadow-md mt-auto"
                                    onClick={() => handleEnquire(room.label)}
                                >
                                    Check Availability
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 md:mt-12 overflow-hidden rounded-3xl bg-emerald-900 border border-emerald-800 text-white relative shadow-2xl max-w-5xl mx-auto"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-20 blur-[100px] rounded-full pointer-events-none" />
                    
                    <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-center md:text-left max-w-xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif">Need Help Choosing?</h3>
                            <p className="text-emerald-100 text-base md:text-lg">
                                Our booking concierge is standing by. Tell us your group size and destination, and we'll secure the perfect layout for your Kerala trip.
                            </p>
                        </div>
                        
                        <Button
                            size="lg"
                            onClick={() => handleEnquire('Custom Booking')}
                            className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 h-14 px-8 md:px-10 text-base md:text-lg rounded-xl shadow-lg transition-all min-w-[240px]"
                        >
                            <MessageCircle className="h-5 w-5 mr-3" />
                            Plan A Custom Stay
                        </Button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
