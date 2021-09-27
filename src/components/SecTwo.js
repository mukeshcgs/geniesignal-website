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
                <Col sm={7}>
                    <div className=" ">
                        <h1><b>Access all licensed algos</b> by owning <b>trading technology</b> of your choice</h1>
                        <h4>Algo's that are older than three months are only available to Genie Signal trading technology owners.</h4>
                        <div className="cta mb-3">
                            <Button size="lg">Pricing</Button>
                        </div>
                    </div>
                </Col>
                <Col sm={5}>
                    <img class="" width="100%" src="media/img/genie.png" alt="" />
                </Col>
            </Row>
        </Container>
    </section>;
}

SecTwo.propTypes = propTypes;
SecTwo.defaultProps = defaultProps;
// #endregion

export default SecTwo;
