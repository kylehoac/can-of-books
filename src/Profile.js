import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, Col, Row } from 'react-bootstrap'

class Profile extends React.Component {
    render() {
        const { user } = this.props.auth0;
        console.log(user);
        if(!user) {
            return <h1>Unauthorized</h1>
        }
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col><img alt="profile" src={user.picture}></img></Col>
                        </Row>
                        <Row>
                        <Col><h1>Hello, {user.name}</h1></Col>
                        </Row>
                       <Row> <Col><h2> Email: {user.email}</h2></Col>
                    </Row>
                </Container>



            </>
        );
    }
}

export default withAuth0(Profile)