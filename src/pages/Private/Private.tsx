import { lazy } from "react";
import { NavLink } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import Logout from "../../components/Logout";
import { PrivateRoutes, PublicRoutes } from "../../models";
import { RoutesWithNotFound } from "../../utilities";

const Home = lazy(() => import ('./Home/Home'))
const Projects = lazy(() => import('./Projects/Projects'))
const Tasks = lazy(() => import('./Tasks/Tasks'))
const Team = lazy(() => import('./Team/Team'))
const Settings = lazy (() => import('./Settings/Settings'))
const Profile = lazy(() => import('./Profile/Profile'))
const Admin = lazy(() => import('./Admin/Admin'))
const Dashboard = lazy(() => import ('./Dashboard/Dashboard'))

function Private() {
  return (
    <>
      <Logout />
      <Routes>
        <Route index element={<Home />} />
        <Route path={PrivateRoutes.PROJECTS} element={<Projects />} />
        <Route path={PrivateRoutes.TASKS} element={<Tasks />} />
        <Route path={PrivateRoutes.TEAM} element={<Team />} />
        <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
        <Route path={PrivateRoutes.SETTINGS} element={<Settings />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.ADMIN} element={<Admin />} />
      </Routes>
    </>
  )
}
export default Private