import React from 'react'

const ImageHighlightHoriz = ({image, imgAlt}) => {
  return (
    <div className="horizontalImg">
        <img src={image} alt={imgAlt} />
    </div>
  )
}

export default ImageHighlightHoriz