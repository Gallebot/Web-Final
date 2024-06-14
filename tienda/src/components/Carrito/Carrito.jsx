import React, { useState } from 'react';
import styles from './Carrito.module.css';

function Carrito() {
    const [items, setItems] = useState([]);

    const eliminarDelCarrito = (index) => {
        setItems(currentItems => {
            const newItems = [...currentItems];
            newItems.splice(index, 1);
            return newItems;
        });
    };

    return (
        <div className={styles.carrito}>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <p>{item.nombre}</p>
                        <p>${item.precio}</p>
                        <button onClick={() => eliminarDelCarrito(index)} className={styles.eliminarBtn}>
                            Eliminar
                        </button>
                    </div>
                ))
            ) : (
                <p className={styles.vacio}>Tu carrito está vacío</p>
            )}
        </div>
    );
}

export default Carrito;
