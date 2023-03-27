import './styles/container.scss'
import { classNames, features, ItemInterface, settings } from "../../models/"

import { useState } from 'react'
import { SidebarItemView } from '../pure'

export interface RouteItemInterface {
    route: ItemInterface,
    isOpen: boolean
}

function SideBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <aside
        className={classNames('sidebar', isOpen ? 'expanded' : '')}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
        >
        <div className="logo">Logo</div>
        <div className="routes">
            <div className="features">
                {features.map(route =>  (<SidebarItemView key={route.id} route={route} isOpen={isOpen} />))}
            </div>
            <div className="settings">
                {settings.map(route => (<SidebarItemView key={route.id} route={route} isOpen={isOpen} />))}
            </div>
        </div>
    </aside>
  )
}

export default SideBar