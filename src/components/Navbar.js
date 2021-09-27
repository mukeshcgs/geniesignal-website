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

const Navigation = () => {
  return <Navbar collapseOnSelect expand="lg" bg="" variant="dark" fixed="top" sticky="top">
    <Navbar.Brand href="#home">
      <Link className="" to="/"><img height="35" src="media/img/genie-logo-inline.png" alt="Genie Signal" /></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    {/* <button
      aria-controls="responsive-navbar-nav"
      type="button"
      aria-label="Toggle navigation"
      class="navbar-toggler collapsed">

      <span class="navbar-toggler-icon"><img height="35" src="media/svg/menu.svg" alt="Genie Signal" /></span>
    </button> */}
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/developers">Developers</Link>
        <Nav.Link href="https://geniesignal.webflow.io/" target="_blank">Launch The App</Nav.Link>
        <Nav.Link href="https://metamask.io/download" target="_blank">Download MetaMask</Nav.Link>
        <Link className="nav-link faq-btn" to="/faq">FAQ</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
// #endregion

export default Navigation;
