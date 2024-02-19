import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {  FiMenu } from "react-icons/fi";
import './Menu.css'

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
    return(
        <Navbar className='menuHorizontal' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenuToggle}>
              <FiMenu className='hamburg' />
            </Navbar.Toggle>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center ${menuOpen ? 'show' : ''}`}>
            <Nav className={`ml-auto menuItems ${menuOpen ? 'flex-column align-items-start' : ''}`}>
            <Link className={` listas ${menuOpen ? 'justify-content-start ps-4 ancho-10 ' : ''}`}to='/HeroNavbar'>Home</Link>
              <Link className={` listas ${menuOpen ? 'justify-content-start ps-4 ancho-10 ' : ''}`}to='/servicios'>Servicios</Link>
              <Link className={` listas ${menuOpen ? 'justify-content-start ps-4 ancho-10' : ''}`}to='/proyecto'>Trabajos</Link>
              <Link className={` listas ${menuOpen ? 'justify-content-start ps-4 ancho-10' : ''}`}to='/contacto'>Contacto</Link>
              <Link className={` listas ${menuOpen ? 'justify-content-start ps-4 me-10 ancho-11' : ''}`} to='/section'>Tecnologias</Link>
              <Link className={` listas ${menuOpen ? 'justify-content-start ps-4 ancho-10' : ''}`}to='/main'>Sobre Mi</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Menu 