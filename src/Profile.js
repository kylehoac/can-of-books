import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component {
    render() {
        const { user } = this.props.auth0;
        console.log(user);
        return (
            <>
                <h1>Hello {user.name}</h1>
                <h2> Email: {user.email}</h2>
                <img alt = "profile" src = {user.picture}></img>
            </>
        );
    }
}

export default withAuth0(Profile)