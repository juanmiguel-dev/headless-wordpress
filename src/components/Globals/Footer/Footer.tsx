import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <Link
                            href="/"
                            className={styles.socialLink}
                        >
                            Daniela Moreno Art
                            <span className={styles.dot} />
                        </Link>

                    </div>

                    <div className={styles.socials}>
                        <Link
                            href="https://www.instagram.com/danimoreno_psicomar"
                            target="_blank"
                            className={styles.socialLink}
                        >
                            Instagram
                            <span className={styles.dot} />
                        </Link>
                        <Link
                            href="https://wa.me/5492235438139"
                            target="_blank"
                            className={styles.socialLink}
                        >
                            WhatsApp
                            <span className={styles.dot} />
                        </Link>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p className={styles.credits}>
                        Developed with <span className={styles.highlight}>Next.js 15</span> + <span className={styles.highlight}>WPGraphQL</span>
                    </p>
                    <div className={styles.industrialLine} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
