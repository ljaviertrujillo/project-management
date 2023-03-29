import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContext } from '../../context/PageContext'
import { classNames } from '../../models'
import { Logout } from '../container'
import { ButtonType } from './ButtonUser'
import './styles/pure.scss'
import UtilityButton from './UtilityButton'

function UserOptions() {
    const { userOptions, OpenUserOptions } = useContext(PageContext)
    const navigate = useNavigate()

    const profileNavigate = () => {
        navigate('/profile')
        OpenUserOptions()
    }

  return (
    <div className={classNames("user-options", userOptions ? 'expanded' : '')}>
        <div className=''>
            Modo claro
            Modo Noche
        </div>
        <div className='options utilities'>
            <UtilityButton type={ButtonType.Large} title
            ='Calendar' />
            <UtilityButton type={ButtonType.Large} title
            ='Notifications' />
        </div>
        <div className='options'>
            <UtilityButton type={ButtonType.Large} title='Profile' handle={profileNavigate}/>
            <Logout />
        </div>
    </div>
  )
}

export default UserOptions
