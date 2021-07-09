import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";
import FadeLoader from "react-spinners/FadeLoader";
import LoaderCss from "./components/LoaderCss";
import { Toaster } from "react-hot-toast";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./utils/history";
import VerifyOtp from "./pages/VerifyOtp";

function App() {
  useEffect(() => {}, []);
  const auth = localStorage.getItem("auth");
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      <Router>
        <Suspense
          fallback={<FadeLoader size={25} color={"#325aee"} css={LoaderCss} />}
        >
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/register" exact component={Register} />
              <Route path="/verifyotp" exact component={VerifyOtp} />
              <Route path="/login" exact component={Login} />
              <PrivateRoute auth={auth} path="/team" exact component={Team} />
              <PrivateRoute
                auth={auth}
                path="/projects"
                exact
                component={Projects}
              />
              <PrivateRoute
                auth={auth}
                path="/celendar"
                exact
                component={Calendar}
              />
              <PrivateRoute
                auth={auth}
                path="/reports"
                exact
                component={Reports}
              />
            </Switch>
          </ConnectedRouter>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
