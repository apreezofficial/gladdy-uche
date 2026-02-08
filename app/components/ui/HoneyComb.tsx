"use client";

import React, { useState, useEffect } from "react";
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
// ----------------------------------------------------------------------
// Types & Interfaces
// ----------------------------------------------------------------------
export interface HoneycombItem {
    id: string | number;
    content: string; // The text or image url
    type: "text" | "image";
    title?: string; // Optional title for text items
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
                            <div className="p-4 text-center group/text">
                                <p className="text-amber-200 text-[10px] md:text-sm font-medium leading-relaxed font-sans line-clamp-3 group-hover/text:text-amber-100 transition-colors">
                                    {item.content}
                                </p>
                                <div className="mt-1 opacity-0 group-hover/text:opacity-40 transition-opacity text-[8px] uppercase tracking-widest text-amber-500">
                                    Read more
                                </div>
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
    item: HoneycombItem;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 backdrop-blur-[40px] select-none"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative w-full h-full flex items-center justify-center p-6 md:p-12"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center">
                    {item.type === 'image' ? (
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={item.content}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-full flex items-center justify-center"
                                >
                                    <Image
                                        src={item.content}
                                        alt="Memory Lightbox"
                                        fill
                                        className="object-contain pointer-events-none shadow-2xl rounded-lg"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center space-y-12 max-w-3xl"
                        >
                            <div className="w-20 h-[1px] bg-amber-500/50 mx-auto" />
                            <h2 className="text-3xl md:text-5xl font-serif text-amber-50 leading-relaxed tracking-tight italic">
                                "{item.content}"
                            </h2>
                            <div className="w-20 h-[1px] bg-amber-500/50 mx-auto" />
                            <p className="text-amber-500/40 text-xs uppercase tracking-[0.4em] font-medium">
                                A Fragment of Us
                            </p>
                        </motion.div>
                    )}
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-white/40 hover:text-white transition-all p-4 hover:bg-white/5 rounded-full z-10 border border-white/5 hover:border-white/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>

                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
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
    onAllViewed?: () => void;
    onLightboxClose?: () => void; // NEW: Callback when lightbox is closed
    forceRevealed?: boolean;
}

const HoneycombGrid: React.FC<GridProps> = ({ items, onFinish, onAllViewed, onLightboxClose, forceRevealed = false }) => {
    const [revealedIds, setRevealedIds] = useState<Set<string | number>>(new Set());
    const [selectedItemId, setSelectedItemId] = useState<string | number | null>(null);
    const [viewedIndices, setViewedIndices] = useState<Set<number>>(new Set());

    // Filter items for the "gallery" sequence (could be all items now that text has UX)
    // But user specifically said "after i click the last imae", so maybe we stick to images for the trigger
    const imageItems = items.filter(it => it.type === "image");

    const handleHexClick = (id: string | number) => {
        const item = items.find(it => it.id === id);
        const isImage = item?.type === "image";

        if (revealedIds.has(id) || forceRevealed) {
            setSelectedItemId(id);
            if (isImage) {
                const index = imageItems.findIndex(it => it.id === id);
                markAsViewed(index);
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

    const markAsViewed = (index: number) => {
        setViewedIndices(prev => {
            const next = new Set(prev);
            next.add(index);
            // Check if all are viewed immediately when the last one is opened
            if (next.size === imageItems.length) {
                if (onAllViewed) onAllViewed();
            }
            return next;
        });
    };

    const selectedItem = items.find(it => it.id === selectedItemId);

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
                            revealed={forceRevealed || revealedIds.has(item.id)}
                            onClick={handleHexClick}
                        />
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <Lightbox
                        item={selectedItem}
                        onClose={() => {
                            setSelectedItemId(null);
                            if (onLightboxClose) onLightboxClose();
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default HoneycombGrid;
