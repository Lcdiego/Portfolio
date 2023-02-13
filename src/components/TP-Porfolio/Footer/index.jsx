import React from 'react';
import '../Footer/style.css'
import { FaFacebookF,FaInstagramSquare,FaGithub,FaWhatsappSquare } from "react-icons/fa";



const Footer = () => {
    return(
        <div className='contenedorFooter'>

                            <div className='Footer'   >
                            <a className='iconosFooter' href="#"><FaFacebookF/></a>
                            <a className='iconosFooter' href="#"><FaInstagramSquare/></a>
                            <a className='iconosFooter' href="#"><FaGithub/></a>
                            <a  className='iconosFooter' href="#"><FaWhatsappSquare/></a>
                            </div>
                            <h3 className='tituloFooter'>Hecho por Diego Colman</h3>
                            



        </div>
    )
}

export default Footer
