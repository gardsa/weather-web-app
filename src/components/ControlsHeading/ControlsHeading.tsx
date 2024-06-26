import { ViewControl } from "../ViewControl";

import styles from './ControlsHeading.module.css';

export function ControlsHeading({ cityName }: { cityName: string }) {
  return (
    <section className={styles.heading}>
      <h2 className={styles.city}>{cityName}</h2>
      <ViewControl />
    </section>
  )
};