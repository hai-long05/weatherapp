import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faMap, faSliders, faCloud } from '@fortawesome/free-solid-svg-icons'
import umbrella from '../assets/umbrella.png'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: "Weather", icon: faCloud },
  { name: "Cities", icon: faList },
  { name: "Map", icon: faMap },
  { name: "Settings", icon: faSliders }
];

const Sidenav: React.FC = () => {

  const currentPage = useLocation().pathname.replace('/', '')

  return (
    <div className='flex items-center justify-start h-screen pl-[50px]'>
      <div className='bg-[#202b3b] w-28 h-[90%] rounded-2xl flex items-center flex-col'>
        <img src={umbrella} alt='' className='rounded-lg mt-4 object-scale-down h-14 mb-12' />
        {
          navItems.map((item) => (
            <Link key={item.name} to={'/' + item.name.toLowerCase()}>
              <div className={'flex flex-col justify-center items-center hover:bg-slate-600 rounded-lg w-20 h-16 cursor-pointer py-12 ' + (currentPage === item.name.toLowerCase() ? 'text-[#f0f1f1]' : 'text-[#a39f9e]')}>
                  <FontAwesomeIcon icon={item.icon} size='2x' className=''/>
                  <p className='font-semibold'>{item.name}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Sidenav