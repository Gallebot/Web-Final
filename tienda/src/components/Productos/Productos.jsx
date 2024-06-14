import React, { useState, useEffect } from 'react';
import '../Productos/Productos.module.css';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Load your products here from an API or local storage
    setProductos([
      { id: 1, nombre: 'Producto 1', precio: 100 },
      { id: 2, nombre: 'Producto 2', precio: 200 }
    ]);
  }, []);

  return (
    <div className="productos">
      {productos.map((producto) => (
        <div key={producto.id}>
          <img src="https://via.placeholder.com/150" alt={producto.nombre} />
          <p>{producto.nombre}</p>
          <p>${producto.precio}</p>
          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
}

export default Productos;
