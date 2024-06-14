import React from 'react';
import Header from './components/Header/Header';
import Carrusel from './components/Carrusel/Carrusel';
import Productos from './components/Productos/Productos';
import Carrito from './components/Carrito/Carrito';
import './App.css';  // Importar estilos específicos de App

function App() {
  return (
    <div className="App">
      <Header />
      <Carrusel />
      <Productos />
      <Carrito />
    </div>
  );
}

export default App;
