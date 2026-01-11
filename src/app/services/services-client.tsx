'use client';

import { motion } from 'framer-motion';
import { Car, Users, Fuel, Snowflake, CheckCircle, Phone, MessageCircle, Star, Shield, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { vehicles } from '@/lib/data';
import Link from 'next/link';

const WHATSAPP_NUMBER = '919061883919';

// Service types we offer
const serviceTypes = [
    { name: 'Local Trips', icon: MapPin, description: 'City travel within your locality' },
    { name: 'Intercity', icon: Car, description: 'Travel between cities in comfort' },
    { name: 'Airport Transfer', icon: Car, description: 'Timely airport pickup & drop' },
    { name: 'City Tours', icon: MapPin, description: 'Explore tourist attractions' },
    { name: 'Round Trip', icon: ArrowRight, description: 'Complete journey packages' },
    { name: 'Wedding Cars', icon: Car, description: 'Premium cars for special occasions' },
];

export function ServicesPageClient() {
    const handleBookVehicle = (vehicleName: string, pricePerKm: number) => {
        const message = `🚗 *Vehicle Booking Request*
━━━━━━━━━━━━━━━━━━━━━

🚙 *Vehicle:* ${vehicleName}
💰 *Rate:* ₹${pricePerKm}/km

Hi! I want to book this vehicle. Please share availability and booking details.

━━━━━━━━━━━━━━━━━━━━━
_Sent from Kerala Tours Website_`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    };

    const handleGeneralEnquiry = () => {
        const message = `Hi! I'm looking for taxi/cab services. Please share your available vehicles and rates.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
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
                            <Car className="h-4 w-4" />
                            <span>Premium Taxi Services</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Our Vehicle Fleet</h1>
                        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6">
                            Choose from our range of well-maintained vehicles with experienced drivers for all your travel needs.
                        </p>
                        <Button
                            onClick={handleGeneralEnquiry}
                            className="bg-white text-emerald-600 hover:bg-gray-100 h-12 px-8 text-base rounded-xl"
                        >
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Get Quote on WhatsApp
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-6 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-6 md:gap-12">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-emerald-600">{vehicles.length}+</div>
                            <div className="text-xs md:text-sm text-gray-500">Vehicles</div>
                        </div>
                        <div className="w-px h-10 bg-gray-200" />
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-emerald-600">50+</div>
                            <div className="text-xs md:text-sm text-gray-500">Drivers</div>
                        </div>
                        <div className="w-px h-10 bg-gray-200" />
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-emerald-600">24/7</div>
                            <div className="text-xs md:text-sm text-gray-500">Available</div>
                        </div>
                        <div className="w-px h-10 bg-gray-200" />
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-emerald-600">4.9</div>
                            <div className="text-xs md:text-sm text-gray-500">Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Types Quick View */}
            <section className="py-8 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {serviceTypes.map((service, index) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-colors cursor-pointer">
                                    <service.icon className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm font-medium text-gray-700">{service.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Fleet */}
            <section className="py-8 md:py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Choose Your Vehicle
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            All vehicles come with experienced drivers. Select based on your group size and comfort preference.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {vehicles.map((vehicle, index) => (
                            <motion.div
                                key={vehicle.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all bg-white group">
                                    {/* Vehicle Image */}
                                    <div className="relative h-40 md:h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                                        <img
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* AC Badge */}
                                        <div className="absolute top-3 left-3">
                                            <Badge className={vehicle.type === 'AC' ? 'bg-blue-500 text-white border-0 shadow' : 'bg-gray-500 text-white border-0 shadow'}>
                                                {vehicle.type === 'AC' && <Snowflake className="h-3 w-3 mr-1" />}
                                                {vehicle.type}
                                            </Badge>
                                        </div>
                                        {/* Rating */}
                                        <div className="absolute top-3 right-3">
                                            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow">
                                                <Star className="h-3 w-3 text-amber-400 fill-current" />
                                                <span className="text-xs font-bold text-gray-900">4.9</span>
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="p-4">
                                        {/* Vehicle Name */}
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{vehicle.name}</h3>

                                        {/* Price */}
                                        <div className="flex items-baseline gap-1 mb-3">
                                            <span className="text-2xl font-bold text-emerald-600">₹{vehicle.pricePerKm}</span>
                                            <span className="text-sm text-gray-500">/km</span>
                                        </div>

                                        {/* Specs */}
                                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                            <span className="flex items-center gap-1.5">
                                                <Users className="h-4 w-4 text-gray-400" />
                                                {vehicle.seatingCapacity} seats
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Fuel className="h-4 w-4 text-gray-400" />
                                                Petrol/Diesel
                                            </span>
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {vehicle.features.slice(0, 3).map((feature) => (
                                                <span key={feature} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full">
                                                    <CheckCircle className="h-3 w-3 text-emerald-500" />
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Book Button */}
                                        <Button
                                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-11 rounded-xl"
                                            onClick={() => handleBookVehicle(vehicle.name, vehicle.pricePerKm)}
                                        >
                                            <MessageCircle className="h-4 w-4 mr-2" />
                                            Book Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-10 md:py-14 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                            Why Choose Kerala Tours?
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto">
                            Trusted by thousands of travelers across Kerala
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                            <Car className="h-8 w-8 mx-auto mb-3" />
                            <div className="text-2xl md:text-3xl font-bold">50+</div>
                            <div className="text-sm text-white/80">Well-Maintained Vehicles</div>
                        </div>
                        <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                            <Users className="h-8 w-8 mx-auto mb-3" />
                            <div className="text-2xl md:text-3xl font-bold">5000+</div>
                            <div className="text-sm text-white/80">Happy Customers</div>
                        </div>
                        <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                            <Shield className="h-8 w-8 mx-auto mb-3" />
                            <div className="text-2xl md:text-3xl font-bold">10+</div>
                            <div className="text-sm text-white/80">Years Experience</div>
                        </div>
                        <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                            <Clock className="h-8 w-8 mx-auto mb-3" />
                            <div className="text-2xl md:text-3xl font-bold">24/7</div>
                            <div className="text-sm text-white/80">Customer Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Ready to Book Your Ride?
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                            Contact us now and get the best rates for your travel needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                onClick={handleGeneralEnquiry}
                                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-12 px-8 text-base rounded-xl"
                            >
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Book via WhatsApp
                            </Button>
                            <Button
                                onClick={() => window.location.href = 'tel:+919061883919'}
                                variant="outline"
                                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 h-12 px-8 text-base rounded-xl"
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
