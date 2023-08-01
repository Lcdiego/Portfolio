import React from 'react';
import '../Servicios/Servicios.css'
import {FaPencilAlt,FaCode  } from "react-icons/fa";
import { DiMongodb} from "react-icons/di";
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
                <h3 className='tituloEtiqueta'>Desarrollo Front end</h3>
                <p className='parrafoEtiqueta'>Puedo convertir tus diseños o bocetos dentro del marco Front end.  </p>
            </div>
            <div className='contenedorEtiqueas'>
                <a className='iconoEtiquetas' href="#" ><DiMongodb/></a>
                <h3 className='tituloEtiqueta'>Desarrollo Back end</h3>
                <p className='parrafoEtiqueta'>Puedo convertir tus diseños o bocetos dentro del marco Back end. </p>
            </div>
            

            
            </div>
        
        </div>
    )
}

export default Servicios