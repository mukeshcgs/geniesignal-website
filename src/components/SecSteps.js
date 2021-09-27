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
        {/* <img class="bg" src="media/img/bg.png" alt="" /> */}

        <Container id="steps-sec"  >
            <Row>
                <Col sm={4} className="mb-3">
                    <div className="steps-card">
                        <span className="step-num">01</span>
                        <h3>No logins required, access secured by MetaMask wallet.</h3>
                        <h3> Then one click to authorize the connection to your brokerage account.</h3>
                    </div>

                </Col>
                <Col sm={4} className="mb-3">
                    <div className="steps-card">
                        <span className="step-num">02</span>

                        <h3>Research and select investment strategies from the drop down menu. </h3><h3>The strategies historical data and back-testing data can give you an edge.</h3>
                    </div>
                </Col>
                <Col sm={4} className="mb-3">
                    <div className="steps-card">
                        <span className="step-num">03</span>
                        <h3>
                            Select your stock(s) and deploy your selected trading technology to your investment account with 1 click.</h3><h3> Automatically, trades from your selected strategies will be deployed into your account.</h3>
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
