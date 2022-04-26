import React from 'react'
import { Link } from 'react-router-dom'

const StandardCTA = ({ctaText, ctaLink, color, buttonPad}) => {
  return (
    <Link className={`cta--secondary ${color} ${buttonPad}`} to={ctaLink}>
        {ctaText} &gt;
    </Link>
  )
}

export default StandardCTA