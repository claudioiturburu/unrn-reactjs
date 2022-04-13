import React, { Component } from 'react'
import "./Estudiante.css"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomString(min, max) {
    let texto = '';
    const caracteres = "abcdefghijklmnñopqrstuvwxyz";
    let size = getRandomInt(min,max);
    for (let index = 0; index < size-1; index++) {
        let posicion = getRandomInt(1,27) - 1;
        texto+= caracteres.substring(posicion, posicion+1);
    }
    return texto;
}

export default class Estudiante extends Component {

    constructor(props) {
        let descripcion = getRandomString(5,10);
        let horas = getRandomInt(0,300);
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            cursos: [{descripcion: descripcion,horas: horas}],
        };
    }

    handleClick() {
        this.setState((state) => ({
            cursos: [...state.cursos, {descripcion: getRandomString(5,10),horas: getRandomInt(0,300)}],
        }));
    }

    render() {
        return (
            <>
                <div>
                    <p className="card">
                        {this.props.estudiante.nombre + " " + this.props.estudiante.apellido}
                    </p>
                    <p>
                        <button className="btn-center" onClick={this.handleClick}>Inscribirme</button>
                    </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Curso</th>
                                <th>Cantidad de horas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cursos.map(
                                (cursos,index) => (
                                    <tr key={index}>
                                        <td>{cursos.descripcion}</td>
                                        <td>{cursos.horas} horas semanales</td>
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
