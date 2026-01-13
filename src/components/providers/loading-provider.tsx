'use client';

import { Suspense, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export function LoadingScreen({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstVisit, setIsFirstVisit] = useState(true);

    useEffect(() => {
        // Only run on home page and first visit
        if (pathname === '/' && isFirstVisit) {
            document.body.style.overflow = 'hidden';

            const timer = setTimeout(() => {
                setIsLoading(false);
                setIsFirstVisit(false);
                document.body.style.overflow = 'auto';
            }, 3500); // Slightly longer for the full effect

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = 'auto';
            };
        } else {
            setIsLoading(false);
        }
    }, [pathname, isFirstVisit]);

    // Animation variants
    const containerVariants: Variants = {
        exit: {
            y: "-100%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const pathVariants: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            }
        }
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && pathname === '/' && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white"
                        variants={containerVariants}
                        exit="exit"
                    >
                        {/* Background Texture/Accents */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Animated Compass Ring Wrapper */}
                            <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8 flex items-center justify-center">
                                {/* Rotating Outer Ring */}
                                <motion.div
                                    className="absolute inset-0 border border-amber-500/20 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Counter-Rotating Inner Ring */}
                                <motion.div
                                    className="absolute inset-4 border border-amber-500/10 rounded-full border-dashed"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />

                                {/* SVG Compass Drawing Effect */}
                                <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                                    <motion.circle
                                        cx="50"
                                        cy="50"
                                        r="48"
                                        stroke="url(#gradient)"
                                        strokeWidth="1"
                                        fill="none"
                                        variants={pathVariants}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#d97706" /> {/* amber-600 */}
                                            <stop offset="100%" stopColor="#fbbf24" /> {/* amber-400 */}
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Main Logo */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 1, type: "spring" }}
                                    className="w-24 h-24 md:w-32 md:h-32 relative"
                                >
                                    <img
                                        src="/images/logo.png?v=7"
                                        alt="Logo"
                                        className="w-full h-full object-contain drop-shadow-2xl"
                                    />
                                </motion.div>
                            </div>

                            {/* Text Reveal Sequence */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                className="text-center space-y-3"
                            >
                                <motion.h1
                                    variants={textVariants}
                                    transition={{ delay: 1 }}
                                    className="text-2xl md:text-4xl font-light tracking-[0.2em] text-white uppercase"
                                >
                                    Golden <span className="font-bold text-amber-400">Globe</span>
                                </motion.h1>

                                <motion.div
                                    variants={textVariants}
                                    transition={{ delay: 1.3 }}
                                    className="flex items-center justify-center gap-3"
                                >
                                    <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
                                    <span className="text-xs md:text-sm text-gray-400 tracking-widest uppercase">Premium Travel Experience</span>
                                    <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Bottom Progress Line */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-amber-500"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3.5, ease: "easeInOut" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </>
    );
}

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={null}>
            <LoadingScreen>{children}</LoadingScreen>
        </Suspense>
    );
}
