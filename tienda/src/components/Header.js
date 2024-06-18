import React from 'react';

function Header() {
  return (
    <header id="header">
      <h1>Tilintienda</h1>
      <nav>
        <button>Gorras</button>
        <button>Hombre</button>
        <button>Mujer</button>
        <button>Niños</button>
        <button>Deporte</button>
      </nav>
      <div>
        <img id="carrito" className="carrito" src="/img/carrito-de-compras.png" alt="" />
        <div id="numero"></div>
      </div>
    </header>
  );
}

export default Header;
