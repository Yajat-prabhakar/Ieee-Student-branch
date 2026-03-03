import styles from './EventCard.module.css';
import Link from 'next/link';

interface EventProps {
    id: number;
    name: string;
    date: string;
    type: string;
    description: string;
    image: string;
    tags?: string[];
}

const EventCard = ({ id, name, date, type, description, image, tags }: EventProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {/* In a real app, use next/image. For now, using a placeholder div with background if image not provided */}
                <div
                    className={styles.image}
                    style={{ backgroundColor: 'var(--gray-200)' }}
                >
                    {/* !image && <span className={styles.placeholder}>IEEE EVENT</span> */}
                </div>
                <div className={styles.typeBadge}>{type}</div>
            </div>
            <div className={styles.content}>
                <span className={styles.date}>{date}</span>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.tags}>
                    {tags?.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
                <Link href={`/events/${id}`} className={styles.link}>View Details</Link>
            </div>
        </div>
    );
};

export default EventCard;
