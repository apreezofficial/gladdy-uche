"use client";

import React, { useEffect, useState } from "react";

const Love = () => {
    const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        // Generate random hearts
        const heartCount = 20;
        const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // Random horizontal position
            delay: Math.random() * 5, // Random delay
            duration: 5 + Math.random() * 5, // Random duration between 5-10s
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-pink-50/30">
            {/* Helper CSS for the animation */}
            <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
          }
          20% {
             opacity: 0.8;
          }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }
        .float-heart {
            position: absolute;
            bottom: -20px;
            color: #ec4899; /* pink-500 */
            animation-name: floatUp;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
      `}</style>

            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="float-heart text-4xl opacity-50"
                    style={{
                        left: `${heart.left}%`,
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`,
                    }}
                >
                    ❤️
                </div>
            ))}
        </div>
    );
};

export default Love;
