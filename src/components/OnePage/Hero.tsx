"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import ParallaxSection from "../Globals/Parallax/ParallaxSection";

export default function Hero() {
    const scrollToServices = () => {
        const services = document.getElementById('services');
        if (services) {
            services.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-24 text-center">
            {/* Background Effects */}
            <HeroBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-1" />

            <ParallaxSection speed={0.2}>
                <div className="relative z-10 max-w-5xl px-4">
                    <p className="text-xs md:text-sm tracking-[0.5em] uppercase mb-8 opacity-60 font-mono text-neon-lime">
                        CLASSIC BACKEND / Headless Architecture
                    </p>

                    <h1 className="text-4xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.8] text-white opacity-100">
                        WORDPRESS<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white/20 italic font-serif lowercase font-light ml-4">evolution.</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed font-light mt-12">
                        Deconstructing the traditional web. Building high-performance
                        ecosystems with <span className="text-white font-medium">Next.js</span> + <span className="text-white font-medium">WordPress</span>.
                    </p>


                </div>
            </ParallaxSection>

            {/* Mobile Scroll Indicator */}
            <motion.div 
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 cursor-pointer md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                onClick={scrollToServices}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neon-lime/70">Scroll</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#DFFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
