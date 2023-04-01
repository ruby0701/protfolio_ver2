import React from 'react';
import { Col, Container, Row, Nav, Tab, Card, Tabs } from 'react-bootstrap';

function Projects() {
    const projects = [
        {
            title: "Test1",
            description: "test",
            skillSet: "abc",
            imgUrl: "add later",
        },
        {
            title: "Test2",
            description: "test",
            skillSet: "abc",
            imgUrl: "add later",
        },
        {
            title: "Test3",
            description: "test",
            skillSet: "abc",
            imgUrl: "add later",
        },
    ]
    return (
        <section className='project' id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Projects that I made.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="link-1">
                            <Nav justify variant="tabs" className='nav-tabs mb-5 justify-content-center align-items-center' id='nav-pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Project 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Project 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3">Project 3</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Tab.Container>
                        <Tab.Content>
                            <Tab.Pane eventKey="link-1">
                                <Row>
                                    <Col sm={6} md={4}>

                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="link-2">
                                <Row>
                                    <Card style={{ width: '18rem', color: 'white' }} className="">
                                        <Card.Body>
                                            <Card.Title>Front-end</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="link-3">
                                <Row>
                                    <Card style={{ width: '18rem', color: 'white' }} className="">
                                        <Card.Body>
                                            <Card.Title>Front-end</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;