import React from 'react';
import '../Footer/Footer.css'
import { FaFacebookF, FaInstagramSquare, FaGithub, FaWhatsappSquare,FaLinkedin  } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='contenedorFooter'>
            <div className='Footer'   >
                <a className='iconosFooter' href="https://es-la.facebook.com/"><FaFacebookF /></a>
                <a className='iconosFooter' href="https://www.instagram.com/?hl=en"><FaInstagramSquare /></a>
                <a className='iconosFooter' href="https://www.linkedin.com/in/diego-colman-a67754297"><FaLinkedin /></a>
                <a className='iconosFooter' href="https://github.com/Lcdiego"><FaGithub /></a>
                <button
                  className='iconosFooter'

                  onClick={() => window.open('https://wa.me/+5491123215257', '_blank')}
                >
                  <FaWhatsappSquare />
                </button>
            </div>
            <h3 className='tituloFooter'>Hecho por Diego Colman</h3>




        </div>
    )
}

export default Footer
