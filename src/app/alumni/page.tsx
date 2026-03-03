import SectionHeader from '@/components/UI/SectionHeader';
import styles from './Alumni.module.css';

const alumni = [
    {
        name: "John Doe",
        batch: "2024",
        role: "Former Chair",
        status: "Software Engineer at Google",
        quote: "IEEE BVIMR provided the foundation for my professional growth."
    },
    {
        name: "Jane Smith",
        batch: "2025",
        role: "Former Vice Chair",
        status: "ML Researcher at OpenAI",
        quote: "The technical community here is unparalleled in its commitment to excellence."
    }
];

export default function AlumniPage() {
    return (
        <div className={styles.alumni}>
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>IEEE BVIMR Alumni</h1>
                    <p className={styles.subtitle}>Celebrating the success and contributions of our former members.</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <SectionHeader
                        title="Success Stories"
                        subtitle="Where our members are now and their impact on the tech world."
                        centered
                    />
                    <div className={styles.grid}>
                        {alumni.map((alum, index) => (
                            <div key={index} className={styles.alumCard}>
                                <div className={styles.header}>
                                    <h3>{alum.name}</h3>
                                    <span>Batch of {alum.batch}</span>
                                </div>
                                <p className={styles.alumRole}>{alum.role}</p>
                                <p className={styles.status}>{alum.status}</p>
                                <blockquote className={styles.quote}>"{alum.quote}"</blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
