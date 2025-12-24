import React from "react";
// ESTA ES LA LÍNEA QUE FALTA:
import TechStack from "@/components/TechStack";

export default function Services() {
    return (
        <section id="services" className="bg-gray-900 py-32 border-t border-gray-800">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">

                    {/* Left Column: Heading */}
                    <div className="relative top-10">
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl leading-none">
                            Digital <br />
                            <span className="font-thin font-serif italic text-blue-400">
                                Architecture
                            </span>
                        </h2>
                        <div className="mt-8 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500" />
                        <p className="mt-6 text-gray-400 text-lg max-w-md">
                            I don't just build websites; I engineer scalable ecosystems.
                            Bridging the gap between marketing needs and technical performance.
                        </p>
                    </div>

                    {/* Right Column: Content */}
                    <div className="space-y-16">
                        {/* Service Item 1 */}
                        <div className="group">
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-blue-500 font-mono text-xl font-bold">01</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-blue-400 transition-colors">
                                    Discovery & Strategy
                                </h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed pl-10 border-l border-gray-800 group-hover:border-blue-500/50 transition-colors">
                                It starts with the "why". I analyze your business logic and technical requirements to develop a strategic blueprint. This roadmap ensures that every line of code serves a business goal.
                            </p>
                        </div>

                        {/* Service Item 2 */}
                        <div className="group">
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-blue-500 font-mono text-xl font-bold">02</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-blue-400 transition-colors">
                                    Headless Architecture
                                </h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed pl-10 border-l border-gray-800 group-hover:border-blue-500/50 transition-colors">
                                Decoupling the frontend from the backend for pure speed. I keep your content in WordPress (easy management) but render it with Next.js (instant performance). Ironclad security and infinite scalability.
                            </p>
                        </div>

                        {/* Service Item 3 */}
                        <div className="group">
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-blue-500 font-mono text-xl font-bold">03</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-blue-400 transition-colors">
                                    Performance Engineering
                                </h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed pl-10 border-l border-gray-800 group-hover:border-blue-500/50 transition-colors">
                                Optimization isn't an afterthought. I build with <strong>Core Web Vitals</strong> in mind from day one. SSR, Image Optimization, and Edge Caching to ensure your site ranks higher and converts better.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Component Integration */}
            <TechStack />
        </section>
    );
}