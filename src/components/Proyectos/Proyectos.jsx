import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Proyectos/Proyectos.css';
import { useDarkMode } from '../Contex/Contex';
import img1 from './img/proyectos/imagen_1.png';
import img2 from './img/proyectos/imagen_2.png';
import img3 from './img/proyectos/imagen_3.png';
import img4 from './img/proyectos/imagen_4.png';
import img5 from './img/proyectos/imagen_5.png';
import img6 from './img/proyectos/imagen_6.png';
import img7 from './img/proyectos/Pizzeria.png';
import img10 from './img/proyectos/banco.png';
import img11 from './img/proyectos/imagen_10.png'

import { Carousel } from 'react-bootstrap';

const Proyecto = () => {
    const { isDarkMode } = useDarkMode();
    const [opcionSeleccionada] = useState('Todos');

    const mostrarProyectos = () => {
        if (opcionSeleccionada === 'Todos') {
            return (
                <Carousel>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://pizzeria-khaki.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className='contenedor-proyecto-imagen'>
                                <img className='proyectoImagen' src={img7} alt="" />
                            </div>

                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://tp-2.onrender.com" target="_blank" rel="noopener noreferrer">
                            <div className='contenedor-proyecto-imagen'>
                                <img className='proyectoImagen' src={img6} alt="" />
                            </div>

                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://banco-saint-patrick-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className='contenedor-proyecto-imagen'>
                                <img className='proyectoImagen' src={img10} alt="" />
                            </div>

                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://proyecto-jardin-de-infantes.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className='contenedor-proyecto-imagen'>
                                <img className='proyectoImagen' src={img1} alt="" />
                            </div>

                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://proyecto-mercado-inmobiliario-or05tw7ic-diegocolman14-gmailcom.vercel.app" target="_blank" rel="noopener noreferrer">
                            <div className='contenedor-proyecto-imagen'>
                                <img className='proyectoImagen' src={img5} alt="" />
                            </div>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a className='ancla-todos' href="https://tp-billetera.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className='contenedor-proyecto-imagen'>
                                <img className='proyectoImagen' src={img2} alt="" />
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://api-rick-and-morty-hjobf54oo-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className='contenedor-proyecto-imagen'>
                                <img className='proyectoImagen' src={img3} alt="" />
                            </div>

                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a className='ancla-todos' href="https://to-do-list-2dn9.onrender.com/" target="_blank" rel="noopener noreferrer">

                            <div className='contenedor-proyecto-imagen'>
                                <img className='proyectoImagen' src={img4} alt="" />
                            </div>
                        </a>
                    </Carousel.Item>


                </Carousel>
            );
        } else if (opcionSeleccionada === 'Recientes') {
            return (
                <div className='fotos1'>
                    <a href="https://api-rick-and-morty-hjobf54oo-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img className='proyectoImagen' src={img3} alt="" />
                    </a>
                </div>
            );
        } else if (opcionSeleccionada === 'Diseño') {
            return (
                <div className='fotos1'>
                    <a href="https://api-rick-and-morty-hjobf54oo-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img className='proyectoImagen' src={img3} alt="" />
                    </a>
                </div>
            );
        }
    }

    return (
        <div className={`${isDarkMode ? 'darkProyectos' : 'contenedor-Proyectos'}`} id='proyectos'>
            <div className='contenedor-titulo-proyectos'>
                <h1 className='tituloProyectos'>Proyectos</h1>
            </div>

            <div className='contenedor-link-proyectos'>
                <div className='link-proyectos'>
                    <Link to="/todos" className='menuProyecto'>
                        <div className='contenedor-a'>
                            Mas detalles
                        </div>
                    </Link>
                    <Link to="/recientes" className='menuProyecto'>
                        <div className='contenedor-a'>
                            Recientes
                        </div>
                    </Link>
                    <Link to="/Diseño" className='menuProyecto'>
                        <div className='contenedor-a'>
                            Diseñando
                        </div>
                    </Link>
                    <Link to="/ProyectosFuturos" className='menuProyecto'>
                        <div className='contenedor-a'>
                            Proyectos Futuros

                        </div>
                    </Link>

                </div>

            </div>

            <div className='contenedor-carrusel-proyectos'>
                <div className='contenedor-imagen-foco'>
                    <img className='imagen-foco' src={img11} alt="" />
                </div>
                <div className='carrusel'>
                    {mostrarProyectos()}
                </div>

            </div>
        </div>
    )
}

export default Proyecto;

