import { useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { SecondaryMenu } from "../../../components/container";
import ProjectForm from "../../../components/form/ProjectForm";
import { PageContext } from "../../../context/PageContext";
import { ProjectContext } from "../../../context/ProjectContext";
import { AppStore } from "../../../redux/store";
import ProjectsList from "./components/ProjectsList";

function Projects() {
  const isLoading = useSelector((state: AppStore) => state.project.isLoading)
  const {projectForm} = useContext(ProjectContext)
  const {showSideBar} = useContext(PageContext)

  return (
    <div className="project-content" onClick={() => showSideBar(false)}>
    <SecondaryMenu />
      {projectForm ? <ProjectForm /> : null}
      {
        isLoading 
        ? <>Cargando PROYECTOS</> 
        : location.pathname !== "/projects" 
          ? null 
          : <ProjectsList />
      }
      <Outlet />
    </div>
  );
}

export default Projects;
