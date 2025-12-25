"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

function MatrixText({ text, delay = 0 }: { text: string; delay?: number }) {
    const [displayText, setDisplayText] = useState("");
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                    setComplete(true);
                }

                iteration += 1 / 3;
            }, 30);
        }, delay);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [text, delay]);

    return <span className={complete ? "" : styles.matrixing}>{displayText || text.split('').map(() => ' ').join('')}</span>;
}

import { MenuItem } from "@/gql/graphql";

import { usePathname } from "next/navigation";

export default function MobileMenu({
    isOpen,
    onClose,
    menuItems
}: {
    isOpen: boolean;
    onClose: () => void;
    menuItems: MenuItem[]
}) {
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}>
            <div className={styles.noise} />
            <button className={styles.closeButton} onClick={onClose}>
                ×
            </button>

            <nav className={styles.menuList}>
                {isOpen && menuItems.map((item, index) => {
                    if (!item.uri || !item.label) return null;

                    const isActive = pathname === item.uri;

                    return (
                        <Link
                            key={index}
                            href={item.uri}
                            className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
                            onClick={onClose}
                        >
                            <MatrixText text={item.label} delay={index * 150} />
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
