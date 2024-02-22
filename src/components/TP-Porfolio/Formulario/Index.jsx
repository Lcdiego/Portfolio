import React from 'react';
import '../Formulario/Style.css';
const Formulario = () => {
    return(
        <div className='contenedorFormulario'id='contacto'>
             <h1 className='tituloFormulario'>Contáctate</h1>
            <form className='formulario' action="https://formsubmit.co/diegocolman78@hotmail.com" method="POST">
           
                <label htmlFor="email"></label>
                <input className='input' type="text" name='email'placeholder='Correo electronico'/>

                <label htmlFor="subject"></label>
                <input className='input' type="text"name='subject'placeholder='Asunto' />

                <label htmlFor="comments"></label>
                <textarea name="comments"placeholder='Comentarios' id="" cols="15" rows="5"></textarea>
                
                <input className='boton' type="submit" value="enviar"/>
             </form>
        </div>
    )
}

export default Formulario