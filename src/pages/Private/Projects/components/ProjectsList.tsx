import '../styles/project.scss'

import { useContext } from "react";
import { ProjectContext, ViewType } from "../../../../context";
import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";

function ProjectsList () {
  const { view, projects } = useContext(ProjectContext)
  const projectCategories = ["All Projects"];
 
  if (projects.filter((project) => project.favorite === true).length > 0) {
    projectCategories.unshift("Favorites");
  }

  const filterProjects = (category: string) => {
    if (category === "Favorites") {
      const filter = projects.filter((project) => project.favorite === true);
      return filter;
    }
    return projects;
  };

  return (
    <div className="projects">
      {view === ViewType.BOARD ? (
        projectCategories.map(category => {
          return (
            <div key={category} className="project-content">
              <span className="cat-title">{category}</span>
              <div className="project-list">
                {filterProjects(category).map((project, i) => {
                  return <ProjectCard key={i} project={project} />;
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div className='projectlist-content'>
        <table className="project-table">
          <thead className="project-head">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Tags</th>
              <th>Members</th>
              <th></th>
              <th>Due Date</th>
              <th>Last Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => {
              return (
                <ProjectList key={i} project={project} />
              )
            })}
          </tbody>
        </table>
        </div>
      )}

    </div>
  );
}

export default ProjectsList;
