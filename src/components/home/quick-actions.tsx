'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Share2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/data';

const quickActions = [
    {
        id: 'call',
        label: 'Call Now',
        icon: Phone,
        href: `tel:${contactInfo.phone}`,
        color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
        id: 'enquire',
        label: 'Enquire Now',
        icon: MessageCircle,
        href: '#enquire',
        color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
        id: 'directions',
        label: 'Directions',
        icon: MapPin,
        href: contactInfo.googleMapsUrl,
        target: '_blank',
        color: 'bg-red-500 hover:bg-red-600',
    },
    {
        id: 'share',
        label: 'Share',
        icon: Share2,
        onClick: () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Kerala Tours - Best Travel Agency',
                    text: 'Check out Kerala Tours for amazing travel packages!',
                    url: window.location.href,
                });
            }
        },
        color: 'bg-orange-500 hover:bg-orange-600',
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        icon: MessageSquare,
        href: `https://wa.me/${contactInfo.whatsapp}?text=Hi! I'm interested in booking a cab.`,
        target: '_blank',
        color: 'bg-green-500 hover:bg-green-600',
    },
];

export function QuickActions() {
    return (
        <section className="py-6 bg-background sticky top-[64px] md:top-[104px] z-40 border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide pb-2 -mb-2">
                    {quickActions.map((action, index) => (
                        <motion.div
                            key={action.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {action.href ? (
                                <a
                                    href={action.href}
                                    target={action.target}
                                    rel={action.target === '_blank' ? 'noopener noreferrer' : undefined}
                                >
                                    <Button
                                        variant="ghost"
                                        className={`flex flex-col items-center gap-1.5 h-auto py-3 px-4 min-w-[70px] ${action.color} text-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5`}
                                    >
                                        <action.icon className="h-5 w-5" />
                                        <span className="text-xs font-medium whitespace-nowrap">{action.label}</span>
                                    </Button>
                                </a>
                            ) : (
                                <Button
                                    variant="ghost"
                                    onClick={action.onClick}
                                    className={`flex flex-col items-center gap-1.5 h-auto py-3 px-4 min-w-[70px] ${action.color} text-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5`}
                                >
                                    <action.icon className="h-5 w-5" />
                                    <span className="text-xs font-medium whitespace-nowrap">{action.label}</span>
                                </Button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
