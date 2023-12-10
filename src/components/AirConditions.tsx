import { faTemperatureHalf, faWind, faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AirConditionsType } from "./Weather"

type AirConditionsInterface = {
  data: AirConditionsType | undefined
}

const AirConditions: React.FC<AirConditionsInterface> = ({data}) => {

  return (
    <div className='w-full bg-[#202b3b] mt-5 rounded-2xl h-[300px] px-8 pt-8 text-[rgb(124,131,142)]'>
      <div className='font-extrabold text-sm'>
        AIR CONDITIONS
      </div>
      <div className='flex flex-row justify-between pt-5 pr-40'>
        <div className="w-52">
          <div className='text-2xl font-semibold'><FontAwesomeIcon icon={faTemperatureHalf} size="1x" className="pr-1" />REAL FEEL</div> 
          <div className='text-4xl pt-1 font-extrabold pl-5 text-[#f1f0f0]'>{data?.feel}</div>
        </div>
        <div className="w-52">
          <div className='text-2xl font-semibold'><FontAwesomeIcon icon={faWind} size="1x" className="pr-1" />WIND</div> 
          <div className='text-4xl pt-1 font-extrabold pl-5 text-[#f1f0f0]'>{data?.wind} km/h</div>
        </div>
      </div>
      <div className='flex flex-row justify-between pt-10 pr-40 '>
        <div className="w-52">
          <div className='text-2xl font-semibold'><FontAwesomeIcon icon={faSun} size="1x" className="pr-1" />SUNRISE</div> 
          <div className='text-4xl pt-1 font-extrabold pl-5 text-[#f1f0f0]'>{data?.sunrise}</div>
        </div>
        <div className="w-52">
          <div className='text-2xl font-semibold'><FontAwesomeIcon icon={faMoon} size="1x" className="pr-1" />SUNSET</div> 
          <div className='text-4xl pt-1 font-extrabold pl-5 text-[#f1f0f0]'>{data?.sunset}</div>
        </div>
      </div>
    </div>
  )
}

export default AirConditions