import React from 'react'
import ImageHighlight from '../Global/ImageHighlight';

export default function SkewedSectionSec({children, imageHighlight, section}) {
    return (
        <div className={`skewedSection ${section}`}>
            <div className="skewedSection__container">
                {children}
                {
                    imageHighlight ? (<ImageHighlight />) : null
                }
                
            </div>
        </div>
    )
}