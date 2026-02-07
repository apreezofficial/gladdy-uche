"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HoneycombBackground from "@/app/components/ui/bg/HoneycombBackground";
import Confetti from "react-confetti";

export default function YesPage() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);

        // Stop confetti after 10 seconds
        const timer = setTimeout(() => setShowConfetti(false), 10000);

        // Play background music
        const audio = new Audio('/music/perfect.mp3');
        audio.volume = 0.5; // Set to 50% volume
        audio.loop = true; // Loop the song

        // Attempt to play (browsers require user interaction, but the button click counts)
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log("Music started playing");
                })
                .catch((error) => {
                    console.log("Autoplay prevented:", error);
                });
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timer);
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black text-white">
            <HoneycombBackground />

            {/* Confetti Effect */}
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    numberOfPieces={500}
                    recycle={true}
                    colors={['#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#ffffff']}
                />
            )}

            {/* Massive Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/20 blur-[150px] rounded-full pointer-events-none animate-pulse" />

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                className="z-10 flex flex-col items-center text-center space-y-8 px-6 max-w-4xl"
            >
                {/* Celebration Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="inline-flex items-center rounded-full border-2 border-amber-400/50 bg-amber-900/30 px-6 py-2 text-sm text-amber-200 backdrop-blur-md"
                >
                    <span className="mr-2 text-2xl animate-bounce">💍</span>
                    <span className="font-bold tracking-widest uppercase">She Said Yes!</span>
                    <span className="ml-2 text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>❤️</span>
                </motion.div>

                {/* Main Message */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-amber-100 to-amber-400 leading-[1.1] drop-shadow-2xl"
                >
                    I'm So Happy<br />You Said Yes!
                </motion.h1>

                {/* Heartfelt Messages */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="space-y-6 mt-8"
                >
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 }}
                        className="text-2xl md:text-4xl font-medium text-amber-100 leading-relaxed"
                    >
                        I love you more than words can express
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 }}
                        className="text-xl md:text-3xl text-amber-200/80 leading-relaxed font-light"
                    >
                        You just made me the happiest man on earth
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8 }}
                        className="text-lg md:text-2xl text-amber-300/70 leading-relaxed italic"
                    >
                        I can't wait to spend the rest of my life with you
                    </motion.p>
                </motion.div>

                {/* Decorative Hearts */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.8, type: "spring" }}
                    className="flex gap-4 text-6xl mt-12"
                >
                    <motion.span
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        ❤️
                    </motion.span>
                    <motion.span
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, -5, 5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.3
                        }}
                    >
                        💕
                    </motion.span>
                    <motion.span
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.6
                        }}
                    >
                        ❤️
                    </motion.span>
                </motion.div>

                {/* Signature */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="mt-16 pt-8 border-t border-amber-500/20"
                >
                    <p className="text-amber-200/60 text-lg font-light tracking-wider">
                        Forever Yours,
                    </p>
                    <p className="text-amber-100 text-3xl font-bold mt-2 tracking-wide">
                        Uchenna
                    </p>
                </motion.div>
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}