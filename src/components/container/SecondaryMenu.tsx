import React, { useContext, useEffect } from 'react'
import { useLocation, useMatch } from 'react-router-dom'
import { ProjectContext, ViewType } from '../../context'
import { classNames } from '../../models'
import { AddButton } from '../pure'
import { ButtonType } from '../pure/ButtonUser'

function SecondaryMenu() {
    const {projectForm, taskForm, handleProjectForm, handleTaskForm, view, handleView, resetView} = useContext(ProjectContext)
    const location = useLocation()
    const projectMath = useMatch('/projects/:id')
    let buttonStyle: object = {}

    useEffect(() => {
        resetView()
    }, [location])

  return (
    <div className='secondary-menu'>
        <ul className='menu'>
        {projectMath?.pathname ? (
          <li className='menu-option'>
            <button 
                type="button" 
                className={classNames('menu-option', view === ViewType.DASHBOARD ? 'active' : '')}
                onClick={() => handleView(ViewType.DASHBOARD)}
                >
              DashBoard
            </button>
          </li>
        ) : null}
        <li>
          <button
            type="button"
            className={classNames('menu-option', view === ViewType.BOARD ? 'active' : '')}
            onClick={() => handleView(ViewType.BOARD)}
          >
            Board
          </button>
        </li>
        <li>
          <button
            type="button"
            className={classNames('menu-option', view === ViewType.LIST ? 'active' : '')}
            onClick={() => handleView(ViewType.LIST)}
          >
            List
          </button>
          
        </li>
        {projectMath?.pathname ? (
            <li>
            <button
                type="button"
                className={classNames('menu-option', view === ViewType.FILES ? 'active' : '')}
                onClick={() => handleView(ViewType.FILES)}
            > 
                Files
            </button>
            </li>
        ): null}
        <li>
            <button 
                type="button" 
                className={classNames('menu-option', view === ViewType.CALENDAR ? 'active' : '')}
                onClick={() => handleView(ViewType.CALENDAR)}
                >
            Calendar
            </button>
        </li>
      </ul>
        {projectMath
            ? <AddButton type={ButtonType.Large} title='New Task' state={taskForm} handle={handleTaskForm} />
            : <AddButton type={ButtonType.Large} title='New Project' state={projectForm} handle={handleProjectForm} />
        }
        
    </div>
  )
}

export default SecondaryMenu
