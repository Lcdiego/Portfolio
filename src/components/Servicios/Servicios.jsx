import React from 'react';
import '../Servicios/Servicios.css'
import { useDarkMode } from '../Contex/Contex';
import { Link } from 'react-router-dom';
import {FaPencilAlt,FaCode  } from "react-icons/fa";
import { DiMongodb} from "react-icons/di";

const Servicios = () => {
    const { isDarkMode } = useDarkMode();
 
    return(
        <div className= {`${isDarkMode?'darkServicion': 'servicios'}`}id='servicios'>
            <div className='contenedor-titulo-servicios'>
            <h1 className='titulo_Etiqueta'>Lo que hago</h1>
            </div>
            
        <div className='seccionServicios'>
            <div className='contenedorEtiqueas'>
                <Link className='iconoEtiquetas' href="#" ><FaPencilAlt/></Link>
                <h3 className='tituloEtiqueta'>Desarrollo web</h3>
                <p className='parrafoEtiqueta'>Puedo diseñar cualquier tipo de interfaz  que me soliciten. Ya sea una Pág. Web, App, etc.</p>
            </div>
            <div className='contenedorEtiqueas'>
                <Link className='iconoEtiquetas' href="#" ><FaCode/></Link>
                <h3 className='tituloEtiqueta'>Desarrollo Front end</h3>
                <p className='parrafoEtiqueta'>Puedo convertir tus diseños o bocetos dentro del marco Front end.  </p>
            </div>
            <div className='contenedorEtiqueas'>
                <Link className='iconoEtiquetas' href="#" ><DiMongodb/></Link>
                <h3 className='tituloEtiqueta'>Desarrollo Back end</h3>
                <p className='parrafoEtiqueta'>Puedo convertir tus diseños o bocetos dentro del marco Back end. </p>
            </div>
            

            
            </div>
        
        </div>
    )
}

export default Servicios