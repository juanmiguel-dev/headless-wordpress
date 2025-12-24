
export default function Services() {
    return (
        <section id="services" className="bg-dark-bg py-32 border-t border-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">

                    {/* Left Column: Heading */}
                    <div className="relative">
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-3xl leading-none">
                            Arquitectura <br />
                            <span className="font-thin font-serif italic text-white/90">Digital</span>
                        </h2>
                        <div className="mt-8 h-1 w-32 bg-neon-lime" />
                    </div>

                    {/* Right Column: Content */}
                    <div className="space-y-12">
                        {/* Service Item 1 */}
                        <div className="group">
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-neon-lime font-mono text-xl">01</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Inmersión y Estrategia Conceptual</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed pl-10 border-l border-gray-800">
                                Todo comienza con el porqué. Analizo tus objetivos y la esencia de tu mensaje para desarrollar un blueprint estratégico que guiará cada decisión de diseño y desarrollo.
                            </p>
                        </div>

                        {/* Service Item 2 (Added to match list) */}
                        <div className="group">
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-neon-lime font-mono text-xl">02</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Desarrollo Headless</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed pl-10 border-l border-gray-800">
                                Desacoplo el frontend del backend para darte velocidad pura, seguridad de hierro y una flexibilidad infinita. Tu contenido en WordPress, tu sitio en Next.js.
                            </p>
                        </div>

                        {/* Service Item 3 */}
                        <div className="group">
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-neon-lime font-mono text-xl">03</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Experiencia de Usuario (UX)</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed pl-10 border-l border-gray-800">
                                Diseño interfaces que no solo se ven bien, sino que funcionan. Cada interacción está pensada para convertir visitantes en creyentes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
