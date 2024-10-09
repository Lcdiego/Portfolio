import React, { useState } from 'react';
import "./todos.css";
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useDarkMode } from '../../components/Contex/Contex';
import img1 from './img/Pizzeria.png';

import img2 from './img/imagen_2.png';
import img3 from './img/imagen_3.png';
import img4 from './img/imagen_4.png';
import img5 from './img/imagen_5.png';
import img6 from './img/imagen_6.png';
import img7 from './img/imagen_1.png';
import img10 from './img/banco.png';

import img_11 from './img/logos/img/html.png'
import img_12 from './img/logos/img/css.png'
import img_13 from './img/logos/img/javascript.png'
import img_24 from './img/logos/img/dom.jpg'
import img_14 from './img/logos/img/react.png';
import img_15 from './img/logos/img/axios.png';
import img_16 from './img/logos/img/tailwind.png';
import img_17 from './img/logos/img/node.png'
import img_18 from './img/logos/img/api.png'
import img_19 from './img/logos/img/mongodb.png'
import img_20 from './img/logos/img/mysql.png'
import img_21 from './img/logos/img/vite.png'
import img_22 from './img/logos/img/ejs.png'
import img_23 from './img/logos/img/express.png'
import img_25 from './img/logos/img/asy-awa.png'
import { anclas, titulos, descripcionProyectos } from './descripcion'

const imgLogo = [[ img_14, img_21,img_13,img_16, img_18],[  img_14,img_21, img_15, img_16, img_17, img_19], [  img_14,img_21, img_15, img_16, img_17, img_20],[  img_14,img_21, img_15, img_16, img_17, img_19],[img_17,img_22, img_23 ,img_19],[img_17,img_22, img_23 ,img_19],[img_11, img_12, img_13, img_24],[img_11, img_12, img_13, img_24, img_18, img_25]]
const imagenes = [img1, img10, img5, img7, img6, img4, img2, img3];


const Todos = () => {
  const { isDarkMode } = useDarkMode();
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };
  const handleindex = (index) => {
    setSelectedIndex(index);

  };

  return (
    <div className={`${isDarkMode ? 'dark-todos' : 'contenedor-pag-todos'}`} id='todos'>
      <div className='contenedor_titulo_todos'>
        <h3 className='titulo_todos'>Todos mis Proyectos</h3>
      </div>
      <div className='pag_todos'>
        {imagenes.map((imagen, index) => (
          <div key={index} className='contenedor_img_todos'>
            <a
              className='ancla-todos'
              href={anclas[index]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="imagen-todos" src={imagen} alt='' />
            </a>
            <div className='contenedor-button'>
              <Button className='btn_detalle' variant="primary" onClick={() => handleShow(index)}>
                Más detalles
              </Button>
              <div className="tooltip-container" onMouseEnter={() => handleindex(index)}>
                <span className="tooltip">
                  {selectedIndex !== null && imgLogo[selectedIndex] ? (
                    Array.isArray(imgLogo[selectedIndex]) ? (
                      imgLogo[selectedIndex].map((logo, idx) => (
                        <img className='indexLogo' key={idx} src={logo} alt={`Tecnología ${idx}`} />
                      ))
                    ) : (
                      <img className='indexLogo' src={imgLogo[selectedIndex]} alt="Tecnología utilizada" />
                    )
                  ) : (
                    'No hay detalles disponibles.'
                  )}
                </span>
                <span className="text">Tecnologias 👆</span>
              </div>

            </div>

          </div>
        ))}



        {/* Modal */}
        <Modal className='modal-lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton className='title'>
            <Modal.Title>{selectedIndex !== null ? titulos[selectedIndex] : 'No hay detalles disponibles.'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='contenedor_descripcion'>
            <p className='text_descripcion'>
              {selectedIndex !== null ? (
                descripcionProyectos[selectedIndex].split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))
              ) : 'No hay detalles disponibles.'}
            </p>

          </Modal.Body>
          <Modal.Footer className='footer'>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Link className='btn-todos' to={"/Proyectos"}>
          Volver
        </Link>
      </div>
    </div>
  );
};

export default Todos;
