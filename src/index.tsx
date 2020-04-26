import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { Provider } from "react-redux";
import configreStore from "./redux/configureStore";

import Root from "./root";

const { store } = configreStore();

ReactDOM.render(
  <Root>
    <Provider store={store}>
      <App />
    </Provider>
  </Root>,
  document.getElementById("root")
);
