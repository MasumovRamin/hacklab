import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import RootReducer from "./RootReducer.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
