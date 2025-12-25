"use client";

import { motion, Variants } from "framer-motion";
import styles from "./SynergySection.module.css";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function SynergySection() {
    return (
        <section className={styles.section}>
            <div className={styles.bgText}>SYNERGY</div>

            <motion.div
                className={styles.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants} className={styles.title}>
                    The Architecture of <span>Performance</span>
                </motion.h2>

                <div className={styles.visualWrapper}>
                    {/* Module 1: WordPress (The Brain) */}
                    <motion.div variants={itemVariants} className={styles.node}>
                        <span className={styles.nodeIcon}>01_DATA_CORE</span>
                        <h3 className={styles.nodeTitle}>The Brain</h3>
                        <p className={styles.nodeDesc}>
                            WordPress acts as a robust, decoupled CMS. It's your administrative cockpit where
                            content is structured and distributed with total flexibility.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-gray-400">WPGraphQL</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-gray-400">Headless</span>
                        </div>
                    </motion.div>

                    {/* Connector 1 */}
                    <motion.div variants={itemVariants} className={styles.connector}>
                        <span className={styles.connectorText}>Transmitting</span>
                        <div className={styles.line}>
                            <div className={styles.particle} />
                        </div>
                    </motion.div>

                    {/* Module 2: Next.js (The Engine) */}
                    <motion.div variants={itemVariants} className={styles.node}>
                        <span className={styles.nodeIcon}>02_COMPUTE_ENGINE</span>
                        <h3 className={styles.nodeTitle}>The Engine</h3>
                        <p className={styles.nodeDesc}>
                            Next.js renders your content with elite-level speed. Utilizing Server-Side
                            Generation and ISR to deliver instant user experiences.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-gray-400">SSR</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-gray-400">Core Vitals</span>
                        </div>
                    </motion.div>
                </div>

                {/* Feature Grid */}
                <motion.div variants={containerVariants} className={styles.featureList}>
                    <motion.div variants={itemVariants} className={styles.feature}>
                        <span className={styles.featureLabel}>Speed index</span>
                        <span className={styles.featureValue}>0.8s</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className={styles.feature}>
                        <span className={styles.featureLabel}>Security layer</span>
                        <span className={styles.featureValue}>Decoupled</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className={styles.feature}>
                        <span className={styles.featureLabel}>Scale Factor</span>
                        <span className={styles.featureValue}>Infinite</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className={styles.feature}>
                        <span className={styles.featureLabel}>Editorial UX</span>
                        <span className={styles.featureValue}>Intuitive</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
