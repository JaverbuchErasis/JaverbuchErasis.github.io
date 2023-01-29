import { React } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

const MainHeader = (props) => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Container style={{marginLeft: props.viewport === "desktop" ? "3em" : "1em"}}>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/paoniaLogoNB.png"
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Paonia Inc
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="About Paonia" id="basic-nav-dropdown">
                            <LinkContainer to="/about">
                                <NavDropdown.Item>Mission</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <NavDropdown.Item>Safety</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <NavDropdown.Item>History</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/projects">
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/careers">
                            <Nav.Link>Careers</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet />
        </>
    )
}

export { MainHeader }