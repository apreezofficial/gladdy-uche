"use client";

import Link from "next/link";
import HoneycombBackground from "@/app/components/ui/bg/HoneycombBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden font-sans text-white selection:bg-white/20">
      <HoneycombBackground />

      <main className="z-10 flex flex-col items-center px-6 text-center w-full max-w-4xl">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center rounded-full border border-amber-500/20 bg-amber-900/10 px-3 py-1 text-xs text-amber-200/80 backdrop-blur-md"
        >
          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          A Question Awaits
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-amber-50 via-amber-100 to-amber-400/80 pb-4 drop-shadow-sm"
        >
          For My Gladys,<br /> From Uchenna with Love
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-amber-200/60 max-w-lg leading-relaxed font-light"
        >
          Gladys, I've prepared something special for you. Are you ready?
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <Link
            href="/proposal"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-amber-100 px-8 font-medium text-amber-950 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 via-amber-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative flex items-center gap-2">
              View
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 text-amber-900/60 group-hover:text-amber-900">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </span>
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 text-amber-900/40 text-xs tracking-widest uppercase mix-blend-plus-lighter"
      >
        Made with ❤️
      </motion.footer>
    </div>
  );
}
