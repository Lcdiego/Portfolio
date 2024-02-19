import React from 'react';
import "./Recientes.css"
import { Link } from 'react-router-dom';
import img1 from './img/imagen_1.png';
import img5 from './img/imagen_5.png';
import img6 from './img/imagen_6.png';


const imagenes = [img1,img5,img6];
const anclas = [
  'https://proyecto-jardin-de-infantes.vercel.app/',
  
  'https://proyecto-inmobiliario.vercel.app/',
  'https://tp-2.onrender.com',

];

const Recientes = () => {
  return (
    
    <div className='contenedor-pag-todos'>
        <div>
            <h2 className='titulo-todos'>Proyectos Recientes</h2>
        </div>
      <div className='pag-todos'>
        {imagenes.map((imagen, index) => (
          <a
            key={index}  
            className='ancla-todos'
            href={anclas[index]}  
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imagen-todos" src={imagen} alt='' />
          </a>
        ))}
      </div>
    <div>
    <Link className='btn-todos' to={"/Proyecto"}>
      volver
      </Link>
    </div>
     
    </div>
  );
}

export default Recientes;