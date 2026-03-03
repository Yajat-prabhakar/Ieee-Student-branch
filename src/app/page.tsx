import Hero from '@/components/UI/Hero';
import SectionHeader from '@/components/UI/SectionHeader';
import EventCard from '@/components/UI/EventCard';
import SocietyCard from '@/components/UI/SocietyCard';
import eventsData from '@/data/events.json';
import societiesData from '@/data/societies.json';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const featuredEvents = eventsData.slice(0, 3);
  const societies = societiesData;

  return (
    <div className={styles.home}>
      <Hero />

      <section className={styles.section}>
        <div className="container">
          <SectionHeader
            title="Societies & Chapters"
            subtitle="Engage with specialized technical communities and affinity groups within our branch."
            centered
          />
          <div className={styles.societiesGrid}>
            {societies.map(society => (
              <SocietyCard key={society.id} {...society} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.grayBg}`}>
        <div className="container">
          <div className={styles.flexHeader}>
            <SectionHeader
              title="Recent Events"
              subtitle="Latest happenings and technical sessions at IEEE BVIMR."
            />
            <Link href="/events" className={styles.viewAll}>View All Events →</Link>
          </div>
          <div className={styles.eventsGrid}>
            {featuredEvents.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2>Ready to start your journey?</h2>
              <p>Join over 40 active members and get access to global IEEE resources, networking opportunities, and technical excellence.</p>
              <Link href="/contact" className={styles.ctaBtn}>Become a Member</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
