import styles from './Hero.module.css';
import branchData from '@/data/branch.json';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <span className={styles.badge}>Official IEEE Student Branch</span>
                    <h1 className={styles.title}>{branchData.name}</h1>
                    <p className={styles.description}>{branchData.mission}</p>
                    <div className={styles.actions}>
                        <Link href="/about" className={styles.primaryBtn}>Explore Branch</Link>
                        <Link href="/contact" className={styles.secondaryBtn}>Join Community</Link>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{branchData.stats.members}</span>
                            <span className={styles.statLabel}>Active Members</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{branchData.stats.events}</span>
                            <span className={styles.statLabel}>Events Held</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{branchData.region}</span>
                            <span className={styles.statLabel}>IEEE Region</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
