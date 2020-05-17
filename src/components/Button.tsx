import React from 'react'
import classNames from 'classnames'
import './index.css'

interface ButtonProps {
  onClick: () => any
  title: string
  isSelected: boolean
  color?: string
  className?: string
}

const Button = ({
  title,
  onClick,
  isSelected,
  color = 'white',
  className,
}: ButtonProps) => {
  return (
    <button
      className={classNames(`button ${className}`, {
        [`button--${color}`]: color,
        'button--selected': isSelected,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
