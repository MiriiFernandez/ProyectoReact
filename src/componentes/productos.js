import React, {Component} from 'react'

class Producto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imagen : props.imagen,
            descripcion : props.descripcion,
            boton : props.boton,
            numero : props.numero
        };
    }

    render() {
        return <div>
            <div>
                <img src={this.state.imagen}/>
                <p>{this.state.descripcion}</p>
            </div>
        </div>
    }
}

export default Producto;