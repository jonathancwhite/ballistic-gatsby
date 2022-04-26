import React from 'react'
import { Link } from 'gatsby'

export default function ButtonCTA(props){
  const {
    ctaTitle, 
    ctaLink, 
    color
  } = props;

  return (
    <Link className={`cta--primary bg--${color}`} to={ctaLink}>
        {ctaTitle} &gt;
    </Link>
  )
}