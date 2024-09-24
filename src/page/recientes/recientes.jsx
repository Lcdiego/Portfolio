import React, { useState } from 'react';
import "./Recientes.css";
import { anclas,descripcionProyectos,titulos } from './recientesJs/recientes';
import { Link } from 'react-router-dom';
import img1 from './img/imagen_1.png';
import img5 from './img/imagen_5.png';
import img6 from './img/Pizzeria.png';
import img10 from './img/imagen_10.png';

import { Modal, Button } from 'react-bootstrap';

const imagenes = [img6, img5, img1, img10];


const Recientes = () => {

  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };
  return (

    <div className='contenedor-pag-recientes'>
      <div className='contenedor-titulo-recientes'>
        <h2 className='titulo-recientes'>Proyectos Recientes</h2>
      </div>
      <div className='pag-recientes'>
        {imagenes.map((imagen, index) => (

          <div key={index} className='contenedor-img-recientes'>
            <a
              className='ancla-recientes'
              href={anclas[index]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="imagen-recientes" src={imagen} alt='' />
            </a>
            <Button className='btn_detalle' variant="primary" onClick={() => handleShow(index)}>
              Más detalles
            </Button>
          </div>


        ))}

      </div>
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
      <div>
        <Link className='btn-recientes' to={"/Proyectos"}>
          volver
        </Link>
      </div>

    </div>
  );
}

export default Recientes;