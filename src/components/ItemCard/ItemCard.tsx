import { buildIconURL } from "../../utils";
import { Temperature } from "../Temperature";

import styles from './ItemCard.module.css';

type ItemCardProps = {
  feelsLike?: number,
  humidity?: number,
  iconDescription: string,
  isFirstItem?: boolean,
  iconId: string,
  subtitle?: string,
  temp?: number,
  tempHigh?: number,
  tempLow?: number,
  title: string,
}

export function ItemCard({
  feelsLike,
  humidity,
  iconDescription,
  iconId,
  isFirstItem, // TODO: add extra styles for first item
  subtitle,
  temp,
  tempHigh,
  tempLow,
  title,
}: ItemCardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headings}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <h4 className={styles.subtitle}><small>{subtitle}</small></h4>}
      </div>
      <div className={styles.iconTemps}>
        {temp && (
          <div className={styles.iconSingleTemp}>
            <img className={styles.image} src={buildIconURL(iconId)} alt={iconDescription} />
            <Temperature
              temperature={temp}
              unit="celsius"
            />
          </div>
        )}
        {tempHigh && tempLow && (
          <div className={styles.iconMultipleTemps}>
            <img className={styles.image} src={buildIconURL(iconId)} alt={iconDescription} />
            <div className={styles.multipleTemps}>
              <Temperature
                temperature={tempHigh}
                unit="celsius"
              />
              <small>
                <Temperature
                  temperature={tempLow}
                  unit="celsius"
                />
              </small>
            </div>
          </div>
        )}
        {feelsLike && (
          <small className={styles.feelsLikeTemp}>
            Feels like{' '}
            <Temperature
              hideUnit
              temperature={feelsLike}
              unit="celsius"
            />
          </small>
        )}
      </div>
      <small className={styles.humidity}>
        Humidity: <span>{humidity}%</span>
      </small>
    </div>
  );
}