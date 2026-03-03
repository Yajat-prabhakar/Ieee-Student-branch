import societiesData from '@/data/societies.json';
import SectionHeader from '@/components/UI/SectionHeader';
import { notFound } from 'next/navigation';
import styles from './SocietyDetail.module.css';

export default async function SocietyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const society = societiesData.find(s => s.id === id);

    if (!society) {
        notFound();
    }

    return (
        <div className={styles.detail}>
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>{society.name}</h1>
                    <p className={styles.subtitle}>Official Branch Chapter</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.main}>
                            <SectionHeader title="About the Chapter" />
                            <p className={styles.description}>{society.description}</p>

                            <SectionHeader title="Our Objective" />
                            <div className={styles.objectiveBox}>
                                <p>{society.objective}</p>
                            </div>
                        </div>

                        <div className={styles.sidebar}>
                            <div className={styles.widget}>
                                <h4>Chapter Info</h4>
                                <ul>
                                    <li><strong>Focus Area:</strong> Technical Networking</li>
                                    <li><strong>Status:</strong> Active</li>
                                    <li><strong>Affiliation:</strong> IEEE Global</li>
                                </ul>
                            </div>
                            <button className={styles.joinBtn}>Join this Chapter</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export function generateStaticParams() {
    return societiesData.map((society) => ({
        id: society.id,
    }));
}
