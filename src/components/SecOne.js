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
    return <section className="sec-one" >
        <Container id="sec-one"  >
            <Row>
                <Col sm={12}>
                    <div className="gen-card text-center22">
                        <h1><b className="dark-blue">Advanced developers making institutional level trading algorithms accessible by</b> everyone. No costs to start. Access trading technology at no cost for 3-6 months. </h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>;
}

SecOne.propTypes = propTypes;
SecOne.defaultProps = defaultProps;
// #endregion

export default SecOne;
