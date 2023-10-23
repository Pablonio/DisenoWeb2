import './Pagina.css'

const Pagina = (props) => {

    console.log(props)
    return <section className="paginaSection">
        <h3 className="title">
            MIS PERSONAJES
        </h3>
        <img src="/img/boton.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default Pagina