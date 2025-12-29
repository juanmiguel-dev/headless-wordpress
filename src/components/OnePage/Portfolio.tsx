"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Post {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
            altText: string;
        };
    };
}

interface PortfolioProps {
    posts: Post[];
}

export default function Portfolio({ posts }: PortfolioProps) {
    return (
        <section id="portfolio" className="bg-black py-40 border-t border-white/40 relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-transparent via-neon-lime/70 to-transparent opacity-50" />
            <div className="absolute bottom-1/4 right-10 w-px h-64 bg-gradient-to-t from-transparent via-neon-lime/70 to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
                    <div>
                        <span className="text-neon-lime font-mono text-xs uppercase tracking-[0.5em] mb-4 block">Fundamentals</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.8]">
                            & Concepts<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white/50 italic font-serif lowercase font-light ml-4">Selected.</span>
                        </h2>
                    </div>

                </div>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col bg-black border border-white/40 rounded-sm overflow-hidden"
                        >
                            {/* Card Header / Metadata */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/40 bg-black">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-mono text-neon-lime opacity-70 uppercase tracking-widest">Post ID: {post.id.slice(0, 8)}</span>
                                    <span className="h-1 w-1 rounded-full bg-white/50" />
                                    <span className="text-[10px] font-mono text-gray-200 uppercase tracking-widest">{new Date(post.date).getFullYear()}</span>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 rounded-full bg-neon-lime/40" />
                                    <div className="w-1 h-1 rounded-full bg-white/40" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row flex-1 min-h-[350px]">
                                {/* Image Container */}
                                <div className="relative w-full md:w-1/2 overflow-hidden bg-black border-r border-white/40">
                                    {post.featuredImage?.node?.sourceUrl ? (
                                        <Image
                                            src={post.featuredImage.node.sourceUrl}
                                            alt={post.featuredImage.node.altText || post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            unoptimized={true}
                                            className="object-cover opacity-60 grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black">
                                            <span className="text-[10px] font-mono text-gray-700 uppercase tracking-tighter">no_visual_data</span>
                                        </div>
                                    )}
                                    {/* Blueprint Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(223,255,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(223,255,0,0.07)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Content Container */}
                                <div className="p-10 flex-1 flex flex-col justify-between relative">
                                    {/* Glitch Title */}
                                    <div>
                                        <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9] group-hover:text-neon-lime transition-colors duration-300">
                                            <Link href={`/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <div
                                            className="text-gray-200 text-sm font-light leading-relaxed mb-8 line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                        />
                                    </div>

                                    {/* Card Footer */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <Link
                                            href={`/${post.slug}`}
                                            className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-neon-lime transition-all flex items-center gap-2 group/btn"
                                        >
                                            View Entry <span className="group-hover/btn:translate-x-1 transition-transform text-neon-lime">→</span>
                                        </Link>
                                        <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest hidden md:block select-none">
                                            0x{index.toString(16).padStart(2, '0')} // ARCHIVE_0{index + 1}
                                        </span>
                                    </div>

                                    {/* Hover Decorative Corner */}
                                    <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-neon-lime" />
                                        <div className="absolute bottom-4 right-4 h-4 w-[1px] bg-neon-lime" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
