import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

import { Auth0LoginButton } from './components/auth0/login'
import { Auth0LogoutButton } from './components/auth0/logout'

ReactDOM.render(
  <Auth0Provider
    domain="burgerapps.eu.auth0.com"
    clientId="tmXS50pmz3n3DRbF6R145S2N88nsq3qH"
    redirectUri={window.location.origin}
  >
    <Auth0LoginButton />
    <br></br><br></br>
    <Auth0LogoutButton />
  </Auth0Provider>,
  document.getElementById('root')
);
