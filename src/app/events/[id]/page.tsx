import eventsData from '@/data/events.json';
import SectionHeader from '@/components/UI/SectionHeader';
import { notFound } from 'next/navigation';
import styles from './EventDetail.module.css';
import Link from 'next/link';

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const event = eventsData.find(e => e.id === parseInt(id));

    if (!event) {
        notFound();
    }

    return (
        <div className={styles.detail}>
            <div className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link href="/events">Events</Link> / {event.name}
                    </div>
                    <h1 className={styles.title}>{event.name}</h1>
                    <div className={styles.meta}>
                        <span>{event.date}</span>
                        <span className={styles.separator}>•</span>
                        <span>{event.type}</span>
                    </div>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.main}>
                            <div className={styles.imagePlaceholder}>
                                <p>Event Gallery / Image Placeholder</p>
                            </div>

                            <SectionHeader title="Event Description" />
                            <p className={styles.description}>{event.description}</p>

                            <div className={styles.tags}>
                                {event.tags?.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.sidebar}>
                            <div className={styles.infoCard}>
                                <h3>Event Summary</h3>
                                <div className={styles.infoRow}>
                                    <strong>Date</strong>
                                    <span>{event.date}</span>
                                </div>
                                <div className={styles.infoRow}>
                                    <strong>Category</strong>
                                    <span>{event.type}</span>
                                </div>
                                <div className={styles.infoRow}>
                                    <strong>Location</strong>
                                    <span>BVIMR Main Auditorium</span>
                                </div>
                            </div>
                            <Link href="/contact" className={styles.inquiryBtn}>Inquire About Event</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export function generateStaticParams() {
    return eventsData.map((event) => ({
        id: event.id.toString(),
    }));
}
