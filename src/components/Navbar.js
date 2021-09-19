import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Navigation = () => {
  return <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
    <Navbar.Brand href="#home"><img height="35" src="media/img/genie-logo-inline.png" alt="Genie Signal" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#features">Developers</Nav.Link>
        <Nav.Link href="#features">Launch The App</Nav.Link>
        <Nav.Link href="#features">Download MetaMask</Nav.Link>
        <Nav.Link href="#deets">FAQ</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
// #endregion

export default Navigation;