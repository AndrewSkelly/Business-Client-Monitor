import React from 'react'
import '../Buttons/Button.scss'

interface ButtonProps {
    variant: 'default' | 'primary' | 'delete' | 'success' | 'warning'; // Define types of background colors
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant, label, onClick, disabled }) => {
    return (
        <div className='Button-Container'>
            <button className={`Button Button-${variant}`} onClick={onClick} disabled={disabled}>{label}</button>
        </div>
    )
}

export default Button