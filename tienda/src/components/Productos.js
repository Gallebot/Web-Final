import React from 'react';
import '../productos.css';
import redbull from './images/media/Gorras/Gorra 1/redbullgorra.jpg';
import imagen2 from './images/media/Deportivos/Tenis 1/tennis1.png';
import imagen3 from './images/media/Deportivos/Tenis 2/tennis2.png';

function Productos() {
  return (
    <section className="product-section">
      <h2>TODO PARA EL CALOR</h2>
      <div className="product-container">
        <div className="product-card">
          <img src={redbull} alt="Shorts para Hombres" />
          <div className="product-info">
            <h3>1</h3>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="product-card">
          <img src={imagen2} alt="Playeras Puma" />
          <div className="product-info">
            <h3>2</h3>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="product-card">
          <img src={imagen2} alt="Faldas y Vestidos" />
          <div className="product-info">
            <h3>3</h3>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="product-card">
          <img src={imagen3} alt="Faldas y Vestidos" />
          <div className="product-info">
            <h3>4</h3>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="product-card">
          <img src={imagen3} alt="Faldas y Vestidos" />
          <div className="product-info">
            <h3>5</h3>
            <button>COMPRAR</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productos;
