'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MapPin,
    Calendar,
    User,
    Phone,
    MessageCircle,
    Car,
    Plane,
    Map,
    Shield,
    Clock,
    Star,
    ArrowRight,
    Sparkles,
    Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { companyInfo } from '@/lib/data';

const WHATSAPP_NUMBER = '917558002009'; // +91 7558002009

// Quick service highlights
const services = [
    { icon: Car, label: 'City Tours' },
    { icon: Plane, label: 'Airport Taxi' },
    { icon: Map, label: 'Round Trips' },
    { icon: Navigation, label: 'Self Drive' },
];

// Trust badges
const trustBadges = [
    { icon: Shield, label: 'Safe & Secure' },
    { icon: Clock, label: '24/7 Available' },
    { icon: Star, label: '5000+ Happy Customers' },
];

export function HeroSection() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        mobile: '',
        pickup: '',
        drop: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

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
        <section className="relative min-h-screen lg:min-h-screen flex items-center overflow-hidden">
            {/* Beautiful Kerala Munnar Background - Original Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero_kerala_munnar.png"
                    alt="Kerala Munnar Tea Plantations - God's Own Country"
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 lg:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            {/* Subtle animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 2 }}
                    className="absolute -top-40 -right-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-emerald-400/20 to-teal-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute -bottom-60 -left-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tr from-emerald-500/15 to-teal-400/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 py-8 pt-20 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white space-y-4 md:space-y-6 lg:space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-full text-xs md:text-sm font-medium border border-emerald-400/30"
                        >
                            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" />
                            <span className="text-emerald-100">Best Travel Agency in Kerala</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                                    Kerala Tours
                                </span>
                                <br />
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white/90 drop-shadow-md">
                                    Taxi Service
                                </span>
                            </h1>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-emerald-100/90 font-light italic drop-shadow-md"
                        >
                            &ldquo;From where you are, to where you want to be&rdquo;
                        </motion.p>

                        {/* Description - Visible on all devices */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed max-w-xl drop-shadow-sm"
                        >
                            We offer <span className="text-emerald-300 font-medium">best cab services at affordable prices</span>.
                            Experience city tours, airport taxi service, round trips, self-drive cars, and more.
                            Get in touch with us or book your cab now!
                        </motion.p>

                        {/* Quick Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-2 md:gap-3"
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all cursor-pointer group"
                                >
                                    <service.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                                    <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-white transition-colors">{service.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Trust Badges - Smaller on mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="hidden md:flex flex-wrap gap-4 lg:gap-6 pt-2 lg:pt-4"
                        >
                            {trustBadges.map((badge) => (
                                <div key={badge.label} className="flex items-center gap-2">
                                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <badge.icon className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-emerald-400" />
                                    </div>
                                    <span className="text-xs lg:text-sm text-white/80">{badge.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Booking Form (User-Friendly White Design) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Soft glow effect */}
                        <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50" />

                        {/* White Card - User Friendly */}
                        <Card className="relative bg-white shadow-2xl overflow-hidden rounded-xl md:rounded-2xl border-0">
                            {/* Card Header */}
                            <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 px-4 md:px-6 py-4 md:py-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center">
                                        <Car className="h-5 w-5 md:h-6 md:w-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg md:text-xl font-bold text-white">
                                            Book Your Cab
                                        </h2>
                                        <p className="text-xs md:text-sm text-white/80">
                                            Quick & Easy Booking
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4 bg-white">
                                {/* Name Field */}
                                <motion.div
                                    className="space-y-1.5 md:space-y-2"
                                    animate={{ scale: focusedField === 'name' ? 1.01 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Label htmlFor="name" className="text-gray-700 text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2">
                                        <User className="h-3.5 w-3.5 md:h-4 md:w-4 text-emerald-600" />
                                        Your Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base transition-all"
                                    />
                                </motion.div>

                                {/* Date Field */}
                                <motion.div
                                    className="space-y-1.5 md:space-y-2"
                                    animate={{ scale: focusedField === 'date' ? 1.01 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Label htmlFor="date" className="text-gray-700 text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2">
                                        <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 text-emerald-600" />
                                        Travel Date
                                    </Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('date')}
                                        onBlur={() => setFocusedField(null)}
                                        className="bg-gray-50 border-gray-200 text-gray-900 focus:border-emerald-500 focus:ring-emerald-500/20 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base transition-all"
                                    />
                                </motion.div>

                                {/* Mobile Field */}
                                <motion.div
                                    className="space-y-1.5 md:space-y-2"
                                    animate={{ scale: focusedField === 'mobile' ? 1.01 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Label htmlFor="mobile" className="text-gray-700 text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2">
                                        <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-emerald-600" />
                                        Mobile Number <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="mobile"
                                        type="tel"
                                        placeholder="Enter your mobile number"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('mobile')}
                                        onBlur={() => setFocusedField(null)}
                                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base transition-all"
                                    />
                                </motion.div>

                                {/* Pickup & Drop in row */}
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    {/* Pickup Field */}
                                    <motion.div
                                        className="space-y-1.5 md:space-y-2"
                                        animate={{ scale: focusedField === 'pickup' ? 1.01 : 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Label htmlFor="pickup" className="text-gray-700 text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2">
                                            <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-600" />
                                            Pickup <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="pickup"
                                            placeholder="From?"
                                            value={formData.pickup}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('pickup')}
                                            onBlur={() => setFocusedField(null)}
                                            className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base transition-all"
                                        />
                                    </motion.div>

                                    {/* Drop Field */}
                                    <motion.div
                                        className="space-y-1.5 md:space-y-2"
                                        animate={{ scale: focusedField === 'drop' ? 1.01 : 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Label htmlFor="drop" className="text-gray-700 text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2">
                                            <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 text-red-500" />
                                            Drop <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="drop"
                                            placeholder="To?"
                                            value={formData.drop}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('drop')}
                                            onBlur={() => setFocusedField(null)}
                                            className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base transition-all"
                                        />
                                    </motion.div>
                                </div>

                                {/* Submit Button */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="pt-1 md:pt-2"
                                >
                                    <Button
                                        size="lg"
                                        onClick={handleBookNow}
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold h-12 md:h-14 text-sm md:text-base rounded-lg md:rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all gap-2 group"
                                    >
                                        <MessageCircle className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                                        {isSubmitting ? 'Opening WhatsApp...' : 'Book via WhatsApp'}
                                        <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>

                                {/* Trust indicators */}
                                <div className="flex items-center justify-center gap-2 md:gap-4 pt-1 md:pt-2 flex-wrap">
                                    <div className="flex items-center gap-1 md:gap-1.5 text-gray-500 text-[10px] md:text-xs">
                                        <Shield className="h-3 w-3 md:h-3.5 md:w-3.5 text-emerald-600" />
                                        <span>No hidden charges</span>
                                    </div>
                                    <div className="flex items-center gap-1 md:gap-1.5 text-gray-500 text-[10px] md:text-xs">
                                        <Clock className="h-3 w-3 md:h-3.5 md:w-3.5 text-emerald-600" />
                                        <span>24/7 Support</span>
                                    </div>
                                    <div className="flex items-center gap-1 md:gap-1.5 text-gray-500 text-[10px] md:text-xs">
                                        <Star className="h-3 w-3 md:h-3.5 md:w-3.5 text-emerald-600" />
                                        <span>Instant confirmation</span>
                                    </div>
                                </div>
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
