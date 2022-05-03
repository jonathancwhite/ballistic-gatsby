import React from 'react'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'

const LogoShowcaseList = ({title, logoshowcaseList}) => {
  return (
    <div className="logoShowcase">
        <div className="logoshowcase__title">
            {title}
        </div>
        <div className="logoShowcase__container">
            {
                logoshowcaseList.map((item) => (
                    <img src={getSrc(item.img)} alt={item.imgAlt} />
                ))
            }
        </div>
    </div>
  )
}

export default LogoShowcaseList