import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        <Link to="/faq">FAQ</Link>
        <Link to="/developers">developers</Link>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/developers">Developers</Nav.Link>
        <Nav.Link href="https://geniesignal.webflow.io/" target="_blank">Launch The App</Nav.Link>
        <Nav.Link href="https://metamask.io/download" target="_blank">Download MetaMask</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
// #endregion

export default Navigation;
