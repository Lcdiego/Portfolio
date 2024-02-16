import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./todos.css"

import img1 from './img/imagen_1.png';
import img2 from './img/imagen_2.png';
import img3 from './img/imagen_3.png';

const imagenes = [img1, img2, img3];

const Todos = () => {
    return (
        <div className='vh-100 d-flex justify-content-center'>
            <div className='w-50  d-flex justify-center align-items-center'>

                <Carousel id="carouselExample" prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}>

                    {imagenes.map((imagen, index) => (
                        <Carousel.Item key={index}>

                            <a href="https://espacio-holistico-r3iur1lin-diegocolman14-gmailcom.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={imagen} alt={`Slide ${index + 1}`} />
                            </a>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>



    );
}

export { Todos };



/* 
 {imagenes.map((image, index) => (
                <div key={index} className='fotos-todos'>
                    
                </div>*/
