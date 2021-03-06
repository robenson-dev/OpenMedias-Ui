import React from "react";
import ReactDOM from "react-dom";
// import Amplify, { Storage } from 'aws-amplify';
import "./assets/index.scss";
import App from "./components/App";

// Amplify.configure(awsconfig);

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
