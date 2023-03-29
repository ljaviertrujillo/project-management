import { lazy, Suspense, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Nav, SideBar } from "../../components/container";
import { PageContext } from "../../context/PageContext";
import ProjectContextProvider from "../../context/ProjectContext";
import { classNames, PrivateRoutes } from "../../models";
import { FetchError, FetchSucess, FetchStart } from "../../redux/states/project";
import { AppStore } from "../../redux/store";
import { getProjects } from "../../services/firebase/projectController";
import { Project } from "./Projects";

const Home = lazy(() => import ('./Home/Home'))
const Projects = lazy(() => import('./Projects/Projects'))
const Tasks = lazy(() => import('./Tasks/Tasks'))
const Team = lazy(() => import('./Team/Team'))
const Settings = lazy (() => import('./Settings/Settings'))
const Profile = lazy(() => import('./Profile/Profile'))
const Dashboard = lazy(() => import ('./Dashboard/Dashboard'))

export const initializeProjects = async (dispatch: any) => {
  try {
    dispatch(FetchStart())
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
    dispatch(FetchSucess(projects))
  } catch (error) {
    dispatch(FetchError(error))
  }
}

function Private() {
  const dispatch = useDispatch()
  const { sidebarOpen, closeUserOption } = useContext(PageContext)

  useEffect(() => {
    initializeProjects(dispatch);
  }, []);

  return (
    <ProjectContextProvider>
      <SideBar />
      <div 
        className={classNames('content', sidebarOpen ? 'blur' : '' )}
      >
        <Nav />
        <div onClick={closeUserOption}>
          <Suspense fallback={<></>}>
            <Routes>
                <Route index element={<Home />} />
                <Route path={PrivateRoutes.PROJECTS} element={<Projects />} />
                <Route path={PrivateRoutes.TASKS} element={<Tasks />} />
                <Route path={PrivateRoutes.TEAM} element={<Team />} />
                <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
                <Route path={`${PrivateRoutes.PROJECTS}/:id`} element ={<Project />} />
                <Route path={PrivateRoutes.SETTINGS} element={<Settings />} />
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </ProjectContextProvider>
  )
}
export default Private