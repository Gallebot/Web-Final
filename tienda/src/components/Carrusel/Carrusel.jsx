import React from 'react';
import './Carrusel.module.css';

function Carrusel() {
  return (
    <div className="carrusel">
      <button className="prev">⟨</button>
      <div className="carrusel-items">
        {/* Add your images here */}
      </div>
      <button className="next">⟩</button>
    </div>
  );
}

export default Carrusel;
