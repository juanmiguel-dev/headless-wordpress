"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";

import { MenuItem } from "@/gql/graphql";

interface HeaderClientProps {
    menuItems: MenuItem[];
    children: React.ReactNode;
}

export default function HeaderClient({
    menuItems,
    children
}: HeaderClientProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <Link href="/" className={styles.logoContainer}>
                    <Image
                        src="https://v2.pachadev.com/wp-content/uploads/2025/12/logo-pachadev.webp"
                        alt="Pachadev Logo"
                        width={140}
                        height={40}
                        className={styles.logoImage}
                        priority
                    />
                    <div className={styles.logoDot}></div>
                </Link>

                <div className={styles.navWrapper}>
                    {children}
                    <Link
                        href="https://wa.me/5492235451872"
                        className={styles.ctaButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Let's Talk
                    </Link>
                </div>

                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                menuItems={menuItems}
            />
        </>
    );
}
