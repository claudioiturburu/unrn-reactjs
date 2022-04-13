import React, { Component } from 'react'
import "./Estudiante.css"

export default class Estudiante extends Component {
  render() {

    let estudiante = {
        nombre: "Claudio",
        apellido: "Iturburu",
    }

    return (
      <div>
        <p className="card">
        {estudiante.nombre + " " + estudiante.apellido}</p>
      </div>
    )
  }
}
