import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaFacebookF, FaInstagramSquare, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import './HeroNavbar.css';

const HeroNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='imagFondo'>
      <Navbar className='menuHorizontal' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenuToggle}>
              <FiMenu className='hamburg' />
            </Navbar.Toggle>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center ${menuOpen ? 'show' : ''}`}>
            <Nav className={`ml-auto menuItems ${menuOpen ? 'flex-column align-items-start' : ''}`}>
              <a className={` listas ${menuOpen ? 'justify-content-start ps-4 ancho-10 ' : ''}`}href='#'>Servicios</a>
              <a className={` listas ${menuOpen ? 'justify-content-start ps-4 ancho-10' : ''}`}href='#'>Trabajos</a>
              <a className={` listas ${menuOpen ? 'justify-content-start ps-4 ancho-10' : ''}`}>Contacto</a>
              <a className={` listas ${menuOpen ? 'justify-content-start ps-4 me-10 ancho-11' : ''}`}>Tecnologias</a>
              <a className={` listas ${menuOpen ? 'justify-content-start ps-4 ancho-10' : ''}`}>Sobre Mi</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='imagContenedor'>
        <div className='img'></div>
        <h1 className='nombre'>Colman Diego</h1>
        <h3 className='descripcion'>Full Stack Developer</h3>
      </div>

      <div className='contenedorIconos'>
        <div className='lineas'>
          <hr />
          <div className='iconos'>
            <a className='redes' href="#"><FaFacebookF /></a>
            <a className='redes' href="#"><FaInstagramSquare /></a>
            <a className='redes' href="#"><FaGithub /></a>
            <a className='redes' href="#"><FaWhatsappSquare /></a>
          </div>
          <hr />
        </div>
      </div>

      <div className='iconoSiguiente'>
        <a className='icono_siguiente' href="#contenedorFoto"><FiChevronDown /></a>
      </div>
    </div>
  );
};

export default HeroNavbar;


            
            
          
        

/*<li className='listasVerticales'><a  className='menu' href="#"><IoIosMenu/></a></li> menu hamburgesa
 import { IoIosMenu } from "react-icons/io";
<li className='listasVerticales' ><a className='listas'  href="#contenedorFoto">Sobre Mi</a> </li>
<li className='listasVerticales' ><a className='listas'href="#contenedorSection">Mi Experiencia</a> </li>
<li className='listasVerticales' ><a className='listas' href="#servicios">Servicios</a> </li>
<li className='listasVerticales' ><a className='listas'href="#contenedorProyectos_futuros">Mi futuros trabajos</a> </li>
<li className='listasVerticales' ><a className='listas' href="#formulario">Contacto</a> </li>*/