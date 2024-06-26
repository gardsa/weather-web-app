import { ThreeHourResponse } from "../../types";
import { DayForecastDataType, getDominantIcon, getFiveDayForecastData } from "../../utils";
import { ItemCard } from "../ItemCard";

import styles from './FiveDayForecast.module.css';

type ForecastProps = {
  list: ThreeHourResponse["list"],
};

export function FiveDayForecast({ list }: ForecastProps) {
  // TODO: check this works correctly tomorrow
  const data = Object.entries(getFiveDayForecastData(list)).slice(0, 5);

  return (
    <section className={styles.section}>
      {data.map(([day, item]: [string, DayForecastDataType]) => {
        const icon = getDominantIcon(item.icons)

        return (
          <ItemCard
            key={day}
            iconDescription={icon.description}
            iconId={icon.id}
            subtitle={item.date}
            tempHigh={item.high}
            tempLow={item.low}
            humidity={item.humidity}
            title={day}
          />
        );
      })}
    </section>
  );

}