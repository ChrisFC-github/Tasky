import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "../client/components/Auth0/Auth0ProviderWithHistory";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);