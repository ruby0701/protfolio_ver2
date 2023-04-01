import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>



function NavBar() {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Col>
                    <Row>
                        <Navbar.Brand href="#home">
                            <h1>Ruby Wang</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span className='navbar-toggler-icon'></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto justify-between">
                                <Nav.Link href="#home"
                                    className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                                    onClick={() => { onUpdateActiveLink("home") }}>
                                    Home</Nav.Link>
                                <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"}
                                    onClick={() => { onUpdateActiveLink("about") }}>
                                    About</Nav.Link>
                                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                                    onClick={() => { onUpdateActiveLink("skills") }}>
                                    Skills</Nav.Link>
                                <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                                    onClick={() => { onUpdateActiveLink("projects") }}>
                                    Projects</Nav.Link>
                                <Nav.Link href="#experience" className={activeLink === "experience" ? "active navbar-link" : "navbar-link"}
                                    onClick={() => { onUpdateActiveLink("experience") }}>
                                    Experience</Nav.Link>
                                <Nav.Link href="#contact" className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
                                    onClick={() => { onUpdateActiveLink("contact") }}>
                                    Contact</Nav.Link>

                            </Nav >
                            <span className='navbar-icon'>
                                <div className='social-icons'>
                                    <a href="https://www.linkedin.com/feed/" target='_blank' rel="noreferrer" className='text-white'>
                                        <LinkedInIcon></LinkedInIcon>
                                    </a>

                                    <a href="https://github.com/ruby0701" target='_blank' rel="noreferrer" className='text-white'>
                                        <GitHubIcon></GitHubIcon>
                                    </a>

                                </div>
                                <button className='vvd'
                                    onClick={() => { console.log("contact me") }}>
                                    <span>
                                        Contact me
                                    </span>

                                </button>
                            </span>
                        </Navbar.Collapse >
                    </Row>
                </Col>
            </Container >
        </Navbar >
    );
}

export default NavBar;