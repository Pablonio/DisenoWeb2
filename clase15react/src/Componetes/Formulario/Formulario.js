import { useState } from 'react';
import './Formulario.css';
import Texto from '../Texto/Texto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';




/*const Formulario = () => {
    const envio = (evento) => {
        evento.preventDefault();
        console.log(envio, evento)
    }
    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>
                Rellena para crear un Nuevo Perosnaje
            </h2>
            <Texto titulo="Nombre" placeholder="Ingresa nombre" required/>
            <Texto titulo="Rango" placeholder="Ingresa el Rango" required/>
            <Texto titulo="Foto" placeholder="Ingresa Enlace de Foto" required/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario*/




const Formulario = ({ agregarCardASeccion }) => {
  const [nombre, actualizarNombre] = useState('');
  const [rango, actualizarRango] = useState('');
  const [foto, actualizarFoto] = useState('');
  const [equipo, actualizarEquipo] = useState('');

  const envio = (evento) => {
    evento.preventDefault();

    const datos = { nombre:nombre, rango:rango, foto:foto};
    agregarCardASeccion(equipo, datos);

    actualizarNombre('');
    actualizarRango('');
    actualizarFoto('');
    actualizarEquipo('');
  };

  return (
    <section className="formulario">
      <form onSubmit={envio}>
        <h2>Agrega Tu Personaje :D</h2>
        <Texto
          titulo="Nombre"
          placeholder="Ingresa nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Texto
          titulo="Rango"
          placeholder="Ingresa el Rango"
          required
          valor={rango}
          actualizarValor={actualizarRango}
        />
        <Texto
          titulo="Foto"
          placeholder="Ingresa Enlace de Foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
