import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/components/getInfo.css';

export function OneUserGI() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isAuthenticated) {
        return (
            <>
                <img src={user.picture} alt={user.name} className='userimg'/>
                <br></br><br></br>
                <p>{user.name}</p>
            </>
        )
    } else if(isLoading) {
        return <p>Loading...</p>
    } else {
        return <p></p>
    }
}