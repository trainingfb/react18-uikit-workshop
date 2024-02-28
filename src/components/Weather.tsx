import axios from 'axios';
import { useEffect, useState } from 'react';

export const BASEURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534&q='

interface WeatherProps {
  city: string;
}

export function Weather(props: WeatherProps) {
  const [meteo, setMeteo] = useState<Meteo | null>(null);
  const { city } = props;


  useEffect(() => {
    axios.get<Meteo>(`${BASEURL}${city}`)
      .then(res => setMeteo(res.data))
  }, [city]);

  return <div>
    <h1>Weather in {city}</h1>
    { meteo && <pre>{meteo?.main.temp}°</pre> }
  </div>
}




////////////////////////////////////////
////////// TYPES ///////////////////////
////////////////////////////////////////
export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Meteo {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
