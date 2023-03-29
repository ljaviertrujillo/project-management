import "../styles/project.scss";
import { Link } from "react-router-dom";
import {
  DueDate,
  FavoriteButton,
  OptionsButton,
  PriorityTag,
  ProgressBar,
} from "../../../../components/pure";
import {
  classNames,
  PrivateRoutes,
  ProjectInterface,
} from "../../../../models";
import { ButtonType } from "../../../../components/pure/ButtonUser";
import OpenProjectButton from "./OpenProjectButton";

function ProjectCard({ project }: { project: ProjectInterface }) {
  const {
    id,
    title,
    description,
    image,
    active,
    dueDate,
    tasks,
    priority,
    favorite,
  } = project;

  const noImg = '/public/no-img.png'

  return (
    <div
      key={id}
      className={classNames("project", active !== "inactive" ? active : "")}
    >
      <div className="project-img" style={{ backgroundImage: image !== "" ? `url(${image})` : `url(${noImg})` }}>
        <PriorityTag priority={priority} />
      </div>
      <div className="project-info">
        <header className="project-header">
          <div className="project-title">
            <h2>{title[0].toUpperCase() + title.replace(title[0], "")}</h2>
            <FavoriteButton favorite={favorite} id={id || ""} />
          </div>
          <OptionsButton type={ButtonType.Small} />
        </header>
        <main className="project-main">
          <p className="project-description">{description}</p>
          tags
          <ProgressBar tasks={tasks} />
          <div className="bottom">
            Members
            <DueDate dueDate={dueDate} />
          </div>
        </main>
        <footer className="project-footer">
          <OpenProjectButton id={id || ''} />
        </footer>
      </div>
    </div>
  );
}

export default ProjectCard;
