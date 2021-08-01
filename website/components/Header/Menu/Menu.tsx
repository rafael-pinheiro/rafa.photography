import Link from 'next/link';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">
        <a className={styles.link}>
          <span className={styles.label}>Home</span>
          <small className={styles.subtitle}>Back to homepage</small>
        </a>
      </Link>
      <Link href="/">
        <a className={styles.link}>
          <span className={styles.label}>About</span>
          <small className={styles.subtitle}>Learn more about the author</small>
        </a>
      </Link>
      <Link href="/">
        <a className={styles.link}>
          <span className={styles.label}>Contact</span>
          <small className={styles.subtitle}>Get in touch</small>
        </a>
      </Link>
    </nav>
  );
}
