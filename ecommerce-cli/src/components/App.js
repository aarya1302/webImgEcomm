import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import Product from "../screens/Product";

const { default: Layout } = require("./layout");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route path="/" component={Home} exact />

          <Route path="/product" component={Product} />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
