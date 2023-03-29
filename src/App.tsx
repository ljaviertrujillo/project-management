import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContextProvider from "./context/PageContext";
import { AuthGuard } from "./guards";
import { PublicRoutes } from "./models";
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";
import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <PageContextProvider>
            <BrowserRouter>
              <RoutesWithNotFound>
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route  element={<AuthGuard />}>
                  <Route path="/*" element={<Private />} />
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </PageContextProvider>
        </Provider>
    </div>
  );
}

export default App;
