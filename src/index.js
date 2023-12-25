import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";
import {store} from './store/store'
import {Provider} from 'react-redux'

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
);