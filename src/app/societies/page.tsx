import SectionHeader from '@/components/UI/SectionHeader';
import SocietyCard from '@/components/UI/SocietyCard';
import societiesData from '@/data/societies.json';
import styles from './Societies.module.css';

export default function SocietiesPage() {
    return (
        <div className={styles.societies}>
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>IEEE Societies & Chapters</h1>
                    <p className={styles.subtitle}>Explore specialized technical communities at IEEE BVIMR.</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <SectionHeader
                        title="Technical Communities"
                        subtitle="Deep dive into specific fields of interest with our dedicated society chapters."
                        centered
                    />
                    <div className={styles.grid}>
                        {societiesData.map(society => (
                            <SocietyCard key={society.id} {...society} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
