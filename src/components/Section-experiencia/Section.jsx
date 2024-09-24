import React from 'react';
import '../Section-experiencia/Section.css';
import img_1 from './img/html.png'
import img_2 from './img/css.png'
import img_3 from './img/javascript.png'
import img_4 from './img/react.png';
import img_5 from './img/axios.png';
import img_6 from './img/tailwind.png';
import img_7 from './img/node.png'
import img_8 from './img/api.png'
import img_9 from './img/mongodb.png'
import img_10 from './img/mysql.png'


const Section = () => {
    return (

        <div className='contenedorSection' id='tecnologias'>
            <div className='contenedor_titulo_section'>
                <h2 className='titulo_section'>Experiencia tecnológica</h2>
            </div>

            <h3 className='titulo_imagenes'>Front end</h3>
            <div className='imagenes_tecnologias'>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_1} alt="" />
                </div>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_2} alt="" />
                </div>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_3} alt="" />
                </div>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_4} alt="" />
                </div>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_5} alt="" />
                </div>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_6} alt="" />
                </div>

            </div>
            <h3 className='titulo_imagenes'>Back end</h3>
            <div className='imagenes_tecnologias_1'>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_7} alt="" />
                </div>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_8} alt="" />
                </div>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_9} alt="" />
                </div>
                <div className='seccion_imagen'>
                    <img className='imagen' src={img_10} alt="" />
                </div>





            </div>








        </div>
    )
}

export default Section 