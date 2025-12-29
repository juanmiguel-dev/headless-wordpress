import Link from "next/link";
import HeroBackground from "./HeroBackground";
import ParallaxSection from "../Globals/Parallax/ParallaxSection";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-24 text-center">
            {/* Background Effects */}
            <HeroBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-1" />

            <ParallaxSection speed={0.2}>
                <div className="relative z-10 max-w-5xl px-4">
                    <p className="text-xs md:text-sm tracking-[0.5em] uppercase mb-8 opacity-60 font-mono text-neon-lime">
                        Digital Engineering / Headless Architecture
                    </p>

                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.8] text-white">
                        WORDPRESS<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white/20 italic font-serif lowercase font-light ml-4">evolution.</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed font-light mt-12">
                        Deconstructing the traditional web. Building high-performance
                        ecosystems with <span className="text-white font-medium">Next.js</span> + <span className="text-white font-medium">WordPress</span>.
                    </p>


                </div>
            </ParallaxSection>
        </section>
    );
}
