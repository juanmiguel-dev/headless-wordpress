"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxBackground() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();

    // Create smooth spring values for the parallax movement
    const smoothY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Different elements move at different speeds
    const y1 = useTransform(smoothY, [0, 1], [0, -200]);
    const y2 = useTransform(smoothY, [0, 1], [0, -400]);
    const y3 = useTransform(smoothY, [0, 1], [0, -100]);
    const rotate = useTransform(smoothY, [0, 1], [0, 45]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-20">
            {/* Ornament 1: Large subtle circle */}
            <motion.div
                style={{ y: y1, rotate }}
                className="absolute top-[10%] left-[5%] w-96 h-96 border border-white/5 rounded-full"
            />

            {/* Ornament 2: Floating code snippet vibes */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[40%] right-[10%] font-mono text-xs text-white/10 select-none hidden md:block"
            >
                <pre>{`
  const architect = {
    stack: ['WP', 'Next.js'],
    performance: 'optimized'
  };
        `}</pre>
            </motion.div>

            {/* Ornament 3: Grid lines */}
            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-[20%] left-[10%] w-64 h-64 border-l border-b border-white/5"
            />

            {/* Ornament 4: Decorative Dots */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[70%] left-[20%] grid grid-cols-4 gap-4"
            >
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white/10 rounded-full" />
                ))}
            </motion.div>
        </div>
    );
}
