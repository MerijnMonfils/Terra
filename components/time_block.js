import styles from './time_block.module.css';

export default function TimeBlock({ date, description }) {
  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <time className={styles.time}>{date}</time> {description}
      </div>
    </li>
  );
}
