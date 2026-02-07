"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const HoneycombBackground = () => {
    const bgImage = "https://www.organicauthority.com/wp-content/uploads/2024/04/honeycomb-ccflcr-wildxplorer-300x218.jpg";

    return (
        <div className="fixed inset-0 z-0 bg-[#0f0a00]">
            {/* Base Gradient - Rich Dark Honey Theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-950 via-[#2a1a00] to-black" />

            {/* The User's Image as a subtle texture overlay - Warmer now */}
            <div
                className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url('${bgImage}')`,
                    backgroundSize: '300px', // Larger size for abstract feel
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                    filter: "sepia(100%) saturate(200%) hue-rotate(350deg)", // Shift to golden/amber
                }}
            />

            {/* Golden Flows / Glows */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />

            {/* Radial Glow in center - Golden */}
            <div className="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none animate-pulse duration-[8s]" />

            {/* Floating Particles (Dust motes in a sunbeam effect) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-screen" />
        </div>
    );
};

export default HoneycombBackground;
