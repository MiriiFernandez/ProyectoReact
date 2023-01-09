import logo from './logo.svg';
import './App.css';
import Producto from './componentes/productos';
import estilo from './componentes';

function App() {
  return (
    <div>
      <Producto imagen="https://images.ecestaticos.com/8v-pCT79PV_NBRKyotaCwv6iMKw=/19x355:1920x1781/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1cb%2F757%2F9a6%2F1cb7579a65eb1721ace7a20a9ec5be1c.jpg" />;
      <Producto descripcion="Imagen de un perrito lindo"/>

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
