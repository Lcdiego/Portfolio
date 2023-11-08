
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import '../Proyectos/Proyecto.css';
import img1 from './img/imagen_1.png';
import img2 from './img/imagen_2.png';
import img3 from './img/imagen_3.png';
import img from '../HeroNavbar/img/imagen_5.png';

const Proyecto = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('Todos');
   
    const mostrarProyectos = () => {
        if (opcionSeleccionada === 'Todos') {
            return (
                <div className='fotos1'>
                <a href="https://espacio-holistico-r3iur1lin-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className='proyectoImagen' src={img1} alt="" />
                </a>
                <a href="https://tp-billetera-4h12a0xzz-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className='proyectoImagen' src={img2} alt="" />
                </a>
                <a href="https://api-rick-and-morty-7wvgp9ol7-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className='proyectoImagen' src={img3} alt="" />
                </a>
            </div>
            
                
            );
        } else if (opcionSeleccionada === 'Recientes') {
            return (
                <div className='fotos1'>
                    <a href="https://api-rick-and-morty-7wvgp9ol7-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img className='proyectoImagen' src={img3} alt="" />
                    </a>
                </div>
            );
        }
    }

    return (
        <div className='contenedorProyectos_futuros' id='contenedorProyectos_futuros'>
            <h1 className='tituloProyectos'>Proyectos</h1>
            <div className='contenedor_a'>
                {/* Reemplaza los enlaces "Todos" y "Recientes" con el componente Link */}
                <Link to="/todos" className='menuProyecto'>Todos</Link>
                <Link to="/recientes" className='menuProyecto'>Recientes</Link>
                <Link to="#">Diseño</Link>
                <Link to="#">Proyectos</Link>
            </div>
            <div className='Proyecto_futuros'>
                <div className='imagen_foco'>
                    <img className='proyecto_imagen' src={img} alt="" />
                </div>
                {mostrarProyectos()}
            </div>
        </div>
    )
}

export default Proyecto;
