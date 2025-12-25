import React from "react";
import Image from "next/image";
import Link from "next/link";
import SynergySection from "@/components/Concept/SynergySection";
import Footer from "@/components/Globals/Footer/Footer";

export const metadata = {
    title: "Visual Concept | Headless Design Demo",
    description: "Una demostración de diseño UI de alta fidelidad con Next.js + WordPress.",
};

export default function ConceptPage() {
    return (
        <main className="bg-black text-white min-h-screen">

            {/* 1. HERO SECTION (Estilo Video/Imagen Full Screen) */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Imagen de fondo (Simulando el estilo VanLife) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="object-cover w-full h-full brightness-[0.4]"
                        poster="https://v2.pachadev.com/wp-content/uploads/2025/12/back-black.webp?q=80&w=2070&auto=format&fit=crop"
                    >
                        <source
                            src="https://v2.pachadev.com/wp-content/uploads/2025/12/blue.webm"
                            type="video/webm"
                        />
                        <source
                            src="https://v2.pachadev.com/wp-content/uploads/2025/12/blue.mp4"
                            type="video/mp4"
                        />
                        <Image
                            src="https://v2.pachadev.com/wp-content/uploads/2025/12/mockup-mardelplata-blockchain-fecha-cierta.jpg?q=80&w=2070&auto=format&fit=crop"
                            alt="Hero Background"
                            fill
                            className="object-cover brightness-10"
                            priority
                        />
                    </video>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-1" />

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <p className="text-xs md:text-sm tracking-[0.5em] uppercase mb-6 opacity-60 font-mono">
                        Digital Engineering / Headless
                    </p>
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.8] text-white">
                        THE<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white/40 italic font-serif lowercase font-light ml-4">Concept.</span>
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                        <Link
                            href="#synergy"
                            className="inline-block border border-neon-lime text-neon-lime px-10 py-4 text-xs hover:bg-neon-lime hover:text-black transition-all duration-400 uppercase tracking-widest font-bold"
                        >
                            Explore Synergy
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. SYNERGY SECTION (Interactive) */}
            <div id="synergy">
                <SynergySection />
            </div>

            {/* 3. ADDITIONAL CONCEPT GRID (Estilo Industrial) */}
            <section className="px-4 md:px-8 pb-32 bg-black">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
                    {/* Visual Card */}
                    <div className="md:col-span-7 relative group overflow-hidden rounded-sm h-[400px] md:h-[600px] border border-white/5">
                        <Image
                            src="https://v2.pachadev.com/wp-content/uploads/2025/12/pikaso_texttoimage_lettering-de-DESARROLLO-WEB-con-fondo-negro-El-bac.jpeg?q=80&w=2070&auto=format&fit=crop"
                            alt="Performance architecture"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-10 w-full">
                            <span className="text-neon-lime font-mono text-xs mb-4 block uppercase tracking-widest">Efficiency Layer</span>
                            <h3 className="text-3xl font-black uppercase text-white">Edge Computing</h3>
                        </div>
                    </div>

                    {/* Textual Card */}
                    <div className="md:col-span-5 flex flex-col justify-center p-12 bg-white/5 border border-white/5 rounded-sm group hover:border-neon-lime/20 transition-colors">
                        <span className="text-gray-500 font-mono text-xs mb-6 uppercase tracking-widest">The "Why"</span>
                        <h4 className="text-4xl font-black uppercase mb-8 leading-tight">Beyond <span className="text-neon-lime">speed.</span></h4>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                            WordPress provides the editorial freedom your team loves, while Next.js
                            unleashes the technical performance your users deserve.
                        </p>

                    </div>
                </div>
            </section>

            {/* 4. FOOTER */}
            <Footer />
        </main>
    );
}
