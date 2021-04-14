import React, { Component } from 'react';

import {LinkContainer} from 'react-router-bootstrap'
import {Nav,Navbar,Container} from 'react-bootstrap'


class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <LinkContainer to='/SiddikNogori'>
                            <Navbar.Brand>XYZ</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">

                                <LinkContainer to='/SiddikNogori'>
                                    <Nav.Link>Articles</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/about'>
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/event'>
                                    <Nav.Link>Events</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/group-member'>
                                    <Nav.Link>Group and Member</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/audio-book'>
                                    <Nav.Link>Audio Books</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/e-book'>
                                    <Nav.Link>eBooks</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;