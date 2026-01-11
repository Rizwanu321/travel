'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowLeft,
    Star,
    MapPin,
    Check,
    Phone,
    MessageCircle,
    Users,
    Shield,
    Award,
    Car,
    Coffee,
    Utensils,
    Home,
    Camera,
    Share2,
    Heart,
    Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { packages, contactInfo } from '@/lib/data';

const WHATSAPP_NUMBER = '919061883919';

export default function PackageDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const packageId = params.id as string;

    const pkg = packages.find(p => p.id === packageId);

    // Get similar packages
    const similarPackages = packages
        .filter(p => p.id !== packageId && p.category === pkg?.category)
        .slice(0, 3);

    if (!pkg) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-10 w-10 text-gray-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Package Not Found</h1>
                    <p className="text-gray-500 mb-6">The package you're looking for doesn't exist.</p>
                    <Button
                        onClick={() => router.push('/packages')}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Packages
                    </Button>
                </div>
            </div>
        );
    }

    const handleBookNow = () => {
        const message = `🌴 *Package Enquiry*
━━━━━━━━━━━━━━━━━━━━━

📦 *Package:* ${pkg.name}
📍 *Destination:* ${pkg.destination}

Hi! I'm interested in booking this package. Please share pricing and more details.

━━━━━━━━━━━━━━━━━━━━━
_Sent from Kerala Tours Website_`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    };

    const handleCall = () => {
        window.location.href = `tel:+919061883919`;
    };

    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title: pkg.name,
                text: `Check out this amazing tour package: ${pkg.name}`,
                url: window.location.href,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-24 lg:pb-8">
            {/* Hero Image Section */}
            <div className="relative h-72 sm:h-80 md:h-[400px] lg:h-[450px]">
                <img
                    src={pkg.image}
                    alt={pkg.destination}
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Top Bar */}
                <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
                    <button
                        onClick={() => router.back()}
                        className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div className="flex gap-2">
                        <button
                            onClick={handleShare}
                            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                            <Share2 className="h-5 w-5" />
                        </button>
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                            <Heart className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Badges */}
                <div className="absolute top-16 left-4 flex gap-2">
                    {pkg.featured && (
                        <Badge className="bg-amber-500 text-white border-0 shadow-lg px-3 py-1">
                            ⭐ Featured
                        </Badge>
                    )}
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                            {pkg.destination}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-white/90">
                            <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                4.8 (120 reviews)
                            </span>
                            <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                                <MapPin className="h-4 w-4" />
                                Kerala, India
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-6 md:py-8">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Package Name & Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-5 md:p-6 shadow-sm"
                        >
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                {pkg.name}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {pkg.description}
                            </p>
                        </motion.div>

                        {/* Mobile Booking Card - Shows on Mobile/Tablet, Hidden on Desktop */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="lg:hidden"
                        >
                            <Card className="shadow-lg border-0 overflow-hidden">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white">
                                    <h3 className="text-xl font-bold">Book This Package</h3>
                                    <p className="text-sm text-white/80 mt-1">Contact us for best prices</p>
                                </div>

                                <CardContent className="p-4">
                                    {/* Quick Info Grid */}
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                                            <Star className="h-5 w-5 text-amber-500 mx-auto mb-1" />
                                            <p className="text-xs text-gray-500">Rating</p>
                                            <p className="text-sm font-semibold text-gray-900">4.8 ★</p>
                                        </div>
                                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                                            <MapPin className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                                            <p className="text-xs text-gray-500">Destination</p>
                                            <p className="text-sm font-semibold text-gray-900">{pkg.destination}</p>
                                        </div>
                                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                                            <Users className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                                            <p className="text-xs text-gray-500">Group</p>
                                            <p className="text-sm font-semibold text-gray-900">2-6 pax</p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3">
                                        <Button
                                            onClick={handleBookNow}
                                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-12 rounded-xl shadow-lg"
                                        >
                                            <MessageCircle className="h-5 w-5 mr-2" />
                                            Book via WhatsApp
                                        </Button>
                                        <Button
                                            onClick={handleCall}
                                            variant="outline"
                                            className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 h-12 rounded-xl"
                                        >
                                            <Phone className="h-5 w-5 mr-2" />
                                            Call +91 90618 83919
                                        </Button>
                                    </div>

                                    {/* Trust Badges */}
                                    <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                                            <Shield className="h-4 w-4 text-emerald-600" />
                                            <span>Secure</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                                            <Award className="h-4 w-4 text-emerald-600" />
                                            <span>Best Price</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                                            <Clock className="h-4 w-4 text-emerald-600" />
                                            <span>24/7 Support</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-5 md:p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Camera className="h-5 w-5 text-emerald-600" />
                                Package Highlights
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {pkg.highlights.map((highlight, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl"
                                    >
                                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                                            <Check className="h-4 w-4 text-emerald-600" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* What's Included */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-5 md:p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Check className="h-5 w-5 text-emerald-600" />
                                What's Included
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Car className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">AC Vehicle</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Users className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Expert Driver</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Coffee className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Refreshments</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Why Choose Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-5 md:p-6 text-white"
                        >
                            <h3 className="text-lg font-bold mb-4">Why Choose Kerala Tours?</h3>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-3xl font-bold">5000+</div>
                                    <div className="text-sm text-white/80">Happy Customers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">10+</div>
                                    <div className="text-sm text-white/80">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">4.9</div>
                                    <div className="text-sm text-white/80">Rating</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Similar Packages */}
                        {similarPackages.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Packages</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {similarPackages.map((similar) => (
                                        <Link key={similar.id} href={`/packages/${similar.id}`}>
                                            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                                <div className="relative h-32">
                                                    <img
                                                        src={similar.image}
                                                        alt={similar.destination}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                    <div className="absolute bottom-2 left-2 text-white">
                                                        <div className="font-bold">{similar.destination}</div>
                                                        <div className="text-xs text-white/80 flex items-center gap-1"><Star className="h-3 w-3 fill-amber-400 text-amber-400" /> 4.8</div>
                                                    </div>
                                                </div>
                                                <div className="p-3">
                                                    <div className="text-emerald-600 font-semibold text-sm">View Details →</div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Booking Card - Sticky on Desktop */}
                    <div className="lg:col-span-1 hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="sticky top-24"
                        >
                            <Card className="shadow-xl border-0 overflow-hidden">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5 text-white">
                                    <h3 className="text-2xl font-bold">Book This Package</h3>
                                    <p className="text-sm text-white/80 mt-1">Contact us for best prices</p>
                                </div>

                                <CardContent className="p-5">
                                    {/* Quick Info */}
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                                <Star className="h-5 w-5 text-amber-600" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">Rating</p>
                                                <p className="font-medium text-gray-900">4.8 ★ (120 reviews)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <MapPin className="h-5 w-5 text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">Destination</p>
                                                <p className="font-medium text-gray-900">{pkg.destination}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <Users className="h-5 w-5 text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">Group Size</p>
                                                <p className="font-medium text-gray-900">2-6 Travelers</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3">
                                        <Button
                                            onClick={handleBookNow}
                                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-14 rounded-xl shadow-lg text-base"
                                        >
                                            <MessageCircle className="h-5 w-5 mr-2" />
                                            Book via WhatsApp
                                        </Button>
                                        <Button
                                            onClick={handleCall}
                                            variant="outline"
                                            className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 h-14 rounded-xl text-base"
                                        >
                                            <Phone className="h-5 w-5 mr-2" />
                                            Call +91 90618 83919
                                        </Button>
                                    </div>

                                    {/* Trust Badges */}
                                    <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                                            <Shield className="h-4 w-4 text-emerald-600" />
                                            <span>Secure</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                                            <Award className="h-4 w-4 text-emerald-600" />
                                            <span>Best Price</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                                            <Clock className="h-4 w-4 text-emerald-600" />
                                            <span>24/7 Support</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Book Button - Mobile Only */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50 safe-area-inset-bottom">
                <div className="flex items-center gap-3 p-4">
                    <div className="flex-1">
                        <p className="font-semibold text-gray-900 line-clamp-1">{pkg.name}</p>
                        <p className="text-xs text-gray-500">Contact us for best prices</p>
                    </div>
                    <Button
                        onClick={handleBookNow}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-12 px-6 rounded-xl shadow-lg"
                    >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
