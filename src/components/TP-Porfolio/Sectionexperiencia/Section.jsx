import React from 'react';
import '../Sectionexperiencia/Section.css';

const Section= () => {
    return(
        <div className='contenedorSection'id='contenedorSection'>
         
                <div className='sectionExperiencia'>
                    <div className='Experiencia'>
                    <div className='unionLineas'>
                <span className='circulo1'>o</span>
                <span className=' circulo2'>o</span>
            </div> 
            <div className='experienciaLaborales'>
                        <h2 className='tituloExperiencia'>Mi experiencias</h2>
                        <h3 className='tituloSecundario'>Flamia SA</h3>
                        <p className='parrafoExperiencia' > React,Html,Js</p>
                        <p className='parrafoExperiencia'>2019-2022</p>
                        
                    
                        <div className='experienciaUno'>
                            <h3 className='tituloSecundario'>Aluar SA</h3>
                            <p className='parrafoExperiencia'>Html,Css,Js</p>
                             <p className='parrafoExperiencia'>2015-2019</p>
                        </div>
                        </div>
                    </div>

                          
                </div>

                
                <div className='porcentajes'>
                    <h2 className='tituloExperiencia'>Mis Habilidades</h2>

                    <h3 className='tituloPorcentajes'>Html & Css</h3>
                    <div className='contenedorLineas_uno'>
                    <hr className='linea1' />
                    <hr className='linea2' />
                    </div>
                    <h3 className='tituloPorcentajes'>javascript & jquery</h3>
                    <div className='contenedorLineas_dos'>
                    <hr className='linea3' />
                    <hr className='linea4' />
                    </div>
                    <h3 className='tituloPorcentajes'>React </h3>
                    <div className='contenedorLineas_tres'>
                    <hr className='linea5' />
                    <hr className='linea6' />
                    </div>
                    <h3  className='tituloPorcentajes'>Api</h3>
                    <div className='contenedorLineas_cuatro'>
                    <hr className='linea7' />
                    <hr className='linea8' />
                    </div>






                </div>







        </div>
    )
}

export { Section }