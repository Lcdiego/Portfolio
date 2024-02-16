import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroNavbar from './components/TP-Porfolio/HeroNavbar/HeroNavbar';
import Main from './components/TP-Porfolio/Main/Main';
import {Section} from './components/TP-Porfolio/Sectionexperiencia/Section';
import Servicios from './components/TP-Porfolio/Servicios/Servicios';
import Proyecto from './components/TP-Porfolio/Proyectos/Proyecto';
import Formulario from './components/TP-Porfolio/Formulario/Index';
import Footer from './components/TP-Porfolio/Footer/index';
import { Todos } from './components/todos/todos';
import { Recientes } from './components/recientes/recientes';



const App = () => (
  <React.StrictMode>
    <HeroNavbar />
    <Main />
    <Section />
    <Servicios />
    <Router>
      <Routes>
        <Route path="/" element={<Proyecto />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/recientes" element={<Recientes />} />
      </Routes>
    </Router>
    <Formulario />
    <Footer />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
