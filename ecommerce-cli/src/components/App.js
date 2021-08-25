import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Home from "../screens/Home";
import Product from "../screens/Product";
import Profile from "../screens/Profile";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const { default: Layout } = require("./layout");

function App() {
  var getUser = useSelector((state) => state.user);
  const [err, setErr] = useState();
  const [userInfo, setUser] = useState();
  {
    var { loading, user, error } = getUser ? getUser : {};
  }
  useEffect(
    function onUpdate() {
      setErr(error);
      setUser(user);
    },
    [getUser]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route
            path="/"
            component={() => <Home user={userInfo}></Home>}
            exact
          />
          <Switch>
            <Route path="/product/:id" component={Product} />
          </Switch>
          <Route
            path="/signin"
            component={() => <SignIn error={err} user={userInfo}></SignIn>}
          />
          <Route
            path="/signup"
            component={() => <SignUp user={userInfo}></SignUp>}
          />

          <Route
            path="/profile"
            component={() => <Profile user={userInfo}></Profile>}
          />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
