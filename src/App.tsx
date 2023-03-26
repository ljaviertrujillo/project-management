import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes } from "./models";
import { lazy, Suspense } from "react";
import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";
import { NavLink } from "react-router-dom";

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Loading</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route  element={<AuthGuard />}>
                <Route path="/*" element={<Private />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
