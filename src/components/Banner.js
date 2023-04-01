import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRight } from '@mui/icons-material';
import RubyImg from "../assests/RubyWang.jpg"

function Banner() {
    return (
        <scetion className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my protfolio</span>
                        <h1>Hi, I am Ruby<span className='wrap'>, a Front-end Developer</span></h1>
                        <p>Nice to meet you!</p>
                        <button onClick={() => {
                            console.log("Connect");
                        }}>Contact me!<ArrowRight size={25}></ArrowRight></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={RubyImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </scetion>
    );
}


export default Banner;