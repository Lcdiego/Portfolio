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
                <h3 className='tituloEtiqueta'>ui/ui designacion</h3>
                <p className='parrafoEtiqueta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, reiciendis ad recusandae </p>
            </div>
            <div className='contenedorEtiqueas'>
                <a className='iconoEtiquetas' href="#" ><FaCode/></a>
                <h3 className='tituloEtiqueta'>ui/ui designacion</h3>
                <p className='parrafoEtiqueta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, reiciendis ad recusandae </p>
            </div>
            <div className='contenedorEtiqueas'>
                <a className='iconoEtiquetas' href="#" ><GiScarabBeetle/></a>
                <h3 className='tituloEtiqueta'>ui/ui designacion</h3>
                <p className='parrafoEtiqueta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, reiciendis ad recusandae </p>
            </div>
            

            
            </div>
        
        </div>
    )
}

export default Servicios