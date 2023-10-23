import "./Texto.css"

const Texto = (props) =>{
    const placeHolderModificado = `${props.placeholder}...`
    
    const cambio = (evento) =>{
        props.actualizarValor(evento.target.value)
    }

    return <div className="texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeHolderModificado} 
            required={props.required}
            value={props.valor}
            onChange={cambio}>
        </input>
    </div>
}

export default Texto