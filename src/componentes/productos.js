import React, {componentes} from "react"

class Producto extends componentes {

    constructor(props) {
        super(props);
        this.state = {
            Image : props.imagen,
            descripcion : props.descripcion
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