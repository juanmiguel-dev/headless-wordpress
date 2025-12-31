import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

import { ContentNode } from "@/gql/graphql";
import Footer from "@/components/Globals/Footer/Footer";

import styles from "./PostTemplate.module.css";

interface AnyNode {
  title?: string | null;
  content?: string | null;
  slug?: string | null;
  date?: string | null;
  uri?: string | null;
  projectFields?: any | null;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
  databaseId?: number;
  [key: string]: any;
}

interface TemplateProps {
  node: AnyNode;
  label?: string;
}

export default async function PostTemplate({ node, label }: TemplateProps) {
  if (!node) return null;

  if (label && label.toUpperCase() === "PROJECT") {
    const rawSlug =
      (node as any)?.slug ||
      (node.uri || "")
        .replace(/\/$/, "")
        .split("/")
        .pop() ||
      "";
    const displaySlug = String(rawSlug).toUpperCase();
    const finalUrl = (node as any)?.projectFields?.websiteurl || null;
    const performanceScore = Number((node as any)?.projectFields?.performanceScore ?? 0);
    const perfPct = Math.max(0, Math.min(100, Number.isFinite(performanceScore) ? performanceScore : 0));

    return (
      <>
        <div className="max-w-6xl mx-auto px-6 py-20 font-sans min-h-screen">
          <div className="mb-16 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase">
              {node.title}
            </h1>
            <div className="flex items-center gap-4 text-orange-500 font-mono text-sm">
              <span>// PROJECT_ID: {displaySlug}</span>
              <span>// {new Date(node.date || new Date().toISOString()).getFullYear()}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <div
                className="max-w-none text-gray-300 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: node.content || "" }}
              />
            </div>

            <div className="md:col-span-4">
              <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-6 sticky top-24 backdrop-blur-md">
                <h3 className="text-xs font-mono text-gray-500 mb-6 uppercase border-b border-white/10 pb-2">
                  System_Specs
                </h3>

                <ul className="space-y-6 font-mono text-sm">
                  {(node as any)?.projectFields?.framework && (
                    <li>
                      <span className="block text-xs text-orange-500 mb-1">FRAMEWORK</span>
                      <span className="text-white font-bold">{(node as any)?.projectFields?.framework}</span>
                    </li>
                  )}
                  {(node as any)?.projectFields?.language && (
                    <li>
                      <span className="block text-xs text-orange-500 mb-1">LANGUAGE</span>
                      <span className="text-white font-bold">{(node as any)?.projectFields?.language}</span>
                    </li>
                  )}
                  <li>
                    <span className="block text-xs text-orange-500 mb-1">PERFORMANCE</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: `${perfPct || 0}%` }} />
                      </div>
                      <span className="text-green-500 text-xs font-bold">{Math.round(perfPct || 0)}%</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  {typeof finalUrl === "string" && finalUrl.length > 0 ? (
                    <a
                      href={finalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center py-3 bg-white text-black font-bold hover:bg-orange-500 transition-colors uppercase tracking-widest text-xs"
                    >
                      View Live Site
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3 bg-white/20 text-white/60 font-bold uppercase tracking-widest text-xs cursor-not-allowed"
                    >
                      Live Site Unavailable
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const dateValue = node.date || new Date().toISOString();
  const formattedDate = new Date(dateValue).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className={styles.page}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.blueprintOverlay} />
        <div className={styles.gradientOverlay} />

        {node.featuredImage?.node?.sourceUrl && (
          <div className={styles.heroImage}>
            <Image
              src={node.featuredImage.node.sourceUrl}
              alt={node.featuredImage.node.altText || node.title || ""}
              fill
              priority
              quality={100}
            />
          </div>
        )}

        <div className={styles.heroContent}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.metaLabel}
          >
            {label || "Digital / Architecture / Archive"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.title}
          >
            {node.title || ""}
            <span>entry.0{node.databaseId || "0"}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={styles.metaBar}
          >
            <div className={styles.metaItem}>
              <span className={styles.itemLabel}>ID_NODE</span>
              <span className={styles.itemValue}>0x{(node.databaseId || 0).toString(16)}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.itemLabel}>DATE_PUB</span>
              <span className={styles.itemValue}>{formattedDate}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.itemLabel}>AUTH_CORE</span>
              <span className={styles.itemValue}>Juan Miguel</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={styles.contentWrapper}
      >
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: node.content || "" }}
        />
      </motion.div>

      {/* 3. FOOTER */}
      <Footer />
    </article>
  );
}
