import SectionHeader from '@/components/UI/SectionHeader';
import branchData from '@/data/branch.json';
import styles from './Contact.module.css';

export default function ContactPage() {
    return (
        <div className={styles.contact}>
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.subtitle}>Have questions or want to collaborate? Reach out to us.</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.formContainer}>
                            <SectionHeader title="Send a Message" />
                            <form className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" placeholder="Inquiry about Membership" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows={5} placeholder="Your message here..." required></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>Send Message</button>
                            </form>
                        </div>

                        <div className={styles.infoContainer}>
                            <SectionHeader title="Office Information" />
                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <strong>Email</strong>
                                    <p>{branchData.contact.email}</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <strong>Address</strong>
                                    <p>{branchData.location}</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <strong>Social Media</strong>
                                    <div className={styles.socialLinks}>
                                        <a href={branchData.contact.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        <a href={branchData.contact.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                                        <a href={branchData.contact.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.mapPlaceholder}>
                                <p>Map Location Placeholder</p>
                                <span>(In a real site, embed Google Maps here)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
