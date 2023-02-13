
import './App.css';
import './components/TP-Porfolio/HeroNavbar'
import HeroNavbar from './components/TP-Porfolio/HeroNavbar';


const App = () => { 
  let nombre= "juan"
  let datos={
    nombre:'saul',
    apellido:'perez',
    edad: 76,
  }
  let frutas= ['manzana','banana','uva']
  const hacerClick = () => { 
  }
  return (
    <div className="nombre">
      <h1>{frutas[2]}  {datos.nombre}  {nombre}</h1>
    <button onClick={hacerClick}>hacerClick</button>
    
    
    
    </div>

    
  
  );
  
  }

export default App;
