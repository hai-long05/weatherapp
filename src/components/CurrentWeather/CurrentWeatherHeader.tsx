import React from 'react'
import { CurrentWeatherDataType } from '../Weather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getIconFromWeather } from '../../utils/getIconFromWeather'

type CurrentWeatherHeaderInterface = {
  data: CurrentWeatherDataType | undefined
}

const CurrentWeatherHeader: React.FC<CurrentWeatherHeaderInterface> = ({data}) => {

  return (
    <>
      <div className='flex justify-between flex-row pt-10'>
        <div className='flex-col'>
          <p className='pl-6 font-bold text-3xl'>{data?.city}</p>
          <p className='pl-6 font-bold text-5xl pt-24'>{data?.temperature}°</p>
        </div>
        <div className='flex justify-center items-center pr-10 flex-col'>
          <FontAwesomeIcon icon={getIconFromWeather(data?.weather)} size='5x' />
          <p>{data?.weather}</p>
        </div>
      </div> 
    </>
  )
}

export default CurrentWeatherHeader