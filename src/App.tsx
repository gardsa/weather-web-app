import '@mantine/core/styles.css';
import axios from "axios";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

import './App.css';
import { ControlsHeading } from './components/ControlsHeading';
import { FiveDayForecast } from "./components/FiveDayForecast";
import { Layout } from './components/Layout';
import { ThemeProvider } from './components/ThemeProvider';
import { ThreeHourlyForecast } from "./components/ThreeHourlyForecast";
import { ViewValue } from "./components/ViewControl";
import { ThreeHourResponse } from "./types";

export const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast";
// NOTE: in real-world app, this should be stored in a secure location, such as Git Secrets or Vercel Environment Variables
export const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
export const CITY_COORDINATES = {
  lat: 49.2827,
  lon: -123.1207,
};

type ViewValueContextType = {
  viewValue?: ViewValue;
  setViewValue?: Dispatch<SetStateAction<ViewValue>>;
}

export const ViewValueContext = createContext<ViewValueContextType>({});

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [viewValue, setViewValue] = useState<ViewValue>(ViewValue.ThreeHourly);

  const [data, setData] = useState<ThreeHourResponse | null>(null);
  const { city, list } = data || {};

  const fetchWeatherData = () => {
    setIsLoading(true);

    axios.get(`${OPEN_WEATHER_API_URL}?lat=${CITY_COORDINATES.lat}&lon=${CITY_COORDINATES.lon}&appid=${OPEN_WEATHER_API_KEY}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        alert("Could not retrieve weather data. Please try again later.");
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchWeatherData()
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        {isLoading && <p>Loading...</p>}
        {(city && list && !isLoading) && (
          <ViewValueContext.Provider value={{ viewValue, setViewValue }}>
            <ControlsHeading cityName={city.name} />
            {viewValue === ViewValue.ThreeHourly && (
              <ThreeHourlyForecast list={list} />
            )}
            {viewValue === ViewValue.FiveDay && (
              <FiveDayForecast list={list} />
            )}
          </ViewValueContext.Provider>
        )}
        {(!data && !isLoading) && (
          <p>Could not retrieve weather data. Click <button onClick={fetchWeatherData}>here</button> to try again.</p>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
