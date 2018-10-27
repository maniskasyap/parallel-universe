import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/index";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
// import App from "./App";
import AppContainer from "./app-container";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// library.add(faHome);

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
