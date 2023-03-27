import { classNames } from '../../models'
import { Logout } from '../container'
import { ButtonType } from './ButtonUser'
import './styles/pure.scss'
import UtilityButton from './UtilityButton'

interface Props{
    openOptions: boolean
}

function UserOptions({openOptions}: Props) {
  return (
    <div className={classNames("user-options", openOptions ? 'expanded' : '')}>
        <div className=''>
            Modo claro
            Modo Noche
        </div>
        <div className='options'>
            <UtilityButton type={ButtonType.Large} title
            ='Calendar' />
            <UtilityButton type={ButtonType.Large} title
            ='Notifications' />
        </div>
        <div className='options'>
            <UtilityButton type={ButtonType.Large} title='Profile'/>
            <Logout />
        </div>
    </div>
  )
}

export default UserOptions
