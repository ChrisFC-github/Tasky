import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/app';
import { Auth0Provider } from '@auth0/auth0-react';
// import './scss/index';

// require('dotenv').config();

const domain = "taskycalendar.us.auth0.com";
const clientId = "YgX1vMoyV7yvnXj8gO6XSTUAW6CT9Hzr";
const redirectURLafterlogin = "http://localhost:3000/dashboard";
// const auth0_audience = "https://tasky-api/";
// const auth0_issuer = "https://taskycalendar.us.auth0.com/";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// const redirectURLafterlogin = process.env.REACT_APP_REDIRECT_URL;

ReactDOM.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={redirectURLafterlogin}>
        <App/>
    </Auth0Provider>, 
    document.getElementById('root')
);