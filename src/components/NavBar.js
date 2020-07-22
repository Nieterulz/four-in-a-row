import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React Games</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Games" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Tic-Tac-Toe
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">
                            Four in a row
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav.Link
                    className="bg-success rounded-pill text-white font-weight-bold"
                    href="https://github.com/Nieterulz"
                >
                    GitHub Profile
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
