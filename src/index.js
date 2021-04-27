import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react"
// TODO: wrap everything in Auth0
ReactDOM.render(
<Auth0Provider
    domain="dev-y1yealdz.us.auth0.com"
    clientId="77AaOk3jUdAXWJ5M47ycAH3zkwFAdGIP"
    redirectUri="https://sleepy-kalam-9ad9bc.netlify.app/"
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Auth0Provider>,
  document.getElementById('root')
);
