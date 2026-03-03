import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = false }: SectionHeaderProps) => {
    return (
        <div className={`${styles.header} ${centered ? styles.centered : ''}`}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={styles.line}></div>
        </div>
    );
};

export default SectionHeader;
