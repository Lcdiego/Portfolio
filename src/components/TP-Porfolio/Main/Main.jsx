import React from 'react';
import './Main.css';
import imag from '../Main/img/imagen_1.jpg'
import {FaDownload } from "react-icons/fa";


const Main= () => {


     const nombreCV = 'cv/Colman Diego.docx';

    return(

        
         <div className='contenedorFoto'id='main'> 
               
                
                
                
                <div className='contenedorImagen_caja'>
                    
                     <img className='imagenPrincipal' src={imag} alt="" />
                     
                
                    <div className="caja"> 
                    </div>
                    
                 </div>
                 
            <div className='contenedorDescripcion'>
            <div className='descripcionMIa'>
            <h1 className='titulo'>Acerca de mi</h1>
            <p className='parrafo'>Mi nombre es Diego Leandro Colman, tengo 44 años y vivo en la ciudad de  Plata , Buenos Aires, Argentina.</p>
            <p className='parrafo'> Soy programador Web Full Stack . Estudié en la Universidad Tecnológica Nacional (UTN) y mi prioridad es desempeñarme en diseños agradables y fáciles de utilizar para los usuarios.</p>
            
            <p className='parrafo'>Me apasiona diseñar y programar para que mis clientes queden 100% satisfechos. Cada proyecto es un desafío personal, priorizando el crecimiento y buscando aumentar los ingresos de las empresas que me contraten.</p>
            <p className='parrafo'>En mi portfolio podrás observar detalladamente todas las tecnologías que utilizo al desarrollar mis proyectos y aquellos en lo que estoy trabajando en la actualidad.</p> 
            <p className='parrafo'>No dudes en consultarme. Estoy a tu disposición para responder todas tus dudas.</p>       
            <button className='button'>
            <p className='botonParrafo'>Descarga cv</p>
                        <a className='botonIcono' href={`${process.env.PUBLIC_URL}/${nombreCV}`} target="_blank" rel="noopener noreferrer">
                            <FaDownload />
                        </a>
                     
                    </button>
            </div>
            </div>
        
            </div>
        
)

    
    
}

export default Main
 

