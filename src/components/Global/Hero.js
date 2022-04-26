import React from 'react'
import ButtonCTA from './ButtonCTA'
import StandardCTA from './StandardCTA'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from "prop-types";


export default function Hero(props) {
  const {
    classAdded, 
    pageTitle, 
    pageSubText, 
    ctaTextPrimary, 
    ctaPrimaryLink, 
    ctaTextSecondary, 
    ctaSecondaryLink, 
    img, 
    showcaseAlt = "showcase stock image"
  } = props;

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
        {
          img?.url ? (
            <img 
              src={img}
              alt={showcaseAlt}
              formats={["auto", "webp", "avif"]}
            />
          ) : (
            <GatsbyImage 
              image={img} 
              alt={showcaseAlt} />
          )
        }
        </div>
    </div>
  )
}

Hero.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  showcaseAlt: PropTypes.string,
}