import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react"
// TODO: wrap everything in Auth0
ReactDOM.render(
<Auth0Provider
    domain="dev-y1yealdz.us.auth0.com"
    clientId="2zyh0FQbgOls8JWf703BSvy1vtD4jhG8"
    redirectUri={window.location.origin}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Auth0Provider>,
  document.getElementById('root')
);
