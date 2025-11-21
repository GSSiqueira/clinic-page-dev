import React from 'react';
import { cn } from '../utils/cn';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5";

    const customStyle = variant === 'primary'
        ? { backgroundColor: PRIMARY_COLOR, color: 'white' }
        : { backgroundColor: 'white', border: `2px solid ${PRIMARY_COLOR}`, color: PRIMARY_COLOR };

    return (
        <button
            onClick={onClick}
            className={cn(baseStyle, className)}
            style={customStyle}
        >
            {children}
        </button>
    );
};

export default Button;
