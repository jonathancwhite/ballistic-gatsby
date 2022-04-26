import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';

export default function LogoShowcase(props) {
  const {
    title,
    logo1, 
    logo2, 
    logo3, 
    logo4, 
    logo5
  } = props; 

  return (
    <div className="logoShowcase">
      <div className="logoShowcase__title">
        <h2>{title}</h2>
      </div>
      <div className="logoShowcase__container">
          <GatsbyImage image={logo1} height="200" width="100" alt="Brand Logo 1" />
          <GatsbyImage image={logo2} height="200" width="100" alt="Brand Logo 2" />
          <GatsbyImage image={logo3} height="200" width="100" alt="Brand Logo 3" />
          <GatsbyImage image={logo4} height="200" width="100" alt="Brand Logo 4" />
          <GatsbyImage image={logo5} height="200" width="100" alt="Brand Logo 5" />
      </div>
    </div>
  )
}