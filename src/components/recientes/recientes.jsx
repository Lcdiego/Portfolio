import React from 'react';
import "./Recientes.css"
import { Link } from 'react-router-dom';
import img1 from './img/imagen_1.png';
import img5 from './img/imagen_5.png';
import img6 from './img/Pizzeria.png';
import img10 from './img/imagen_10.png';


const imagenes = [img1,img5,img6,img10];
const anclas = [
  'https://proyecto-jardin-de-infantes.vercel.app/',
  'https://proyecto-inmobiliario.vercel.app/',
  'https://pizzeria-khaki.vercel.app/',
  ' https://banco-saint-patrick-omega.vercel.app/'
];

const Recientes = () => {
  return (
    
    <div className='contenedor-pag-recientes'>
        <div>
            <h2 className='titulo-recientes'>Proyectos Recientes</h2>
        </div>
      <div className='pag-recientes'>
        {imagenes.map((imagen, index) => (
          <a
            key={index}  
            className='ancla-recientes'
            href={anclas[index]}  
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imagen-recientes" src={imagen} alt='' />
          </a>
        ))}
      </div>
    <div>
    <Link className='btn-recientes' to={"/Proyectos"}>
      volver
      </Link>
    </div>
     
    </div>
  );
}

export default Recientes;