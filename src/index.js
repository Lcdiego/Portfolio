import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Section from './components/Section-experiencia/Section';
import Servicios from './components/Servicios/Servicios';
import Proyectos from './components/Proyectos/Proyectos';
import Formulario from './components/Formulario/Formulario';
import Footer from './components/Footer/Footer';
import Todos from './page/todos/todos';
import Recientes from './page/recientes/recientes';
import Diseño from './page/Diseño/Diseño';
import ProyectosFuturos from './page/Proyectos-Futuros/ProyectosFuturos';
import Navbar from './components/Navbar/Navbar';
import DescripcionProyectos from './components/DescripcionProyectos/DescripcionProyectos';
import { DarkModeProvider } from './components/Contex/Contex';


const mostrar = () => (
  <React.Fragment>
    <Hero />
    <Main />
    <Proyectos />
    <Section />
    <Servicios />
    <Formulario />
  </React.Fragment>
);

const App = () => (
  <React.StrictMode>

    <Router>
      <DarkModeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={mostrar()} />
          <Route path="/descripcion-proyectos" element={<DescripcionProyectos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/recientes" element={<Recientes />} />
          <Route path="/Diseño" element={<Diseño />} />
          <Route path="/ProyectosFuturos" element={<ProyectosFuturos />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Tecnologias" element={<Section />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Formulario" element={<Formulario />} />

        </Routes>





        <Footer />
      </DarkModeProvider>
    </Router>

  </React.StrictMode>
);



createRoot(document.getElementById('root')).render(<App />);

