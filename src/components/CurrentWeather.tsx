import React, { useEffect, useState } from 'react'
import { CordsType } from '../pages/WeatherPage'
import { fetchWeatherData } from '../services/fetchData'
import CurrentWeatherHeader from './CurrentWeatherHeader'
import FetchLoader from './loader/FetchLoader'
import SearchInput from './search/SearchInput'

type CurrentWeatherInterface = {
  location: CordsType
}

export type WeatherDataType = {
  city: string
  temperature: number
  weather: string
}

const CurrentWeather: React.FC<CurrentWeatherInterface> = ({location}) => {

  const [data, setData] = useState<WeatherDataType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getWeatherData = async () => {
      setIsLoading(true);
      if (location.latitude == null || location.longitude == null) {
        return;
      } else {
        const weather = await fetchWeatherData(location.latitude, location.longitude);
        setData({
          city: weather.name,
          temperature: Math.round(weather.main.temp - 273.15),
          weather: weather.weather[0].main
        });
      }
      setIsLoading(false);
    }
    getWeatherData()
  }, [location])

  return (
    <>
      {
        isLoading ? (
          <div className='w-screen h-full'>
            <FetchLoader /> 
          </div>
        ) : (
          <div className='w-screen h-full grid grid-cols-10 pt-[45px] pl-12'>
            <div className='col-span-5'>
              <SearchInput />
              <CurrentWeatherHeader data={data}/>
            </div>
            <div className='col-span-5'>

            </div>
          </div>
        )
      }
    </>
  )
}

export default CurrentWeather