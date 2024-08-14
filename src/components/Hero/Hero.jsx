import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaFacebookF, FaInstagramSquare, FaGithub, FaWhatsappSquare, FaLinkedin } from "react-icons/fa";


import './Hero.css';

const HeroNavbar = () => {


  return (
    <div className='imagFondo' id='hero'>

      <div className='contenedor-hero'>
        <div className='imagContenedor'>
          <div className='img'></div>
          <h1 className='nombre'>Colman Diego</h1>
          <h3 className='descripcion'>Full Stack Developer</h3>
        </div>

        <div className='contenedorIconos'>
          <div className='lineas'>
            <div className='contenedor-border'>
              <div className='iconos'>
                <a className='redes' href="https://es-la.facebook.com/"><FaFacebookF /></a>
                <a className='redes' href="https://www.instagram.com/?hl=en"><FaInstagramSquare /></a>
                <a className='redes' href="https://www.linkedin.com/in/diego-colman-a67754297"><FaLinkedin /></a>
                <a className='redes' href="https://github.com/Lcdiego"><FaGithub /></a>
                <button
                  className='redes'

                  onClick={() => window.open('https://wa.me/+5491123215257', '_blank')}
                >
                  <FaWhatsappSquare />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default HeroNavbar;







