import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
    return (
        <div id='contact'>
            <footer className='footer'>
                <Container>
                    <Row className='align-item-center'>

                        <Col sm={6}>
                            <h1>Ruby Wang</h1>
                        </Col>
                        <Col sm={6} className="text-center text-sm-end">
                            <div className='social-icon'>
                                <span className='navbar-icon'>
                                    <div className='social-icons'>
                                        <a href="https://www.linkedin.com/feed/" target='_blank' rel="noreferrer" className='text-white'>
                                            <LinkedInIcon></LinkedInIcon>
                                        </a>

                                        <a href="https://github.com/ruby0701" target='_blank' rel="noreferrer" className='text-white'>
                                            <GitHubIcon></GitHubIcon>
                                        </a>
                                        <div>
                                            <a href="mailto:ruby0701@gmail.com" className="text-decoration-none" style={{ color: "white" }}> ruby0701@gmail.com</a>
                                        </div>
                                    </div>

                                </span>
                            </div>
                            <p>CopyRight 2023. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container >
            </footer >
        </div>
    );
}

export default Footer;