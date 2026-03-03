import styles from './MemberCard.module.css';

interface MemberProps {
    name: string;
    role: string;
    tenure: string;
    image: string;
    bio: string;
    links: {
        linkedin?: string;
        email?: string;
    };
}

const MemberCard = ({ name, role, tenure, image, bio, links }: MemberProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <div className={styles.image} style={{ backgroundColor: 'var(--gray-200)' }}>
                    {/* Placeholder for image */}
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
                <p className={styles.tenure}>{tenure}</p>
                <p className={styles.bio}>{bio}</p>
                <div className={styles.links}>
                    {links.linkedin && <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {links.email && <a href={`mailto:${links.email}`}>Email</a>}
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
