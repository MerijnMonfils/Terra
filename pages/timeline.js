import TimeBlock from '../components/time_block';
import styles from '../styles/Timeline.module.css';
import timeline from '../data/timeline'

export default function Timeline() {
  return (
    <>
      <ul className={styles.list}>
        {timeline.map(({ date, description }) => (
          <TimeBlock key={date} date={date} description={description} />
        ))}
      </ul>
    </>
  )
}
