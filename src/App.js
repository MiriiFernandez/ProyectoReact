import logo from './logo.svg';
import './App.css';
import Producto from './componentes/productos';
import'./componentes/estilos.css';

function NumAleatorio(max,min){
  var num = Math.floor((Math.random() * 3) + 1); 
  document.write(num);
}

function App() {
  return (
    <div>
      <Producto imagen="https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg" />;
      <Producto descripcion="Imagen de un perrito lindo"/>
      <button type="submit" onClick={NumAleatorio}>Submit</button>
    </div>
  );
}

export default App;
