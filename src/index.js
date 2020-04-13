import React from "react";
import ReactDOM from "react-dom";
/* REDUX */
import store from "./redux/store.js";
import { Provider } from "react-redux";

import App from "./components/App.jsx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
