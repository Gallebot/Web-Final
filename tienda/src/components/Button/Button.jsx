// src/components/Button/Button.jsx
import React from 'react';
import './Button.module.css';

function Button({ children, onClick, className = '' }) {
    return (
        <button onClick={onClick} className={`button ${className}`}>
            {children}
        </button>
    );
}

export default Button;
