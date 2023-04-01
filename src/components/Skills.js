import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Skills() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='skill'>
                        <h1 className='bold'>Skills</h1>
                        <p>The skills that I have.</p>
                    </div>
                    <section className='skill-bx flex justify-content-center align-item-center'>
                        <div style={{ opacity: "0.85" }}>
                            <div>
                                <Card style={{ width: '18rem', color: 'black' }} className="">
                                    <Card.Body>
                                        <Card.Title>Front-end</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '18rem', color: 'black' }} className="">
                                    <Card.Body>
                                        <Card.Title>Front-end</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '18rem', color: 'black' }} className="">
                                    <Card.Body>
                                        <Card.Title>Front-end</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </section>
                    <section>

                    </section>
                </Col>
            </Row>
        </Container>



    );
}

export default Skills;