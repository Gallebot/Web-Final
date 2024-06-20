import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Carrusel from './components/Carrusel';
import MainContent from './components/MainContent';
import './style.css';
import Productos from './components/Productos';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Carrusel />
      <Productos />
      <MainContent />
      {/* Aquí puedes incluir más componentes como Footer si es necesario */}
    </div>
  );
}
export default App;
