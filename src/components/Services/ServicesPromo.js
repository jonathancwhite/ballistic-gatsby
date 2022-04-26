import React from 'react'
import StandardCTA from '../Global/StandardCTA'

const ServicesPromo = () => {
  return (
    <div className="servicesPromo" id="services">
        <div className="servicesPromo__container">
            <div className='servicesPromo__heading'>
                <h4>Why Ballistic</h4>
                <h2>A future-proof approach to your business and ecommerce.</h2>
            </div>
            <div className="servicesPromo__copy">
                <div className="servicesPromo__column">
                    <div className="placeholder-img"></div>
                    <h4>Email Marketing</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Elementum facilisis leo vel fringilla est ullamcorper eget. 
                    In pellentesque massa placerat duis ultricies lacus. </p>
                    <div className="servicesPromo__cta">
                        <StandardCTA ctaText="Learn more" ctaLink="/" color="lightblue" buttonPad="no-padding"/>
                    </div>
                </div>
                <div className="servicesPromo__column">
                    <div className="placeholder-img"></div>
                    <h4>Search Engine Optimization</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Elementum facilisis leo vel fringilla est ullamcorper eget. 
                    In pellentesque massa placerat duis ultricies lacus. </p>
                    <div className="servicesPromo__cta">
                        <StandardCTA ctaText="Learn more" ctaLink="/seo" color="lightblue" buttonPad="no-padding"/>
                    </div>
                </div>
                <div className="servicesPromo__column">
                    <div className="placeholder-img"></div>
                    <h4>Web Design & Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Elementum facilisis leo vel fringilla est ullamcorper eget. 
                    In pellentesque massa placerat duis ultricies lacus. </p>
                    <div className="servicesPromo__cta">
                        <StandardCTA ctaText="Learn more" ctaLink="/" color="lightblue" buttonPad="no-padding"/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ServicesPromo