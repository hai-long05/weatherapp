import React, { useEffect, useState } from 'react'
import { CordsType } from '../pages/WeatherPage'
import { fetchWeatherData } from '../services/fetchData'
import CurrentWeatherHeader from './CurrentWeather/CurrentWeatherHeader'
import FetchLoader from './loader/FetchLoader'
import SearchInput from './search/SearchInput'
import TodayWeatherForecast from './Forecast/TodayWeatherForecast'
import AirConditions from './AirConditions'

type WeatherInterface = {
  location: CordsType
}

export type CurrentWeatherDataType = {
  city: string
  temperature: number
  weather: string
}

export type ForecastDataType = {
  time: string
  temperature: number
  weather: string
}

export type AirConditionsType = {
  feel: number
  wind: number
  sunset: string
  sunrise: string
}

const Weather: React.FC<WeatherInterface> = ({location}) => {

  const [currentWeatherData, setCurrentWeatherData] = useState<CurrentWeatherDataType>();
  const [forecastData, setForecastData] = useState<ForecastDataType[]>();
  const [airConditionsData, setAirConditionsData] = useState<AirConditionsType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getWeatherData = async () => {
      setIsLoading(true);
      if (location.latitude == null || location.longitude == null) {
        return;
      } else {
        const weather = await fetchWeatherData(location.latitude, location.longitude, 'https://api.openweathermap.org/data/2.5/weather?');
        const todayForeCast = await fetchWeatherData(location.latitude, location.longitude, 'https://api.openweathermap.org/data/2.5/forecast?');
        console.log(weather);
        setCurrentWeatherData({ 
          city: weather.name,
          temperature: Math.round(weather.main.temp - 273.15),
          weather: weather.weather[0].main
        });
        setForecastData(todayForeCast.list.slice(0, 6).map((item: any) => {
          const forecastObj: ForecastDataType = {
            time: item.dt_txt.substring(11,16),
            temperature: Math.round(item.main.temp - 273.15),
            weather: item.weather[0].main
          };
          return forecastObj;
        }));
        setAirConditionsData({
          feel: Math.round(weather.main.feels_like - 273.15),
          wind: weather.wind.speed,
          sunrise: (new Date(weather.sys.sunrise)).toString().slice(16, 24),
          sunset: (new Date(weather.sys.sunset)).toString().slice(16, 24)
        })
      };
      setIsLoading(false);
    }
    getWeatherData()
  }, [location])

  return (
    <>
      {
        isLoading ? (
          <div className='w-full h-full'>
            <FetchLoader /> 
          </div>
        ) : (
          <div className='w-full h-full grid grid-cols-10 pt-[45px] pl-12'>
            <div className='col-span-6 w-full'>
              <SearchInput />
              <CurrentWeatherHeader data={currentWeatherData}/>
              <TodayWeatherForecast data={forecastData}/>
              <AirConditions data={airConditionsData}/>
            </div>
            <div className='col-span-4'>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Weather