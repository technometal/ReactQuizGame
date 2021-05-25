import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

import About from "./pages/about";
import General from "./pages/general";
import Home from "./pages/home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import "./buttons.css";

const App = () => {
  return (
    <>
      {/*main Routing */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/general">
            <General />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

//creating Redux store and using Redux Thunk
ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
