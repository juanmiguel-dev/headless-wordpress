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
                            href="https://pachadev.com/"
                            target="_blank"
                            className={styles.socialLink}
                        >
                            Pachadev Architecture
                            <span className={styles.dot} />
                        </Link>

                    </div>

                    <div className={styles.socials}>
                        <Link
                            href="https://www.linkedin.com/in/juan-miguel-rivero-y-hornos/"
                            target="_blank"
                            className={styles.socialLink}
                        >
                            LinkedIn
                            <span className={styles.dot} />
                        </Link>
                        <Link
                            href="https://wa.me/5492235451872"
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
