import React from 'react'
import ImageHighlight from '../Global/ImageHighlight';
import HorizontalImg from '../Global/ImageHighlightHoriz'

export default function SkewedSectionSec({children, imageHighlight, section, horizontalImg, imgAlt}) {
    return (
        <div className={`skewedSection ${section}`}>
            <div className="skewedSection__container">
                {children}
                {
                    imageHighlight ? (<ImageHighlight />) : null
                }
                {
                    horizontalImg ? (<HorizontalImg image={horizontalImg} imgAlt={imgAlt}/>) : null
                }
                
            </div>
        </div>
    )
}