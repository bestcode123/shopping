import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => { logout({ returnTo: window.location.origin }) }}>
            Logout
        </button>
    )
}


export default Auth0LogoutButton;