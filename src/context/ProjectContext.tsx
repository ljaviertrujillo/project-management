import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ProjectInterface } from "../models";
import { initializeProjects } from "../pages/Private/Private";
import { FavoriteProject } from "../redux/states/project";
import { AppStore } from "../redux/store";
import { addNewProject, deleteProject, favoriteProject } from "../services/firebase/projectController";

export enum ViewType{
    DASHBOARD= 'dashboard',
    BOARD ='board',
    LIST = 'list',
    CALENDAR = 'calendar',
    FILES = 'files'
}

export interface ProjectContextProps{
    favProject: (id: string) => void,
    addProject: (project: ProjectInterface) => void,
    removeProject: (id: string) => void,
    projects: ProjectInterface[],
    projectForm: boolean,
    taskForm: boolean,
    handleProjectForm: () => void,
    handleTaskForm: () => void,
    view: string,
    handleView: (view: ViewType) => void,
    resetView: () => void,
}

export const ProjectContext = createContext<ProjectContextProps>({
    favProject: function ( id: string ): void {},
    addProject: function ( project: ProjectInterface): void {},
    removeProject: function ( id: string ): void {},
    projects: [],
    projectForm: false,
    taskForm: false,
    handleProjectForm: function (): void {},
    handleTaskForm: function (): void {},
    view: ViewType.BOARD,
    handleView: function ( view: string): void {},
    resetView: function (): void {},
})


function ProjectContextProvider({children}: {children:ReactNode}) {
    const dispatch = useDispatch();
  const projects = useSelector((state: AppStore) => state.project.data)
  const [projectForm, setProjectForm] = useState(false)
  const [taskForm, setTaskForm] = useState(false)
  const [view, setView] = useState<ViewType>(ViewType.BOARD)

  const addProject = async (project: ProjectInterface) => {
    await addNewProject(project);
    setProjectForm(false)
    initializeProjects(dispatch)
  }

  const favProject = async (id: string) => {
    const favorite = projects.find(project => project.id === id)?.favorite || false
    await favoriteProject(id, favorite)
    dispatch(FavoriteProject(id))
};

    const removeProject = async (id: string) => {
        await deleteProject(id)
        initializeProjects(dispatch)
    }

    const handleProjectForm = () => {
        setProjectForm(!projectForm)
    }

    const handleTaskForm = () => {
        setTaskForm(!taskForm)
    }

    const handleView = (view: ViewType) => {
        setView(view)
    }

    const resetView = () => {
        setView(ViewType.BOARD)
    }

    return (
        <ProjectContext.Provider value={{ addProject, removeProject, favProject, projects, projectForm, taskForm, handleProjectForm, handleTaskForm, view, handleView, resetView }} >
            {children}
        </ProjectContext.Provider >
    )
}

export default ProjectContextProvider
