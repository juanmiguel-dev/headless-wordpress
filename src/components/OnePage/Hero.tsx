import Link from "next/link";
import HeroBackground from "./HeroBackground";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-dark-bg px-6 py-24 text-center">
            {/* Background Effects */}
            <HeroBackground />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-dark-bg/80 to-dark-bg opacity-90" />

            <div className="relative z-10 max-w-5xl space-y-12">
                {/* Logo/Icon Placeholder if needed */}
                <div className="mx-auto w-12 h-12 mb-8">
                    {/* Can place logo here */}
                </div>

                <h1 className="text-2xl font-black uppercase tracking-tighter text-white sm:text-7xl md:text-3xl leading-[0.9]">
                    Más que un sitio web: <br />
                    <span className="block text-white">El centro de tu</span>
                    <span className="block text-neon-lime">Universo Digital.</span>
                </h1>

                <p className="mx-auto max-w-3xl text-md font-medium text-gray-400 sm:text-xl leading-relaxed">
                    En el cosmos digital, una <span className="text-neon-lime">página web</span> no es una tarjeta de presentación.
                    Es tu base de operaciones, tu fortaleza y el <span className="text-neon-lime">motor de tu crecimiento</span>,
                    sobre cimientos de <span className="text-neon-lime">soberanía</span>, <span className="text-neon-lime">velocidad</span> y <span className="text-neon-lime">poder</span>.
                </p>

                <div className="pt-8">
                    {/* Optional: Add a subtle scroll indicator or simple separator */}
                    <div className="mx-auto h-1 w-24 bg-neon-lime/50 rounded-full" />
                </div>
            </div>
        </section>
    );
}
