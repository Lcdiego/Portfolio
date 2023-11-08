import React from 'react';
import img1 from './img/imagen_1.png';
import img2 from './img/imagen_2.png';
import img3 from './img/imagen_3.png';
const Todos = () => {
    return(
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
    )
}

export { Todos }