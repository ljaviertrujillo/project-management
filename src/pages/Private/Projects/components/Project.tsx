import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { SecondaryMenu } from "../../../../components/container"
import TaskForm from "../../../../components/form/TaskForm"
import { ProjectContext } from "../../../../context"
import store, { AppStore } from "../../../../redux/store"
import ProjectDetail from "./ProjectDetail"

function Project() {
  const { projects, taskForm } = useContext(ProjectContext)

  const location = useLocation()
  const projectId = location.state
  const project = projects.find(project => project.id === projectId)

  return (

    <>
      <ProjectDetail />
      <SecondaryMenu />
      { taskForm 
        ? <TaskForm />
        : null
      }
    </>
  )
}

export default Project