import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRight } from '@mui/icons-material';
import RubyImg from "../assests/RubyWang.jpg"

function Banner() {
    return (
        <div id="about">
            <scetion className="banner">
                <Container>
                    <Row className='align-items-center'>

                        <Col xs={12} md={6} xl={7}>
                            <h1>Hi, I am Ruby, <br></br>a Front-end Developer</h1>
                            <p>Nice to meet you!</p>
                            <a href="mailto:ruby0701@gmail.com" className="text-decoration-none" style={{ color: "white" }}>Contact me!<ArrowRight size={25}></ArrowRight></a>
                        </Col>

                        <Col xs={12} md={6} xl={5}>
                            <img src={RubyImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </scetion>
        </div>
    );
}


export default Banner;