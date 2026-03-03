import SectionHeader from '@/components/UI/SectionHeader';
import branchData from '@/data/branch.json';
import styles from './About.module.css';

export default function AboutPage() {
    return (
        <div className={styles.about}>
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>About Our Branch</h1>
                    <p className={styles.subtitle}>Fostering technical excellence and innovation since {branchData.founded}.</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.content}>
                            <SectionHeader title="Our Mission" />
                            <p className={styles.text}>{branchData.mission}</p>

                            <SectionHeader title="Our Vision" />
                            <p className={styles.text}>{branchData.vision}</p>
                        </div>
                        <div className={styles.infoBox}>
                            <h3>Key Details</h3>
                            <ul>
                                <li><strong>Official Name:</strong> {branchData.name}</li>
                                <li><strong>Founded:</strong> {branchData.founded}</li>
                                <li><strong>Region:</strong> {branchData.region}</li>
                                <li><strong>Location:</strong> {branchData.location}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.grayBg}`}>
                <div className="container">
                    <SectionHeader
                        title="Our Objectives"
                        subtitle="What we strive to achieve for our student community."
                        centered
                    />
                    <div className={styles.objectivesGrid}>
                        <div className={styles.objectiveCard}>
                            <h4>Technical Growth</h4>
                            <p>Providing platforms for students to learn and master cutting-edge technologies.</p>
                        </div>
                        <div className={styles.objectiveCard}>
                            <h4>Leadership Skills</h4>
                            <p>Empowering students to take charge and manage complex projects and teams.</p>
                        </div>
                        <div className={styles.objectiveCard}>
                            <h4>Global Networking</h4>
                            <p>Connecting our members with the global IEEE network of professionals and peers.</p>
                        </div>
                        <div className={styles.objectiveCard}>
                            <h4>Humanitarian Focus</h4>
                            <p>Leveraging technology to solve real-world problems and benefit humanity.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
