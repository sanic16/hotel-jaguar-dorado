import React from 'react'
import './cardButton.css'

const CardButton = (
    {
        children,
        className
    }:{
        children: React.ReactNode,
        className?: string
    }
) => {
  return (
    <button className={`card__btn ${className}`}>
        { children }
    </button>
  )
}

export default CardButton