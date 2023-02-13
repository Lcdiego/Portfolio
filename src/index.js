import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  HeroNavbar  from './components/TP-Porfolio/HeroNavbar/HeroNavbar';
import Main from './components/TP-Porfolio/Main/Main';
import { Section } from './components/TP-Porfolio/Sectionexperiencia/Section';
import Servicios from './components/TP-Porfolio/Servicios/Servicios';
import Proyecto from './components/TP-Porfolio/Proyectos/Proyecto';
import Formulario from './components/TP-Porfolio/Formulario/Index';
import Footer from './components/TP-Porfolio/Footer/index';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <HeroNavbar/>
    <Main/>
    <Section/>
    <Servicios/>
    <Proyecto/>
    <Formulario/>
    <Footer/>
    
    
    
    
    
    

    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

