import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const HeroSec = () => {
    return <header className="hero-sec" >
        <Container id="hero-sec"  >
            <Row>
                <Col sm={7}>
                    <div className="gen-card">
                        <h1>OWN AND USE TRADING TECHNOLOGY FROM GLOBAL COMPETING DEVELOPERS</h1>
                        <p>Top automatic trading tools that deploy instantly to your broker account.</p>
                        <div className="cta mb-3">
                            <Button size="lg">Launch The App</Button>
                            <Button size="lg">Pricing</Button>
                        </div>
                        <p>TRADING DEVELOPERS PROVE THE WORTH OF THEIR TECHNOLOGY BY COMPETING FOR LISTING</p>
                    </div>
                </Col>
                {/* <Col sm={5}>
                    <div className="gen-card">
                    </div>
                </Col> */}
            </Row>
        </Container>
    </header>;
}

HeroSec.propTypes = propTypes;
HeroSec.defaultProps = defaultProps;
// #endregion

export default HeroSec;
