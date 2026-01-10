'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, User, Phone, Navigation, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { companyInfo } from '@/lib/data';

const WHATSAPP_NUMBER = '917558002009'; // +91 7558002009

export function HeroSection() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        mobile: '',
        pickup: '',
        drop: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return 'Not specified';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handleBookNow = () => {
        // Validate required fields
        if (!formData.name.trim()) {
            alert('Please enter your name');
            return;
        }
        if (!formData.mobile.trim()) {
            alert('Please enter your mobile number');
            return;
        }
        if (!formData.pickup.trim()) {
            alert('Please enter pickup location');
            return;
        }
        if (!formData.drop.trim()) {
            alert('Please enter drop location');
            return;
        }

        setIsSubmitting(true);

        // Construct the WhatsApp message
        const message = `🚕 *New Cab Booking Request*
━━━━━━━━━━━━━━━━━━━━━

👤 *Customer Name:* ${formData.name}
📱 *Mobile Number:* ${formData.mobile}
📅 *Travel Date:* ${formatDate(formData.date)}

📍 *Pickup Location:* ${formData.pickup}
🎯 *Drop Location:* ${formData.drop}

━━━━━━━━━━━━━━━━━━━━━
_Sent from ${companyInfo.name} Website_`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        setIsSubmitting(false);
    };
    return (
        <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
            {/* Background Image with overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero_kerala_munnar.png"
                    alt="Kerala Tea Plantations"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
            </div>

            {/* Decorative circles */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white space-y-6"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                        >
                            <span className="animate-pulse">🌟</span>
                            <span>Trusted by 5000+ Happy Travelers</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            {companyInfo.name}
                            <span className="block text-white/80 text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
                                {companyInfo.tagline}
                            </span>
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/90 font-light italic"
                        >
                            &ldquo;{companyInfo.slogan}&rdquo;
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl"
                        >
                            {companyInfo.description}
                        </motion.p>

                        {/* Location tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-2"
                        >
                            {companyInfo.locations.map((location, index) => (
                                <span
                                    key={location}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                                >
                                    <MapPin className="h-3 w-3" />
                                    {location}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Card className="glass-dark border-white/20 shadow-2xl overflow-hidden">
                            <div className="bg-white/10 px-6 py-4 border-b border-white/10">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                    <Navigation className="h-5 w-5" />
                                    Book Your Cab Now
                                </h2>
                                <p className="text-sm text-white/70 mt-1">
                                    Quick & Easy Booking
                                </p>
                            </div>
                            <CardContent className="p-6 space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-white/90 text-sm font-medium flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        Your Name
                                    </Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 h-11"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="date" className="text-white/90 text-sm font-medium flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        Travel Date
                                    </Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="bg-white/10 border-white/20 text-white focus:border-white/40 h-11"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="mobile" className="text-white/90 text-sm font-medium flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        Mobile Number
                                    </Label>
                                    <Input
                                        id="mobile"
                                        type="tel"
                                        placeholder="Enter your mobile number"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 h-11"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="pickup" className="text-white/90 text-sm font-medium flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-green-400" />
                                        Pick Up Location
                                    </Label>
                                    <Input
                                        id="pickup"
                                        placeholder="From where?"
                                        value={formData.pickup}
                                        onChange={handleInputChange}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 h-11"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="drop" className="text-white/90 text-sm font-medium flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-red-400" />
                                        Drop Location
                                    </Label>
                                    <Input
                                        id="drop"
                                        placeholder="Where to?"
                                        value={formData.drop}
                                        onChange={handleInputChange}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 h-11"
                                    />
                                </div>

                                <Button
                                    size="lg"
                                    onClick={handleBookNow}
                                    disabled={isSubmitting}
                                    className="w-full gradient-accent text-foreground font-semibold h-12 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 gap-2"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    {isSubmitting ? 'Opening WhatsApp...' : 'Book via WhatsApp'}
                                </Button>

                                <p className="text-center text-xs text-white/50">
                                    No hidden charges • 24/7 Support • Instant confirmation
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        className="fill-background"
                    />
                </svg>
            </div>
        </section>
    );
}
