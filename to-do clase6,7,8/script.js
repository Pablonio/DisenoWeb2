import checkBoton from "./componentes/checkBoton.js";
import deleteBoton from "./componentes/deleteBoton.js"
(()=>{
    const botonAgregar = document.querySelector('[data-form-boton]')

    const crearTarea = (evento) =>{
        evento.preventDefault();
        const ingresarTarea = document.querySelector('[data-form-ingresar]')
        

        const valorIngresado = ingresarTarea.value

        const boxTareasIncompletas = document.querySelector('[data-listado]')
        const boxtareaCompleta = document.querySelector('data-listado-completo')

        const liTarea = document.createElement('li');
        liTarea.classList.add('list-group-item', 'border-0', 'd-flex', 'align-items-center', 'ps-0');

        ingresarTarea.value = '';

        const almacenadorBtnLblTarea = document.createElement('div')
        almacenadorBtnLblTarea.classList.add('form-check')

        const s = document.createElement('s')
        const labelTarea = document.createElement('label')
        labelTarea.classList.add('form-check-label')
        labelTarea.innerText = valorIngresado;
        s.innerText = valorIngresado

        const checkbox = checkBoton();

        
        almacenadorBtnLblTarea.appendChild(checkbox)
        almacenadorBtnLblTarea.appendChild(labelTarea)
        checkbox.addEventListener('click', () => {
            if(checkbox.getAttribute("checked") === ""){
                console.log('existe')
                almacenadorBtnLblTarea.replaceChild(labelTarea, s)
                
            }else{
                console.log('no existe tarea')
                almacenadorBtnLblTarea.replaceChild(s, labelTarea)
            }
        });
        
        almacenadorBtnLblTarea.appendChild(deleteBoton())
        
        
        liTarea.appendChild(almacenadorBtnLblTarea)
        boxTareasIncompletas.appendChild(liTarea)
    }
    botonAgregar.addEventListener('click',crearTarea)
})();

