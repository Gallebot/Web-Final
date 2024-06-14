import React from 'react';
import './Header.module.css';

function Header() {
  return (
    <header className="header">
      <h1>Tilintienda</h1>
      <nav>
        <button>Gorras</button>
        <button>Hombre</button>
        <button>Mujer</button>
        <button>Niños</button>
        <button>Deporte</button>
      </nav>
      <div>
        <img className="carrito" src="/img/carrito-de-compras.png" alt="Carrito de compras" />
        <div id="numero"></div>
      </div>
    </header>
  );
}

export default Header;
