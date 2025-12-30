"use client";

import { useEffect, useRef } from "react";

interface SubtleSyntaxBackgroundProps {
    intensity?: number;
}

export default function SubtleSyntaxBackground({
    intensity = 0.3
}: SubtleSyntaxBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        // Keywords mezcladas de ambos mundos
        const keywords = [
            // PHP/WordPress
            { text: "<?php", lang: "php", weight: 0.8 },
            { text: "function", lang: "php", weight: 0.6 },
            { text: "get_field", lang: "php", weight: 0.7 },
            { text: "add_action", lang: "php", weight: 0.9 },
            { text: "WP_Query", lang: "php", weight: 0.5 },
            { text: "// Backend", lang: "php", weight: 0.4 },
            
            // React/Next.js
            { text: "useState", lang: "jsx", weight: 0.7 },
            { text: "useEffect", lang: "jsx", weight: 0.8 },
            { text: "<Link />", lang: "jsx", weight: 0.9 },
            { text: "interface", lang: "jsx", weight: 0.6 },
            { text: "export", lang: "jsx", weight: 0.5 },
            { text: "// Frontend", lang: "jsx", weight: 0.4 },
            
            // Shared concepts
            { text: "API", lang: "shared", weight: 0.3 },
            { text: "props", lang: "shared", weight: 0.4 },
            { text: "data", lang: "shared", weight: 0.3 },
            { text: "render", lang: "shared", weight: 0.4 }
        ];

        const particles: Array<{
            x: number;
            y: number;
            keyword: typeof keywords[0];
            size: number;
            speed: number;
            opacity: number;
            rotation: number;
            rotationSpeed: number;
        }> = [];

        // Inicializar partículas sutiles
        const initParticles = () => {
            particles.length = 0;
            const count = Math.floor(canvas.width * canvas.height / 50000); // Densidad proporcional
            
            for (let i = 0; i < count; i++) {
                const keyword = keywords[Math.floor(Math.random() * keywords.length)];
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    keyword,
                    size: 10 + keyword.weight * 8, // Tamaño basado en relevancia
                    speed: 0.05 + Math.random() * 0.1,
                    opacity: 0.05 + keyword.weight * 0.15,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.02
                });
            }
        };

        initParticles();

        const draw = () => {
            // Limpiar con transparencia muy baja para efecto de rastro mínimo
            ctx.fillStyle = "rgba(15, 23, 42, 0.02)"; // Casi invisible
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                // Movimiento y rotación sutiles
                particle.y += particle.speed;
                particle.rotation += particle.rotationSpeed;
                
                // Reset si sale de la pantalla
                if (particle.y > canvas.height + 50) {
                    particle.y = -30;
                    particle.x = Math.random() * canvas.width;
                }

                // Color basado en lenguaje
                let color;
                switch (particle.keyword.lang) {
                    case 'php':
                        color = `rgba(79, 93, 149, ${particle.opacity * intensity})`; // PHP blue
                        break;
                    case 'jsx':
                        color = `rgba(97, 218, 251, ${particle.opacity * intensity})`; // React cyan
                        break;
                    default:
                        color = `rgba(168, 162, 158, ${particle.opacity * intensity})`; // Neutral gray
                }

                // Guardar contexto para rotación
                ctx.save();
                ctx.translate(particle.x, particle.y);
                ctx.rotate(particle.rotation);
                
                // Configurar fuente
                const fontFamily = particle.keyword.lang === 'php' ? 
                    '"Courier New", monospace' : 
                    '"SF Mono", Monaco, monospace';
                
                ctx.font = `${particle.size}px ${fontFamily}`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Dibujar texto
                ctx.fillStyle = color;
                ctx.fillText(particle.keyword.text, 0, 0);
                
                // Restaurar contexto
                ctx.restore();
            });

            // Línea divisoria sutil en el centro (opcional)
            if (intensity > 0.5) {
                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, 0);
                ctx.lineTo(canvas.width / 2, canvas.height);
                ctx.strokeStyle = `rgba(255, 255, 255, 0.05)`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            requestAnimationFrame(draw);
        };

        const animationId = requestAnimationFrame(draw);
        window.addEventListener('resize', initParticles);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('resize', initParticles);
            cancelAnimationFrame(animationId);
        };
    }, [intensity]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 h-full w-full pointer-events-none"
        />
    );
}