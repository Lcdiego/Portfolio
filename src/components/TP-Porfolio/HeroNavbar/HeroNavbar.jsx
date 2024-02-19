import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagramSquare, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import './HeroNavbar.css';

const HeroNavbar = () => {
 

  return (
    <div className='imagFondo'>
     

      <div className='imagContenedor'>
        <div className='img'></div>
        <h1 className='nombre'>Colman Diego</h1>
        <h3 className='descripcion'>Full Stack Developer</h3>
      </div>

      <div className='contenedorIconos'>
        <div className='lineas'>
          <hr />
          <div className='iconos'>
            <Link className='redes' to="#"><FaFacebookF /></Link>
            <Link className='redes' to="#"><FaInstagramSquare /></Link>
            <Link className='redes' to="#"><FaGithub /></Link>
            <Link className='redes' to="#"><FaWhatsappSquare /></Link>
          </div>
          <hr />
        </div>
      </div>

      <div className='iconoSiguiente'>
        <Link className='icono_siguiente' to="#contenedorFoto"><FiChevronDown /></Link>
      </div>
    </div>
  );
};

export default HeroNavbar;


            
            
          
        

