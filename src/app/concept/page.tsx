import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Visual Concept | Headless Design Demo",
    description: "Una demostración de diseño UI de alta fidelidad con Next.js.",
};

export default function ConceptPage() {
    return (
        <main className="bg-white text-black min-h-screen">

            {/* 1. HERO SECTION (Estilo Video/Imagen Full Screen) */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Imagen de fondo (Simulando el estilo VanLife) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata" // ⬅️ CRÍTICO: Solo carga metadatos, no el video completo
                        className="object-cover w-full h-full brightness-75"
                        poster="https://v2.pachadev.com/wp-content/uploads/2025/12/back-black.webp?q=80&w=2070&auto=format&fit=crop"
                    >
                        {/* Siempre ofrecer WebM primero (más ligero) */}
                        <source
                            src="https://v2.pachadev.com/wp-content/uploads/2025/12/blue.webm"
                            type="video/webm"
                        />
                        {/* Fallback MP4 para Safari */}
                        <source
                            src="https://v2.pachadev.com/wp-content/uploads/2025/12/blue.mp4"
                            type="video/mp4"
                        />
                        {/* Fallback final: si el video no carga, muestra la imagen */}
                        <Image
                            src="https://v2.pachadev.com/wp-content/uploads/2025/12/mockup-mardelplata-blockchain-fecha-cierta.jpg?q=80&w=2070&auto=format&fit=crop"
                            alt="Hero Background"
                            fill
                            className="object-cover brightness-75"
                            priority
                        />
                    </video>
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                        Lighter & Powerfull
                    </p>
                    <h1 className="text-5xl md:text-8xl font-serif italic tracking-tight mb-8">
                        NextJs + <br className="md:hidden" /> WordPress
                    </h1>
                    <Link
                        href="#explore"
                        className="inline-block border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest"
                    >
                        Discover
                    </Link>
                </div>
            </section>

            {/* 2. INTRO TEXT (Minimalista) */}
            <section id="explore" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-light leading-snug text-gray-800">
                    "Redefining freedom through exceptional engineering and timeless design.
                    Speed and Power."
                </h2>
            </section>

            {/* 3. BENTO GRID (El estilo característico de Noovo) */}
            <section className="px-4 md:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[800px]">

                    {/* Card Grande Izquierda */}
                    <div className="md:col-span-8 relative group overflow-hidden rounded-2xl h-[500px] md:h-full">
                        <Image
                            src="https://v2.pachadev.com/wp-content/uploads/2025/12/Neon_text_effect.jpg?q=80&w=2070&auto=format&fit=crop"
                            alt="Interior"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent text-white">
                            <h3 className="text-2xl font-bold">The Pop-Top Plus</h3>
                            <p className="text-gray-200 mt-2">Engineered for vertical space.</p>
                        </div>
                    </div>

                    {/* Columna Derecha (2 Cards apiladas) */}
                    <div className="md:col-span-4 flex flex-col gap-4 h-full">

                        {/* Card Superior Derecha */}
                        <div className="flex-1 relative group overflow-hidden rounded-2xl min-h-[300px]">
                            <Image
                                src="https://v2.pachadev.com/wp-content/uploads/2025/12/mockup-mardelplata-blockchain-fecha-cierta-mobile-view.jpg?q=80&w=2021&auto=format&fit=crop"
                                alt="Travel"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                <span className="text-white border-b border-white pb-1 text-lg">Our Journey</span>
                            </div>
                        </div>

                        {/* Card Inferior Derecha (Texto/CTA) */}
                        <div className="flex-1 bg-gray-100 rounded-2xl p-8 flex flex-col justify-center items-start hover:bg-gray-200 transition-colors">
                            <h4 className="text-xl font-bold mb-4">Ready to go?</h4>
                            <p className="text-gray-600 mb-6 text-sm">
                                Explore our available inventory and start your adventure today.
                            </p>
                            <button className="text-black font-bold underline decoration-1 underline-offset-4 hover:opacity-70">
                                View Inventory &rarr;
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FOOTER SIMPLE */}
            <footer className="bg-black text-white py-12 text-center">
                <p className="text-gray-500 text-sm">
                    Designed by Juan Miguel Rivero y Hornos using Next.js 15
                </p>
            </footer>
        </main>
    );
}