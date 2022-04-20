import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default class Menu extends Component {

    constructor(props) {
        super(props); // recibe por props handler de App
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, itemClicked) {
        this.props.handler(itemClicked);
    }

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                    <Navbar.Brand href="#" onClick={(e) => this.handleClick(e,0)}>
                        Curso ReactJS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" onClick={(e) => this.handleClick(e,1)}>
                                Estudiantes
                            </Nav.Link>
                            <Nav.Link href="#" onClick={(e) => this.handleClick(e,2)}>
                                Crear Estudiante
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
