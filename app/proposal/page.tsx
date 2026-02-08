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
const PROPOSAL_MESSAGE = "will you be mine officially?";
const MEMORIES: HoneycombItem[] = [
    { id: 1, type: "image", content: "/light-box/Screenshot_20260207-223756.jpg" },
    { id: 2, type: "text", content: "Anytime I am with you" },
    { id: 4, type: "image", content: "/light-box/Screenshot_20260207-223819.jpg" },
    { id: 5, type: "text", content: "There is this feeling" },
    { id: 9, type: "image", content: "/light-box/Screenshot_20260207-224633.jpg" },
    { id: 10, type: "text", content: "That makes me sure that I want to spend the rest of my life with you" },
    { id: 12, type: "image", content: "/light-box/Screenshot_20260207-225120.jpg" },
    { id: 13, type: "text", content: "and I am sure that I want you to be mine not just a situationship any longer but to be mine officially" },
];

export default function ProposalPage() {
    const [allRevealed, setAllRevealed] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);
    const [allViewed, setAllViewed] = useState(false);

    const handleFinish = () => {
        setAllRevealed(true);
    };

    const handleLightboxClose = () => {
        // Only show the question if all images have been viewed and they just closed one
        if (allViewed) {
            setShowQuestion(true);
        }
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

                        <HoneyComb
                            items={MEMORIES}
                            onFinish={handleFinish}
                            onAllViewed={() => setAllViewed(true)}
                            onLightboxClose={handleLightboxClose}
                            forceRevealed={allRevealed}
                        />

                        <motion.p
                            className="text-amber-200/40 text-sm mt-8 animate-pulse text-center max-w-xs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 1 }}
                        >
                            {allRevealed
                                ? "Click all images to unlock the final question..."
                                : "Tap to reveal memory fragments..."}
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

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-500 drop-shadow-2xl leading-[1.1] max-w-2xl">
                                {PROPOSAL_MESSAGE}
                            </h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col items-center gap-6 mt-8"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <Link
                                    className="group relative px-10 py-4 bg-white text-black text-xl font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/20"
                                    href="/proposal/yes"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative">Yes, I Will!</span>
                                </Link>

                                <button
                                    onClick={() => setShowQuestion(false)}
                                    className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/40 hover:text-white font-medium"
                                >
                                    Review Gallery
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
