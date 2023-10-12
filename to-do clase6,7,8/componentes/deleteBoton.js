const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add('bi','bi-trash')
    i.addEventListener('click',delteTask);
    return i;
}

const delteTask = (evento) =>{
    const padre = evento.target.parentElement;
    padre.remove();
}

export default deleteIcon;




