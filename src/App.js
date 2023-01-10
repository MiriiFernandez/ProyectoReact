import logo from "./logo.svg";
import "./App.css";
import Producto from "./componentes/productos";
import Menu from "./componentes/menu";
import Numero from "./componentes/numero";
import Footer from "./componentes/footer";
import "./componentes/estilos.css";


function App() {
  return (
    <center>
      <div>
        <Menu navs={["inicio","Servicios","Nuestra empresa"]} />
        <br></br>
        <Producto imagen="https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg" />;
        <Producto descripcion="Imagen de un lindo perrito"/>
      </div>
      <Numero numero="" />
      <br></br>
      <Footer navs={["inicio","Servicios","Nuestra empresa"]} />
      
    </center>
  );
}

export default App;
