import React from 'react'
import umbrella from '../assets/umbrella.png'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div className='w-screen h-screen grid grid-cols-2'>
      <div className='col-span-1 flex items-center justify-center'>
        <img src={umbrella} alt="" className='h-[95%] rounded-2xl' />
      </div>
      <div className='col-span-1 text-[#f0f1f1] flex justify-center items-center flex-col'>
        <span className="text-6xl font-bold">AeroWatch</span>
        <span className='text-xl pt-2'>Weather App</span>
        <Link to='/weather' className='mt-14 bg-[#4ee5f6] w-36 h-9 flex justify-center items-center rounded-lg hover:bg-[#184766]'>Show Weather</Link>
      </div>
    </div>
  )
}

export default StartPage