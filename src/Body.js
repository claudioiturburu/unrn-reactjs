import React, { Component } from 'react'
import CrearEstudiante from './CrearEstudiante';
import Estudiante from './Estudiante';
import Wellcome from './Wellcome';
import Container from 'react-bootstrap/Container';

export default class Body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container fluid className="body">
                    {this.props.itemClicked === 0 && <Wellcome />}
                    {this.props.itemClicked === 1 && <Estudiante />}
                    {this.props.itemClicked === 2 && <CrearEstudiante />}
                </Container>
            </>
        )
    }
}
