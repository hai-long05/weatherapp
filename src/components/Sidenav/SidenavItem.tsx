import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'

type SidenavItemProps = {
  item: {
    name: string
    icon: IconDefinition
  }
}

const SidenavItem: React.FC<SidenavItemProps> = ({item}) => {
  
  const currentPage = useLocation().pathname.replace('/', '')

  return (
    <Link key={item.name} to={'/' + item.name.toLowerCase()}>
      <div className={'flex flex-col justify-center items-center hover:bg-slate-600 rounded-lg w-20 h-16 cursor-pointer py-12 ' + (currentPage === item.name.toLowerCase() ? 'text-[#f0f1f1]' : 'text-[#a39f9e]')}>
          <FontAwesomeIcon icon={item.icon} size='2x' className=''/>
          <p className='font-semibold'>{item.name}</p>
      </div>
    </Link>
  )
}

export default SidenavItem