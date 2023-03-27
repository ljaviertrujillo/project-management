import './styles/pure.scss'
import { ButtonType } from './ButtonUser'
import { BsBell, BsCalendar3, BsPerson } from 'react-icons/bs'
import {AiOutlinePoweroff} from 'react-icons/ai'
import { classNames } from '../../models'

interface Props{
    title: string,
    type: ButtonType
    handle?: () => void
}

function UtilityButton({title, type, handle}: Props) {
  return (
    <button
        type='button'
        onClick={handle}
        className={classNames('utility-button',type)}>
        {title === 'Notifications' 
            ? <BsBell className='icon'/> 
            : title === 'Calendar'
                ? <BsCalendar3 className='icon' />
                : title === 'Profile'
                    ? <BsPerson className='icon' />
                    : <AiOutlinePoweroff className='icon' />
        }
        {type==='large' ? title: null }
    </button>
  )
}

export default UtilityButton
