import React from 'react';
import '../Servicios/Servicios.css'
import {FaPencilAlt,FaCode  } from "react-icons/fa";
import { GiScarabBeetle } from "react-icons/gi";

const Servicios = () => {
    return(
        <div className='servicios'id='servicios'>
            <h1 className='titulo_Etiqueta'>Lo que hago</h1>
        <div className='seccionServicios'>
            <div className='contenedorEtiqueas'>
                <a className='iconoEtiquetas' href="#" ><FaPencilAlt/></a>
                <h3 className='tituloEtiqueta'>Desarrollo web</h3>
                <p className='parrafoEtiqueta'>Puedo diseñar cualquier tipo de interfaz  que me soliciten. Ya sea una Pág. Web, App, etc.</p>
            </div>
            <div className='contenedorEtiqueas'>
                <a className='iconoEtiquetas' href="#" ><FaCode/></a>
                <h3 className='tituloEtiqueta'>Desarrollo frontal</h3>
                <p className='parrafoEtiqueta'>Puedo convertir tus diseños o bocetos dentro del marco Front-end.  </p>
            </div>
            <div className='contenedorEtiqueas'>
                <a className='iconoEtiquetas' href="#" ><GiScarabBeetle/></a>
                <h3 className='tituloEtiqueta'>Corrección de errores</h3>
                <p className='parrafoEtiqueta'>Puedo resolver situaciones de emergencia y cualquier tipo de problemas que tengas en tu diseño.</p>
            </div>
            

            
            </div>
        
        </div>
    )
}

export default Servicios