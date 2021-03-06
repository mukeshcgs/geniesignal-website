import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};

const defaultProps = {};

const SecThree = () => {
    return <section className="stake-sec" >
        <Container id="stake-sec">
            <Row>
                <Col sm={5}>
                    <img class="" width="100%" src="media/img/stats.png" alt="" />
                </Col>
                <Col sm={7}>
                    <div >
                        <h1 className="dark-blue"><b>Make money </b> by <b>using and owning trading technology</b> that works for me?</h1>
                        <p>Users Pick From Powerful Algorithms to Stake to Own</p>
                        <p>Algo’s are researched and created by independent developers who compete to get them listed on Genie Signal as Trading NFT’s.</p>
                        <div className="cta mb-3">
                            <Button size="lg">Launch The App</Button>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    </section>;
}

SecThree.propTypes = propTypes;
SecThree.defaultProps = defaultProps;
// #endregion

export default SecThree;
