import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

function Loginbutton() {
  const {
    loginWithPopup,
  } = useAuth0();

  return (
    <Button onClick={loginWithPopup}>Log in</Button>
  )
}

export default Loginbutton;

// We used examples from https://auth0.com/docs/libraries/auth0-react. Used a popup instead of redirect for the login