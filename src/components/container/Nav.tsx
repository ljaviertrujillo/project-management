import "./styles/container.scss";
import { useLocation, useMatch } from "react-router-dom";
import { features, PrivateRoutes, settings } from "../../models";
import { BackButton, ButtonUser, HamburguerButton, ProgressBar, UserOptions, UtilityButton } from "../pure";
import { ButtonType } from "../pure/ButtonUser";
import { useContext } from "react";
import { ProjectContext } from "../../context";
import { PageContext } from "../../context/PageContext";

function Nav() {
  const { OpenUserOptions } = useContext(PageContext)
  const location = useLocation();
  const projectMath = useMatch("projects/:id");
  const labelPage =
    features.find((feature) => feature.url === location.pathname) ||
    settings.find((setting) => setting.url === location.pathname);

  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-header">
          <HamburguerButton />
        {projectMath?.pathname !== undefined || location.pathname === '/profile' ? (
          <BackButton route={location.pathname==='/profile' ? '/' : PrivateRoutes.PROJECTS}/>
        ) : (
          <span className="page-label">{labelPage?.label}</span>
        )}
        </div>
        
        {projectMath?.pathname !== undefined ? <ProgressBar /> : null}
        <div className="footer">
          <div className="utilities">
            <UtilityButton type={ButtonType.Small} title='Calendar' />
            <UtilityButton type={ButtonType.Small} title='Notifications' />
          </div>
          <ButtonUser type={ButtonType.Large} handle={OpenUserOptions} />
        </div>
      </div>
      <UserOptions />
    </nav>
  );
}

export default Nav;
