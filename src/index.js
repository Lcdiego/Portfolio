import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroNavbar from './components/TP-Porfolio/HeroNavbar/HeroNavbar';
import Main from './components/TP-Porfolio/Main/Main';
import Section from './components/TP-Porfolio/Sectionexperiencia/Section';
import Servicios from './components/TP-Porfolio/Servicios/Servicios';
import Proyecto from './components/TP-Porfolio/Proyectos/Proyecto';
import Formulario from './components/TP-Porfolio/Formulario/Index';
import Footer from './components/TP-Porfolio/Footer/index';
import Todos from './components/todos/todos';
import Recientes from './components/recientes/recientes';
import Diseño from './components/Diseño/Diseño';
import ProyectosFuturos from './components/Proyectos-Futuros/ProyectosFuturos';
import Menu from './components/TP-Porfolio/Menu/Menu';


const mostrar = () => (
  <React.Fragment>
    <HeroNavbar/>
    <Main/>
    <Section/>
    <Servicios/>
    <Proyecto/>
    <Formulario/>
  </React.Fragment>
);

const App = () => (
  <React.StrictMode>
    <Router>
      <Menu />
      <Routes>
      <Route path="/" element= {mostrar()} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/recientes" element={<Recientes />} />
        <Route path="/Diseño" element={<Diseño />} />
        <Route path="/ProyectosFuturos" element={<ProyectosFuturos />} />
        <Route path="/Proyectos" element={<Proyecto/>} />
        <Route path="/Main" element={<Main/>} />
        <Route path="/Tecnologias" element={<Section/>} />
        <Route path="/Servicios" element={<Servicios/>} />
        <Route path="/Formulario" element={<Formulario/>} />

      </Routes>
     
      
     
     
     
      <Footer />
    </Router>
  </React.StrictMode>
);



createRoot(document.getElementById('root')).render(<App />);

