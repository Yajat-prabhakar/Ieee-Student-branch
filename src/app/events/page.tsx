import SectionHeader from '@/components/UI/SectionHeader';
import EventCard from '@/components/UI/EventCard';
import eventsData from '@/data/events.json';
import styles from './Events.module.css';

export default function EventsPage() {
    return (
        <div className={styles.events}>
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Events Archive</h1>
                    <p className={styles.subtitle}>Discover our past workshops, seminars, and branch activities.</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <SectionHeader
                        title="All Portfolios"
                        subtitle="Browse through the complete history of IEEE BVIMR events."
                        centered
                    />
                    <div className={styles.grid}>
                        {eventsData.map(event => (
                            <EventCard key={event.id} {...event} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
