import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const DevSecOne = () => {
    return <section className="sec-one" >
        <Container id="sec-one"  >
            <Row className="sec-heading">
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="gen-card text-center">
                        <h1>Submit Your  <b>Trading Strategies</b> For<b> Listing</b> </h1>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <Col sm={2}></Col>

                <Col sm={8}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>First name *
                                </Form.Label>
                                <Form.Control type="text" placeholder="First name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last name *
                                </Form.Label>
                                <Form.Control type="text" placeholder="Last name" />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone number" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Describe your algo with backtesting results *
                            </Form.Label>
                            <Form.Control placeholder="Describe..." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col sm={2}></Col>

            </Row>
        </Container>
    </section>;
}

DevSecOne.propTypes = propTypes;
DevSecOne.defaultProps = defaultProps;
// #endregion

export default DevSecOne;
