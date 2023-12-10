import React from 'react'
import { ForecastDataType } from '../Weather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getIconFromWeather } from '../../utils/getIconFromWeather'

type TodayWeatherForecastInterface = {
  data: ForecastDataType[] | undefined
}

const TodayWeatherForecast: React.FC<TodayWeatherForecastInterface> = ({data}) => {

  return (
    <>
    <div className='bg-[#202b3b] h-64 mt-10 rounded-2xl pt-8 pl-8 pr-8'>
      <div className='text-[rgb(124,131,142)] font-extrabold text-sm'>
        TODAY'S FORECAST 
      </div>
      <div className='text-[rgb(124,131,142)] flex flex-row h-full text-2xl justify-between pt-5 pb-3'>
        {data?.map((d, index) => (
          <div key={d.time} className={'flex flex-col items-center justify-between h-36 w-52 ' + (index !== 5 ? 'border-r-[1px]' : '')}>
              <div className='text-lg font-extrabold'>
                {d.time}
              </div>
              <FontAwesomeIcon icon={getIconFromWeather(d.weather)} size='1x' className='text-[#f1f0f0]' />
              <div className='text-2xl font-extrabold text-[#f1f0f0]'>
                {d.temperature}°
              </div>
            </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default TodayWeatherForecast