'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import branchData from '@/data/branch.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="BVIMR IEEE Student Branch Logo"
              width={150}
              height={48}
              className={styles.logoImg}
            />
            <div className={styles.brandText}>
              <span className={styles.ieee}>IEEE</span>
              <span className={styles.branch}>{branchData.shortName}</span>
            </div>
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="/about" className={styles.navLink}>About</Link></li>
            <li><Link href="/leadership" className={styles.navLink}>Leadership</Link></li>
            <li><Link href="/societies" className={styles.navLink}>Societies</Link></li>
            <li><Link href="/events" className={styles.navLink}>Events</Link></li>
            <li><Link href="/alumni" className={styles.navLink}>Alumni</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.cta}>
          <Link href="/contact" className={styles.memberBtn}>Join IEEE</Link>
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
