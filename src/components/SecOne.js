import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const SecOne = () => {
    return <header className="hero-sec" >
        <Container id="hero-sec"  >
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <div className="gen-card">
                        <h1>Advanced developers making <b>institutional level trading algorithms</b> accessible by everyone.</h1>
                        <h1><b>No costs to start.</b></h1>
                        <h1>Access trading technology at no cost <b>for 3-6 months.</b></h1>
                    </div>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    </header>;
}

SecOne.propTypes = propTypes;
SecOne.defaultProps = defaultProps;
// #endregion

export default SecOne;
