import React, { Component } from 'react'

export default class CrearEstudiante extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      
        this.state = {
            form: {
                apellido: "",
                nombre: "",
                idCurso: "",
            },
            resultado: "",
            cursos: [],
        };
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

    handleSubmit(e) {
        e.preventDefault();
        const url = 'http://localhost:1234/estudiantes';
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                apellido: this.state.form.apellido,
                nombre: this.state.form.nombre,
                idCurso: this.state.form.idCurso,
            })
        })
        .then((respuesta) => respuesta.json())
        .then((json) => {
            if (json.result === "error") {
                this.setState({
                    resultado: json.message,
                });
                return;
            }
            this.setState({
                resultado: "Estudiante agregado",
            });
        });
    }

    // se ejecuta luego del renderizado
    componentDidMount() {
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

    render() {
        return (
            <>
                <div>
                    <form>
                        <label>apellido</label>
                        <input type="text" name="apellido" onChange={this.handleChange} value={this.state.form.apellido}></input>
                        <label>nombre</label>
                        <input type="text" name="nombre" onChange={this.handleChange} value={this.state.form.nombre}></input>
                        <label for="idCurso">curso</label>
                        <select name="idCurso" onChange={this.handleChange}>
                            {this.state.cursos.map((c,index) => (
                                <option key={index} value={c.idCurso}>
                                    {c.descripcion}
                                </option>
                            ))}
                        </select>
                        
                        <button onClick={this.handleSubmit} type="submit">Enviar</button>
                    </form>
                    <p>{this.state.resultado}</p>
                </div>
            </>
        )
    }
}