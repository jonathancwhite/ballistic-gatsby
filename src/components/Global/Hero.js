import React from 'react'
import ButtonCTA from './ButtonCTA'
import StandardCTA from './StandardCTA'


const Hero = ({classAdded, pageTitle, pageSubText, ctaTextPrimary, ctaPrimaryLink, ctaTextSecondary, ctaSecondaryLink, showcaseImage, showcaseAlt}) => {
  return (
    <div className={`hero ${classAdded}`}>
      <div className="hero__copy">
          <h1 className="page__title">{pageTitle}</h1>
          <p className='page__subtext'>{pageSubText}</p>
          <div className="page__buttons">
              {
                ctaPrimaryLink ? <ButtonCTA ctaText={ctaTextPrimary} ctaLink={ctaPrimaryLink}/> : null
              }
              {
                ctaSecondaryLink ? <StandardCTA ctaText={ctaTextSecondary} ctaLink={ctaSecondaryLink}/> : null
              }
              
          </div>
      </div>
        <div className="page__showcase">
            <img src={showcaseImage} alt={showcaseAlt}/>
        </div>
    </div>
  )
}

export default Hero