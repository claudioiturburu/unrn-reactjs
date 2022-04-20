import React, { Component } from 'react'
import "./Estudiante.css"

export default class Estudiante extends Component {

    constructor(props) {
        super(props);
        this.listarCursos = this.listarCursos.bind(this);
        this.listarEstudiante = this.listarEstudiante.bind(this);
        this.state = {
            cursos: [],
            estudiantes: [],
        };
    }

    listarCursos() {
        const url = 'http://localhost:1234/cursos';
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((json) => (
                this.setState({
                    resultado: json.success,
                    cursos: json.cursos,
                })
            ));
    }

    listarEstudiante(e,idEstudiante) {
        const url = 'http://localhost:1234/estudiantes?idEstudiante='+idEstudiante;
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((json) => (
                this.setState({
                    resultado: json.success,
                    estudiantes: json.estudiantes,
                })
            ))
    }

    render() {
        return (
            <>
                <div>
                    <p>
                        <button className="btn-center" onClick={this.listarCursos}>Listar Cursos</button>
                        <button className="btn-center" onClick={(e) => this.listarEstudiante(e,"2")}>Listar Estudiante 2</button>
                    </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id Curso</th>
                                <th>Curso</th>
                                <th>Cantidad de horas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cursos.map(
                                (cursos,index) => (
                                    <tr key={index}>
                                        <td>{cursos.idCurso}</td>
                                        <td>{cursos.descripcion}</td>
                                        <td>{cursos.horas} horas semanales</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id Estudiante</th>
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
                                                    (cursos,index) => (
                                                        <li>{cursos.descripcion + " " + cursos.horas + " horas semanales"}</li>
                                                    )
                                                )}
                                            </ul>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
