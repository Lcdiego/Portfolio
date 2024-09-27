import React, { useState, useEffect } from 'react';
import '../Formulario/Formulario.css';
import { useDarkMode } from '../Contex/Contex';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const Formulario = () => {

    const { isDarkMode } = useDarkMode();

    const [state, handleSubmit] = useForm("movaoykw");


    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    useEffect(() => {
        if (state.succeeded) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Mensaje enviado",
                showConfirmButton: false,
                timer: 2000
            });

            setFormData({
                email: '',
                message: ''
            });
        }
    }, [state.succeeded]);

    return (
        <div className={`${isDarkMode ? 'darkFormulario' : 'contenedorFormulario'}`} id='contacto'>
            <h1 className='tituloFormulario'>Contáctate</h1>

            <form className='formulario' onSubmit={handleSubmit}>
                <label className='labelForm' htmlFor="email">
                    Email
                </label>
                <input
                    placeholder='Email'
                    className='input'
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label className='labelForm' htmlFor="textarea">
                    Mensaje
                </label>
                <textarea
                    placeholder='Escribe tu mensaje aquí...' cols="15" rows="5"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className='boton' type="submit" disabled={state.submitting}>
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Formulario;
