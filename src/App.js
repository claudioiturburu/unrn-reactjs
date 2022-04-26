import React, { Component } from 'react'
import './App.css';
import Menu from './Menu';
import Body from './Body';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      itemMenu: 0,
      idEstudiante: null,
    }
    this.handleItemMenuClicked = this.handleItemMenuClicked.bind(this);
    this.handleBuscar = this.handleBuscar.bind(this);
  }

  handleItemMenuClicked(itemClickeado) {
    this.setState({
      itemMenu: itemClickeado,
    });
  }

  handleBuscar(idSearch) {
    console.log("App.js idEstudiante = " + idSearch);
    this.setState({
      idEstudiante: idSearch,
      itemMenu: 1,
    });
  }

  render() {
    return (
      <>
        <Menu handler={this.handleItemMenuClicked} handleEstudiante={this.handleBuscar} /> {/** Pasamos el metodo al componente Menu así Menu recibe handler de esta línea */} 
        <Body itemClicked={this.state.itemMenu} idEstudianteSearch={this.state.idEstudiante} /> {/** Pasamos itemClicked a Body */}
      </>
    );
  }
}