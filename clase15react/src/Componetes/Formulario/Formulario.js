import './Formulario.css'
import Texto from "../Texto/Texto.js"

const Formulario = () =>{
    return <section className="formulario">
        <form>
            <h2>
                Rellena para crear un Nuevo Perosnaje
            </h2>
            <Texto titulo="Nombre" placeholder="Ingresa nombre"/>
        </form>
    </section>
}