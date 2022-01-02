import Link from 'next/link';
import styles from './navigation.module.css';
import { useState } from 'react';
import classNames from 'classnames';

export default function Navigation({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <label
          htmlFor="nav-toggle"
          className={classNames(styles.navToggleLabel, isOpen && styles.toggleOpen)}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
        </label>

        <h1 className={styles.navName}>
          <Link href="/"><a>Terra</a></Link>
        </h1>

        <nav className={styles.nav}>
          <ul onClick={() => setIsOpen(false)}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Terra</a>
              </Link>
            </li>
            <li>
              <Link href="/timeline">
                <a>Timeline</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Lore</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Characters</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.content}>{children}</main>
    </>
  );
}
