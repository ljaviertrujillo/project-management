import "./styles/container.scss";
import { useLocation, useMatch } from "react-router-dom";
import { features, PrivateRoutes, settings } from "../../models";
import { BackButton, ButtonUser, ProgressBar, UserOptions, UtilityButton } from "../pure";
import { ButtonType } from "../pure/ButtonUser";
import { useEffect, useState } from "react";

function Nav() {
  const [openOptions, setOpenOptions] = useState<boolean>(false)
  const location = useLocation();
  const projectMath = useMatch("projects/:id");
  const labelPage =
    features.find((feature) => feature.url === location.pathname) ||
    settings.find((setting) => setting.url === location.pathname);

    // const [windowDimensions, setWindowDimensions] = useState<{ width: number, height: number }>({
    //   width: window.innerWidth,
    //   height: window.innerHeight,
    // });
  
    // useEffect(() => {
    //   function handleResize() {
    //     setWindowDimensions({
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     });
    //   }
  
    //   window.addEventListener('resize', handleResize);
  
    //   return () => window.removeEventListener('resize', handleResize);
    // }, []);

  return (
    <nav className="nav">
      <div className="nav-content">
        {projectMath?.pathname === null || location.pathname === '/profile' ? (
          <BackButton route={location.pathname==='/profile' ? '/' : PrivateRoutes.PROJECTS}/>
        ) : (
          <span className="page-label">{labelPage?.label}</span>
        )}
        <ProgressBar />
        <div className="utilities">
          <UtilityButton type={ButtonType.Small} title='Calendar' />
          <UtilityButton type={ButtonType.Small} title='Notifications' />
          <ButtonUser type={ButtonType.Large} handle={() => setOpenOptions(!openOptions)} />
        </div>
      </div>
      <UserOptions openOptions={openOptions} />
    </nav>
  );
}

export default Nav;
