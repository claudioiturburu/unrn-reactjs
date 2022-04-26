import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

export default class CrearEstudiante extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
      
        this.state = {
            form: {
                apellido: "",
                nombre: "",
                idCurso: "",
            },
            resultado: "",
            cursos: [],
            show: false,
            variant: "success",
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
            let variant = "success";
            if (json.result === "error") {
                variant = "danger";
                this.setState({
                    resultado: json.message,
                });
            } else {
                this.setState({
                    resultado: "Estudiante agregado",
                });
            }
            this.setState({
                show: true,
                variant: variant,
            });
        });
    }

    handleClose() {
        this.setState({
            show: false,
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
                {this.state.show && (
                    <Alert variant={this.state.variant} onClose={this.handleClose} dismissible>
                        <Alert.Heading>{this.state.resultado}</Alert.Heading>
                    </Alert>
                )}

                <Form>
                    <Form.Group>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellido"
                            onChange={this.handleChange}
                            value={this.state.form.apellido}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            onChange={this.handleChange}
                            value={this.state.form.nombre}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Curso</Form.Label>
                        <Form.Control
                            name="idCurso"
                            onChange={this.handleChange}
                            as="select"
                        >
                            {this.state.cursos.map((c,index) => (
                                <option key={index} value={c.idCurso}>
                                    {c.descripcion}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    
                    <Button variant="primary" onClick={this.handleSubmit} type="submit">Enviar</Button>
                </Form>
            </>
        )
    }
}