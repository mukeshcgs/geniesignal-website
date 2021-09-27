import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import BackgroundVideo from './BackgroundVideo';


const DevSec = () => {
    // const videoSource = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
    const videoSource = "../media/GeinieSignalHeaderVideo.mp4";
    const scrollToBottom = () => {
        const bottomEle = document.getElementById("video-id");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }

    return <section className="dev-sec" >
        <BackgroundVideo
            blur={2}
            videoSource={videoSource} >
            <div className='content'>
                <div className='sub-content' >
                    <Container id="dev-sec"  >
                        <Row>
                            <Col sm={12}>
                                <div className="gen-card">
                                    <h1>GET LISTED   <b>LIST YOUR TRADING ALGO</b>  </h1>
                                    <p>Submit your technology for listing in the form below</p>
                                    <div className="cta mb-3">
                                        <Button size="lg">Get started</Button>
                                        <Button size="lg">How to list</Button>
                                    </div>
                                </div>
                            </Col>
                            {/* <Col sm={5}>
                    <div className="gen-card">
                    </div>
                </Col> */}
                        </Row>
                    </Container>
                </div>
            </div>
        </BackgroundVideo>



    </section >;
}

// DevSec.propTypes = propTypes;
// DevSec.defaultProps = defaultProps;
// #endregion

export default DevSec;
