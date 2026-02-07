"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

// ----------------------------------------------------------------------
// Types & Interfaces
// ----------------------------------------------------------------------
export interface HoneycombItem {
    id: string | number;
    content: string; // The text or image url
    type: "text" | "image";
}

interface HexagonProps {
    item: HoneycombItem;
    revealed: boolean;
    onClick: (id: string | number) => void;
    index: number;
}

// ----------------------------------------------------------------------
// Single Hexagon Component (Honey/Gold Theme)
// ----------------------------------------------------------------------
const HexagonCard: React.FC<HexagonProps> = ({ item, revealed, onClick, index }) => {
    return (
        <div
            className="relative w-32 h-36 md:w-40 md:h-44 flex items-center justify-center cursor-pointer group"
            onClick={() => onClick(item.id)}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="relative w-full h-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
            >
                {/* The Hexagon Shape Wrapper */}
                <div className="absolute inset-0 w-full h-full"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        WebkitClipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}>

                    {/* BACK FACE (REVEALED CONTENT) */}
                    <div className={cn(
                        "absolute inset-0 w-full h-full bg-[#1a0f00] flex items-center justify-center transition-all duration-700",
                        revealed ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}>
                        {item.type === 'image' ? (
                            <div className="relative w-full h-full group/image">
                                <Image
                                    src={item.content}
                                    alt="Memory"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay on Hover for Images */}
                                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors flex items-center justify-center">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="text-white/80"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                                    </motion.div>
                                </div>
                            </div>
                        ) : (
                            <div className="p-4 text-center">
                                <p className="text-amber-100 text-xs md:text-sm font-medium leading-relaxed font-sans">
                                    {item.content}
                                </p>
                            </div>
                        )}
                        {/* Gold Inner Border */}
                        <div className="absolute inset-0 border-[2px] border-amber-500/30 pointer-events-none" />
                    </div>


                    {/* FRONT FACE (HIDDEN STATE) */}
                    <div className={cn(
                        "absolute inset-0 w-full h-full bg-gradient-to-br from-amber-600/20 to-black/80 flex items-center justify-center transition-all duration-700",
                        revealed ? "opacity-0 pointer-events-none" : "opacity-100"
                    )}>
                        {/* Honey Texture Hint */}
                        <div className="absolute inset-0 opacity-40 bg-[url('https://www.organicauthority.com/wp-content/uploads/2024/04/honeycomb-ccflcr-wildxplorer-300x218.jpg')] bg-cover bg-center mix-blend-overlay filter sepia contrast-125" />

                        {/* Glassy Amber Overlay */}
                        <div className="absolute inset-0 bg-amber-500/10 backdrop-blur-[2px]" />

                        {/* Icon */}
                        <span className="text-3xl text-amber-200/60 font-light group-hover:text-amber-100 transition-colors drop-shadow-md">
                            +
                        </span>

                        {/* Gold Border Highlight */}
                        <div className="absolute inset-0 border border-amber-500/20 group-hover:border-amber-400/50 transition-colors" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// ----------------------------------------------------------------------
// Lightbox Component
// ----------------------------------------------------------------------
interface LightboxProps {
    src: string;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
    showNav?: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({ src, onClose, onNext, onPrev, showNav }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-2xl"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                        src={src}
                        alt="Memory Lightbox"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 md:-right-12 text-white/40 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>

                {/* Navigation Buttons */}
                {showNav && (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
                            className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                            className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                        </button>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
};

// ----------------------------------------------------------------------
// Grid Layout
// ----------------------------------------------------------------------
interface GridProps {
    items: HoneycombItem[];
    onFinish?: () => void;
}

const HoneycombGrid: React.FC<GridProps> = ({ items, onFinish }) => {
    const [revealedIds, setRevealedIds] = useState<Set<string | number>>(new Set());
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Get only image items that are revealed for the lightbox
    const imageItems = items.filter(it => it.type === "image");
    const revealedImageItems = imageItems.filter(it => revealedIds.has(it.id));

    const handleHexClick = (id: string | number) => {
        const item = items.find(it => it.id === id);

        if (revealedIds.has(id)) {
            if (item?.type === "image") {
                const index = imageItems.findIndex(it => it.id === id);
                setSelectedImageIndex(index);
            }
            return;
        }

        const newSet = new Set(revealedIds);
        newSet.add(id);
        setRevealedIds(newSet);

        if (newSet.size === items.length && onFinish) {
            onFinish();
        }
    };

    const handleNext = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prev) => (prev! + 1) % imageItems.length);
    };

    const handlePrev = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prev) => (prev! - 1 + imageItems.length) % imageItems.length);
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto py-10 relative z-10 p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 place-items-center">
                {items.map((item, i) => (
                    <div
                        key={item.id}
                        className={cn(
                            "transition-transform duration-500",
                            i % 2 === 1 ? "md:translate-y-8" : ""
                        )}
                    >
                        <HexagonCard
                            item={item}
                            index={i}
                            revealed={revealedIds.has(item.id)}
                            onClick={handleHexClick}
                        />
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <Lightbox
                        src={imageItems[selectedImageIndex].content}
                        onClose={() => setSelectedImageIndex(null)}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        showNav={imageItems.length > 1}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default HoneycombGrid;
