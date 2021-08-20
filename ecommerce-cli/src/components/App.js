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
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
