import React from 'react'
import StandardCTA from '../Global/StandardCTA'

export default function ServicesPromo(props) {
    const {
        heading,
        subheading,
        emailText,
        seoText,
        devText
    } = props;
  return (
    <div className="servicesPromo" id="services">
        <div className="servicesPromo__container">
            <div className='servicesPromo__heading'>
                <h4>{subheading}</h4>
                <h2>{heading}</h2>
            </div>
            <div className="servicesPromo__copy">
                <div className="servicesPromo__column">
                    <div className="placeholder-img"></div>
                    <h4>Email Marketing</h4>
                    <p>{emailText}</p>
                    <div className="servicesPromo__cta">
                        <StandardCTA ctaText="Learn more" ctaLink="/" color="lightblue" buttonPad="no-padding"/>
                    </div>
                </div>
                <div className="servicesPromo__column">
                    <div className="placeholder-img"></div>
                    <h4>Search Engine Optimization</h4>
                    <p>{seoText}</p>
                    <div className="servicesPromo__cta">
                        <StandardCTA ctaText="Learn more" ctaLink="/seo" color="lightblue" buttonPad="no-padding"/>
                    </div>
                </div>
                <div className="servicesPromo__column">
                    <div className="placeholder-img"></div>
                    <h4>Web Design & Development</h4>
                    <p>{devText}</p>
                    <div className="servicesPromo__cta">
                        <StandardCTA ctaText="Learn more" ctaLink="/" color="lightblue" buttonPad="no-padding"/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}