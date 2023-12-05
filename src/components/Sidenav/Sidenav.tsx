import { faList, faMap, faSliders, faCloud } from '@fortawesome/free-solid-svg-icons'
import umbrella from '../../assets/umbrella.png'
import React from 'react'
import SidenavItem from './SidenavItem'

const navItems = [
  { name: "Weather", icon: faCloud },
  { name: "Cities", icon: faList },
  { name: "Map", icon: faMap },
  { name: "Settings", icon: faSliders }
];

const Sidenav: React.FC = () => {
  return (
    <div className='flex items-center justify-start h-screen pl-[50px]'>
      <div className='bg-[#202b3b] w-28 h-[90%] rounded-2xl flex items-center flex-col'>
        <img src={umbrella} alt='' className='rounded-lg mt-4 object-scale-down h-14 mb-12' />
        {
          navItems.map((item) => (
            <SidenavItem key={item.name} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Sidenav