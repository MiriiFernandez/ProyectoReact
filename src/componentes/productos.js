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
       let imagenGaleria=[
        {src:'../imagenes/img1.jpg', title:'primer perrito'},
        {src:'../imagenes/img1.jpg', title:'segundo perrito'},
        {src:'../imagenes/img1.jpg', title:'tercer perrito'},
        {src:'../imagenes/img1.jpg', title:'quarto perrito'}
       ];
       return(
            <>
            <div>
                {
                    imagenGaleria.map((index) => <img src={index.title}
                    alt="images" height="250" width="250" style={{border:"solid", backgroundColor:'gray'}}/>)
                }
            </div>

            
            </>
       )
    }
}

export default Producto;