'use client';

import { motion } from 'framer-motion';
import { MapPin, Route, Building2, Camera, Plane, RotateCcw, Car, Users, Fuel, Snowflake, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { services, vehicles } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    MapPin, Route, Building2, Camera, Plane, RotateCcw,
};

export function ServicesPageClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Header */}
            <section className="gradient-hero text-white py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                            <Car className="h-4 w-4" />
                            <span>Premium Services</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            From local trips to intercity travel, we provide comprehensive taxi and travel services for all your needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Types */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Travel Services
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Choose from our range of travel services designed for every occasion.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => {
                            const IconComponent = iconMap[service.icon] || MapPin;

                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="h-full hover-lift border-0 shadow-md">
                                        <CardContent className="p-6">
                                            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-lg">
                                                <IconComponent className="h-8 w-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                                {service.name}
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                {service.description}
                                            </p>
                                            <Badge variant="secondary">{service.type}</Badge>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Vehicle Fleet */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our Vehicle Fleet
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Choose from our range of well-maintained vehicles to suit your travel needs.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((vehicle, index) => (
                            <motion.div
                                key={vehicle.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="h-full hover-lift border-0 shadow-md overflow-hidden">
                                    {/* Vehicle Image */}
                                    <div className="h-40 overflow-hidden">
                                        <img
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-semibold text-foreground">{vehicle.name}</h3>
                                            <Badge variant={vehicle.type === 'AC' ? 'default' : 'secondary'} className={vehicle.type === 'AC' ? 'bg-blue-500' : ''}>
                                                {vehicle.type === 'AC' && <Snowflake className="h-3 w-3 mr-1" />}
                                                {vehicle.type}
                                            </Badge>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                            <span className="flex items-center gap-1">
                                                <Users className="h-3.5 w-3.5" />
                                                {vehicle.seatingCapacity} seats
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Fuel className="h-3.5 w-3.5" />
                                                ₹{vehicle.pricePerKm}/km
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {vehicle.features.slice(0, 2).map((feature) => (
                                                <span key={feature} className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <CheckCircle className="h-3 w-3 text-primary" />
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <Button size="sm" className="w-full gradient-primary text-white">
                                            Book Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
