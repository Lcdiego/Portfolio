import React from 'react';
import "./Diseño.css"
import { Link } from 'react-router-dom';
import img1 from './img/diseño_banco.png';
import img2 from './img/pizzeria.png';



const imagenes = [img1,img2];
const anclas = [

];

const Diseño = () => {
  return (
    
    <div className='contenedor-pag-diseño'>
        <div>
            <h2 className='titulo-diseño'>Proyectos diseño</h2>
        </div>
      <div className='pag-diseño'>
        {imagenes.map((imagen, index) => (
          <a
            key={index}  
            className='ancla-diseño'
            href={anclas[index]}  
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imagen-diseño" src={imagen} alt='' />
          </a>
        ))}
      </div>
    <div>
    <Link className='btn-diseño' to={"/Proyectos"}>
      volver
      </Link>
    </div>
     
    </div>
  );
}

export default Diseño;