
import React from 'react';
import './HeroNavbar.css';
import imag from '../HeroNavbar/img/imagen_3.jpg'
import { FaFacebookF,FaInstagramSquare,FaGithub,FaWhatsappSquare } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

const HeroNavbar = () => {
    return(
        
        
            <div className='imagFondo' >
            
                    <ul className='menuHorizontal'>
                       <li className='listasVerticales'><a  className='menu' href="#"><IoIosMenu/></a>
                   
                    <ul  className='menuItems' >
                        
                            <li className='listasVerticales' ><a className='listas'  href="#contenedorFoto">Sobre Mi</a> </li>
                            <li className='listasVerticales' ><a className='listas'href="#contenedorSection">Mi Experiencia</a> </li>
                            <li className='listasVerticales' ><a className='listas' href="#servicios">Servicios</a> </li>
                            <li className='listasVerticales' ><a className='listas'href="#contenedorProyectos_futuros">Mi futuros trabajos</a> </li>
                            <li className='listasVerticales' ><a className='listas' href="#formulario">Contacto</a> </li>
                     </ul>
                     </li> 
                     </ul>
                     
                <div className='imagContenedor'>
              
                        <img className='img' src={imag} alt="" /> 
                        <h1 className='nombre'>Colman Diego</h1>
                        <h3 className='descripcion'>Full Stack Developer</h3>
                </div>
                 
                <div className='contenedorIconos'>
                    <div className='lineas'>
                        <hr />
                        <div className='iconos'>
                            <a className='redes' href="#"><FaFacebookF/></a>
                            <a className='redes'href="#"><FaInstagramSquare/></a>
                            <a className='redes'href="#"><FaGithub/></a>
                            <a className='redes'href="#"><FaWhatsappSquare/></a>
                        </div>
                        <hr />
                    </div>
                </div>
                    <div className='iconoSiguiente'>  
                        <a  className='icono_siguiente' href="#contenedorFoto"><FiChevronDown/></a>
                    </div>
                
            </div>
            
          
        
    )
}

export default HeroNavbar