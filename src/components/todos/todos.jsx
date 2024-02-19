import React from 'react';
import "./todos.css"
import { Link } from 'react-router-dom';
import img1 from './img/imagen_1.png';
import img2 from './img/imagen_2.png';
import img3 from './img/imagen_3.png';
import img4 from './img/imagen_4.png';
import img5 from './img/imagen_5.png';
import img6 from './img/imagen_6.png';
import img7 from './img/imagen_7.png';

const imagenes = [img1, img2, img3,img4,img5,img6,img7];
const anclas = [
  'https://proyecto-jardin-de-infantes.vercel.app/',
  'https://tp-billetera.vercel.app/',
  'https://api-rick-and-morty-7wvgp9ol7-diegocolman14-gmailcom.vercel.app/',
  'https://to-do-list-2dn9.onrender.com/',
  'https://proyecto-inmobiliario.vercel.app/',
  'https://tp-2.onrender.com',
  'https://espacio-holistico-r3iur1lin-diegocolman14-gmailcom.vercel.app/'
];

const Todos = () => {
  return (
    
    <div className='contenedor-pag-todos'>
        <div>
            <h3 className='titulo-todos'>Todos mis Proyectos</h3>
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

export default Todos ;





