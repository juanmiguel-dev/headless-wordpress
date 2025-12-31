"use client";

// Trivial change to force re-evaluation
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Importa el nuevo fondo sintáctico (reemplaza HeroBackground)
import SubtleSyntaxBackground from '../HeroBackground';

const Phone3D = () => {
    const phoneRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. 3D Tilt Interaction - MÁS RÁPIDO
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || !phoneRef.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(phoneRef.current, {
            rotationY: x * 35, // Reducido de 40 a 35
            rotationX: -y * 35, // Reducido de 40 a 35
            ease: "power2.out",
            duration: 0.3, // Más rápido: de 0.6 a 0.3
            overwrite: "auto" // Previene acumulación de animaciones
        });
    };

    const handleMouseLeave = () => {
        if (!phoneRef.current) return;

        gsap.to(phoneRef.current, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.8, // Más rápido: de 1.5 a 0.8
            ease: "power3.out" // Más directo que elastic
        });
    };

    // Animar entrada del teléfono
    useGSAP(() => {
        if (phoneRef.current) {
            gsap.from(phoneRef.current, {
                rotationY: 20,
                rotationX: -10,
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: "back.out(1.7)",
                overwrite: "auto"
            });
        }
    }, []);

    return (
        <section className="py-32 bg-black relative overflow-hidden border-t border-white/40">
            {/* Decorative Background Text - más sutil */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none select-none">
                <span className="text-[18vw] font-black uppercase tracking-tighter leading-none italic font-serif">
                    Mobile Focus
                </span>
            </div>

            <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center">

                {/* Left Side: Content */}
                <div className="relative z-10">
                    <span className="text-neon-lime font-mono text-xs uppercase tracking-[0.5em] mb-6 block">
                        Architecture // Portability
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
                        Fluid<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white/40 italic font-serif lowercase font-light ml-2">
                            experience.
                        </span>
                    </h2>
                    <div className="max-w-md space-y-4">
                        <p className="text-gray-400 font-light leading-relaxed text-base">
                            High-performance headless architecture optimized for mobile-first experiences.
                        </p>
                        <div className="flex gap-3 font-mono text-[9px] text-white/50 uppercase tracking-[0.3em]">
                            <span className="px-3 py-1 border border-white/40 rounded-sm">
                                Next.js 14
                            </span>
                            <span className="px-3 py-1 border border-white/40 rounded-sm">
                                Edge Ready
                            </span>
                            <span className="px-3 py-1 border border-white/40 rounded-sm">
                                90+ Lighthouse
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side: 3D Phone */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ perspective: "1800px" }} // Perspectiva más pronunciada
                    className="flex items-center justify-center h-[600px] w-full relative z-20"
                >
                    {/* Industrial Device Housing */}
                    <div
                        ref={phoneRef}
                        className="relative w-[260px] h-[540px] bg-[#0a0a0a] rounded-[3.5rem] border-[10px] border-[#151515] 
                                   shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7),0_0_15px_-3px_rgba(223,255,0,0.08)] 
                                   hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8),0_0_20px_-3px_rgba(223,255,0,0.15)] 
                                   transition-shadow duration-500 overflow-hidden"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Industrial Neon Rim */}
                        <div className="absolute inset-0 border border-neon-lime/30 rounded-[2.8rem] pointer-events-none z-30" />
                        
                        {/* Screen Shadow inner */}
                        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] z-20 pointer-events-none" />

                        {/* Screen content - NUEVO EFECTO */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black overflow-hidden m-[3px] rounded-[3rem]">
                            {/* Fondo sintáctico (reemplaza Matrix) */}
                            <SubtleSyntaxBackground intensity={0.25} />
                            
                            {/* Overlay gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                            
                            {/* App UI simulada */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                {/* Status bar */}
                                <div className="flex justify-between items-center text-white/70 text-[10px] font-mono">
                                    <span>9:41</span>
                                    <div className="flex items-center gap-1">
                                        <span>📶</span>
                                        <span>5G</span>
                                        <span>🔋 92%</span>
                                    </div>
                                </div>
                                
                                {/* App content */}
                                <div className="text-center">
                                    <div className="text-white/90 text-sm font-light mb-2">
                                        Next.js + WordPress
                                    </div>
                                    <div className="text-neon-lime text-[11px] font-mono tracking-wider">
                                        HEADLESS STORE
                                    </div>
                                </div>
                                
                                {/* Bottom nav */}
                                <div className="flex justify-around text-white/50 text-[10px]">
                                    <span>Home</span>
                                    <span className="text-neon-lime">Shop</span>
                                    <span>Cart</span>
                                </div>
                            </div>
                        </div>

                        {/* Device Hardware Details */}
                        {/* Notch - más sutil */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#151515] rounded-b-xl z-30 flex items-center justify-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                            <div className="w-8 h-0.5 rounded-full bg-white/30" />
                        </div>

                        {/* Side Buttons */}
                        <div className="absolute top-36 -right-[12px] w-[3px] h-10 bg-white/30 rounded-l-sm" />
                        <div className="absolute top-44 -left-[12px] w-[3px] h-14 bg-white/30 rounded-r-sm" />
                        
                        {/* Bottom speaker */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white/20 rounded-full" />
                    </div>

                    {/* Technical Floating Indicators - más rápidos */}
                    <div className="absolute top-1/4 -right-8 flex flex-col gap-1.5 font-mono text-[7px] text-white/30 uppercase tracking-widest">
                        <span className="text-neon-lime/60 animate-pulse">RENDER: ACTIVE</span>
                        <span>SPEED: 0.8s</span>
                        <div className="w-16 h-px bg-white/30" />
                    </div>
                    
                    {/* Left side indicator */}
                    <div className="absolute bottom-1/4 -left-8 font-mono text-[7px] text-white/30 tracking-widest">
                        <span>3D TILT: ON</span>
                    </div>
                </div>
            </div>

            {/* Performance metrics */}
            <div className="container mx-auto px-6 max-w-6xl mt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                        { label: "Load Time", value: "< 1.2s" },
                        { label: "Lighthouse", value: "95+" },
                        { label: "FCP", value: "0.8s" },
                        { label: "TTI", value: "1.1s" }
                    ].map((metric, idx) => (
                        <div key={idx} className="p-4 border border-white/10 rounded-lg">
                            <div className="text-neon-lime text-2xl font-bold">{metric.value}</div>
                            <div className="text-white/50 text-xs uppercase tracking-wider mt-1">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Grid Accent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
    );
};

export default Phone3D;