'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { companyInfo, contactInfo } from '@/lib/data';

const contactMethods = [
    {
        icon: Phone,
        title: 'Call Us',
        value: contactInfo.phone,
        href: `tel:${contactInfo.phone}`,
        description: 'Mon-Sun, 24/7',
        color: 'bg-blue-500',
    },
    {
        icon: MessageSquare,
        title: 'WhatsApp',
        value: 'Chat with us',
        href: `https://wa.me/${contactInfo.whatsapp}?text=Hi! I'm interested in booking a cab.`,
        description: 'Quick responses',
        color: 'bg-green-500',
    },
    {
        icon: Mail,
        title: 'Email',
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`,
        description: 'We reply within 2 hours',
        color: 'bg-purple-500',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        value: contactInfo.address,
        href: contactInfo.googleMapsUrl,
        description: 'Get directions',
        color: 'bg-red-500',
    },
];

export function ContactPageClient() {
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
                            <Phone className="h-4 w-4" />
                            <span>Get in Touch</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Have questions? We're here to help. Reach out to us through any of the channels below.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
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
                                <Card className="h-full hover-lift border-0 shadow-md cursor-pointer group">
                                    <CardContent className="p-6 text-center">
                                        <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                            <method.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-lg text-foreground mb-1">
                                            {method.title}
                                        </h3>
                                        <p className="text-primary font-medium mb-1">{method.value}</p>
                                        <p className="text-sm text-muted-foreground">{method.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-12 md:py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6 md:p-8">
                                    <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                                        <Send className="h-6 w-6 text-primary" />
                                        Send us a Message
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>

                                    <form className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Your Name</Label>
                                                <Input id="name" placeholder="Enter your name" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Mobile Number</Label>
                                                <Input id="phone" type="tel" placeholder="Enter your mobile" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input id="email" type="email" placeholder="Enter your email" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input id="subject" placeholder="What is this about?" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell us more about your enquiry..."
                                                rows={4}
                                            />
                                        </div>

                                        <Button size="lg" className="w-full gradient-primary text-white">
                                            <Send className="h-4 w-4 mr-2" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Map and Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Office Image */}
                            <Card className="border-0 shadow-lg overflow-hidden">
                                <div className="h-64 relative overflow-hidden">
                                    <img
                                        src="/images/contact_office.png"
                                        alt="Kerala Tours Office"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <p className="font-medium">{contactInfo.address}</p>
                                        <a
                                            href={contactInfo.googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-primary-foreground text-sm mt-2 hover:underline"
                                        >
                                            <Navigation className="h-4 w-4" />
                                            Open in Google Maps
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            {/* Business Hours */}
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-primary" />
                                        Business Hours
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">Monday - Friday</span>
                                            <span className="font-medium text-foreground">24 Hours</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">Saturday</span>
                                            <span className="font-medium text-foreground">24 Hours</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-muted-foreground">Sunday</span>
                                            <span className="font-medium text-foreground">24 Hours</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                                        <p className="text-sm text-primary font-medium">
                                            We are available 24/7 for your travel needs!
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Company Info */}
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lg text-foreground mb-2">
                                        {companyInfo.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {companyInfo.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {companyInfo.locations.map((location) => (
                                            <span
                                                key={location}
                                                className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm"
                                            >
                                                <MapPin className="h-3 w-3" />
                                                {location}
                                            </span>
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
