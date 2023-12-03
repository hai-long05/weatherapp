import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import umbrella from '../assets/umbrella.png'

const Sidenav = () => {
  return (
    <div className='flex items-center justify-start h-screen pl-[50px]'>
      <div className='bg-[#202b3b] w-28 h-[90%] rounded-2xl flex items-center flex-col'>
        <img src={umbrella} alt='' className='rounded-lg mt-4 object-scale-down h-14 mb-12' />
        <div className='flex flex-col justify-center items-center hover:bg-slate-600 rounded-lg w-20 h-16 cursor-pointer'>
          <FontAwesomeIcon icon={faCloud} size='2x' className='text-[#f0f1f1] '/>
          <p className='text-[#f0f1f1] font-semibold'>Weather</p>
        </div>
      </div>
    </div>
  )
}

export default Sidenav