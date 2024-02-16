import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Proyectos/Proyecto.css';
import img1 from './img/imagen_1.png';
import img2 from './img/imagen_2.png';
import img3 from './img/imagen_3.png';
import img from '../HeroNavbar/img/imagen_5.png';
import { Carousel } from 'react-bootstrap';

const Proyecto = () => {
    const [opcionSeleccionada] = useState('Todos');

    const mostrarProyectos = () => {
        if (opcionSeleccionada === 'Todos') {
            return (
                <Carousel>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://espacio-holistico-r3iur1lin-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className='proyectoImagen' src={img1} alt="" />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://tp-billetera-4h12a0xzz-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className='proyectoImagen' src={img2} alt="" />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://api-rick-and-morty-7wvgp9ol7-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className='proyectoImagen' src={img3} alt="" />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://api-rick-and-morty-7wvgp9ol7-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className='proyectoImagen' src={img3} alt="" />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://api-rick-and-morty-7wvgp9ol7-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className='proyectoImagen' src={img3} alt="" />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://api-rick-and-morty-7wvgp9ol7-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className='proyectoImagen' src={img3} alt="" />
                        </a>
                    </Carousel.Item>
                </Carousel>
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
            <div className='contenedor-link'>
                <div className='link'>
                    <Link to="/todos" className='menuProyecto'>Todos</Link>
                    <Link to="/recientes" className='menuProyecto'>Recientes</Link>
                    <Link to="#" className='menuProyecto'>Diseño</Link>
                    <Link to="#" className='menuProyecto'>Proyectos</Link>
                </div>

            </div>

            <div className='contenedor-carrusel'>
                <div>
                    <img className='imagen-foco' src={img} alt="" />
                </div>
                <div className='carrusel'>
                    {mostrarProyectos()}
                </div>

            </div>
        </div>
    )
}

export default Proyecto;

