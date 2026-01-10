'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Navigation, Star, Shield, CheckCircle, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { companyInfo, contactInfo } from '@/lib/data';

const contactMethods = [
    {
        icon: Phone,
        title: 'Call Us',
        value: contactInfo.phone,
        href: `tel:${contactInfo.phone}`,
        description: 'Talk to our team',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        icon: MessageSquare,
        title: 'WhatsApp',
        value: 'Chat with us',
        href: `https://wa.me/${contactInfo.whatsapp}?text=Hi! I'm interested in booking a cab.`,
        description: 'Quick responses',
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50',
    },
    {
        icon: Mail,
        title: 'Email',
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`,
        description: 'We reply fast',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        value: 'Pattambi, Palakkad',
        href: contactInfo.googleMapsUrl,
        description: 'Get directions',
        color: 'from-red-500 to-red-600',
        bgColor: 'bg-red-50',
    },
];

const features = [
    { icon: Shield, label: 'Safe & Reliable', description: '100% verified drivers' },
    { icon: Clock, label: '24/7 Available', description: 'Anytime, anywhere' },
    { icon: Star, label: '4.9★ Rating', description: '5000+ happy customers' },
    { icon: Users, label: 'Expert Team', description: '10+ years experience' },
];

const WHATSAPP_NUMBER = '917558002009';

export function ContactPageClient() {
    const handleWhatsAppEnquiry = () => {
        const message = `Hi! I'm interested in your taxi services. Please share more details.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                            <Phone className="h-4 w-4" />
                            <span>Get in Touch</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                            Have questions? We're here to help 24/7. Reach out to us through any of the channels below.
                        </p>

                        {/* Quick Contact Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={handleWhatsAppEnquiry}
                                size="lg"
                                className="bg-white text-emerald-600 hover:bg-gray-100 h-14 px-8 text-lg rounded-xl shadow-lg font-semibold"
                            >
                                <MessageSquare className="h-5 w-5 mr-2" />
                                Chat on WhatsApp
                            </Button>
                            <Button
                                onClick={() => window.location.href = `tel:${contactInfo.phone}`}
                                size="lg"
                                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/50 h-14 px-8 text-lg rounded-xl font-semibold"
                            >
                                <Phone className="h-5 w-5 mr-2" />
                                {contactInfo.phone}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Strip */}
            <section className="py-6 bg-white border-b shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm md:text-base">{feature.label}</div>
                                    <div className="text-xs md:text-sm text-gray-500">{feature.description}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            Ways to Reach Us
                        </h2>
                        <p className="text-gray-600">
                            Choose your preferred method of contact
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.title}
                                href={method.href}
                                target={method.title === 'Visit Us' || method.title === 'WhatsApp' ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group overflow-hidden">
                                    <CardContent className="p-6 text-center relative">
                                        {/* Gradient Background Accent */}
                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color}`} />

                                        <div className={`w-16 h-16 rounded-2xl ${method.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                            <method.icon className={`h-8 w-8 bg-gradient-to-r ${method.color} bg-clip-text`} style={{ color: method.color.includes('blue') ? '#3b82f6' : method.color.includes('green') ? '#22c55e' : method.color.includes('purple') ? '#a855f7' : '#ef4444' }} />
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                                            {method.title}
                                        </h3>
                                        <p className="text-emerald-600 font-semibold mb-1">{method.value}</p>
                                        <p className="text-sm text-gray-500">{method.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location & Info Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Side - Location Image & Map */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-0 shadow-xl overflow-hidden h-full">
                                <div className="h-64 md:h-80 relative overflow-hidden">
                                    <img
                                        src="/images/contact_office.png"
                                        alt="Kerala Tours Office"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <Badge className="bg-emerald-500 text-white border-0 mb-3">
                                            Head Office
                                        </Badge>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">{companyInfo.name}</h3>
                                        <p className="text-white/90 mb-3">{contactInfo.address}</p>
                                        <a
                                            href={contactInfo.googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                                        >
                                            <Navigation className="h-4 w-4" />
                                            Open in Google Maps
                                        </a>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-emerald-600" />
                                        Business Hours
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-gray-600">Monday - Friday</span>
                                            <Badge className="bg-emerald-100 text-emerald-700 border-0">24 Hours</Badge>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-gray-600">Saturday</span>
                                            <Badge className="bg-emerald-100 text-emerald-700 border-0">24 Hours</Badge>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-gray-600">Sunday</span>
                                            <Badge className="bg-emerald-100 text-emerald-700 border-0">24 Hours</Badge>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                        <div className="flex items-center gap-2 text-emerald-700 font-medium">
                                            <CheckCircle className="h-5 w-5" />
                                            We are available 24/7 for your travel needs!
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Right Side - Why Choose Us & Quick Booking */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Why Choose Us */}
                            <Card className="border-0 shadow-xl">
                                <CardContent className="p-6 md:p-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                        Why Choose Kerala Tours?
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {companyInfo.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: 'Verified Drivers', icon: Shield },
                                            { label: 'Clean Vehicles', icon: CheckCircle },
                                            { label: '24/7 Support', icon: Clock },
                                            { label: 'Best Prices', icon: Star },
                                        ].map((item) => (
                                            <div key={item.label} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                                                <item.icon className="h-5 w-5 text-emerald-600" />
                                                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Booking CTA */}
                            <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white overflow-hidden">
                                <CardContent className="p-6 md:p-8 relative">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                                    <div className="relative">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                                            Ready to Book Your Ride?
                                        </h3>
                                        <p className="text-white/80 mb-6">
                                            Get instant quotes and book your taxi in minutes via WhatsApp.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Button
                                                onClick={handleWhatsAppEnquiry}
                                                size="lg"
                                                className="bg-white text-emerald-600 hover:bg-gray-100 h-12 px-6 font-semibold rounded-xl flex-1"
                                            >
                                                <MessageSquare className="h-5 w-5 mr-2" />
                                                Book on WhatsApp
                                            </Button>
                                            <Button
                                                onClick={() => window.location.href = `tel:${contactInfo.phone}`}
                                                size="lg"
                                                className="bg-white/20 text-white hover:bg-white/30 border-2 border-white/40 h-12 px-6 font-semibold rounded-xl flex-1"
                                            >
                                                <Phone className="h-5 w-5 mr-2" />
                                                Call Now
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Location Tags */}
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">We Serve All Over Kerala</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Palakkad', 'Pattambi', 'Thrissur', 'Kochi', 'Malappuram', 'Kozhikode', 'Wayanad', 'Munnar', 'Alleppey'].map((location) => (
                                            <Badge
                                                key={location}
                                                variant="secondary"
                                                className="bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 transition-colors cursor-default"
                                            >
                                                <MapPin className="h-3 w-3 mr-1" />
                                                {location}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
