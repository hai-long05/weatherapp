import React, { useEffect, useState } from 'react'
import { WeatherDataType } from './CurrentWeather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSpinner, faWater } from '@fortawesome/free-solid-svg-icons'

type CurrentWeatherHeaderInterface = {
  data: WeatherDataType | undefined
}

const CurrentWeatherHeader: React.FC<CurrentWeatherHeaderInterface> = ({data}) => {

  useEffect(() => {
    console.log(data)
  }, [])

  const getIconFromWeather = () => {
    switch (data?.weather) {
      case "Clouds":
        return faCloud;

      case "Mist":
        return faWater;
    }
    return faSpinner;
  }


  return (
    <>
      <div className='flex justify-between flex-row pt-10'>
        <div className='flex-col'>
          <p className='pl-6 font-bold text-3xl'>{data?.city}</p>
          <p className='pl-6 font-bold text-5xl pt-12'>{data?.temperature} °C</p>
        </div>
        <div className='flex justify-center items-center pr-10 flex-col'>
          <FontAwesomeIcon icon={getIconFromWeather()} size='5x' />
          <p>{data?.weather}</p>
        </div>
      </div> 
    </>
  )
}

export default CurrentWeatherHeader