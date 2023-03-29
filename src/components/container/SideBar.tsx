import './styles/container.scss'
import { classNames, features, ItemInterface, settings } from "../../models/"

import { useContext, useEffect, useState } from 'react'
import { SidebarItemView } from '../pure'
import { VscClose } from 'react-icons/vsc'
import { ProjectContext } from '../../context'
import { useLocation } from 'react-router-dom'
import { PageContext } from '../../context/PageContext'

export interface RouteItemInterface {
    route: ItemInterface,
}

function SideBar() {
    const location = useLocation()
    const { sidebarOpen, showSideBar } = useContext(PageContext)

  return (
    <aside
        className={classNames('sidebar', sidebarOpen ? 'expanded' : '')}
        >
        <div className="logo">
            Logo
            <VscClose className='close-button' onClick={() => showSideBar(false)} />
        </div>

        <div className="routes">
            <div className="features">
                {features.map(route =>  (<SidebarItemView key={route.id} route={route} />))}
            </div>
            <div className="settings">
                {settings.map(route => (<SidebarItemView key={route.id} route={route} />))}
            </div>
        </div>
    </aside>
  )
}

export default SideBar