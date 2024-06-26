import dayjs from "dayjs";
import { ArrayElement, ThreeHourResponse } from "./types";

export const convertKelvinToCelsius = (kelvin: number):number => {
  return Math.round(kelvin - 273.15);
}

export const buildIconURL = (iconId: string): string => {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;

}

export const getDominantIcon = (icons: { id: string, description: string }[]): { id: string, description: string } => {
  const iconCount = icons.reduce((acc: Record<string, { count: number, description: string}>, icon: { id: string, description: string }) => {
    if (acc[icon.id]) {
      acc[icon.id] = {
        ...acc[icon.id],
        count: acc[icon.id].count + 1,
      }
    } else {
      acc[icon.id] = { count: 1, description: icon.description };
    }
    return acc;
  }, {});

  const dominantIcon = Object.entries(iconCount).reduce((a, b) => {
    return iconCount[a[0]] > iconCount[b[0]] ? a : b
  });
  
  return {
    id: dominantIcon[0],
    description: dominantIcon[1].description,
  };
};

export type DayForecastDataType = {
  date: string;
  high: number;
  humidity: number,
  icons: {
    id: string,
    description: string,
  }[];
  low: number;
};
export type FiveDayForecastDataType = {
  [key: string]: DayForecastDataType;
};
export const getFiveDayForecastData = (list: ThreeHourResponse["list"]): FiveDayForecastDataType => {
  return list.reduce((days: FiveDayForecastDataType, item: ArrayElement<ThreeHourResponse["list"]>) => {
    const dayKey = dayjs.unix(item.dt).format('ddd');
    
    const itemHigh = convertKelvinToCelsius(item.main.temp_max);
    const itemLow = convertKelvinToCelsius(item.main.temp_min);

    // High and low temps
    if (days[dayKey]) {
      if (itemHigh > days[dayKey].high) {
        days[dayKey].high = itemHigh;
      }
      if (itemLow < days[dayKey].low) {
        days[dayKey].low = itemLow;
      }
    } else {
      days[dayKey] = {
        date: dayjs.unix(item.dt).format('MMM D'),
        high: itemHigh,
        low: itemLow,
        humidity: item.main.humidity,
        icons: [],
      };
    }

    // Weather icons
    days[dayKey].icons = [
      ...days[dayKey].icons,
      { 
        id: item.weather[0].icon,
        description: item.weather[0].description,
      }
    ];

    return days
  }, {});
};

export type HourlyForecastDataType = {
  feelsLike: number;
  humidity: number,
  iconId: string,
  iconDescription: string,
  temp: number;
  time: string;
};
export type ThreeHourlyForecastDataType = {
  [key: string]: Array<HourlyForecastDataType>;
};
export const getThreeHourlyForecastData = (list: ThreeHourResponse["list"]) => {
  return list.reduce((days: ThreeHourlyForecastDataType, item: ArrayElement<ThreeHourResponse["list"]>) => {
    const dayKey = dayjs.unix(item.dt).format('ddd');
    const time = dayjs.unix(item.dt).format('HH:mm');
    const iconId = item.weather[0].icon;
    const iconDescription = item.weather[0].description;
    const temp = convertKelvinToCelsius(item.main.temp);
    const feelsLike = convertKelvinToCelsius(item.main.feels_like);
    const humidity = item.main.humidity;
  
    if (days[dayKey]) {
      days[dayKey] = [
        ...days[dayKey],
        {
          feelsLike,
          humidity,
          iconId,
          iconDescription,  
          temp,
          time,
        },
      ];
    } else {
      days[dayKey] = [
        {
          feelsLike,
          humidity,
          iconId,
          iconDescription,  
          temp,
          time,
        },
      ];
    }

    return days;
  }, {});
}