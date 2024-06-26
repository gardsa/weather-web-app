import { http, HttpResponse } from 'msw'

import { CITY_COORDINATES, OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } from '../App'
import { mockData } from './mockData'
 
export const handlers = [
  http.get(`${OPEN_WEATHER_API_URL}?lat=${CITY_COORDINATES.lat}&lon=${CITY_COORDINATES.lon}&appid=${OPEN_WEATHER_API_KEY}`, () => {
    return HttpResponse.json(mockData)
  }),
]