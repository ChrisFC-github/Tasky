// @ts-nocheck
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="btn btn-outline-light mx-2" onClick={() => loginWithRedirect()}>
        Get Started
      </button>
    )
  )
}

export default LoginButton;
