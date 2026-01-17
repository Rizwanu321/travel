import Link from 'next/link';
import { MapPin, Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Icon */}
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <MapPin className="h-16 w-16 text-emerald-600" />
                </div>

                {/* 404 Text */}
                <h1 className="text-9xl font-bold text-emerald-600 mb-4">404</h1>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Oops! Lost in Kerala?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Quick Links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-12 px-6 rounded-xl shadow-lg"
                    >
                        <Link href="/">
                            <Home className="h-5 w-5 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 h-12 px-6 rounded-xl"
                    >
                        <Link href="/packages">
                            <Search className="h-5 w-5 mr-2" />
                            Browse Packages
                        </Link>
                    </Button>
                </div>

                {/* Helpful Links */}
                <div className="text-sm text-gray-500">
                    <p className="mb-2">Looking for something specific?</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/services" className="text-emerald-600 hover:underline">
                            Our Services
                        </Link>
                        <Link href="/contact" className="text-emerald-600 hover:underline">
                            Contact Us
                        </Link>
                        <Link href="/reviews" className="text-emerald-600 hover:underline">
                            Customer Reviews
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
