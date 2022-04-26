import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class Estudiante extends Component {

    constructor(props) {
        super(props);
        this.state = {
            estudiantes: [],
        };
    }

    componentDidUpdate(preProps,preState) {
        if (preProps.idEstudiante!==this.props.idEstudiante) {
            this.filtroEstudiante();
        }
    }

    componentDidMount() {
        this.filtroEstudiante();
    }

    filtroEstudiante() {
        let url = 'http://localhost:1234/estudiantes';
        console.log("Estudiante.js idEstudiante = " + this.props.idEstudiante);
        if (this.props.idEstudiante!=null) {
            url = url + '?idEstudiante=' + this.props.idEstudiante;
        }
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((json) => (
                this.setState({
                    resultado: json.success,
                    estudiantes: json.estudiantes,
                })
            ));
    }

    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>idEstudiante</th>
                            <th>Apellido</th>
                            <th>Nombre</th>
                            <th>Cursos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.estudiantes.map(
                            (estudiantes,index) => (
                                <tr key={index}>
                                    <td>{estudiantes.idEstudiante}</td>
                                    <td>{estudiantes.apellido}</td>
                                    <td>{estudiantes.nombre}</td>
                                    <td>
                                        <ul>
                                            {estudiantes.cursos && estudiantes.cursos.map(
                                                (cursos,index2) => (
                                                    <li key={index2}>{cursos.descripcion + " " + cursos.horas + " horas semanales"}</li>
                                                )
                                            )}
                                        </ul>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
            </>
        )
    }
}
