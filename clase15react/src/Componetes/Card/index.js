import React from 'react';
import './Card.css';

const Card = ({ datos }) => {
  return (
    <div className="card">
      <div className="encabezado">
        <img src={datos.imagen} alt="imagen" />
      </div>
      <div className="letras">
        <h4>{datos.nombre}</h4>
        <h5>{datos.rango}</h5>
      </div>
    </div>
  );
};

export default Card;
