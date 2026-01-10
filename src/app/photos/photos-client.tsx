'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { photoCategories } from '@/lib/data';

// Photos with real images
const photos = [
    { id: '1', title: 'Swift Dzire - Premium Sedan', category: 'drive-option', image: '/images/vehicle_swift_dzire.png' },
    { id: '2', title: 'Toyota Innova - SUV', category: 'drive-option', image: '/images/vehicle_innova.png' },
    { id: '3', title: 'Maruti Ertiga - MUV', category: 'drive-option', image: '/images/vehicle_ertiga.png' },
    { id: '4', title: 'Sedan Interior - Comfortable', category: 'car-seating', image: '/images/gallery_sedan_interior.png' },
    { id: '5', title: 'SUV Interior - Premium', category: 'car-seating', image: '/images/gallery_suv_interior.png' },
    { id: '6', title: 'MUV Layout - Spacious', category: 'car-seating', image: '/images/vehicle_ertiga.png' },
    { id: '7', title: '4 Seater - Swift Dzire', category: 'capacity', image: '/images/vehicle_swift_dzire.png' },
    { id: '8', title: '7 Seater - Innova', category: 'capacity', image: '/images/vehicle_innova.png' },
    { id: '9', title: '12 Seater - Tempo Traveller', category: 'capacity', image: '/images/vehicle_tempo_traveller.png' },
    { id: '10', title: 'Local Trip Service', category: 'rental-type', image: '/images/service_local_trip.png' },
    { id: '11', title: 'Intercity Travel', category: 'rental-type', image: '/images/service_intercity.png' },
    { id: '12', title: 'City Tour Experience', category: 'rental-type', image: '/images/service_city_tour.png' },
    { id: '13', title: 'Airport Transfer', category: 'rental-type', image: '/images/service_airport_transfer.png' },
    { id: '14', title: 'Munnar Tea Gardens', category: 'destinations', image: '/images/destination_munnar.png' },
    { id: '15', title: 'Alleppey Backwaters', category: 'destinations', image: '/images/destination_alleppey.png' },
    { id: '16', title: 'Kovalam Beach', category: 'destinations', image: '/images/destination_kovalam.png' },
    { id: '17', title: 'Wayanad Wildlife', category: 'destinations', image: '/images/destination_wayanad.png' },
    { id: '18', title: 'Thekkady Periyar', category: 'destinations', image: '/images/destination_thekkady.png' },
    { id: '19', title: 'Fort Kochi Heritage', category: 'destinations', image: '/images/destination_kochi.png' },
    { id: '20', title: 'Kerala Backwaters', category: 'destinations', image: '/images/hero_backwaters.png' },
];

const categoryColors: Record<string, string> = {
    'drive-option': 'from-blue-500/40 to-blue-600/40',
    'car-seating': 'from-purple-500/40 to-purple-600/40',
    'capacity': 'from-green-500/40 to-green-600/40',
    'rental-type': 'from-amber-500/40 to-amber-600/40',
    'destinations': 'from-rose-500/40 to-rose-600/40',
};

export function PhotosPageClient() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

    const filteredPhotos = selectedCategory
        ? photos.filter((photo) => photo.category === selectedCategory)
        : photos;

    const currentIndex = selectedPhoto
        ? filteredPhotos.findIndex((p) => p.id === selectedPhoto.id)
        : -1;

    const goToNext = () => {
        if (currentIndex < filteredPhotos.length - 1) {
            setSelectedPhoto(filteredPhotos[currentIndex + 1]);
        }
    };

    const goToPrev = () => {
        if (currentIndex > 0) {
            setSelectedPhoto(filteredPhotos[currentIndex - 1]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12 pt-8 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                            <Camera className="h-4 w-4" />
                            <span>Visual Gallery</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Photo Gallery</h1>
                        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                            Explore our vehicles, destinations, and the experiences we offer through our gallery.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 bg-white border-b shadow-sm sticky top-[64px] md:top-[104px] z-40">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
                        <Button
                            variant={selectedCategory === null ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedCategory(null)}
                            className={selectedCategory === null ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0' : ''}
                        >
                            All Photos
                        </Button>
                        {photoCategories.map((category) => (
                            <Button
                                key={category.id}
                                variant={selectedCategory === category.id ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setSelectedCategory(category.id)}
                                className={selectedCategory === category.id ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0' : ''}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Grid */}
            <section className="py-8 md:py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-6 text-gray-600 font-medium">
                        Showing {filteredPhotos.length} photos
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {filteredPhotos.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
                                    <img
                                        src={photo.image}
                                        alt={photo.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ZoomIn className="h-8 w-8 md:h-10 md:w-10 text-white drop-shadow-lg" />
                                        </div>
                                    </div>

                                    {/* Title overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                                        <p className="text-white text-xs md:text-sm font-semibold truncate drop-shadow-lg">{photo.title}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
                <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-0">
                    <AnimatePresence mode="wait">
                        {selectedPhoto && (
                            <motion.div
                                key={selectedPhoto.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative"
                            >
                                {/* Close button */}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setSelectedPhoto(null)}
                                    className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                                >
                                    <X className="h-6 w-6" />
                                </Button>

                                {/* Image */}
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={selectedPhoto.image}
                                        alt={selectedPhoto.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Navigation */}
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={goToPrev}
                                        disabled={currentIndex === 0}
                                        className="text-white hover:bg-white/20 ml-2"
                                    >
                                        <ChevronLeft className="h-8 w-8" />
                                    </Button>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={goToNext}
                                        disabled={currentIndex === filteredPhotos.length - 1}
                                        className="text-white hover:bg-white/20 mr-2"
                                    >
                                        <ChevronRight className="h-8 w-8" />
                                    </Button>
                                </div>

                                {/* Info */}
                                <div className="p-4 text-white">
                                    <h3 className="text-xl font-semibold mb-2">{selectedPhoto.title}</h3>
                                    <Badge variant="secondary">
                                        {photoCategories.find((c) => c.id === selectedPhoto.category)?.name}
                                    </Badge>
                                    <p className="text-sm text-white/60 mt-2">
                                        {currentIndex + 1} of {filteredPhotos.length}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </DialogContent>
            </Dialog>
        </div>
    );
}
