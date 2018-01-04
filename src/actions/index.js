const API_KEY = '';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
const url = `${ROOT_URL}&q=${city},GB`;

  return {
    type: FETCH_WEATHER
  };
}
