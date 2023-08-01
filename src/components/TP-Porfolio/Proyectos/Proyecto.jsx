import React from 'react';
import '../Proyectos/Proyecto.css'
import img1 from './img/imagen_1.jpg'
import img2 from './img/imagen_2.jpg'
import img3 from './img/imagen_3.jpg'
import img4 from './img/imagen_4.jpg'
import img5 from './img/imagen_5.jpg'
import img6 from './img/imagen_6.jpg'
import img from '../HeroNavbar/img/imagen_5.png'

const Proyecto = () => {
    return(
        <div className='contenedorProyectos_futuros'id='contenedorProyectos_futuros'>
            <h1 className='tituloProyectos'>Proyectos</h1>
            <div className='contenedor_a'>
                <a className='menuProyecto' href="#">Todos</a>
                <a className='menuProyecto' href="#">Recientes</a>
                <a className='menuProyecto'href="#">Diseño</a>
                <a className='menuProyecto'href="#">Proyectos</a>
            </div>
                <div className='Proyecto_futuros'>
                    <div className='imagen_foco'>
                    <img className='proyecto_imagen' src={img}alt="" />
                    </div>
                
                    <div className='cajaImagenes'>
                        <div className='fotos1'>
                        <img className='proyectoImagen' src={img1} alt="" />
                        <img className='proyectoImagen'src={img2} alt="" />
                        <img className='proyectoImagen'src={img3} alt="" />
                        <img className='proyectoImagen'src={img4} alt="" />
                        <img className='proyectoImagen'src={img5} alt="" />
                        <img className='proyectoImagen'src={img6}alt="" />
                        </div>
                    </div>





                </div>




        </div>
    )
}

export default Proyecto