import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class Menu extends Component {

    constructor(props) {
        super(props); // recibe por props handler de App
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            form: {
                idEstudiante: "",
            },
        };
    }

    handleClick(e, itemClicked) {
        e.preventDefault();
        this.props.handler(itemClicked);
    }

    handleSearch(e) {
        this.props.handleEstudiante(this.state.form.idEstudiante);
    }

    handleChange(e) {
        let nombre = e.target.name;
        let valor = e.target.value;
        this.setState((state) => ({
            form: {
                ...state.form,
                [nombre]: valor,
            }
        }));
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
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Estudiante..."
                                    className="me-2"
                                    aria-label="Search"
                                    name="idEstudiante"
                                    onChange={this.handleChange}
                                    value={this.state.form.idEstudiante}
                                />
                                <Button variant="outline-success" onClick={(e) => this.handleSearch(e)}>Buscar</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
