// @ts-nocheck
import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// require('dotenv').config('../../../../.env');

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "taskycalendar.us.auth0.com";
  const clientId = "YgX1vMoyV7yvnXj8gO6XSTUAW6CT9Hzr";
  const redirectURLafterlogin = "http://localhost:3000/dashboard";
  const auth0_audience = "https://tasky-api/";
  // const auth0_issuer = "https://taskycalendar.us.auth0.com/";
  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const redirectURLafterlogin = process.env.REACT_APP_AUTH0_REDIRECT_URL;
  // const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const history = useHistory();

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectURLafterlogin}
      onRedirectCallback={onRedirectCallback}
      audience={auth0_audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;