import React, { useState } from 'react';
import "./todos.css";
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; 
import img1 from './img/Pizzeria.png';

import img2 from './img/imagen_2.png';
import img3 from './img/imagen_3.png';
import img4 from './img/imagen_4.png';
import img5 from './img/imagen_5.png';
import img6 from './img/imagen_6.png';
import img7 from './img/imagen_1.png';
import img10 from './img/banco.png';
import { anclas, titulos, descripcionProyectos } from './descripcion'


const imagenes = [img1, img10, img5, img7, img6, img4, img2, img3];


const Todos = () => {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };

  return (
    <div className='contenedor-pag-todos' id='todos'>
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
            {/* Modal trigger */}
            <Button className='btn_detalle' variant="primary" onClick={() => handleShow(index)}>
              Más detalles
            </Button>
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
