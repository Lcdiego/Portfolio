import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaFacebookF, FaInstagramSquare, FaGithub, FaWhatsappSquare, FaLinkedin } from "react-icons/fa";
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Hero.css';
gsap.registerPlugin(ScrollTrigger);
const HeroNavbar = () => {




  useEffect(() => {
    const ctx = gsap.context(() => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 325) {


        
        gsap.to(".my-element", { duration: 2, x: 20, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -4, ease: 'power3.out' });
      }else if (screenWidth <= 376) {
        // Pantallas de hasta 720px
        gsap.to(".my-element", { duration: 2, x: 23, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -40, ease: 'power3.out' });
      } else if (screenWidth <= 390) {
        // Pantallas de hasta 720px
        gsap.to(".my-element", { duration: 2, x: 40, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -40, ease: 'power3.out' });
      } else if (screenWidth <= 425) {
        // Pantallas de hasta 720px
        gsap.to(".my-element", { duration: 2, x: 41, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -60, ease: 'power3.out' });
      } else if (screenWidth <= 428) {
        // Pantallas de hasta 720px
        gsap.to(".my-element", { duration: 2, x: 50, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -60, ease: 'power3.out' });
      } else if (screenWidth <= 640) {
        // Pantallas de hasta 720px
        gsap.to(".my-element", { duration: 2, x: 230, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -100, ease: 'power3.out' });
      } else if (screenWidth <= 765) {
        // Pantallas de hasta 720px
        gsap.to(".my-element", { duration: 2, x: 150, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -210, ease: 'power3.out' });
      }else if (screenWidth <= 768) {
        // Pantallas de hasta 720px
        gsap.to(".my-element", { duration: 2, x: 78, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -110, ease: 'power3.out' });
      } else if (screenWidth <= 1025) {
        // Pantallas de hasta 1024px
        gsap.to(".my-element", { duration: 2, x: 160, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -230, ease: 'power3.out' });
      } else if (screenWidth <= 1440) {
        // Pantallas de hasta 1440px
        gsap.to(".my-element", { duration: 2, x: 300, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -380, ease: 'power3.out' });
      } else {
        // Pantallas más grandes (hasta 1500px o más)
        gsap.to(".my-element", { duration: 2, x: 400, ease: 'power3.out' });
        gsap.to(".my-element2", { duration: 2, x: -520, ease: 'power3.out' });
      }

      gsap.from('.iconos a, .iconos button', {
        opacity: 0.8,
        y: screenWidth <= 425 ? 200 : screenWidth <= 640 ? 50 : screenWidth <= 720 ? 100 : screenWidth <= 1024 ? 150 : 250, 
        duration: 2,
        stagger: 0.2,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert(); 
  }, []);




  return (
    <div className='imagFondo' id='hero'>

      <div className='contenedor-hero'>
        <div className='imagContenedor'>

          <h1 className='nombre my-element'>Colman Diego</h1>
          <div className='contenedor-descripcion'>
            <h3 className='descripcion my-element2'>FullStack Developer</h3>
          </div>

        </div>

        <div className='contenedorIconos'>
          <div className='lineas'>
            <div className='contenedor-border'>
              <div className='iconos redes-animadas'>
                <a className='redes redes-animadas' href="https://es-la.facebook.com/"><FaFacebookF /></a>
                <a className='redes redes-animadas' href="https://www.instagram.com/?hl=en"><FaInstagramSquare /></a>
                <a className='redes redes-animadas' href="https://www.linkedin.com/in/diego-colman-a67754297"><FaLinkedin /></a>
                <a className='redes redes-animadas' href="https://github.com/Lcdiego"><FaGithub /></a>
                <button
                  className='redes'

                  onClick={() => window.open('https://wa.me/+5491123215257', '_blank')}
                >
                  <FaWhatsappSquare />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default HeroNavbar;







