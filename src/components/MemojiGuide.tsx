"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type MemojiState = 'wave' | 'coffee' | 'laptop' | 'heart' | 'phone' | 'rocket';

interface MemojiGuideProps {
    activeSection: string;
    onStartTour: () => void;
}

const MEMOJI_CONFIG: Record<string, { state: MemojiState; color: string; emoji: string; text: string; image?: string }> = {
    hero: {
        state: 'wave',
        color: 'bg-blue-500',
        emoji: '👋',
        text: "Welcome to my product journey!",
        image: '/wave_emoji.png'
    },
    about: {
        state: 'coffee',
        color: 'bg-green-500',
        emoji: '☕',
        text: "I love turning chaos into structure.",
        image: '/intro.png'
    },
    work: {
        state: 'laptop',
        color: 'bg-purple-500',
        emoji: '💻',
        text: "Here are a few things I built that I'm proud of.",
        image: '/work.png'
    },
    skills: {
        state: 'heart',
        color: 'bg-pink-500',
        emoji: '🔧',
        text: "My technical toolkit and expertise.",
    },
    social: {
        state: 'heart',
        color: 'bg-rose-500',
        emoji: '💖',
        text: "Giving back to the community is part of who I am.",
        image: '/social.png'
    },
    hobbies: {
        state: 'rocket',
        color: 'bg-emerald-500',
        emoji: '🎨',
        text: "Passionate about pixel-perfect designs, eco-friendly choices, and the perfect loaf of sourdough.",
        image: '/hobby.png'
    },
    contact: {
        state: 'phone',
        color: 'bg-orange-500',
        emoji: '📞',
        text: "Let's build the next big thing together. Say hi!",
        image: '/call.png'
    },
    vibecoding: {
        state: 'rocket',
        color: 'bg-yellow-500',
        emoji: '🚀',
        text: "I code too! Check out my projects.",
        image: '/vibe.png'
    },
};

export default function MemojiGuide({ activeSection, onStartTour }: MemojiGuideProps) {
    const [isWelcomeActive, setIsWelcomeActive] = React.useState(true);
    const [isScrollLocked, setIsScrollLocked] = React.useState(true);
    const [isMobile, setIsMobile] = React.useState(false);

    // Check for mobile on mount/resize
    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Helper to dismiss splash and unlock scroll after animation
    const dismissSplash = () => {
        if (!isWelcomeActive) return;
        setIsWelcomeActive(false);
        onStartTour();

        // Keep scroll locked during exit animation (800ms) to absorb momentum
        setTimeout(() => {
            setIsScrollLocked(false);
        }, 800);
    };

    const handleCtaClick = () => {
        dismissSplash();
    };

    // If section changes from hero (user scrolled manually), dismiss welcome
    React.useEffect(() => {
        if (activeSection !== 'hero' && isWelcomeActive) {
            // Even if we auto-dismiss, we should respect the lock timing
            setIsWelcomeActive(false);
            setTimeout(() => setIsScrollLocked(false), 800);
        }
    }, [activeSection, isWelcomeActive]);

    // Intercept scroll to dismiss welcome without scrolling page
    React.useEffect(() => {
        if (!isWelcomeActive) return;

        const handleScrollAttempt = (e: Event) => {
            // Prevent default scroll to stop background movement
            if (e.cancelable) e.preventDefault();
            dismissSplash();
        };

        // Add non-passive listeners to allow preventing default scroll
        window.addEventListener('wheel', handleScrollAttempt, { passive: false });
        window.addEventListener('touchmove', handleScrollAttempt, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScrollAttempt);
            window.removeEventListener('touchmove', handleScrollAttempt);
        };
    }, [isWelcomeActive]);

    // Lock body scroll when locked state is true
    React.useEffect(() => {
        if (isScrollLocked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isScrollLocked]);

    // Config for the persistent guide (based on active section)
    const persistentConfig = MEMOJI_CONFIG[activeSection] || MEMOJI_CONFIG.hero;

    return (
        <>
            {/* 1. Splash Screen Overlay (Centered) */}
            <AnimatePresence>
                {isWelcomeActive && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
                    >
                        <div className="flex flex-col items-center">
                            {/* Splash Bubble */}
                            <div className="mb-6 w-72 rounded-2xl bg-white p-5 text-center text-sm font-medium text-gray-800 shadow-2xl">
                                <p>Hi! I’m Sravya’s Digital Twin. Want a quick tour?</p>
                                <button
                                    onClick={handleCtaClick}
                                    className="mt-3 rounded-full bg-indigo-600 px-6 py-2 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
                                >
                                    Let's Go!
                                </button>
                            </div>

                            {/* Splash Video */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{ width: '300px', height: 'auto' }}
                            >
                                <video
                                    src="/wave.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto object-contain"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. Persistent Guide (Bottom Right/Center) */}
            <AnimatePresence>
                {!isWelcomeActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`fixed z-40 flex flex-col pointer-events-none ${isMobile
                            ? "bottom-4 right-4 items-end"
                            : "bottom-8 right-8 items-end"
                            }`}
                    >
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatType: "mirror"
                            }}
                            className="flex flex-col items-end"
                        >
                            {/* Persistent Bubble */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={persistentConfig.text}
                                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, x: 20 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className={`mb-4 w-64 md:w-72 rounded-2xl bg-white p-4 text-xs font-medium text-gray-800 shadow-xl md:text-sm pointer-events-auto origin-bottom-right ${isMobile ? "text-center mx-auto" : "text-right"
                                        }`}
                                >
                                    {persistentConfig.text}
                                </motion.div>
                            </AnimatePresence>

                            {/* Persistent Memoji Wrapper for Entrance Scale */}
                            <motion.div
                                initial={{ scale: 2 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1], // Custom slow ease out
                                    delay: 0.2
                                }}
                                className={`${isMobile ? "origin-bottom" : "origin-bottom-right"}`}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={persistentConfig.state}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        whileHover={{ scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                        className={`flex items-center justify-center pointer-events-auto overflow-hidden ${persistentConfig.image
                                            ? "bg-transparent"
                                            : `border-4 border-white shadow-2xl rounded-full ${persistentConfig.color}`
                                            }`}
                                        style={{
                                            width: isMobile ? '80px' : '96px',
                                            height: isMobile ? '80px' : '96px',
                                        }}
                                    >
                                        {persistentConfig.image ? (
                                            <img
                                                src={persistentConfig.image}
                                                alt="Memoji"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-4xl md:text-5xl">
                                                {persistentConfig.emoji}
                                            </span>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
