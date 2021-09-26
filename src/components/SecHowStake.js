import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const SecHowStake = () => {
    return <section className="stake-sec" >

        <Container id="stake-sec">
            <Row className="sec-heading">
                <Col sm={12}>
                    <h1>How can I <b>stake ownership in trading tech</b> that works for me?</h1>
                </Col>
            </Row>
            <Row className="ownership">
                <Col sm={6}>
                    <div >
                        <p>After 3-6 months of a new trading technology successfully listing on Genie Signal, access is available only to licensed users.
                        </p>
                        <p>Genie Signal creates an NFT for trading technology that many investors can own and use. Load Ethereum into your MetaMask wallet, select the trading technology you want to own, and press the stake button.</p>
                    </div>
                    <div className="mb-4">
                        <h2>Payments and Rewards    </h2>
                        <p>There is no minimum, 1/3 of the funds goes to the developer, and 1/3 goes back to staking owners of the trading technology.</p>
                    </div><div className="mb-4">
                        <h2>Owners receive 1/3 of generated license fees from the use of their selected trading technology</h2>
                        <p>Now you can make money not only using, but staking trading algorithms.</p>

                        <div className="cta mb-4">
                            <Button size="lg">Launch The App</Button>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <img class="bg" src="media/img/bg-Y.png" alt="" />
                    <div>
                        <img width="100%" src="media/img/stake.png" alt="Genie Signal" />
                    </div>
                </Col>
            </Row>

        </Container>
    </section>;
}

SecHowStake.propTypes = propTypes;
SecHowStake.defaultProps = defaultProps;
// #endregion

export default SecHowStake;
