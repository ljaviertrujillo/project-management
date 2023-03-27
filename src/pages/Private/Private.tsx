import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Nav, SideBar } from "../../components/container";
import { PrivateRoutes } from "../../models";
import { ProjectInterface } from "../../models/project.model";
import { FetchError, FetchProjects } from "../../redux/states/project";
import { getProjects } from '../../services/firebase/projectController'


const Home = lazy(() => import ('./Home/Home'))
const Projects = lazy(() => import('./Projects/Projects'))
const Tasks = lazy(() => import('./Tasks/Tasks'))
const Team = lazy(() => import('./Team/Team'))
const Settings = lazy (() => import('./Settings/Settings'))
const Profile = lazy(() => import('./Profile/Profile'))
const Dashboard = lazy(() => import ('./Dashboard/Dashboard'))

export const inicializeProjects = async (dispatch: any) => {
  try {
    const projectsData = await getProjects()
    const projects = projectsData.map(project => ({
      ...project,
      tasks: project.tasks.map(task => ({
        ...task,
        subtasks: task.subtasks.map(subtask => ({
          ...subtask
        }))
      }))
    }))
    dispatch(FetchProjects(projects))
  } catch (error) {
    dispatch(FetchError(error))
  }
}

function Private() {

  const dispatch = useDispatch()

  useEffect(() => {
    inicializeProjects(dispatch)
  }, [])  


  
  return (
    <>
      <SideBar />
      <Nav />
      <div className="content">
        <Suspense fallback={<>Loading</>}>
          <Routes>
              <Route index element={<Home />} />
              <Route path={PrivateRoutes.PROJECTS} element={<Projects />} />
              <Route path={PrivateRoutes.TASKS} element={<Tasks />} />
              <Route path={PrivateRoutes.TEAM} element={<Team />} />
              <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
              <Route path={PrivateRoutes.SETTINGS} element={<Settings />} />
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}
export default Private