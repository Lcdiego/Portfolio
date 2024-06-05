import React from 'react';
import "./Proyectos_Futuros.css"
import { Link } from 'react-router-dom';
import img1 from './img/pizzeria_1.png';




const imagenes = [img1];
const anclas = [

];

const ProyectosFuturos = () => {
  return (
    
    <div className='contenedor-pag-Proyectos_Futuros'>
        <div>
            <h2 className='titulo-Proyectos_Futuros'>Proyectos Proyectos_Futuros</h2>
        </div>
      <div className='pag-Proyectos_Futuros'>
        {imagenes.map((imagen, index) => (
          <a
            key={index}  
            className='ancla-Proyectos_Futuros'
            href={anclas[index]}  
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imagen-Proyectos_Futuros" src={imagen} alt='' />
          </a>
        ))}
      </div>
    <div>
    <Link className='btn-Proyectos_Futuros' to={"/Proyectos"}>
      volver
      </Link>
    </div>
     
    </div>
  );
}

export default ProyectosFuturos;