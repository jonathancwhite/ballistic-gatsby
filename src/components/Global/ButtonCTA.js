import React from 'react'
import { Link } from 'react-router-dom'

const ButtonCTA = ({ctaText, ctaLink, color}) => {
  return (
    <Link className={`cta--primary bg--${color}`} to={ctaLink}>
        {ctaText} &gt;
    </Link>
  )
}

export default ButtonCTA