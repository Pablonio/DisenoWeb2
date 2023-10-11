const clickCompletado = () => {
  const buttonTareaComp = document.createElement('input');
  buttonTareaComp.type = 'checkbox';
  buttonTareaComp.classList.add('form-check-input', 'me-3');
  buttonTareaComp.addEventListener('change', tareaCompleta);
  return buttonTareaComp;
};

const tareaCompleta = (evento2) => {
    const element = evento2.target;
    element.setAttribute("checked", "");
    if(element === "cheked"){
        alert('tarea completada')
    }
    else{
        console.log('tarea incompleta')
    }
};
  

export default clickCompletado;

  