"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const TechStack = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const stack = [
        {
            id: "FE_01",
            category: "Frontend Architecture",
            tools: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS"],
        },
        {
            id: "HB_02",
            category: "Headless Backend",
            tools: ["WordPress Core", "WPGraphQL Schema", "ACF (Custom Fields)", "Headless CMS Mode"],
        },
        {
            id: "DO_03",
            category: "DevOps & CI/CD",
            tools: ["Vercel Deployment", "GitHub Actions", "GraphQL Codegen", "Strict Type Safety"],
        },
        {
            id: "PE_04",
            category: "Performance",
            tools: ["Core Web Vitals Green", "ISR Strategy", "Image Optimization", "Static Edge Caching"],
        },
    ];

    useGSAP(() => {
        const cards = gsap.utils.toArray(".tech-card");

        // 1. Entrance Stagger Animation
        gsap.fromTo(cards,
            {
                opacity: 0,
                y: 50,
                filter: "blur(10px)",
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        // 2. Continuous Border Scan Animation (Subtle)
        cards.forEach((card: any, i) => {
            const line = card.querySelector(".border-line");
            gsap.to(line, {
                scaleX: 1,
                duration: 1.5,
                delay: i * 0.2 + 0.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                }
            });
        });

    }, { scope: containerRef });

    return (
        <section className="pt-32 pb-12 bg-black text-white relative border-t border-white/5 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(223,255,0,0.02),transparent_50%)]" />

            <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
                    <div className="max-w-2xl">
                        <span className="text-neon-lime font-mono text-xs uppercase tracking-[0.5em] mb-4 block">System / Capabilities</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                            Technical<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white/20 italic font-serif lowercase font-light ml-4">stack.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 font-light max-w-sm text-right text-sm leading-relaxed mb-4 border-r border-neon-lime/30 pr-8">
                        Engineering scalable digital ecosystems with a focused, performance-first technical architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-white/10">
                    {stack.map((item, index) => (
                        <div
                            key={index}
                            className="tech-card group p-10 border-r border-b border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Hover & Reveal Highlight */}
                            <div className="border-line absolute top-0 left-0 w-full h-[2px] bg-neon-lime scale-x-0 transition-transform duration-500 origin-left" />

                            <div className="flex justify-between items-start mb-12">
                                <span className="text-neon-lime/40 font-mono text-[10px] tracking-widest">{item.id}</span>
                                <div className="w-2 h-2 rounded-full border border-white/20 group-hover:bg-neon-lime group-hover:border-neon-lime transition-colors duration-500" />
                            </div>

                            <h3 className="text-xl font-bold mb-8 uppercase tracking-tight group-hover:text-neon-lime transition-colors">
                                {item.category}
                            </h3>

                            <ul className="space-y-4">
                                {item.tools.map((tool, idx) => (
                                    <li key={idx} className="flex items-center text-gray-400 text-xs font-mono group-hover:text-gray-300 transition-colors">
                                        <span className="w-1 h-1 bg-white/20 rounded-full mr-3 group-hover:bg-neon-lime/50" />
                                        {tool}
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative Ornament */}
                            <div className="mt-16 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.3em]">0x{index.toString(16).padStart(2, '0')} // NODE_ACTIVE</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
