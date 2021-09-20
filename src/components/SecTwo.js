import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const SecTwo = () => {
    return <section className="steps-sec" >
        <img class="bg" src="media/img/bg.png" alt="" />

        <Container id="steps-sec"  >
            <Row>
                <Col sm={12}>
                    <div className=" ">
                        <h1>Access all licensed algos by owning trading technology of your choice</h1>
                        <p>Algo's that are older than three months are only available to Genie Signal trading technology owners.</p>
                        <div className="cta mb-3">
                            <Button size="lg">Pricing</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>;
}

SecTwo.propTypes = propTypes;
SecTwo.defaultProps = defaultProps;
// #endregion

export default SecTwo;
