import React from 'react'
import ButtonCTA from '../Global/ButtonCTA'
import StandardCTA from '../Global/StandardCTA'
import CoreValues from './CoreValues';

const SimpleSection = ({
    classAdded, 
    heading, 
    subheading, 
    copy1, 
    copy2, 
    cta, 
    ctaLink, 
    color, 
    sectionWidth, 
    titleWidth, 
    secondaryCol1Title, 
    secondaryCol2Title, 
    secondaryCol1Text, 
    secondaryCol2Text,
    coreValues
}) => {

    if (coreValues) {
        return <CoreValues />
    }

  return (
        <div className={`simpleSection ${classAdded} ${sectionWidth}`}>
        <div className="simpleSection__container">
            <div className={`simpleSection__heading ${titleWidth}`}>
                <h4 className={color}>{subheading}</h4>
                <h2>{heading}</h2>
            </div>
            <div className="simpleSection__copy">
                {copy2 ? 
                <>
                    <div className="simpleSection__column">
                        {copy1}
                    </div>
                    <div className="simpleSection__column">
                        {copy2}
                    </div>
                </> : 
                <>
                    <div className="simpleSection__single">
                        {copy1}
                    </div>
                </>}
            </div>
            { cta ? <ButtonCTA ctaTitle={cta} ctaLink={ctaLink} color={color} /> : null}

            { secondaryCol1Title ? <>
                <div className="simpleSection__copy--secondary">
                    <div className="simpleSection__columnn">
                        <h4>{secondaryCol1Title}</h4>
                        <p>{secondaryCol1Text}</p>
                        <div className="spacer"></div>
                        <StandardCTA ctaText="Explore opportunities" ctaLink="/" color="gold" buttonPad="no-padding"/>
                    </div>
                    <div className="simpleSection__columnn">
                        <h4>{secondaryCol2Title}</h4>
                        <p>{secondaryCol2Text}</p>
                    </div>
                </div>
            </> : null}
        </div>
    </div>
  )
}

export default SimpleSection