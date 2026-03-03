import Link from 'next/link';
import styles from './Footer.module.css';
import branchData from '@/data/branch.json';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <div className={styles.top}>
                    <div className={styles.info}>
                        <h3 className={styles.logoText}>IEEE {branchData.shortName}</h3>
                        <p className={styles.description}>{branchData.mission}</p>
                        <div className={styles.contact}>
                            <p>Contact: {branchData.contact.email}</p>
                            <p>Region: {branchData.region}</p>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h4>Explore</h4>
                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/leadership">Leadership</Link></li>
                                <li><Link href="/societies">Societies</Link></li>
                                <li><Link href="/events">Events</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4>Community</h4>
                            <ul>
                                <li><Link href="/alumni">Alumni</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                                <li><a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Global</a></li>
                                <li><a href="https://www.ieee.org/membership/join" target="_blank" rel="noopener noreferrer">Join IEEE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} IEEE {branchData.name}. All rights reserved.
                    </p>
                    <div className={styles.social}>
                        <a href={branchData.contact.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={branchData.contact.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href={branchData.contact.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
