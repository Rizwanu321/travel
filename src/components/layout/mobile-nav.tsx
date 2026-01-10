'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Package, Car, Star, Grid3X3, Phone } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/packages', label: 'Packages', icon: Package },
    { href: '/services', label: 'Services', icon: Car },
    { href: '/reviews', label: 'Reviews', icon: Star },
    { href: '/contact', label: 'Contact', icon: Phone },
];

export function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <div className="glass border-t border-white/20 safe-bottom">
                <div className="flex items-center justify-around py-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative flex flex-col items-center gap-1 px-3 py-2 min-w-[60px]"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="mobile-nav-active"
                                        className="absolute inset-0 bg-primary/10 rounded-2xl"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <item.icon
                                    className={`h-5 w-5 relative z-10 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'
                                        }`}
                                />
                                <span
                                    className={`text-[10px] font-medium relative z-10 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
