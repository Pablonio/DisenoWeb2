import { useState } from 'react';
import Header from './Componetes/Header/Header.js';
import Formulario from './Componetes/Formulario/Formulario.js';
import Pagina from './Componetes/Pagina/index.js';
import Secciones from './Componetes/Secciones/index.js';

function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(true);
  const [secciones, actualizarSecciones] = useState({});

  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario);
  };

  const agregarCardASeccion = (seccion, datos) => {
    if (!secciones[seccion]) {
      actualizarSecciones({
        ...secciones,
        [seccion]: [datos],
      });
    } else {
      actualizarSecciones({
        ...secciones,
        [seccion]: [...secciones[seccion], datos],
      });
    }
  };

  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario agregarCardASeccion={agregarCardASeccion} />}
      <Pagina cambiarMostrar={cambiarMostrar} />
      <Secciones secciones={secciones} />
    </div>
  );
}

export default App;
