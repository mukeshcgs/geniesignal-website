import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const SecSteps = () => {
    return <section className="steps-sec" >
        <Container id="steps-sec"  >
            <Row>
                <Col sm={4}>
                    <div className="steps-card">
                        <span className="step-num">01</span>
                        <h2>No logins required, access secured by MetaMask wallet.</h2>
                        <h2> Then one click to authorize the connection to your brokerage account.</h2>
                    </div>

                </Col>
                <Col sm={4}>
                    <div className="steps-card">
                        <span className="step-num">02</span>

                        <h2>Research and select investment strategies from the drop down menu. </h2><h2>The strategies historical data and back-testing data can give you an edge.</h2>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="steps-card">
                        <span className="step-num">03</span>
                        <h2>
                            Select your stock(s) and deploy your selected trading technology to your investment account with 1 click.</h2><h2> Automatically, trades from your selected strategies will be deployed into your account.</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>;
}

SecSteps.propTypes = propTypes;
SecSteps.defaultProps = defaultProps;
// #endregion

export default SecSteps;
