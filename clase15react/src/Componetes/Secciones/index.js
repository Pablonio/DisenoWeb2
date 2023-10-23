import React from 'react';
import Card from '../Card/index.js';
import './Secciones.css'; 

const Secciones = ({ secciones }) => {
  return (
    <div className="secciones-container">
      {Object.keys(secciones).map((equipo) => (
        <div key={equipo} className="seccion">
          <h2>{equipo}</h2>
          <div className="cards">
            {secciones[equipo].map((datos, index) => (
              <Card key={index} datos={datos} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Secciones;

