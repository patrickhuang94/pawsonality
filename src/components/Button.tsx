import React from 'react'

interface ButtonProps {
  onClick: () => any
  title?: string
}

const Button = ({ title = 'Button', onClick }: ButtonProps) => {
  return <button onClick={onClick}>{title}</button>
}

export default Button
