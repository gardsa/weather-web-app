import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import { ThreeHourResponse } from "../../types";
import { getThreeHourlyForecastData, HourlyForecastDataType } from "../../utils";
import { ItemCard } from "../ItemCard";

import { useMediaQuery } from "@mantine/hooks";
import styles from './ThreeHourlyForecast.module.css';

type ThreeHourlyForecastProps = {
  list: ThreeHourResponse["list"],
}

dayjs.extend(localizedFormat)

export function ThreeHourlyForecast({ list }: ThreeHourlyForecastProps) {
  const isDesktop = useMediaQuery('(width >= 48rem)', true);

  return (
    <section className={styles.section}>
      {!isDesktop ? Object.entries(getThreeHourlyForecastData(list)).map(([day, items]: [string, Array<HourlyForecastDataType>]) => {
        return (
          <div key={day} className={styles.wrapper}>
            <p className={styles.day}>{day}</p>
            <div className={styles.items}>
              {items.map((item: HourlyForecastDataType, index: number) => (
                <ItemCard
                  key={item.time}
                  feelsLike={item.feelsLike}
                  humidity={item.humidity}
                  iconDescription={item.iconDescription}
                  iconId={item.iconId}
                  isFirstItem={index === 0}
                  temp={item.temp}
                  title={item.time}
                />
              ))}
            </div>
          </div>
        )
      }) : Object.entries(getThreeHourlyForecastData(list)).map(([day, items]: [string, Array<HourlyForecastDataType>]) => {
        return items.map((item: HourlyForecastDataType, index: number) => (
          <ItemCard
            key={item.time}
            feelsLike={item.feelsLike}
            humidity={item.humidity}
            iconDescription={item.iconDescription}
            iconId={item.iconId}
            isFirstItem={index === 0}
            temp={item.temp}
            title={item.time}
            subtitle={day}
          />
        ));
      })}
    </section>
  )
}