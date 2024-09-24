import React from 'react';
import "./descripcionProyectos.css"


const DescripcionProyectos = () => {
    return (
        <div className='contenedor'>
            <div className='contenedor-titulo-todos'>
                <h3 className='titulo-todos'>Todos mis Proyectos</h3>
            </div>
            <div className='pag-todos'>



                <div key={''} className='contenedor-img-todos'>

                </div>



            </div>

            <div>
                <a className='btn-todos' href={"/Proyectos"}>
                    volver
                </a>
            </div>

            

        </div>
    )
}

export default DescripcionProyectos 