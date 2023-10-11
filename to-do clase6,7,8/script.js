import checkBoton from "./componentes/checkBoton.js";
(()=>{
    const botonAgregar = document.querySelector('[data-form-boton]')

    const crearTarea = (evento) =>{
        evento.preventDefault();

        const ingresarTarea = document.querySelector('[data-form-ingresar]')

        const valorIngresado = ingresarTarea.value

        const boxTareasIncompletas = document.querySelector('[data-listado]')

        const liTarea = document.createElement('li');
        liTarea.classList.add('list-group-item', 'border-0', 'd-flex', 'align-items-center', 'ps-0');

        ingresarTarea.value = '';

        const almacenadorBtnLblTarea = document.createElement('div')
        almacenadorBtnLblTarea.classList.add('form-check')


        const labelTarea = document.createElement('label')
        labelTarea.classList.add('form-check-label')
        labelTarea.innerText = valorIngresado

        almacenadorBtnLblTarea.appendChild(checkBoton())
        almacenadorBtnLblTarea.appendChild(labelTarea)

        liTarea.appendChild(almacenadorBtnLblTarea)

        boxTareasIncompletas.appendChild(liTarea)
    }
    botonAgregar.addEventListener('click',crearTarea)
})();

