import React from 'react'
import JasonFace from '../../img/jason-face.webp'

const ImageHighlight = () => {
  return (
    <div className="imageHighlight">
        <div className="imageHightlight__container">
            <img src={JasonFace} alt="" />
            <h3>Jason Young</h3>
            <h6>Founder & CEO</h6>
        </div>
    </div>
  )
}

export default ImageHighlight