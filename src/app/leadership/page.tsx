import SectionHeader from '@/components/UI/SectionHeader';
import MemberCard from '@/components/UI/MemberCard';
import leadershipData from '@/data/leadership.json';
import styles from './Leadership.module.css';

export default function LeadershipPage() {
    return (
        <div className={styles.leadership}>
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Our Leadership</h1>
                    <p className={styles.subtitle}>Meet the dedicated students leading the IEEE BVIMR Student Branch.</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <SectionHeader
                        title="Executive Committee"
                        subtitle="The core team driving branch activities and strategic decisions."
                        centered
                    />
                    <div className={styles.membersGrid}>
                        {leadershipData.map(member => (
                            <MemberCard key={member.id} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.grayBg}`}>
                <div className="container">
                    <SectionHeader
                        title="Branch Counselors"
                        subtitle="Our faculty mentors who guide us in our journey."
                        centered
                    />
                    <div className={styles.mentorsGrid}>
                        <div className={styles.placeholderCard}>
                            <h3>Faculty Counselor</h3>
                            <p>Prof. Dr. [Name]</p>
                            <span>BVIMR, New Delhi</span>
                        </div>
                        <div className={styles.placeholderCard}>
                            <h3>Branch Mentor</h3>
                            <p>Dr. [Name]</p>
                            <span>IEEE Delhi Section</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
