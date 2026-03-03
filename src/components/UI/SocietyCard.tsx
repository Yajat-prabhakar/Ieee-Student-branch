import styles from './SocietyCard.module.css';
import Link from 'next/link';

interface SocietyProps {
    id: string;
    name: string;
    description: string;
    objective: string;
}

const SocietyCard = ({ id, name, description, objective }: SocietyProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconPlaceholder}>
                    {id.toUpperCase()}
                </div>
                <h3 className={styles.name}>{name}</h3>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.objective}>
                <strong>Objective:</strong> {objective}
            </div>
            <Link href={`/societies/${id}`} className={styles.btn}>Explore Chapter</Link>
        </div>
    );
};

export default SocietyCard;
