'use client';

import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstVisit, setIsFirstVisit] = useState(true);

    // Only run loading animation on initial home page visit
    useEffect(() => {
        if (pathname === '/' && isFirstVisit) {
            // Prevent scrolling details during loading
            document.body.style.overflow = 'hidden';

            const timer = setTimeout(() => {
                setIsLoading(false);
                setIsFirstVisit(false);
                document.body.style.overflow = 'auto'; // Restore scrolling
            }, 2500); // 2.5s duration for the animation

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = 'auto';
            };
        } else {
            setIsLoading(false);
        }
    }, [pathname, isFirstVisit]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && pathname === '/' && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    >
                        <div className="relative flex flex-col items-center justify-center">
                            {/* Glowing Background Effect */}
                            <motion.div
                                className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Logo Animation */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative z-10 w-32 h-32 md:w-48 md:h-48 mb-8"
                            >
                                {/** Use simple img to avoid next/image issues during initial load if any **/}
                                <img
                                    src="/images/logo.png?v=7"
                                    alt="Golden Globe"
                                    className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(251,191,36,0.5)]"
                                />
                            </motion.div>

                            {/* Text Reveal Animation */}
                            <div className="overflow-hidden relative z-10">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                    className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 tracking-tight text-center"
                                >
                                    Golden Globe
                                </motion.h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="mt-2 text-white/60 text-sm md:text-base tracking-[0.2em] uppercase"
                            >
                                Tour Taxi Service
                            </motion.div>

                            {/* Loading Bar */}
                            <motion.div
                                className="mt-12 h-1 w-48 bg-gray-800 rounded-full overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <motion.div
                                    className="h-full bg-gradient-to-r from-amber-400 to-yellow-600"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                                />
                            </motion.div>
                        </div>
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
