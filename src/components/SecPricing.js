import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const SecPricing = () => {
    return <section className="price-sec" >
        <Container id="price-sec">
            <Row className="sec-heading">
                <Col sm={12} className="text-center">
                    <h1>Discover our <b>Pricing </b></h1>
                    <p>Algorithms are tested and free for the first 6 months, then, users can stake these amounts
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm={4}>
                    <div class="price-card">
                        <div className="price">
                            <span class="price-num"><span>$</span> 499</span>
                            <span class="price-time">3-Months</span>
                        </div>
                        <ul className="features">
                            <li>Use All Trading Technology</li>
                            <li>Development API</li>
                            <li>Individual License</li>
                        </ul>
                        <div className="cta mb-3">
                            <a href="https://geniesignal.on.fleek.co/#/">
                                <img width="24" src="./media/svg/arrow-right.svg" /></a>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="price-card">
                        <div className="price">
                            <span class="price-num"><span>$</span> 749</span>
                            <span class="price-time">6-Months</span>
                        </div>
                        <ul className="features">
                            <li>Use All Trading Technology</li>
                            <li>Development API</li>
                            <li>Individual License</li>
                        </ul>
                        <div className="cta mb-3">
                            <a href="https://geniesignal.on.fleek.co/#/">
                                <img width="24" src="./media/svg/arrow-right.svg" /></a>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="price-card">
                        <div className="price">
                            <span class="price-num"><span>$</span> 1,000</span>
                            <span class="price-time">6-Months</span>
                        </div>
                        <ul className="features">
                            <li>Use All Trading Technology</li>
                            <li>Development API</li>
                            <li>Individual License</li>
                        </ul>
                        <div className="cta mb-3">
                            <a href="https://geniesignal.on.fleek.co/#/">
                                <img width="24" src="./media/svg/arrow-right.svg" /></a>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="price-card">
                        <div className="price">
                            <span class="price-num"><span>$</span> 5,995</span>
                            <span class="price-time">6-Months</span>
                        </div>
                        <ul className="features">
                            <li>Use All Trading Technology</li>
                            <li>Development API</li>
                            <li>Individual License</li>
                        </ul>
                        <div className="cta mb-3">
                            <a href="https://geniesignal.on.fleek.co/#/">
                                <img width="24" src="./media/svg/arrow-right.svg" /></a>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="price-card">
                        <div className="price">
                            <span class="price-num">Negotiated License Fees</span>
                            <span class="price-time">Institutional</span>
                        </div>
                        <ul className="features">
                            <li>Designed for hedge funds, mutual funds, and trading firms</li>
                            <li>Development API</li>
                            <li>Open API support</li>
                        </ul>
                        <div className="cta mb-3">
                            <a href="https://geniesignal.on.fleek.co/#/">
                                <img width="24" src="./media/svg/arrow-right.svg" /></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>;
}

SecPricing.propTypes = propTypes;
SecPricing.defaultProps = defaultProps;
// #endregion

export default SecPricing;
