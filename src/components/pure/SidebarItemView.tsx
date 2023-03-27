import './styles/pure.scss'
import { NavLink } from 'react-router-dom'
import { RouteItemInterface } from '../container/SideBar'
import { BsThreeDots } from 'react-icons/bs'
import { classNames } from '../../models'

function SidebarItemView({route, isOpen}: RouteItemInterface) {
  return (
    <div className='route-view'>
        <NavLink to={route.url} className='route-link'>
            <div className='active-bar'></div>
            <div className={classNames('route', isOpen ? 'expanded' : '')}>
                <route.icon className='icon' />
                <span className='label'>{route.label}</span>
            </div>
        </NavLink>
        {route.subMenu ? (
            <button  className={classNames('route-submenu', isOpen ? 'expanded' : '')}>
                <BsThreeDots className='icon'/>
            </button>
        ): null}
    </div>
  )
}

export default SidebarItemView
