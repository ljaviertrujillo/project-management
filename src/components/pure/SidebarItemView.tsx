import "./styles/pure.scss";
import { NavLink } from "react-router-dom";
import { RouteItemInterface } from "../container/SideBar";
import { useContext } from "react";
import { PageContext } from "../../context/PageContext";

function SidebarItemView({ route }: RouteItemInterface) {
  const { showSideBar } = useContext(PageContext)
  return (
    <NavLink to={route.url} className="route-link" onClick={ () => showSideBar(false)}>
      <div className="active-bar"></div>
      <div className="route">
        <route.icon className="icon" />
        <span className="label">{route.label}</span>
      </div>
    </NavLink>
  );
}

export default SidebarItemView;
