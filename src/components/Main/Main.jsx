import React from 'react';
import './Main.css';
import { FaDownload } from "react-icons/fa";
import gsap from 'gsap';

const Main = () => {
    gsap.fromTo(".box",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 2 }
    );

    const nombreCV = 'cv/Colman Diego.doc';

    return (


        <div className='contenedorFoto' id='main'>
            
            <div className='contenedorImagen_caja'>
                <div className='img box'></div>
            </div>

            <div className='contenedorDescripcion'>
                <div className='descripcionMIa'>
                    <h1 className='titulo'>Acerca de mí</h1>
                    <p className='parrafo'>Mi nombre es Diego Leandro Colman,Vivo en Buenos Aires, Argentina.</p>
                    <p className='parrafo'>Soy programador Web Full Stack. Estudié en la Universidad Tecnológica Nacional (UTN) y mi prioridad es desempeñarme en diseños agradables y fáciles de utilizar para los usuarios.</p>
                    <p className='parrafo'>Me apasiona diseñar y programar para que mis clientes queden 100% satisfechos. Cada proyecto es un desafío personal, priorizando el crecimiento y buscando aumentar los ingresos de las empresas que me contraten.</p>
                    <p className='parrafo'>En mi portafolio podrás observar detalladamente todas las tecnologías que utilizo al desarrollar mis proyectos y aquellos en los que estoy trabajando actualmente.</p>
                    <p className='parrafo'>No dudes en consultarme. Estoy a tu disposición para responder todas tus dudas.</p>
                    <button className='button' aria-label="Descargar CV">
                        <span className='botonParrafo'>Descargar CV</span>
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


