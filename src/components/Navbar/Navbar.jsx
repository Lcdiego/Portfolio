import React, { useState } from 'react';
import { useDarkMode } from '../Contex/Contex';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import './Navbar.css';
import { Moon, Sun } from '../icons/icons';

const Menu = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const cerrar = () => {
        setMenuOpen(false);
    };

    const handleDarkModeToggle = () => {
        toggleDarkMode();
        cerrar(); // Cerrar el menú después de cambiar el modo oscuro
    };

    return (
        <div className={`menuHorizontal ${menuOpen ? 'open' : ''}`}>
            <div className="container">
                <div className="brand">
                {menuOpen ?(
                    <span>
                        <GrClose className='hamburg'  onClick={cerrar} />
                    </span>
                    ): <span className="toggle" >
                   <span className="toggle" onClick={handleMenuToggle}>
                        <FiMenu className='hamburg' />
                    </span>
                </span>}
                </div>
                <div className={`menu ${menuOpen ? 'show' : ''}`}>
                    <Link
                        className="link"
                        to="/"
                        onClick={cerrar}
                    >
                        Inicio
                    </Link>
                    <Link
                        className="link"
                        to="/Main"
                        onClick={cerrar}
                    >
                        Sobre Mi
                    </Link>
                    <Link
                        className="link"
                        to="/Proyectos"
                        onClick={cerrar}
                    >
                        Proyectos
                    </Link>
                    <Link
                        className="link"
                        to="/Tecnologias"
                        onClick={cerrar}
                    >
                        Tecnologias
                    </Link>
                    <Link
                        className="link"
                        to="/Servicios"
                        onClick={cerrar}
                    >
                        Servicios
                    </Link>
                    <Link
                        className="link"
                        to="/Formulario"
                        onClick={cerrar}
                    >
                        Contacto
                    </Link>
                    <div
                        onClick={handleDarkModeToggle}
                        style={{
                            marginLeft: 12,
                            cursor: "pointer",
                        }}
                    >
                        {isDarkMode ? (
                            <Sun color="#c9a4e8" />
                        ) : (
                            <Moon color="#c9a4e8" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
