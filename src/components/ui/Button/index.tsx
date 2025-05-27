import type { ButtonHTMLAttributes } from "react";
import style from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger"
    fullWidth?: boolean
}

export function Button({
    children,
    variant = 'primary',
    fullWidth,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${style.button} ${style[variant]} ${fullWidth ? style.fullWidth : ''
                } ${className ?? ''}`} {...props}>{children}</button>
    )
}