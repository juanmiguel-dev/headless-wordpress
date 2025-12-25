import TechStack from "@/components/TechStack";
import ParallaxSection from "../Globals/Parallax/ParallaxSection";

export default function Services() {
    return (
        <section id="services" className="bg-black py-40 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-lime/5 blur-[120px] pointer-events-none" />

            <ParallaxSection speed={0.4}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Title Column */}
                        <div className="lg:col-span-12 mb-20">
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.8]">
                                CORE<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white/20 italic font-serif lowercase font-light">expertise.</span>
                            </h2>
                        </div>

                        {/* Interactive Grid */}
                        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
                            {/* Service 1 */}
                            <div className="bg-black p-12 hover:bg-white/[0.02] transition-colors group">
                                <span className="text-neon-lime font-mono text-xs mb-8 block uppercase tracking-[0.3em]">01 / Concept</span>
                                <h3 className="text-2xl font-bold text-white uppercase mb-6 group-hover:text-neon-lime transition-colors">Visual Narrative</h3>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    I translate abstract ideas into powerful visual languages. Every project is a journey through identity and form.
                                </p>
                            </div>

                            {/* Service 2 */}
                            <div className="bg-black p-12 hover:bg-white/[0.02] transition-colors group border-y md:border-y-0 md:border-x border-white/10">
                                <span className="text-neon-lime font-mono text-xs mb-8 block uppercase tracking-[0.3em]">02 / Creation</span>
                                <h3 className="text-2xl font-bold text-white uppercase mb-6 group-hover:text-neon-lime transition-colors">Creative Flow</h3>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    Where intuition meets execution. Exploring new digital frontiers through mixed media and interactive design.
                                </p>
                            </div>

                            {/* Service 3 */}
                            <div className="bg-black p-12 hover:bg-white/[0.02] transition-colors group">
                                <span className="text-neon-lime font-mono text-xs mb-8 block uppercase tracking-[0.3em]">03 / Essence</span>
                                <h3 className="text-2xl font-bold text-white uppercase mb-6 group-hover:text-neon-lime transition-colors">Digital Soul</h3>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    Infusing digital experiences with human emotion. Meticulous attention to detail for a lasting impression.
                                </p>
                            </div>
                        </div>

                        {/* Bottom CTA / Tech Stack Link */}
                        <div className="lg:col-span-12 mt-12">
                            <TechStack />
                        </div>
                    </div>
                </div>
            </ParallaxSection>
        </section>
    );
}
