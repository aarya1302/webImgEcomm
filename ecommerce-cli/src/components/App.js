import React, { useEffect } from "react";
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
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const { default: Layout } = require("./layout");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route path="/" component={Home} exact />
          <Switch>
            <Route path="/product/:id" component={Product} />
          </Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
