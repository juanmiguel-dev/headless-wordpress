"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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

interface RelatedPostsSliderProps {
    posts: PostNode[];
    currentPostId: number;
    basePath?: string;
}

export default function RelatedPostsSlider({ posts, currentPostId, basePath = "" }: RelatedPostsSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Filter out the current post
    const filteredPosts = posts.filter(p => p.databaseId !== currentPostId);

    if (filteredPosts.length === 0) return null;

    return (
        <section className="py-32 border-t border-white/5 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex items-end justify-between">
                    <div>
                        <span className="text-neon-lime font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block">Sequence / Related</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                            Continue<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white/20 italic font-serif lowercase font-light ml-4">exploring.</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex gap-4 font-mono text-[10px] text-white/20 uppercase tracking-widest items-center">
                        <span>Scroll_Horizontal</span>
                        <div className="w-12 h-px bg-white/10" />
                        <span>0{filteredPosts.length}_entries</span>
                    </div>
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex gap-8 overflow-x-auto px-6 pb-12 hide-scrollbar snap-x scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {filteredPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex-shrink-0 w-[300px] md:w-[450px] snap-center group"
                    >
                        <Link href={`${basePath}/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-white/[0.02] border border-white/5">
                            {post.featuredImage?.node?.sourceUrl && (
                                <Image
                                    src={post.featuredImage.node.sourceUrl}
                                    alt={post.featuredImage.node.altText || post.title}
                                    fill
                                    className="object-cover opacity-40 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                                />
                            )}

                            {/* Overlay Decor */}
                            <div className="absolute inset-x-0 bottom-0 p-8 z-10 bg-gradient-to-t from-black via-black/40 to-transparent">
                                <span className="text-[10px] font-mono text-neon-lime mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    SYSTEM_CALL // 0x{post.databaseId.toString(16)}
                                </span>
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-neon-lime transition-colors">
                                    {post.title}
                                </h3>
                            </div>

                            {/* Corner Glitch Marker */}
                            <div className="absolute top-4 right-4 flex gap-1 items-center opacity-30 group-hover:opacity-100 transition-opacity">
                                <div className="w-1 h-1 bg-neon-lime" />
                                <div className="w-4 h-[1px] bg-white/20" />
                            </div>
                        </Link>
                    </motion.div>
                ))}

                {/* End of list indicator */}
                <div className="flex-shrink-0 w-32 flex items-center justify-center opacity-10">
                    <span className="font-mono text-[10px] uppercase tracking-widest rotate-90 whitespace-nowrap">End of stream</span>
                </div>
            </div>

            {/* Background Ornament */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10 pointer-events-none" />
        </section>
    );
}
