import React from 'react';
import { Col, Container, Row, Nav, Tab, Card, Tabs } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

function Projects() {
    const projects = [
        {
            title: "Test1",
            description: "test",
            skillSet: "abc",
            imgUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            title: "Coming soon...",
            description: "Coming soon...",
            skillSet: "Coming soon...",
            imgUrl: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            title: "Coming soon...",
            description: "Coming soon...",
            skillSet: "Coming soon...",
            imgUrl: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ]
    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Projects that I made.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="link-1">
                            <Nav justify variant="tabs" className='nav-tabs mb-5 justify-content-center align-items-center' id='nav-pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" style={{ textDecoration: 'none' }}>{projects[0].title}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">{projects[1].title}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3">{projects[2].title}</Nav.Link>
                                </Nav.Item>

                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="link-1" style={{ color: 'white' }}>
                                    <Row>
                                        <Card style={{ width: '100%', color: 'white' }} className="">
                                            <Card.Body>
                                                <Card.Title style={{ width: '100%', color: 'black' }}><h1>{projects[0].title}</h1></Card.Title>
                                                <Card.Text>
                                                    <img src={projects[0].imgUrl} alt="Project1 screenshot" style={{ width: "80%" }}></img>
                                                    <br></br>
                                                    <span>{projects[0].description}</span>
                                                    <br></br>
                                                    <span>{projects[0].skillSet}</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="link-2" style={{ color: 'white' }}>
                                    <Row>
                                        <Card style={{ width: '100%', color: 'white' }} className="">
                                            <Card.Body>
                                                <Card.Title style={{ width: '100%', color: 'black' }}><h1>{projects[1].title}</h1></Card.Title>
                                                <Card.Text>
                                                    <img src={projects[1].imgUrl} alt="Project2 screenshot" style={{ width: "80%" }}></img>
                                                    <br></br>
                                                    <span>{projects[1].description}</span>
                                                    <br></br>
                                                    <span>{projects[1].skillSet}</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="link-3" style={{ color: 'white' }}>
                                    <Row>
                                        <Card style={{ width: '100%', color: 'white' }} className="">
                                            <Card.Body>
                                                <Card.Title style={{ width: '100%', color: 'black' }}><h1>{projects[2].title}</h1></Card.Title>
                                                <Card.Text>
                                                    <img src={projects[2].imgUrl} alt="Project3 screenshot" style={{ width: "80%" }}></img>
                                                    <br></br>
                                                    <span>{projects[2].description}</span>
                                                    <br></br>
                                                    <span>{projects[2].skillSet}</span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;