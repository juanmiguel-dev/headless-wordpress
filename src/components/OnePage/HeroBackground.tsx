"use client";

import { useEffect, useRef } from "react";

interface HeroBackgroundProps {
    opacity?: number;
    color?: string;
    highlightColor?: string;
    fontSize?: number;
}

export default function HeroBackground({
    opacity = 0.4,
    color = "#333333",
    highlightColor = "#888888",
    fontSize = 14
}: HeroBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;

            // Recalculate columns
            columns = Math.floor(canvas.width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        };

        window.addEventListener("resize", resize);

        // Initial sizing
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;

        // Matrix Rain Configuration
        let columns = Math.floor(canvas.width / fontSize);
        let drops: number[] = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        // Characters (Katakana + Latin)
        const chars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const draw = () => {
            // Translucent black background to create trail effect
            ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));

                // Randomly vary opacity for "glitch" or "depth" feel
                if (Math.random() > 0.95) {
                    ctx.fillStyle = highlightColor;
                } else {
                    ctx.fillStyle = color;
                }

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly or after it falls off screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
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

    }, [color, highlightColor, fontSize]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 z-0 h-full w-full pointer-events-none`}
            style={{ opacity }}
        />
    );
}
