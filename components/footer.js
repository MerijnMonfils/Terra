import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerRight}>
        <a href="https://github.com/MerijnMonfils">
          <i className="icon"></i>
        </a>
      </div>
      <div className={styles.footerLeft}>
        <p className={styles.footerLinks}>
          <Link href="/index">
            <a>
              Home
            </a>
          </Link>
          <Link href="/index">
            <a>
              Terra
            </a>
          </Link>
          <Link href="/timeline">
            <a>
            Timeline
            </a>
          </Link>
          <Link href="/lore">
            <a>
              Lore
            </a>
          </Link>
          <Link href="#">
            <a>Characters</a>
          </Link>
        </p>
        <p>Merijn Monfils &copy; 2022</p>
      </div>
    </footer>
  );
}
