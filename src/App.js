import React, { Component } from 'react'
import './App.css';
import Menu from './Menu';
import Body from './Body';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      itemMenu: 2,
    }
    this.handleItemMenuClicked = this.handleItemMenuClicked.bind(this);
  }

  handleItemMenuClicked(itemClickeado) {
    this.state = ({
      itemMenu: itemClickeado,
    });
  }

  render() {
    return (
      <>
        <Menu handler={this.handleItemMenuClicked} /> {/** Pasamos el metodo al componente Menu así Menu recibe handle de esta línea */} 
        <Body itemClicked={this.state.itemMenu} /> {/** Pasamos itemClicked a Body */}
      </>
    );
  }
}