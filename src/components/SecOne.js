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
    return <header className="sec-one" >
        <Container id="sec-one"  >
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="gen-card text-center">
                        <h1>Advanced developers making <b>institutional level trading algorithms</b> accessible by everyone.</h1>
                        <h1><b>No costs to start.</b></h1>
                        <h1>Access trading technology at no cost <b>for 3-6 months.</b></h1>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    </header>;
}

SecOne.propTypes = propTypes;
SecOne.defaultProps = defaultProps;
// #endregion

export default SecOne;
