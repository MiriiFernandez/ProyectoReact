import React, { Component } from "react";
class Producto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: props.imagen,
      descripcion: props.descripcion,
      boton: props.boton,
      numero: props.numero,
    };
  }

  
  render() {
    return (
      <div>
        <div>
        <img src={this.state.imagen} />
        <h1> {this.state.descripcion} </h1>
        
        </div>
      </div>
    );
  }
}

export default Producto;
