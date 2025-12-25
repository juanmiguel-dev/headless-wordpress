"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PostNode {
    id: string;
    title: string;
    slug: string;
    databaseId: number;
    featuredImage?: {
        node: {
            sourceUrl: string;
            altText: string;
        };
    };
}

interface BackgroundSlideshowProps {
    posts: PostNode[];
    currentPostId: number;
}

export default function BackgroundSlideshow({ posts, currentPostId }: BackgroundSlideshowProps) {
    // Filter out the current post
    const otherPosts = posts.filter(p => p.databaseId !== currentPostId);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (otherPosts.length <= 1) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % otherPosts.length);
        }, 6000); // 6 seconds per slide

        return () => clearInterval(interval);
    }, [otherPosts.length]);

    if (otherPosts.length === 0) return null;

    const currentSlide = otherPosts[index];

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
            {/* Blueprint Grid Overlay (Constant) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(223,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(223,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-10" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px) grayscale(100%)" }}
                    animate={{ opacity: 0.25, scale: 1, filter: "blur(4px) grayscale(100%)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                >
                    {currentSlide.featuredImage?.node?.sourceUrl && (
                        <Image
                            src={currentSlide.featuredImage.node.sourceUrl}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                            quality={60}
                        />
                    )}

                    {/* Glitch Overlay Effect */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 5 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-30"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Floating Metadata Ornament */}
            <div className="absolute bottom-12 left-12 z-20 font-mono text-[10px] uppercase tracking-[0.4em] text-white/10 hidden md:block">
                <div className="flex flex-col gap-1">
                    <span>Buffer // background_stream.raw</span>
                    <div className="flex items-center gap-4">
                        <span className="text-neon-lime/40">Active_Node: 0x{currentSlide.databaseId.toString(16)}</span>
                        <div className="h-px w-8 bg-white/5" />
                        <span>Slide_{index + 1}/{otherPosts.length}</span>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 z-20">
                <motion.div
                    key={index}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-neon-lime/20"
                />
            </div>
        </div>
    );
}
