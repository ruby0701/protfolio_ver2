import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Skills() {
    return (
        <div id="skills">
            <Container>
                <Row>
                    <Col>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className='skill'>
                            <h1 className='bold'>Skills</h1>
                            <p>The skills that I have.</p>
                        </div>
                        <section className='skill-bx justify-content-center align-item-center'>
                            <div style={{ opacity: "0.85" }} className="flex inline-box">
                                <Col className='d-flex justify-content-center align-item-center'>
                                    <div>
                                        <Card style={{ width: '18rem', color: 'black' }} className="flex-fill mx-3">
                                            <Card.Body>
                                                <Card.Title>Front-end</Card.Title>
                                                <Card.Text>
                                                    HTML / CSS / JavaScript<br></br>
                                                    React / Bootstrap
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card style={{ width: '18rem', color: 'black' }} className="flex-fill mx-3">
                                            <Card.Body>
                                                <Card.Title>Experience with</Card.Title>
                                                <Card.Text>
                                                    C / C++ / Java / Python / Git
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card style={{ width: '18rem', color: 'black' }} className="flex-fill mx-3">
                                            <Card.Body>
                                                <Card.Title>Languages</Card.Title>
                                                <Card.Text>
                                                    Traditional Chinese : Native speaker <br></br>
                                                    English : TOEIC 970<br></br>
                                                    Japanese : JLPT N1
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </div>


                        </section>
                        <section>

                        </section>
                    </Col>
                </Row>
            </Container >

        </div >

    );
}

export default Skills;