import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './Logout.js'
import { Container, Col, Row } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <>
          <Container fluid>
            <Row>
              <Col><LogoutButton /></Col>
            </Row>
            <Row>
              <Col> <Link to="/">Home</Link> </Col>
            </Row>
            <Row>
              <Col><Link to="/profile">Profile</Link></Col>
            </Row>
          </Container >
        </>




        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      </Navbar >
    );
  }
}

export default Header;
