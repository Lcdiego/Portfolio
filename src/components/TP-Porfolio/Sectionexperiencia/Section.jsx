import React from 'react';
import '../Sectionexperiencia/Section.css';
import img_1 from './img/imagen_1.png'
import img_2 from './img/imagen_2.png'
import img_3 from './img/imagen_3.png'
import img_4 from './img/imagen_4.png'
import img_5 from './img/imagen_5.png'
import img_6 from './img/imagen_6.png'
import img_7 from './img/imagen_7.png'

const Section= () => {
    return(
        
        <div className='contenedorSection'id='contenedorSection'>
            <div className='titulo_section'>
            <h2>Experiencia tecnologicas</h2>
            </div>
            
            <h3 className='titulo_imagenes'>Frond end</h3>
         <div className='imagenes_tecnologias'>
           
         <img className='seccion_imagen' src={img_1} alt="" />
         <img className='seccion_imagen'src={img_2} alt="" />
         <img className='seccion_imagen' src={img_3} alt="" />
         <img className='seccion_imagen'src={img_4} alt="" />
         </div>
         <h3  className='titulo_imagenes'>Back end</h3>
        <div className='imagenes_tecnologias_1'>       
        
         <img className='seccion_imagen' src={img_5} alt="" />
         <img className='seccion_imagen'  src={img_6} alt="" />
         <img className='seccion_imagen' src={img_7} alt="" />
         </div> 
        
            
                    





        </div>
    )
}

export { Section }