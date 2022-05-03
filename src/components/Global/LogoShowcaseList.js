import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const LogoShowcaseList = ({title, logoshowcaseList}) => {
  return (
    <div className="logoShowcase">
        <div className="logoshowcase__title">
            {title}
        </div>
        <div className="logoShowcase__container">
            {
                logoshowcaseList.map((item) => (
                    <GatsbyImage
                        image={item.img}
                        alt={item.imgAlt}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default LogoShowcaseList