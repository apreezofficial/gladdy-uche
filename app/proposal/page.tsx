"use client";

import React, { useState, useEffect } from "react";
import HoneycombBackground from "@/app/components/ui/bg/HoneycombBackground";
import HoneyComb, { HoneycombItem } from "@/app/components/ui/HoneyComb";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

// ----------------------------------------------------------------------
// USER CONFIGURATION (Personalize here)
// ----------------------------------------------------------------------
const PARTNER_NAME = "Gladys";
const PROPOSAL_MESSAGE = "Will You Marry Me?";
const MEMORIES: HoneycombItem[] = [
    { id: 1, type: "image", content: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400&auto=format&fit=crop" },
    { id: 2, type: "image", content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhhEZI8w4qAUhDFEz1JRA8apbHr3z47CrXg&s" },
    { id: 3, type: "image", content: "https://images.unsplash.com/photo-1516589174184-c68526546202?q=80&w=400&auto=format&fit=crop" },
    { id: 4, type: "image", content: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=400&auto=format&fit=crop" },
    { id: 5, type: "image", content: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&auto=format&fit=crop" },
    { id: 6, type: "image", content: "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=400&auto=format&fit=crop" },
    { id: 7, type: "image", content: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=400&auto=format&fit=crop" },
    { id: 8, type: "image", content: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=400&auto=format&fit=crop" },
];

export default function ProposalPage() {
    const router = useRouter();
    const [allRevealed, setAllRevealed] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);

    // If all hexes are revealed, show the question after a short delay
    useEffect(() => {
        if (allRevealed) {
            const timer = setTimeout(() => setShowQuestion(true), 600); // 1.5s delay for effect
            return () => clearTimeout(timer);
        }
    }, [allRevealed]);

    const handleFinish = () => {
        setAllRevealed(true);
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white overflow-hidden font-sans selection:bg-amber-500/30">
            <HoneycombBackground />

            {/* Main Content Area */}
            <AnimatePresence mode="wait">
                {!showQuestion ? (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.8 }}
                        className="z-10 w-full max-w-6xl flex flex-col items-center gap-6"
                    >
                        <div className="text-center space-y-2">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-sm font-medium tracking-[0.2em] text-amber-200/60 uppercase"
                            >
                                The Journey
                            </motion.p>
                            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-amber-50 drop-shadow-sm">
                                For {PARTNER_NAME}
                            </h1>
                        </div>

                        <HoneyComb items={MEMORIES} onFinish={handleFinish} />

                        <motion.p
                            className="text-amber-200/40 text-sm mt-8 animate-pulse"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 1 }}
                        >
                            Tap to reveal memory fragments...
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="proposal"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                        className="z-20 flex flex-col items-center text-center space-y-10 max-w-3xl"
                    >
                        {/* Glow Effect behind text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-medium tracking-wider uppercase mb-4"
                            >
                                One Last Question
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-500 drop-shadow-2xl leading-[1.1]">
                                {PROPOSAL_MESSAGE}
                            </h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex gap-6 mt-8"
                        >
                            <Link
                                className="group relative px-10 py-4 bg-white text-black text-xl font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-2xl shadow-white/20"
                                href="/proposal/yes"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative">Yes, I Will!</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
