"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectNode {
  databaseId: number;
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  projectCategories?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
}

interface ProjectsGridProps {
  projects: ProjectNode[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.databaseId}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="group relative aspect-[4/5] md:aspect-[3/4] cursor-pointer"
            onMouseEnter={() => setHoveredId(project.databaseId)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link href={`/projects/${project.slug}`} className="block w-full h-full h-full relative overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-neon-lime/50 transition-colors duration-500">
              
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                {project.featuredImage?.node?.sourceUrl ? (
                  <Image
                    src={project.featuredImage.node.sourceUrl}
                    alt={project.featuredImage.node.altText || project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60 opacity-80"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-xs">
                    [NO_IMAGE_DATA]
                  </div>
                )}
                
                {/* Scanline Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                
                {/* Top Meta */}
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                  <span className="font-mono text-[10px] text-neon-lime tracking-widest border border-neon-lime/30 px-2 py-1 bg-black/50 backdrop-blur-sm">
                    PRJ_0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] text-white/60">
                    {project.date ? new Date(project.date).getFullYear() : "2024"}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  
                  {/* Categories */}
                  <div className="flex gap-2 mb-3 overflow-hidden">
                    {project.projectCategories?.nodes?.map((cat) => (
                      <span key={cat.slug} className="text-[10px] font-mono text-neon-lime/80 uppercase tracking-wider">
                        #{cat.name}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tighter mix-blend-difference">
                    {project.title}
                  </h3>

                  {/* Excerpt Reveal */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="overflow-hidden">
                      <div 
                        className="pt-4 text-xs md:text-sm text-gray-300 font-light leading-relaxed font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                        dangerouslySetInnerHTML={{ __html: project.excerpt || "" }}
                      />
                      <div className="pt-4 flex items-center gap-2 text-neon-lime text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <span>Initialize Protocol</span>
                        <span className="animate-pulse">_</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 z-30 group-hover:border-neon-lime/50 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 z-30 group-hover:border-neon-lime/50 transition-colors duration-300" />

            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
