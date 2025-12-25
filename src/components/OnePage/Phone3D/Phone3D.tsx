"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HeroBackground from '../HeroBackground';

const Phone3D = () => {
    const phoneRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. 3D Tilt Interaction
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || !phoneRef.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(phoneRef.current, {
            rotationY: x * 40,
            rotationX: -y * 40,
            ease: "power2.out",
            duration: 0.6
        });
    };

    const handleMouseLeave = () => {
        if (!phoneRef.current) return;

        gsap.to(phoneRef.current, {
            rotationY: 0,
            rotationX: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)"
        });
    };

    return (
        <section className="py-40 bg-black relative overflow-hidden border-t border-white/5">
            {/* Decorative Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                <span className="text-[20vw] font-black uppercase tracking-tighter leading-none italic font-serif">
                    Mobile / Focus
                </span>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Side: Content */}
                <div className="relative z-10">
                    <span className="text-neon-lime font-mono text-xs uppercase tracking-[0.5em] mb-8 block">Architecture // Portability</span>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.8] mb-12">
                        Fluid<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white/20 italic font-serif lowercase font-light ml-4">experience.</span>
                    </h2>
                    <div className="max-w-md space-y-6">
                        <p className="text-gray-400 font-light leading-relaxed text-lg">
                            High-performance headless architecture ensuring sub-second response times across all devices.
                        </p>
                        <div className="flex gap-4 font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">
                            <span className="px-3 py-1 border border-white/10">Next.js Alpha</span>
                            <span className="px-3 py-1 border border-white/10">Edge Video</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: 3D Phone */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ perspective: "1500px" }}
                    className="flex items-center justify-center h-[700px] w-full relative z-20"
                >
                    {/* Industrial Device Housing */}
                    <div
                        ref={phoneRef}
                        className="relative w-[280px] h-[580px] bg-[#0c0c0c] rounded-[4rem] border-[12px] border-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Screen Shadow inner */}
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] z-20 pointer-events-none" />

                        {/* Screen content (Matrix) */}
                        <div className="absolute inset-0 bg-[#050505] overflow-hidden m-0.5 rounded-[3.5rem]">
                            <HeroBackground opacity={0.6} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                        </div>

                        {/* Device Hardware Details */}
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-30 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-white/5" />
                            <div className="w-10 h-1 rounded-full bg-white/5" />
                        </div>

                        {/* Side Button Glow */}
                        <div className="absolute top-32 -right-[14px] w-[4px] h-12 bg-white/5 rounded-l-md" />
                        <div className="absolute top-48 -left-[14px] w-[4px] h-16 bg-white/5 rounded-r-md" />
                    </div>

                    {/* Technical Floating Indicators */}
                    <div className="absolute top-1/4 -right-10 flex flex-col gap-2 font-mono text-[8px] text-white/10 uppercase tracking-widest">
                        <span className="text-neon-lime/30">Active_Render: ON</span>
                        <span>Buffer_Size: 512KB</span>
                        <div className="w-20 h-px bg-white/5" />
                    </div>
                </div>
            </div>

            {/* Background Grid Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5" />
        </section>
    );
};

export default Phone3D;
