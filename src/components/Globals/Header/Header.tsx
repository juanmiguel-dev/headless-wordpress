import Link from "next/link";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoContainer}>
                <span className={styles.logoText}>PACHADEV</span>
                <div className={styles.logoDot}></div>
            </Link>

            <div className={styles.navWrapper}>
                <Navigation />
                <Link href="/contact" className={styles.ctaButton}>
                    Let's Talk
                </Link>
            </div>
        </header>
    );
}
