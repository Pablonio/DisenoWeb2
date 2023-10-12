const clickCompletado = () => {
    const buttonTareaComp = document.createElement('input');
    buttonTareaComp.type = 'checkbox';
    buttonTareaComp.classList.add('form-check-input', 'me-3');
    buttonTareaComp.addEventListener('change', tareaCompleta);
    return buttonTareaComp
};

 const tareaCompleta = (evento2) => {
    const element = evento2.target;
    if (element.hasAttribute("checked")) {
        element.removeAttribute("checked");
    } else {
        element.setAttribute("checked","");
    }
};

export default clickCompletado;

  