"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Recalculate column count on resize
            columns = Math.floor(width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        };

        window.addEventListener("resize", resize);

        // Matrix Rain Configuration
        const fontSize = 14;
        let columns = Math.floor(width / fontSize);
        let drops: number[] = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        // Characters (Katakana + Latin)
        const chars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const draw = () => {
            // Translucent black background to create trail effect
            ctx.fillStyle = "rgba(10, 10, 10, 0.05)"; // #0a0a0a with low opacity
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#4a4a4a"; // Subtle Gray text (not green)
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));

                // Randomly vary opacity for "glitch" or "depth" feel
                if (Math.random() > 0.95) {
                    ctx.fillStyle = "#888888"; // Occasional brighter highlight (white/gray)
                } else {
                    ctx.fillStyle = "#333333"; // Standard dark gray
                }

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly or after it falls off screen
                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }

            requestAnimationFrame(draw);
        };

        const animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-40" // Global opacity to keep it subtle
        />
    );
}
