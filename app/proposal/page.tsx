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
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleFinish = () => {
        setAllRevealed(true);
        setIsTransitioning(true);
        // After 5s of revealing everything, move to the question
        setTimeout(() => {
            setShowQuestion(true);
        }, 5000);
    };

    const handleLightboxClose = () => {
        // If everything is revealed, ensure we show the question if they close the lightbox
        if (allRevealed) {
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
                            onLightboxClose={handleLightboxClose}
                            forceRevealed={allRevealed}
                        />

                        <motion.p
                            className="text-amber-200/40 text-sm mt-8 animate-pulse text-center max-w-xs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 1 }}
                        >
                            {isTransitioning
                                ? "One last thing..."
                                : allRevealed
                                    ? "Explore the memories or wait a moment..."
                                    : "Tap to reveal memory fragments..."}
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="proposal"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
                        className="z-20 flex flex-col items-center text-center space-y-12 max-w-4xl px-4"
                    >
                        {/* Glow Effect behind text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />

                        <div className="relative space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm text-amber-200 text-xs font-bold tracking-[0.3em] uppercase mb-4 shadow-[0_0_20px_rgba(245,158,11,0.05)]"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                                The Final Question
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ delay: 0.8, duration: 1.2 }}
                                className="text-6xl md:text-8xl font-serif tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-50 to-amber-500 drop-shadow-2xl leading-[1.05] italic"
                            >
                                {PROPOSAL_MESSAGE}
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.8 }}
                            className="flex flex-col md:flex-row items-center gap-8 mt-12"
                        >
                            <Link
                                className="group relative px-14 py-5 bg-white text-black text-2xl font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
                                href="/proposal/yes"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-white to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative z-10">Yes, Forever</span>
                            </Link>

                            <button
                                onClick={() => {
                                    setShowQuestion(false);
                                    setIsTransitioning(false);
                                }}
                                className="group px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/30 hover:text-white font-medium flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                                Review our story
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
