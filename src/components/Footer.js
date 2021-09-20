import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};
const defaultProps = {};
const Footer = () => {
    return <footer>
        <Container className="footer">
            <Row className="sec-heading">
                <Col sm={4}>
                    <div>
                        <img width="100%" src="media/img/genie-logo-inline.png" alt="Genie Signal" />
                    </div>
                </Col>
                <Col sm={8}>
                    <Nav>
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#features">Developers</Nav.Link>
                        <Nav.Link href="#features">Launch The App</Nav.Link>
                        <Nav.Link href="#features">Download MetaMask</Nav.Link>
                        <Nav.Link href="#deets">FAQ</Nav.Link>
                    </Nav>
                </Col>
            </Row>
            <p className="disclaimer">
                <b>Disclaimer :</b> The data provided is for informational purposes only. Past results are no guarantee of future results. Strategy’s that have worked in the past may or may not work in the future. This should not be construed as a solicitation to trade stocks please consult your financial advisor. Gains or losses will largely be determined by your choice as to when to turn on and off this service, which algorithm you choose and which stocks you choose to deploy in your brokerage account.
            </p>
        </Container>
    </footer>;
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
// #endregion

export default Footer;
