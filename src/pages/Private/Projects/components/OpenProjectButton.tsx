import { Link } from "react-router-dom";
import { PrivateRoutes } from "../../../../models";

function OpenProjectButton({id}: {id: string}) {
  return (
    <Link
      to={`${PrivateRoutes.PROJECTS}/${id}`}
      state={id}
      className="project-button"
    >
      Open Project
    </Link>
  );
}

export default OpenProjectButton;
